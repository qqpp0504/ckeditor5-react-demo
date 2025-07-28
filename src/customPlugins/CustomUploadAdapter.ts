import imageCompression from "browser-image-compression";
import { FileLoader } from "@ckeditor/ckeditor5-upload";

// 暫存壓縮後 base64 圖片字串、原始圖片 URL
export const imageSrcMap = new Map<string, string>();

class CustomUploadAdapter {
  loader: FileLoader;

  constructor(loader: FileLoader) {
    this.loader = loader;
  }

  async upload() {
    const file = await this.loader.file;

    if (!file) return;

    console.log("[原始圖片]", {
      name: file.name,
      size: file.size,
      type: file.type,
      sizeMB: (file.size / 1024 / 1024).toFixed(2) + "MB",
    });

    // 壓縮圖片條件與參數
    // const maxSizeMB = 1;
    // const maxWidthOrHeight = 1920;
    const maxSizeMB = 0.05; // 最大 0.05MB（50KB）
    const maxWidthOrHeight = 500; // 限制最大寬高 500px

    let compressedFile = file;

    if (file.size / 1024 / 1024 > maxSizeMB) {
      try {
        compressedFile = await imageCompression(file, {
          maxSizeMB,
          maxWidthOrHeight,
          useWebWorker: true,
        });

        console.log("[壓縮成功]", {
          name: compressedFile.name,
          size: compressedFile.size,
          type: compressedFile.type,
          sizeMB: (compressedFile.size / 1024 / 1024).toFixed(2) + "MB",
        });
      } catch (error) {
        console.warn("圖片壓縮失敗，使用原圖：", error);
      }
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader(); // 使用 FileReader 把（壓縮後的）圖片轉成 base64

      reader.onload = () => {
        const compressedBase64 = reader.result as string;
        const originalBlobUrl = URL.createObjectURL(file); // 原圖轉 blob URL

        imageSrcMap.set(compressedBase64, originalBlobUrl);

        resolve({
          default: compressedBase64, // CKEditor 要顯示的圖片 URL
          original: originalBlobUrl,
        });
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(compressedFile);
    });
  }
}

// 註冊 plugin
export function CustomUploadAdapterPlugin(editor: any) {
  editor.plugins.get("FileRepository").createUploadAdapter = (
    loader: FileLoader
  ) => {
    return new CustomUploadAdapter(loader);
  };

  // 每次編輯器有變動，就觸發
  // 替所有壓縮過的 base64 圖片加上對應的原始圖 Blob URL 屬性
  editor.model.document.on("change:data", () => {
    const domRoot = editor.editing.view.getDomRoot();
    if (!domRoot) return;

    const images = domRoot.querySelectorAll("img");

    images.forEach((img: HTMLImageElement) => {
      const originalSrc = img.getAttribute("data-original-src");
      const base64Src = img.src;

      if (!originalSrc && base64Src.startsWith("data:")) {
        const originalUrl = imageSrcMap.get(base64Src);

        if (originalUrl) {
          img.setAttribute("data-original-src", originalUrl);
        }
      }
    });
  });
}

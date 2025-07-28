import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

import wordIcon from "@/icons/word-icon.png";
import excelIcon from "@/icons/excel-icon.png";
import powerPointIcon from "@/icons/power-point-icon.png";
import pdfIcon from "@/icons/pdf-icon.png";
import dngIcon from "@/icons/dng-icon.png";
import fileIcon from "@/icons/file-icon.png";

const fileOutlinedSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"/></svg>
`;

const fileIconMap: Record<string, string> = {
  doc: wordIcon,
  docx: wordIcon,
  xls: excelIcon,
  xlsx: excelIcon,
  ppt: powerPointIcon,
  pptx: powerPointIcon,
  pdf: pdfIcon,
  dng: dngIcon,
  default: fileIcon,
};

export default class UploadFilePlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertFile", () => {
      const view = new ButtonView(editor.locale);

      view.set({
        label: "Insert File",
        tooltip: true,
        withText: false,
        icon: fileOutlinedSvg,
      });

      view.on("execute", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.style.display = "none";

        input.addEventListener("change", () => {
          const file = input.files?.[0];
          if (!file) return;

          // const maxSizeMB = 100;
          const maxSizeMB = 1;
          const maxSizeBytes = maxSizeMB * 1024 * 1024;
          if (file.size > maxSizeBytes) {
            alert(`檔案大小超過限制，請選擇小於 ${maxSizeMB}MB 的檔案。`);
            return;
          }

          const fileName = file.name;
          const fileExt = fileName.split(".").pop()?.toLowerCase() || "default";
          const iconUrl = fileIconMap[fileExt] || fileIconMap["default"];
          const fileUrl = URL.createObjectURL(file);

          const html = `
              <a
                href="${fileUrl}"
                target="_blank"
                rel="noopener noreferrer"
                style="
                  color: #0070f3;
                  text-decoration: underline;
                  word-break: break-word;
                  font-size: 14px;
                "
              >
                <img
                src="${iconUrl}"
                alt="${fileExt}"
                style="width: 20px; height: 20px;"
              />
              <span>${fileName}</span>
              </a>
          `;

          editor.model.change((writer) => {
            const viewFragment = editor.data.processor.toView(html);
            const modelFragment = editor.data.toModel(viewFragment);
            editor.model.insertContent(modelFragment);
          });
        });

        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
      });

      return view;
    });

    editor.editing.view.document.on("drop", (evt, data) => {
      const dataTransfer = data.dataTransfer;
      if (!dataTransfer) return;

      const files = Array.from(dataTransfer.files) as File[];

      if (files.length) {
        const nonImageFiles = files.filter(
          (file) => !file.type.startsWith("image/")
        );

        if (nonImageFiles.length === 0) {
          // 如果都是圖片，就讓 CKEditor 自己處理
          return;
        }

        for (const file of files) {
          const fileName = file.name;
          const fileExt = fileName.split(".").pop()?.toLowerCase() || "default";
          const iconUrl = fileIconMap[fileExt] || fileIconMap["default"];
          const fileUrl = URL.createObjectURL(file);

          const html = `
          <span
            style="display: inline-flex; align-items: center; gap: 6px; margin: 8px;"
          >
            <img src="${iconUrl}" alt="${fileExt}" style="width: 20px; height: 20px;" />
            <a href="${fileUrl}" target="_blank" rel="noopener noreferrer"
              style="color: #0070f3; text-decoration: underline; word-break: break-word; font-size: 14px;"
            >${fileName}</a>
          </span>
        `;

          const viewFragment = editor.data.processor.toView(html);
          const modelFragment = editor.data.toModel(viewFragment);
          editor.model.insertContent(modelFragment);
        }
      }
    });
  }
}

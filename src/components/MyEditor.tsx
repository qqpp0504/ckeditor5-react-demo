import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

// import { AiAgent } from "@dxpr/ckeditor5-ai-agent";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";

import "ckeditor5/ckeditor5.css";

type MyEditorProps = {
  editorData: string;
  setEditorData: (data: string) => void;
};

const editorConfig = {
  licenseKey: "GPL",
  plugins: [Bold, Italic],
  toolbar: {
    items: ["bold", "italic"],
  },
};

const MyEditor = ({ editorData, setEditorData }: MyEditorProps) => {
  return (
    <div className="editor-container">
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        data={editorData}
        onChange={(event, editor) => {
          setEditorData(editor.getData());
        }}
      />
    </div>
  );
};

export default MyEditor;

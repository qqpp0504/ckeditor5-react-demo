import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { AiAgent } from "@dxpr/ckeditor5-ai-agent";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Typing } from "@ckeditor/ckeditor5-typing";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { Font } from "@ckeditor/ckeditor5-font";

import "ckeditor5/ckeditor5.css";

type MyEditorProps = {
  editorData: string;
  setEditorData: (data: string) => void;
};

const editorConfig = {
  licenseKey: "GPL",
  plugins: [
    AiAgent,
    Essentials,
    Typing,
    Paragraph,
    Bold,
    Italic,
    Heading,
    SourceEditing,
    Font,
  ],
  toolbar: {
    items: [
      "aiAgentButton",
      "aiAgentToneButton",
      "sourceEditing",
      "|",
      "heading",
      "|",
      "fontFamily",
      "fontSize",
      "|",
      "bold",
      "italic",
    ],
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
          const newData = editor.getData();
          setEditorData(newData);
        }}
      />
    </div>
  );
};

export default MyEditor;

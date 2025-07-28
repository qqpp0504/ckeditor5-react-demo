import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { AiAgent } from "@dxpr/ckeditor5-ai-agent";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Heading } from "@ckeditor/ckeditor5-heading";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Superscript,
  Subscript,
} from "@ckeditor/ckeditor5-basic-styles";
import { Typing } from "@ckeditor/ckeditor5-typing";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { Font } from "@ckeditor/ckeditor5-font";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { List, ListProperties } from "@ckeditor/ckeditor5-list";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import {
  Table,
  TableProperties,
  TableCellProperties,
  TableCaption,
  TableColumnResize,
  TableToolbar,
} from "@ckeditor/ckeditor5-table";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { Emoji } from "@ckeditor/ckeditor5-emoji";
import { Mention } from "@ckeditor/ckeditor5-mention";
import {
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
} from "@ckeditor/ckeditor5-special-characters";
import { Link } from "@ckeditor/ckeditor5-link";
import {
  PictureEditing,
  AutoImage,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";

import "ckeditor5/ckeditor5.css";
import { CustomUploadAdapterPlugin } from "../customPlugins/CustomUploadAdapter";
import UploadFilePlugin from "../customPlugins/UploadFilePlugin";

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
    Underline,
    Heading,
    SourceEditing,
    Font,
    Strikethrough,
    Superscript,
    Subscript,
    RemoveFormat,
    Alignment,
    Indent,
    IndentBlock,
    List,
    ListProperties,
    BlockQuote,
    Table,
    TableProperties,
    TableCellProperties,
    TableCaption,
    TableColumnResize,
    TableToolbar,
    HorizontalLine,
    Emoji,
    Mention,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Link,
    PictureEditing,
    AutoImage,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    CustomUploadAdapterPlugin,
    UploadFilePlugin,
    Autoformat,
    Autosave,
  ],
  toolbar: {
    items: [
      "aiAgentButton",
      "aiAgentToneButton",
      "|",
      "sourceEditing",
      "|",
      "heading",
      "|",
      "fontFamily",
      "fontSize",
      "|",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "superscript",
      "subscript",
      "|",
      "removeFormat",
      "|",
      "alignment:left",
      "alignment:center",
      "alignment:right",
      "alignment:justify",
      "|",
      "outdent",
      "indent",
      "|",
      "numberedList",
      "bulletedList",
      "blockQuote",
      "|",
      "insertTable",
      "horizontalLine",
      "emoji",
      "specialCharacters",
      "|",
      "link",
      "insertImage",
      "insertFile",
      "|",
      "undo",
      "redo",
    ],
    shouldNotGroupWhenFull: false,
  },
  aiAgent: {
    apiKey: "YOUR_API_KEY",
    tonesDropdown: [
      {
        label: "Technical",
        tone: "Use technical language with precise terminology and detailed explanations.",
      },
      {
        label: "Casual",
        tone: "Write in a relaxed, conversational style using everyday language.",
      },
      {
        label: "Academic",
        tone: "Use formal academic language with proper citations and structured arguments.",
      },
    ],
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
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

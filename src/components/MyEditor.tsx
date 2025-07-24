// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
// import { Alignment } from "@ckeditor/ckeditor5-alignment";
// // import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
// // import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
// // import { Essentials } from "@ckeditor/ckeditor5-essentials";
// // import { Heading, HeadingButtonsUI } from "@ckeditor/ckeditor5-heading";
// // import {
// //   Image,
// //   ImageCaption,
// //   ImageStyle,
// //   ImageToolbar,
// //   ImageUpload,
// // } from "@ckeditor/ckeditor5-image";
// // import { List } from "@ckeditor/ckeditor5-list";
// // import { Paragraph, ParagraphButtonUI } from "@ckeditor/ckeditor5-paragraph";
// // import { Table, TableToolbar } from "@ckeditor/ckeditor5-table";
// // import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";
// // import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
// // import { AccessibilityHelp } from "@ckeditor/ckeditor5-ui";
// // import { Style } from "@ckeditor/ckeditor5-style";
// // import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
// // import { Emoji } from "@ckeditor/ckeditor5-emoji";
// // import { Mention } from "@ckeditor/ckeditor5-mention";
// // import { AiAgent } from "@dxpr/ckeditor5-ai-agent";

// import "@ckeditor/ckeditor5-theme-lark/theme/ckeditor.css";

type MyEditorProps = {
  editorData: string;
  setEditorData: (data: string) => void;
};

// const editorConfig = {
//   licenseKey: "GPL",
//   plugins: [Alignment],
//   toolbar: {
//     items: [
//       "aiAgentButton",
//       "aiAgentToneButton",
//       "|",
//       "style",
//       "|",
//       "undo",
//       "redo",
//       "|",
//       "heading",
//       "|",
//       "bold",
//       "italic",
//       "link",
//       "code",
//       "bulletedList",
//       "numberedList",
//       "|",
//       "outdent",
//       "indent",
//       "|",
//       "uploadImage",
//       "blockQuote",
//       "insertTable",
//       "mediaEmbed",
//       "codeBlock",
//       "|",
//       "sourceEditing",
//       "accessibilityHelp",
//       "emoji",
//       "|",
//       "fullscreen",
//     ],
//   },
//   list: {
//     properties: {
//       styles: true,
//       startIndex: true,
//       reversed: true,
//     },
//   },
//   table: {
//     contentToolbar: [
//       "tableColumn",
//       "tableRow",
//       "mergeTableCells",
//       "tableProperties",
//       "tableCellProperties",
//     ],
//   },
//   fontSize: {
//     options: [10, 12, 14, 16, 18, 20, 24, "default"],
//   },
//   mention: {
//     feeds: [
//       {
//         marker: "@",
//         feed: [
//           "@apple",
//           "@banana",
//           "@cherry",
//           "@date",
//           "@elderberry",
//           "@fig",
//           "@grape",
//         ],
//       },
//     ],
//   },
//   image: {
//     toolbar: [
//       "toggleImageCaption",
//       "imageTextAlternative",
//       "|",
//       "imageStyle:inline",
//       "imageStyle:wrapText",
//       "imageStyle:breakText",
//       "|",
//       "resizeImage",
//     ],
//     upload: {
//       types: ["jpeg", "png", "gif", "webp", "svg+xml"],
//     },
//   },
//   htmlSupport: {
//     allow: [
//       {
//         name: /.*/,
//         attributes: [/.*/],
//         styles: [/.*/],
//         classes: [/.*/],
//       },
//     ],
//   },
// };

const MyEditor = ({ editorData, setEditorData }: MyEditorProps) => {
  return <div className="editor-container"></div>;
};

export default MyEditor;

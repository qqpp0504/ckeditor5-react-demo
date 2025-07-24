import React, { Component } from "react";
import { useState } from "react";
// import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";

// import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
// import { Context } from "@ckeditor/ckeditor5-core";
// import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
// import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
// import { ContextWatchdog } from "@ckeditor/ckeditor5-watchdog";

import MyEditor from "./components/MyEditor";
import "./App.css";

const App = () => {
  const [editorData, setEditorData] = useState("");

  return (
    <div className="App">
      {/* <CKEditorContext context={Context} contextWatchdog={ContextWatchdog}>
          <CKEditor
            editor={ClassicEditor}
            config={{
              licenseKey: "GPL",
              plugins: [Paragraph, Bold, Italic],
              toolbar: ["bold", "italic"],
            }}
            data="<p>Hello from the first editor working with the context!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor1 is ready to use!", editor);
            }}
          />
        </CKEditorContext> */}
      <MyEditor editorData={editorData} setEditorData={setEditorData} />
    </div>
  );
};

export default App;

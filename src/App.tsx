import React from "react";
import { useState } from "react";

import MyEditor from "./components/MyEditor";
import "./App.css";

const App = () => {
  const [editorData, setEditorData] = useState("");

  return (
    <div className="App">
      <MyEditor editorData={editorData} setEditorData={setEditorData} />
    </div>
  );
};

export default App;

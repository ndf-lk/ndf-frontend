import { Component, useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles/editor.styles.css";

const TheEditor = ({ setBody }: { setBody: (e: string) => void }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    setBody(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);

  return (
    <>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={(editorState: any) => setEditorState(editorState)}
      />
    </>
  );
};

export default TheEditor;

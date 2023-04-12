import React, { useState } from "react"
import { EditorState, convertToRaw } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"

import "./index.css"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const Draft = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
    props.handleDescription(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    )
  }

  const toolbarConfig = {
    options: ["inline", "list"],
    inline: {
      options: ["bold", "italic"],
    },
    list: {
      options: ["unordered"],
    },
  }

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbarConfig}
      />
    </div>
  )
}

export default Draft

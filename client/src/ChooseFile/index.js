import React, { useState, useEffect } from "react"

import "./index.css"

function ChooseFile(props) {
  const [uploadedFileName, setUploadedFileName] = useState(null)
  const [inputFile, setInputFile] = useState(null)
  useEffect(() => {
    setInputFile(document.getElementById("input-file"))
  }, [])

  const handleUpload = (event) => {
    event.preventDefault()
    inputFile?.click()
  }
  const handleDisplayFileDetails = (e) => {
    inputFile?.files && setUploadedFileName(inputFile.files[0].name)
    props.handleFileUpload !== undefined &&
      props.handleFileUpload(document.getElementById("input-file"))
  }

  //Delete uploaded file
  const handleDelete = () => {
    setUploadedFileName(null)
    inputFile.value = ""
  }

  return (
    <>
      <div className="upload-container">
        {uploadedFileName ? (
          ""
        ) : (
          <label className="choose-file-text">Choose file: </label>
        )}
        <input
          id="input-file"
          onChange={(e) => handleDisplayFileDetails(e)}
          className="d-none"
          type="file"
        />
        <button
          onClick={handleUpload}
          className={`btn btn-outline-${
            uploadedFileName ? "success uploaded-file" : "primary"
          }`}
          style={{ maxWidth: "200px", overflowX: "hidden" }}
        >
          {uploadedFileName ? uploadedFileName : "Upload"}
        </button>
        {uploadedFileName && (
          <>
            <br />
            <button onClick={handleDelete} className="delete-file-btn">
              Delete
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default ChooseFile

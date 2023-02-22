import React, { useState, useEffect } from "react"

function ChooseFileTraining(props) {
  const [uploadedFileName, setUploadedFileName] = useState(null)
  const [inputFile, setInputFile] = useState(null)

  useEffect(() => {
    setInputFile(document.getElementById(`input-file-training-${props.index}`))
  }, [])

  const handleUpload = (event) => {
    event.preventDefault()
    inputFile?.click()
  }

  const handleDisplayFileDetails = (e) => {
    inputFile?.files && setUploadedFileName(inputFile.files[0].name)
    props.handleFile(e, props.index)
  }

  //Delete uploaded file
  const handleDelete = () => {
    setUploadedFileName(null)
    inputFile.value = ""
  }

  return (
    <>
      <div className="upload-container">
        <input
          id={`input-file-training-${props.index}`}
          onChange={handleDisplayFileDetails}
          className="d-none"
          type="file"
        />
        <button
          onClick={handleUpload}
          className={`btn btn-outline-${
            uploadedFileName ? "success uploaded-file" : "primary"
          }`}
        >
          {uploadedFileName ? uploadedFileName : "Upload Certificate"}
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

export default ChooseFileTraining

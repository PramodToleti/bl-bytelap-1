import TextArea from "antd/es/input/TextArea"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import data from "./postData"

import "./index.css"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditPost = (props) => {
  const { index } = props
  console.log(data[index])

  const [editDetails, setEditDetails] = useState({
    imageUrl: data[index]?.imageUrl || "",
    heading: data[index]?.heading || "",
    description: data[index]?.description || "",
    category: data[index]?.category || "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    data[index] = editDetails
    toast.success("Post Updated Successfully", {
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    })
  }

  return (
    <Form
      style={{ width: "100%" }}
      className="container"
      onSubmit={handleSubmit}
    >
      {data[index] !== undefined ? (
        <img
          src={data[index].imageUrl}
          style={{ width: "100%", height: "350px" }}
          className="mb-3"
        />
      ) : (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDvgnZjgcxSSlR0nMtbfoFAYD3uQ2UH7rwv8H0NL-&s"
          style={{ width: "100%", height: "350px" }}
          className="mb-3"
        />
      )}
      <ToastContainer />
      <div style={{ display: "flex", gap: "15px" }}>
        <p style={{ cursor: "pointer" }}>Add</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setEditDetails({ ...editDetails, imageUrl: "" })}
        >
          Remove
        </p>
      </div>
      <Form.Group className="mb-4">
        <Form.Label>Heading</Form.Label>
        <Form.Control
          as={TextArea}
          rows={3}
          onChange={(e) =>
            setEditDetails({ ...editDetails, heading: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as={TextArea}
          rows={9}
          onChange={(e) =>
            setEditDetails({ ...editDetails, description: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Select
          aria-label="Select Category"
          onChange={(e) =>
            setEditDetails({ ...editDetails, category: e.target.value })
          }
        >
          <option>Category</option>
          <option>Career Guidence</option>
        </Form.Select>
      </Form.Group>

      <div className="d-flex flex-row justify-content-center">
        <Button variant="primary" className="mb-5 mt-3" type="submit">
          Save Changes
        </Button>
      </div>
    </Form>
  )
}

const EditAll = () => {
  const [editOption, setEditOption] = useState(null)
  const [isEditClicked, setEditClicked] = useState(false)

  if (isEditClicked) {
    return <EditPost index={editOption} />
  }

  return (
    <div className="blog-container container mb-5">
      <h3 align="end">Category</h3>
      <p>Career Guidence</p>
      <div className="edit-cards">
        <div className="add-container" onClick={() => setEditClicked(true)}>
          Add
        </div>
        {data.map((e, i) => (
          <div
            className="recent-post-sub-main"
            key={i}
            style={{ cursor: "pointer" }}
          >
            <img src={e.imageUrl} className="mb-3 post-image" />
            <p>{e.heading}</p>

            <button
              className="edit-btn"
              onClick={() => {
                setEditOption(i)
                setEditClicked(true)
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditAll

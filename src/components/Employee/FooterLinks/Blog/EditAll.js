import TextArea from "antd/es/input/TextArea"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import data from "./postData"

import "./index.css"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditPost = (props) => {
  const { index, handleAddPost } = props
  const [showImageUrlInput, setShowImageUrlInput] = useState(false)
  const [editDetails, setEditDetails] = useState({
    id: data[index]?.id || 0,
    imageUrl: data[index]?.imageUrl || "",
    heading: data[index]?.heading || "",
    description: data[index]?.description || "",
    category: data[index]?.category || "",
  })

  const handleRemoveImageUrl = () => {
    setEditDetails({ ...editDetails, imageUrl: "" })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editDetails.id === 0) {
      handleAddPost(editDetails)
    } else {
      data[index] = editDetails
      localStorage.setItem("data", JSON.stringify(data))
    }
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
      className="container mt-4"
      onSubmit={handleSubmit}
    >
      <p
        onClick={() => props.setEditClicked(false)}
        style={{ cursor: "pointer", marginBottom: "10px" }}
      >
        &lt; Back
      </p>
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
        {editDetails.imageUrl === "" ? (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setShowImageUrlInput(true)}
          >
            Add
          </p>
        ) : (
          <p style={{ cursor: "pointer" }} onClick={handleRemoveImageUrl}>
            Remove
          </p>
        )}
      </div>
      {showImageUrlInput && (
        <Form.Group className="mb-4">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={editDetails.imageUrl}
            onChange={(e) =>
              setEditDetails({ ...editDetails, imageUrl: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid image URL.
          </Form.Control.Feedback>
        </Form.Group>
      )}
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
  const [postData, setData] = useState(data)

  const handleRemove = (index) => {
    const newData = [...postData]
    newData.splice(index, 1)
    setData(newData)
    localStorage.setItem("data", JSON.stringify(newData))
  }

  const handleAddPost = (newPost) => {
    const newData = [...postData, newPost]
    setData(newData)
    localStorage.setItem("data", JSON.stringify(newData))
  }

  if (isEditClicked) {
    return (
      <EditPost
        index={editOption}
        setEditClicked={setEditClicked}
        handleAddPost={handleAddPost}
      />
    )
  }

  return (
    <div className="blog-container container mb-5">
      <h3 align="end">Category</h3>
      <p>Career Guidence</p>
      <div className="edit-cards">
        <div className="add-container" onClick={() => setEditClicked(true)}>
          Add
        </div>
        {postData.map((e, i) => (
          <div
            className="recent-post-sub-main"
            key={i}
            style={{ cursor: "pointer" }}
          >
            <img src={e.imageUrl} className="mb-3 post-image" />

            <div className="controller-btns">
              <button
                className="edit-btn"
                onClick={() => {
                  setEditOption(i)
                  setEditClicked(true)
                }}
              >
                Edit
              </button>

              <button className="edit-btn" onClick={() => handleRemove(i)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex flex-row justify-content-center mb-5">
        <h4
          onClick={() => {
            localStorage.setItem("data", JSON.stringify(postData))
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
          }}
          style={{ cursor: "pointer" }}
        >
          Save Changes
        </h4>
      </div>
    </div>
  )
}

export default EditAll

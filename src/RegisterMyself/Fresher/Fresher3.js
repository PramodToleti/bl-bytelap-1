import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Row from "react-bootstrap/Row"

import { Link } from "react-router-dom"

import HomeHeader from "../../components/HomeHeader"

function Fresher3() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <>
      <HomeHeader />
      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <Link to="/account-setting/my-info" className="header-nav-link">
          My Info
        </Link>

        <Link to="/account-setting/graduation" className="header-nav-link">
          Graduation
        </Link>
        <Link to="/account-setting/internship-1" className="header-nav-link">
          Register Myself
        </Link>

        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5  bg-white rounded">
          <p className="text-center">Step 3-3</p>

          <Form
            action=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group className="mb-3 mt-2" controlId="formBasicText">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Software developer , Digital marketing "
                  defaultValue=""
                />
              </Form.Group>

              <Form.Group className="mb-3 mt-2" controlId="formBasicText">
                <Form.Label>My Portfolio & Project's </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Paste URL"
                  defaultValue=""
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Roles and responsibilities </Form.Label>
                <Form.Control
                  required
                  text="type"
                  as="textarea"
                  rows={4}
                  placeholder=""
                />
              </Form.Group>
              <p className="text-end">Add More</p>

              <Form.Group className="mb-3 mt-2" controlId="formBasicText">
                <Form.Label>My Achievement's </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Prize in quize competition"
                  defaultValue=""
                />
              </Form.Group>
              <Stack direction="horizontal" gap={3}>
                <input className="d-none" type="file" />
                <button className="btn btn-outline-primary">
                  Attach Certificate
                </button>
                <div className="ms-auto">
                  {" "}
                  <p>Add More</p>
                </div>
              </Stack>

              <Form.Group className="mb-3 mt-3" controlId="formBasicText">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="English , Hindi"
                  defaultValue=""
                />
              </Form.Group>
            </Row>

            <div className="d-grid gap-2 mt-5">
              <Link to="/">
                <Button variant="primary" size="lg" style={{ width: "100%" }}>
                  Save
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Fresher3

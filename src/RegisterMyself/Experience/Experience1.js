import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Dropdown from "react-bootstrap/Dropdown"

import { Link } from "react-router-dom"
import HomeHeader from "../../components/HomeHeader"

function Experience1() {
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
          <p className="text-center mb-3">
            {" "}
            <Dropdown>
              <Dropdown.Toggle size="lg" variant="light" id="dropdown-basic">
                Experience
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/account-setting/internship-1" className="nav-link">
                    Internship
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="/account-setting/fresher-1">
                  <Link to="/account-setting/fresher-1" className="nav-link">
                    Fresher
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="/account-setting/experience-1">
                  <Link to="/account-setting/experience-1" className="nav-link">
                    Experience
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </p>
          <p className="text-center">Step 1-3</p>

          <Form
            action=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Are you actively looking for job"
                />
              </Form.Group>

              <Form.Group className="mb-3 mt-2" controlId="formBasicText">
                <Form.Label>Job Tittle</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Software developer , Digital marketing "
                  defaultValue=""
                />
              </Form.Group>

              <Form.Group className="mb-3 mt-2">
                <Form.Label>Looking for full time or part time </Form.Label>
                <Form.Select>
                  <option> Select an option </option>
                  <option> Full-Time </option>
                  <option>Part-Time</option>
                  <option>Both</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3 mt-2">
                <Form.Label>What is the schedule of this internship</Form.Label>
                <Form.Select>
                  <option>Select an option </option>
                  <option> Office </option>
                  <option>Remote</option>
                  <option>Both</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3 mt-2">
                <Form.Label>Experience </Form.Label>
                <Form.Select>
                  <option>Select an option </option>
                  <option> Less than a year </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Select>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Salary Range</Form.Label>
                  <Form.Select>
                    <option>Select an option </option>
                    <option> Not Disclosed </option>
                    <option>Per Month</option>
                    <option>Lac</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                  <Form.Label>Min</Form.Label>
                  <Form.Control type="text" placeholder="" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                  <Form.Label>Max</Form.Label>
                  <Form.Control type="text" placeholder="" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3 mt-2" controlId="formBasicText">
                <Form.Label>
                  Which location do you prefer looking for internship ?
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Indore "
                  defaultValue=""
                />
              </Form.Group>

              <Form.Group className="mb-3 mt-2" controlId="formBasicText">
                <Form.Label>Any more location </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Mumbai "
                  defaultValue=""
                />
              </Form.Group>
            </Row>

            <div className="d-grid gap-2 mt-5">
              <Link to="/account-setting/experience-2">
                <Button variant="primary" size="lg" style={{ width: "100%" }}>
                  Save & Next
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Experience1

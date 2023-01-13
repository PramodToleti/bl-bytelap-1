import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"

import { Link } from "react-router-dom"

import ChooseFile from "../../ChooseFile"

function Internship1() {
  return (
    <>
      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 ml-4 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
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
                Internship
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

          <p className="text-center mb-4 mr-5">Step 1-3</p>

          <Form action="">
            <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Are you actively looking for job"
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Job Tittle</Form.Label>
              <Form.Control
                type="email"
                placeholder="software developer , digital marketing"
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
              <Form.Label>Duration of Internship </Form.Label>
              <Form.Select>
                <option>Select an option </option>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>
                Which location do you prefer looking for internship ?
              </Form.Label>
              <Form.Control type="text" placeholder="Location" />
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Any more location </Form.Label>
              <Form.Control type="text" placeholder="Location" />
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Stack
                direction="horizontal"
                gap={3}
                style={{
                  marginTop: "7px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <input className="d-none" type="file" />
                <ChooseFile />
                <div className="or-container">
                  {" "}
                  <p
                    style={{
                      marginTop: "8px",
                    }}
                  >
                    OR
                  </p>
                </div>
                <Link to="/create-resume">
                  <button className=" btn btn-outline-secondary">Create</button>
                </Link>
              </Stack>
              <Form.Control.Feedback type="invalid">
                Please upload your resume.
              </Form.Control.Feedback>
            </Form.Group>
            <small className="text-start text-muted mt-3">
              PDF,Doc,Docx, | Max:2MB
            </small>

            <div className="d-grid gap-2 mt-5">
              <Link to="/account-setting/internship-2">
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

export default Internship1

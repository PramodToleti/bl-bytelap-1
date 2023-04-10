import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"
import ChooseFile from "../../ChooseFile"
import { Link } from "react-router-dom"
import EmployeeHome from "../EmployeeHome"
import { Link } from "react-router-dom"

function EmployeeSettings() {
  return (
    <>
      <EmployeeHome />
      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <p className="text-start fs-5">Account Setting</p>
        <hr></hr>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item>
            <Link to="/employee/dashboard/my-ino" className="header-nav-link">
              My Info
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link
              to="/employee/dashboard/company-setting"
              className="header-nav-link"
            >
              Company Settings
            </Link>
          </Nav.Item>
        </Nav>

        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5    rounded">
          <p className="text-center mb-5">
            <p className="text-center">Post job</p>
            <Dropdown>
              <Dropdown.Toggle size="lg" variant="light" id="dropdown-basic">
                Internship
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internship</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Fresher</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Experience</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </p>

          <Form action="">
            <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Are you actively looking for job"
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Company name</Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Demo Solution Inc"
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
              <Form.Label className="mt-2">Upload your resume </Form.Label>
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
              <Button variant="primary" size="lg">
                Save & Next
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EmployeeSettings

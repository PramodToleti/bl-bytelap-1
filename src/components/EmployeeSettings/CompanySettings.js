import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import EmployeeHome from "../EmployeeHome"
import ChooseFile from "../../ChooseFile"

function CompanySettings() {
  return (
    <>
      <EmployeeHome />

      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <p className="text-start fs-5">Account Setting</p>
        <hr></hr>

        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5  bg-white rounded">
          <p className="text-center mb-5"> Comapny Setting </p>

          <Form action="">
            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Company Name </Form.Label>
              <Form.Control type="Email ID" placeholder="Info@demo.com" />
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Officail Mail ID </Form.Label>
              <Form.Control type="Email ID" placeholder="Info@demo.com" />
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Company URL </Form.Label>
              <Form.Control type="link" placeholder="URL" />
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label>You are </Form.Label>
              <Form.Select>
                <option> Select an option </option>
                <option> Owner </option>
                <option>Human Resources</option>
                <option>Junior Human Resources</option>
                <option> Marketing Specialis </option>
                <option> Junior Marketing Specialist </option>
                <option> CEO </option>
                <option> CTO </option>
                <option> Other </option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>About Company</Form.Label>
              <Form.Control
                required
                text="type"
                as="textarea"
                rows={4}
                placeholder=""
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Company Address</Form.Label>
              <Form.Control
                required
                text="type"
                as="textarea"
                rows={3}
                placeholder=""
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Upload your resume </Form.Label>
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
              <Link to="/employee">
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

export default CompanySettings

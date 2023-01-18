import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"
import NavDropdown from "react-bootstrap/NavDropdown"
import Row from "react-bootstrap/Row"
import EmployeeHome from "../EmployeeHome"
import { Link } from "react-router-dom"
import ChooseFile from "../../ChooseFile"

function CompanySetting() {
  return (
    <>
      <EmployeeHome />
      <div className="col-lg-6 col-md-6 search-course-right   mb-0 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <p className="text-center mb-5 fs-3"> Company Profile </p>

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

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>About Company</Form.Label>
            <Form.Control
              required
              text="type"
              as="textarea"
              rows={4}
              placeholder=""
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
            <Form.Label className="mt-2">Upload Logo </Form.Label>
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
            </Stack>
            <Form.Control.Feedback type="invalid">
              Please upload company logo.
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid gap-2 mt-5">
            <Link to="/employee">
              <Button variant="primary" size="lg" style={{ width: "100%" }}>
                Update
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default CompanySetting

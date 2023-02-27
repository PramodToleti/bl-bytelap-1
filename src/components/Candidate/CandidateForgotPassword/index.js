import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"
import NavDropdown from "react-bootstrap/NavDropdown"
import Row from "react-bootstrap/Row"
import CandidateHome from "../CandidateHome"
import { Link } from "react-router-dom"

function CandidateForgotPassword() {
  return (
    <div className="p-2">
      <div
        className="col-lg-4 col-md-4 search-course-right   mb-0 mt-4 p-2     border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
        style={{ backgroundColor: "white" }}
      >
        <p className="text-center mb-5 fs-3"> Change Password </p>

        <Form action="">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Old Password </Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
          <p className="text-end"> forgot password ?</p>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>New Password </Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Confirm Password </Form.Label>
            <Form.Control type="password" placeholder="" />
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
    </div>
  )
}

export default CandidateForgotPassword

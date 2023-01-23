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

function CandidateMyinfo() {
  return (
    <>
      <CandidateHome />

      <div className="col-lg-4 col-md-4 search-course-right   mb-0 mt-4 p-2       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <p className="text-center mb-5 fs-3"> My info </p>

        <Form action="">
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="" />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Mobile Number </Form.Label>
            <Form.Control type="number" placeholder="" />
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

export default CandidateMyinfo

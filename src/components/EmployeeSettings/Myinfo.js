import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import EmployeeHome from "../EmployeeHome"

function Myinfo() {
  return (
    <>
      <EmployeeHome />
      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <p className="text-start fs-5">Account Setting</p>
        <hr></hr>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Link
              to="/employee/account-setting/my-info"
              className="header-nav-link"
            >
              My Info
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link
              to="/employee/account-setting/company-setting"
              className="header-nav-link"
            >
              Company Settings
            </Link>
          </Nav.Item>
        </Nav>

        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5  bg-white rounded">
          <p className="text-center mb-5"> My Info </p>

          <Form action="">
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Company Email ID </Form.Label>
              <Form.Control type="Email ID" placeholder="Info@demo.com" />
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

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p>Change Password</p>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Mobile number </Form.Label>
              <Form.Control type="number" placeholder="" />
            </Form.Group>

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

export default Myinfo

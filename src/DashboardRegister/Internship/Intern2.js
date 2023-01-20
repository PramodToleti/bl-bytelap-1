import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"
import EmployeeHome from "../../components/EmployeeHome"

function Intern2() {
  return (
    <>
      <EmployeeHome />

      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <p className="text-start fs-5">Dashboard</p>
        <hr></hr>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">CV Alerts</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Active Post</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Create Job</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5    rounded">
          <p className="text-center mb-5">
            <p className="text-center">Create job</p>
            <Dropdown>
              <Dropdown.Toggle size="lg" variant="light" id="dropdown-basic">
                Internship
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link
                  to="/employee/dashboard/internship-1"
                  className="nav-link"
                >
                  Internship
                </Link>
                <Link to="/employee/dashboard/fresher-1" className="nav-link">
                  Fresher
                </Link>
                <Link
                  to="/employee/dashboard/experience-1"
                  className="nav-link"
                >
                  Experience
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </p>

          <Form action="">
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
                Where do you want to post this internship position ?
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Mumbai "
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label>
                How many candidates do you want to hire for this role ? *
              </Form.Label>
              <Form.Select>
                <option> Select an option </option>
                <option> 1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                <option>10+</option>
                <option>20+</option>
                <option>30+</option>
                <option>50+</option>
                <option>100+</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label>Is This internship remote or office</Form.Label>
              <Form.Select>
                <option>Select an option </option>
                <option> Office </option>
                <option>Remote</option>
                <option>Both</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label>What is the Shift of this job profile ?</Form.Label>
              <Form.Select>
                <option>Select an option </option>
                <option> Day </option>
                <option>Night </option>
                <option>Rotational</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label> What is the Duration of Internship </Form.Label>
              <Form.Select>
                <option>Select an option </option>
                <option> 1 </option>
                <option> 3 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Company Location</Form.Label>
              <Form.Control disabled type="text" placeholder="Location" />
            </Form.Group>

            <div className="d-grid gap-2 mt-5">
              <Link to="/employee/dashboard/internship-3">
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

export default Intern2

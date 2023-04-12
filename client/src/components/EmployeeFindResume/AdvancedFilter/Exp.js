import { Form, Button, Row, Col } from "react-bootstrap"

import "./styles.css"
import DynamicEducationForm from "../../../assets/DynamicEducationForm"
import CheckboxDropdown from "../../../assets/CheckboxDropdowm"
import LocationDropdown from "../../../assets/LocationCheckbox"

const Exp = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
        <h6>Advanced Filter</h6>
      </div>
      <div>
        <Form.Group className="mb-2" controlId="formBasicInput">
          <Form.Label>Add Skills</Form.Label>
          <CheckboxDropdown />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Must include this skills</Form.Label>
          <CheckboxDropdown />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="mb-3">Experience</Form.Label>
          <Row>
            <Col md={3}>
              <Form.Control placeholder="2 Yrs" type="number" />
            </Col>
            <Col md={1} className="mt-1 ml-1">
              To
            </Col>
            <Col md={3}>
              <Form.Control placeholder="4 Yrs" type="number" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="mb-2">CTC (INR lacs)</Form.Label>
          <Row>
            <Col md={4}>
              <Form.Label>From</Form.Label>
              <Form.Control placeholder="2 Yrs" type="number" />
            </Col>

            <Col md={4}>
              <Form.Label>To</Form.Label>
              <Form.Control placeholder="4 Yrs" type="number" />
            </Col>
          </Row>
        </Form.Group>
      </div>

      <div>
        <Form.Label className="mb-3">Education</Form.Label>
      </div>

      <div className="filter-container mb-3">
        <div className="filter-side-1">
          <div className="filter-item">
            <Form.Label>All</Form.Label>
            <Form.Check type="checkbox" />
          </div>
          <div className="filter-item">
            <Form.Label>Post-Graduation / Master's</Form.Label>
            <Form.Check type="checkbox" />
          </div>
          <div className="filter-item">
            <Form.Label>Diploma</Form.Label>
            <Form.Check type="checkbox" />
          </div>
          <div className="filter-item">
            <Form.Label>Higher Secondary (12th)</Form.Label>
            <Form.Check type="checkbox" />
          </div>
        </div>
        <div className="filter-side-2">
          <div className="filter-item">
            <Form.Label>Graduation / Bachelor's</Form.Label>
            <Form.Check type="checkbox" />
          </div>

          <div className="filter-item">
            <Form.Label>Secondary School (10th)</Form.Label>
            <Form.Check type="checkbox" />
          </div>

          <div className="filter-item">
            <Form.Label>Other</Form.Label>
            <Form.Check type="checkbox" />
          </div>
        </div>
      </div>

      <div>
        <Form.Label className="mb-3">Any Specific</Form.Label>
        <div className="mb-3">
          <DynamicEducationForm />
        </div>
      </div>

      <div className="relocate-checkbox mb-4">
        <Form.Label>Ability to relocate before work</Form.Label>
        <Form.Check type="checkbox" />
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="save-filter">
          <Button variant="outline-danger">Reset</Button>
          <Button variant="primary" type="submit">
            Apply
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default Exp

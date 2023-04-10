import { Form, Button } from "react-bootstrap"

import "./styles.css"
import DynamicEducationForm from "../../DynamicEducationForm"
import CheckboxDropdown from "../../CheckboxDropdowm"

const Intern = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
        <h6>Advanced Filter</h6>
      </div>
      <div>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Add Skills</Form.Label>
          <CheckboxDropdown />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Trained/Certified Candidate</Form.Label>
          <Form.Check type="checkbox" />
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
          <div className="filter-item">
            <Form.Label>Pursing</Form.Label>
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
        <Form.Label className="mb-3">Any Specific:</Form.Label>
        <div className="mb-3">
          <DynamicEducationForm />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
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

export default Intern

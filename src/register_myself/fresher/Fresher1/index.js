import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import "./index.css"

const Fresher1 = (props) => {
  const { updateStep2 } = props
  const onClickSubmit = (e) => {
    e.preventDefault()
  }

  const onClickSave = () => {
    updateStep2()
  }

  return (
    <>
      <p className="step-text">Step 1-3</p>
      <Form className="register-form" onSubmit={onClickSubmit}>
        <Form.Group className="mb-4 input-field">
          <Form.Check
            type="checkbox"
            id="checkbox"
            label="Are you actively looking for job"
          />
        </Form.Group>
        <Form.Group className="mb-4 input-field">
          <Form.Label htmlFor="TextInput">Job Title</Form.Label>
          <Form.Control
            id="TextInput"
            placeholder="Softwave developer, Digital marketing"
          />
        </Form.Group>
        <Form.Group className="mb-4 input-field">
          <Form.Label htmlFor="disabledSelect">
            Looking for full time or part time
          </Form.Label>
          <Form.Select id="Select">
            <option>Select an option</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4 input-field">
          <Form.Label htmlFor="disabledTextInput">
            What is the schedule of the internship
          </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Select an option" />
        </Form.Group>
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="salary-expectation">Salary expectation</label>
            <select
              className="form-control"
              id="salary-expectation"
              placeholder="Range type"
            >
              <option>Not Disclosed</option>
              <option>Lac</option>
              <option>Per Month</option>
              <option>Fixed</option>
            </select>
          </div>
          <div className="form-group col-3">
            <label htmlFor="min">Min</label>
            <input type="text" className="form-control" id="min" />
          </div>
          <div className="form-group col-3">
            <label htmlFor="max">Max</label>
            <input type="text" className="form-control" id="max" />
          </div>
        </div>
        <Form.Group className="mb-4 input-field">
          <Form.Label htmlFor="TextInput">
            Which location do you prefer looking for internship ?
          </Form.Label>
          <Form.Control id="TextInput" />
        </Form.Group>
        <Form.Group className="mb-4 input-field">
          <Form.Label htmlFor="TextInput">
            Anymore location (optional)
          </Form.Label>
          <Form.Control id="TextInput" />
        </Form.Group>

        <Button type="submit" className="submit-button" onClick={onClickSave}>
          Save & Next
        </Button>
      </Form>
    </>
  )
}

export default Fresher1

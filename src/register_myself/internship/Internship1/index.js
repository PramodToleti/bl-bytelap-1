import { useState } from "react"
import Button from "react-bootstrap/Button"
import { Form, FormControl } from "react-bootstrap"
import { Checkbox } from "antd"

import "./index.css"

const Internship1 = (props) => {
  const { updateStep2 } = props

  const [selectedOptions, setSelectedOptions] = useState([])

  const onClickSubmit = (e) => {
    e.preventDefault()
  }

  const onClickSave = () => {
    updateStep2()
  }

  const handleChange = (option) => {
    setSelectedOptions(
      selectedOptions.includes(option)
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option]
    )
  }

  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ]

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
            <option>Full time</option>
            <option>Part time</option>
            <option>Both</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4 input-field">
          <Form.Label htmlFor="disabledTextInput">
            What is the schedule of the internship
          </Form.Label>
          <Form.Select id="Select">
            <option>Office</option>
            <option>Remote</option>
            <option>Flexible</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4 input-field">
          <Form.Label htmlFor="disabledSelect">
            Duration of internship
          </Form.Label>
          <Form.Select id="Select">
            {[1, 2, 3, 4, 5, 6].map((each) => (
              <option>{each} months</option>
            ))}
          </Form.Select>
        </Form.Group>
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

export default Internship1

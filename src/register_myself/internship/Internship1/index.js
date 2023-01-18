import Button from "react-bootstrap/Button"
import { Form } from "react-bootstrap"
import { Component } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"

const fulltime = [
  { value: "Full time", label: "Full time" },
  { value: "Part time", label: "Part Time" },
  { value: "Both", label: "Both" },
]

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  )
}

class Internship1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      optionSelected: null,
    }
  }

  onClickSubmit = (e) => {
    e.preventDefault()
  }

  onClickSave = () => {
    const { updateStep2 } = this.props
    updateStep2()
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected,
    })
  }

  render() {
    return (
      <>
        <p className="step-text">Step 1-3</p>
        <Form className="register-form" onSubmit={this.onClickSubmit}>
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
            <span
              className="input-field"
              data-toggle="popover"
              data-trigger="focus"
              data-content="Please selecet account(s)"
              placeholder="Select an option"
            >
              <ReactSelect
                options={fulltime}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                  Option,
                }}
                onChange={this.handleChange}
                allowSelectAll={true}
                value={this.state.optionSelected}
                placeholder="Select an option"
              />
            </span>
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

          <Button
            type="submit"
            className="submit-button"
            onClick={this.onClickSave}
          >
            Save & Next
          </Button>
        </Form>
      </>
    )
  }
}

export default Internship1

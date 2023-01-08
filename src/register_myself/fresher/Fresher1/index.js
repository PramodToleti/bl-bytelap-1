import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Component } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"

import "./index.css"

const fulltime = [
  { value: "Full time", label: "Full time" },
  { value: "Part time", label: "Part Time" },
  { value: "Both", label: "Both" },
]

const schedule = [
  { value: "Office", label: "Office" },
  { value: "Remote", label: "Remote" },
  { value: "Flexible", label: "Flexible" },
]

const shift = [
  { value: "Day shift", label: "Day shift" },
  { value: "Night shift", label: "Morning shift" },
  { value: "Rotational shift", label: "Rotational shift" },
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

class Fresher1 extends Component {
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
            <span
              className="input-field"
              data-toggle="popover"
              data-trigger="focus"
              data-content="Please selecet account(s)"
              placeholder="Select an option"
            >
              <ReactSelect
                options={schedule}
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
              In which shift you are looking for job?
            </Form.Label>
            <span
              className="input-field"
              data-toggle="popover"
              data-trigger="focus"
              data-content="Please selecet account(s)"
              placeholder="Select an option"
            >
              <ReactSelect
                options={shift}
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
          <div className="form-row">
            <div className="form-group col-6">
              <label htmlFor="salary-expectation">Salary expectation</label>
              <Form.Select
                className="form-control"
                id="salary-expectation"
                placeholder="Range type"
              >
                <option>Not Disclosed</option>
                <option>Lac</option>
                <option>Per Month</option>
                <option>Fixed</option>
              </Form.Select>
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

export default Fresher1

import React, { Component } from "react"
import { default as ReactSelect } from "react-select"
import "./index.css"
import { components } from "react-select"
import { Form } from "react-bootstrap"

const skills = [
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "Javascript", label: "Javascript" },
  { value: "ReactJS", label: "ReactJS" },
  { value: "NodeJS", label: "NodeJS" },
  { value: "ExpressJS", label: "ExpressJS" },
  { value: "Ruby", label: "Ruby" },
  { value: "SQL", label: "SQL" },
]

const Option = (props) => {
  return (
    <div className="option">
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label className="skills-name">{props.label}</label>
      </components.Option>
    </div>
  )
}

class CheckboxDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionSelected: null,
    }
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected,
    })
    this.props.onSelectionChange(selected)
  }

  render() {
    return (
      <Form.Group controlId="formRoomType">
        <Form.Label>Skills</Form.Label>
        <span
          className="input-field"
          data-toggle="popover"
          data-trigger="focus"
          data-content="Please selecet account(s)"
        >
          <ReactSelect
            options={skills}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
              Option,
            }}
            onChange={this.handleChange}
            allowSelectAll={true}
            value={this.state.optionSelected}
          />
        </span>
      </Form.Group>
    )
  }
}

export default CheckboxDropdown

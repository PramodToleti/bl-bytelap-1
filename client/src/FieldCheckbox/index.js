import React, { Component } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"
import { Form } from "react-bootstrap"

const skills = [
  {
    value: "Computer Science Engineering",
    label: "Computer Science Engineering",
  },
  {
    value: "Civil Engineering",
    label: "Civil Engineering",
  },
  {
    value: "Chemical Engineering",
    label: "Chemical Engineering",
  },
  {
    value: "Mechanical Engineering",
    label: "Mechanical Engineering",
  },
  {
    value: "Electrical Engineering",
    label: "Electrical Engineering",
  },
  {
    value: "Industrial Engineering",
    label: "Industrial Engineering",
  },
  {
    value: "Electronics and Communication Engineering",
    label: "Electronics and Communication Engineering",
  },
  {
    value: "Electrical and Electronics Engineering",
    label: "Electrical and Electronics Engineering",
  },
  {
    value: "Aeronautical Engineering",
    label: "Aeronautical Engineering",
  },
  {
    value: "Automobile Engineering",
    label: "Automobile Engineering",
  },
  {
    value: "Petroleum Engineering",
    label: "Petroleum Engineering",
  },
  {
    value: "Environmental Engineering",
    label: "Environmental Engineering",
  },
]

const Option = (props) => {
  return (
    <div className="option">
      <components.Option {...props}>
        {" "}
        <label className="skills-name">{props.label}</label>
      </components.Option>
    </div>
  )
}

class FieldCheckbox extends Component {
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
    this.props.handleLocation(selected)
  }

  render() {
    return (
      <Form.Group controlId="formRoomType" className="mb-3 mt-2">
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

export default FieldCheckbox

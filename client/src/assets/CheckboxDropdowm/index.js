import React, { Component } from "react"
import { default as ReactSelect } from "react-select"
import "./index.css"
import { components } from "react-select"
import { Form } from "react-bootstrap"

import skills from "./data"

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
    this.props.handleSkills !== undefined && this.props.handleSkills(selected)
  }

  render() {
    return (
      <Form.Group controlId="formRoomType" className="mb-3">
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

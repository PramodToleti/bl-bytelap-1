import React, { Component } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"
import { Form } from "react-bootstrap"

const skills = [
  { value: "Commision pay", label: "Commision pay" },
  { value: "Over time pay", label: "Over time pay" },
  { value: "Shift allowance", label: "Shift allowance" },
  { value: "Performane pay", label: "Performane pay" },
  { value: "Quaterly bonus", label: "Quaterly bonus" },
  { value: "Yearly bonus", label: "Yearly bonus" },
  { value: "Joining bonus", label: "Joining bonus" },
  { value: "Other", label: "Other" },
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

class SupplementaryDropdown extends Component {
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
    this.props.handleSupplementary(selected)
  }

  render() {
    return (
      <Form.Group controlId="formRoomType" className="mb-3 mt-2">
        <Form.Label>
          Do you offer any of the following suppliment pay ?
        </Form.Label>
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

export default SupplementaryDropdown

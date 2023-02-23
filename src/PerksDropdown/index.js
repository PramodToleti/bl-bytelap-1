import React, { Component } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"
import { Form } from "react-bootstrap"

const skills = [
  { value: "Life insurance", label: "Life insurance" },
  { value: "Paid sick time", label: "Paid sick time" },
  { value: "Paid sick off", label: "Paid sick off" },
  { value: "Cell phone reimbursment", label: "Cell phone reimbursment" },
  { value: "Commutator assistance", label: "Commutator assistance" },
  { value: "Flexible Schedule", label: "Flexible Schedule" },
  { value: "Provident fund", label: "Provident fund" },
  { value: "Joining bonus", label: "Joining bonus" },
  { value: "Food allowance", label: "Food allowance" },
  { value: "Health insurance", label: "Health insurance" },
  { value: "Leave", label: "Leave" },
  { value: "Internet reimbursement", label: "Internet reimbursement" },
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

class PerksDropdown extends Component {
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
    this.props.handlePerks(selected)
  }

  render() {
    return (
      <Form.Group controlId="formRoomType" className="mb-3 mt-2">
        <Form.Label>Perks</Form.Label>
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

export default PerksDropdown

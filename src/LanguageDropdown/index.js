import React, { Component } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"
import { Form } from "react-bootstrap"

const skills = [
  { value: "English", label: "English" },
  { value: "Telugu", label: "Telugu" },
  { value: "Hindi", label: "Hindi" },
  { value: "Tamil", label: "Tamil" },
  { value: "Russian", label: "Russian" },
  { value: "Turkish", label: "Turkish" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "Germany", label: "Germany" },
  { value: "Chinese", label: "Chinese" },
  { value: "Italic", label: "Italic" },
  { value: "Arabic", label: "Arabic" },
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

class LanguageDropdown extends Component {
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
      <Form.Group controlId="formRoomType" className="mb-3 mt-2">
        <Form.Label>Language's</Form.Label>
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

export default LanguageDropdown

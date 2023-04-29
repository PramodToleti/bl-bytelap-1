import React, { Component, createRef } from "react"
import { default as ReactSelect } from "react-select"
import "./index.css"
import { components } from "react-select"
import { Form } from "react-bootstrap"

import skills from "./data"

const Option = (props) => {
  return (
    <div className="option">
      <components.Option {...props}>
        <label className="skills-name">{props.label}</label>
      </components.Option>
    </div>
  )
}

const LoadMoreOption = (props) => {
  return (
    <div
      className="option load-more p-2 m-2"
      style={{ borderTop: "1px solid #ccc", cursor: "pointer" }}
      onClick={props.onLoadMore}
    >
      Display More...
    </div>
  )
}

class CheckboxDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionSelected: null,
      optionsToShow: 50,
      filteredOptions: [],
    }
    this.menuListRef = createRef()
  }

  componentDidMount() {
    this.setState({
      filteredOptions: skills,
    })
  }

  handleLoadMore = () => {
    this.setState(
      {
        optionsToShow: this.state.optionsToShow + 50,
      },
      () => {
        if (this.menuListRef.current) {
          this.menuListRef.current.scrollTop =
            this.menuListRef.current.scrollHeight -
            this.menuListRef.current.clientHeight
        }
      }
    )
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected,
    })
    this.props.handleSkills !== undefined && this.props.handleSkills(selected)
  }

  handleInputChange = (inputValue) => {
    const filteredOptions = skills.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    )
    this.setState({
      filteredOptions,
    })
  }

  render() {
    const { optionsToShow, filteredOptions } = this.state
    const options = filteredOptions.slice(0, optionsToShow)
    const hasMoreOptions = filteredOptions.length > optionsToShow

    return (
      <Form.Group controlId="formRoomType" className="mb-3">
        <span
          className="input-field"
          data-toggle="popover"
          data-trigger="focus"
          data-content="Please select account(s)"
        >
          <ReactSelect
            options={options}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
              Option,
              MenuList: (props) => {
                return (
                  <components.MenuList {...props} innerRef={this.menuListRef}>
                    {props.children}
                    {hasMoreOptions && (
                      <LoadMoreOption onLoadMore={this.handleLoadMore} />
                    )}
                  </components.MenuList>
                )
              },
              DropdownIndicator: () => null, // hide the dropdown indicator
            }}
            onChange={this.handleChange}
            allowSelectAll={true}
            onInputChange={this.handleInputChange}
            value={this.state.optionSelected}
          />
        </span>
      </Form.Group>
    )
  }
}

export default CheckboxDropdown

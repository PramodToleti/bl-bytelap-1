import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import "./index.css"
import options from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const JobSearchField = (props) => {
  const { handleSearch } = props
  const [selected, setSelected] = useState([])

  const onChangeTitle = (e) => {
    setSelected(e)
    e[0] !== undefined && handleSearch(e[0].label)
  }

  const onInputChange = (inputValue) => {
    if (!inputValue) {
      setSelected([])
      handleSearch("")
    }
  }

  return (
    <Typeahead
      id="basic-example"
      options={options}
      placeholder="Job Profile"
      selected={selected}
      onChange={onChangeTitle}
      value={selected}
      onInputChange={onInputChange}
      className="typeahead-field"
    />
  )
}

export default JobSearchField

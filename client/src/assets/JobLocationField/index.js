import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import options from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const JobLocationField = (props) => {
  const { handleLocation } = props
  const [selected, setSelected] = useState([])

  const onChangeTitle = (e) => {
    setSelected(e)
    e[0] !== undefined &&
      handleLocation !== undefined &&
      handleLocation(e[0].city)
  }

  const onInputChange = (inputValue) => {
    if (!inputValue) {
      setSelected([])
      handleLocation("")
    }
  }

  return (
    <Typeahead
      id="basic-example"
      options={options}
      placeholder="Location"
      selected={selected}
      onChange={onChangeTitle}
      value={selected}
      onInputChange={onInputChange}
    />
  )
}

export default JobLocationField

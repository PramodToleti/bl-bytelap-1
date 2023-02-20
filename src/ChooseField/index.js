import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import options from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const ChooseField = (props) => {
  const { onChangeField } = props
  const [selected, setSelected] = useState([])

  const onChangeUserField = (e) => {
    setSelected(e)
    onChangeField(e)
  }

  return (
    <Typeahead
      id="basic-example"
      onChange={onChangeUserField}
      options={options}
      placeholder="Field"
      selected={selected}
    />
  )
}

export default ChooseField

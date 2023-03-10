import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import options from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const ChooseJobTitle = (props) => {
  const { handleTitle } = props
  const [selected, setSelected] = useState([])

  const onChangeTitle = (e) => {
    handleTitle(e[0].label)
    setSelected(e)
  }

  return (
    <Typeahead
      id="basic-example"
      options={options}
      placeholder="Software developer , Digital marketing"
      selected={selected}
      onChange={onChangeTitle}
      value={props.value}
    />
  )
}

export default ChooseJobTitle

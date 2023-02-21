import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import options from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const ChooseCity = (props) => {
  const { onChangeCity } = props
  const [selected, setSelected] = useState([])

  const onChangeUserCity = (e) => {
    setSelected(e)
    onChangeCity(e)
  }

  return (
    <Typeahead
      id="basic-example"
      onChange={onChangeUserCity}
      options={options}
      placeholder="Location"
      selected={selected}
    />
  )
}

export default ChooseCity

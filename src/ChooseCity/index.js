import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import options from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const ChooseCity = () => {
  const [selected, setSelected] = useState([])

  return (
    <Typeahead
      id="basic-example"
      onChange={setSelected}
      options={options}
      placeholder="Choose a state..."
      selected={selected}
    />
  )
}

export default ChooseCity

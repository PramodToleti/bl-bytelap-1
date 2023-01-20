import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import options from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const ChooseJobTitle = () => {
  const [selected, setSelected] = useState([])

  return (
    <Typeahead
      id="basic-example"
      onChange={setSelected}
      options={options}
      placeholder="Software developer , Digital marketing"
      selected={selected}
    />
  )
}

export default ChooseJobTitle

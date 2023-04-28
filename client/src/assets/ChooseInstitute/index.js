import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import data from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const ChooseInstitute = (props) => {
  const { onChangeInstitute } = props
  const [selected, setSelected] = useState([])
  const [options, setOptions] = useState(data)

  const onChangeTitle = (e) => {
    e[0] !== undefined && onChangeInstitute(e[0].label)
    setSelected(e)
  }

  const onInputChange = (inputValue) => {
    if (inputValue && !options.some((option) => option.label === inputValue)) {
      const newOption = { label: inputValue }

      setOptions([...options, newOption])

      setSelected([newOption])

      onChangeInstitute(inputValue)
    } else {
      setSelected([])
    }

    if (
      inputValue === "" ||
      options.some((option) => option.label === inputValue)
    ) {
      // Cleanup: remove the entered value from options array
      const cleanedOptions = options.filter(
        (option) => option.label !== inputValue
      )
      setOptions(cleanedOptions)
    }
  }

  return (
    <Typeahead
      id="basic-example"
      options={options}
      placeholder="Institute"
      selected={selected}
      onChange={onChangeTitle}
      value={props.value}
      onInputChange={onInputChange}
    />
  )
}

export default ChooseInstitute

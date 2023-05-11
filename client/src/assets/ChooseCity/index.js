import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import data from "./data"

import "react-bootstrap-typeahead/css/Typeahead.css"

const ChooseCity = (props) => {
  const { onChangeCity } = props
  const [selected, setSelected] = useState([props.value || ""])
  const [options, setOptions] = useState(data)

  const onChangeTitle = (e) => {
    e[0] !== undefined && onChangeCity(e[0].label)
    setSelected(e)
  }

  const onInputChange = (inputValue) => {
    if (inputValue && !options.some((option) => option.label === inputValue)) {
      // Create a new option object with the entered value as label
      const newOption = { label: inputValue }

      // Add the new option to the options array
      setOptions([...options, newOption])

      // Set the selected state to the new option
      setSelected([newOption])

      // Call the handleTitle function with the entered value
      onChangeCity(inputValue)
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
      placeholder="City"
      selected={selected}
      onChange={onChangeTitle}
      value={selected}
      onInputChange={onInputChange}
    />
  )
}

export default ChooseCity

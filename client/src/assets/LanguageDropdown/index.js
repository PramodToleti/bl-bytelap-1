import React, { Component } from "react"
import { default as ReactSelect } from "react-select"
import { components } from "react-select"
import { Form } from "react-bootstrap"

const skills = [
  { value: "english-beginner", label: "English (Beginner)" },
  { value: "english-intermediate", label: "English (Intermediate)" },
  { value: "english-fluent", label: "English (Fluent)" },
  { value: "english-native", label: "English (Native)" },
  { value: "telugu-beginner", label: "Telugu (Beginner)" },
  { value: "telugu-intermediate", label: "Telugu (Intermediate)" },
  { value: "telugu-fluent", label: "Telugu (Fluent)" },
  { value: "telugu-native", label: "Telugu (Native)" },
  { value: "hindi-beginner", label: "Hindi (Beginner)" },
  { value: "hindi-intermediate", label: "Hindi (Intermediate)" },
  { value: "hindi-fluent", label: "Hindi (Fluent)" },
  { value: "hindi-native", label: "Hindi (Native)" },
  { value: "tamil-beginner", label: "Tamil (Beginner)" },
  { value: "tamil-intermediate", label: "Tamil (Intermediate)" },
  { value: "tamil-fluent", label: "Tamil (Fluent)" },
  { value: "tamil-native", label: "Tamil (Native)" },
  { value: "russian-beginner", label: "Russian (Beginner)" },
  { value: "russian-intermediate", label: "Russian (Intermediate)" },
  { value: "russian-fluent", label: "Russian (Fluent)" },
  { value: "russian-native", label: "Russian (Native)" },
  { value: "turkish-beginner", label: "Turkish (Beginner)" },
  { value: "turkish-intermediate", label: "Turkish (Intermediate)" },
  { value: "turkish-fluent", label: "Turkish (Fluent)" },
  { value: "turkish-native", label: "Turkish (Native)" },
  { value: "spanish-beginner", label: "Spanish (Beginner)" },
  { value: "spanish-intermediate", label: "Spanish (Intermediate)" },
  { value: "spanish-fluent", label: "Spanish (Fluent)" },
  { value: "spanish-native", label: "Spanish (Native)" },
  { value: "french-beginner", label: "French (Beginner)" },
  { value: "french-intermediate", label: "French (Intermediate)" },
  { value: "french-fluent", label: "French (Fluent)" },
  { value: "french-native", label: "French (Native)" },
  { value: "german-beginner", label: "German (Beginner)" },
  { value: "german-intermediate", label: "German (Intermediate)" },
  { value: "german-fluent", label: "German (Fluent)" },
  { value: "german-native", label: "German (Native)" },
  { value: "chinese-beginner", label: "Chinese (Beginner)" },
  { value: "chinese-intermediate", label: "Chinese (Intermediate)" },
  { value: "chinese-fluent", label: "Chinese (Fluent)" },
  { value: "chinese-native", label: "Chinese (Native)" },
]

const Option = (props) => {
  const labelParts = props.label.split("-")
  const language = labelParts[0]
  const proficiency = labelParts[1]

  return (
    <div className="option">
      <components.Option {...props}>
        <div className="skills-name">
          <div className="language">{language}</div>
          <div className="proficiency">{proficiency}</div>
        </div>
      </components.Option>
    </div>
  )
}

class LanguageDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionSelected: null,
      filteredSkills: skills,
    }
  }

  handleChange = (selected) => {
    const selectedLanguages = selected.map((option) => {
      const labelParts = option.value.split("-")
      const language = labelParts[0]
      const proficiency = labelParts[1]
      return { language, proficiency }
    })

    const languages = selectedLanguages.map((option) => option.language)

    const filteredLanguages = skills.filter(
      (skill) => !languages.includes(skill.value.split("-")[0])
    )

    this.setState({
      optionSelected: selected,
      selectedLanguages: selectedLanguages,
      filteredSkills: filteredLanguages,
    })

    this.props.handleLanguages(selectedLanguages)
  }

  handleRemove = (removedOption) => {
    const selected = this.state.optionSelected.filter(
      (option) => option.value !== removedOption.value
    )

    const selectedLanguages = selected.map((option) => {
      const labelParts = option.label.split("-")
      const language = labelParts[0]
      const proficiency = labelParts[1]
      return { language, proficiency }
    })

    const filteredSkills = skills.filter(
      (skill) =>
        !selectedLanguages.some(
          (selectedLanguage) =>
            selectedLanguage.language === skill.label.split(" ")[0]
        ) || selected.some((option) => option.label === skill.label)
    )

    this.setState({
      optionSelected: selected,
      selectedLanguages: selectedLanguages,
      filteredSkills: filteredSkills,
    })

    this.props.handleLanguages(selectedLanguages)
  }

  render() {
    return (
      <Form.Group controlId="formRoomType" className="mb-3 mt-2">
        <Form.Label>
          Languages <span style={{ color: "red" }}>*</span>
        </Form.Label>
        <span
          className="input-field"
          data-toggle="popover"
          data-trigger="focus"
          data-content="Please select account(s)"
        >
          <ReactSelect
            options={this.state.filteredSkills}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
              Option,
            }}
            onChange={this.handleChange}
            allowSelectAll={true}
            value={this.state.optionSelected}
            onRemove={this.handleRemove}
          />
        </span>
      </Form.Group>
    )
  }
}

export default LanguageDropdown

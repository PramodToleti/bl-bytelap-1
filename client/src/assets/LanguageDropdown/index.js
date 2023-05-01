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

  { value: "Marathi-beginner", label: "Marathi (Beginner)" },
  { value: "Marathi-intermediate", label: "Marathi (Intermediate)" },
  { value: "Marathi-fluent", label: "Marathi (Fluent)" },
  { value: "Marathi-native", label: "Marathi (Native)" },

  { value: "Bengali-beginner", label: "Bengali (Beginner)" },
  { value: "Bengali-intermediate", label: "Bengali (Intermediate)" },
  { value: "Bengali-fluent", label: "Bengali (Fluent)" },
  { value: "Bengali-native", label: "Bengali (Native)" },

  { value: "Urdu-beginner", label: "Urdu (Beginner)" },
  { value: "Urdu-intermediate", label: "Urdu (Intermediate)" },
  { value: "Urdu-fluent", label: "Urdu (Fluent)" },
  { value: "Urdu-native", label: "Urdu (Native)" },

  { value: "Gujarati-beginner", label: "Gujarati (Beginner)" },
  { value: "Gujarati-intermediate", label: "Gujarati (Intermediate)" },
  { value: "Gujarati-fluent", label: "Gujarati (Fluent)" },
  { value: "Gujarati-native", label: "Gujarati (Native)" },

  { value: "Kannada-beginner", label: "Kannada (Beginner)" },
  { value: "Kannada-intermediate", label: "Kannada (Intermediate)" },
  { value: "Kannada-fluent", label: "Kannada (Fluent)" },
  { value: "Kannada-native", label: "Kannada (Native)" },

  { value: "Oriya-beginner", label: "Oriya (Beginner)" },
  { value: "Oriya-intermediate", label: "Oriya (Intermediate)" },
  { value: "Oriya-fluent", label: "Oriya (Fluent)" },
  { value: "Oriya-native", label: "Oriya (Native)" },

  { value: "Punjabi-beginner", label: "Punjabi (Beginner)" },
  { value: "Punjabi-intermediate", label: "Punjabi (Intermediate)" },
  { value: "Punjabi-fluent", label: "Punjabi (Fluent)" },
  { value: "Punjabi-native", label: "Punjabi (Native)" },

  { value: "Malayalam-beginner", label: "Malayalam (Beginner)" },
  { value: "Malayalam-intermediate", label: "Malayalam (Intermediate)" },
  { value: "Malayalam-fluent", label: "Malayalam (Fluent)" },
  { value: "Malayalam-native", label: "Malayalam (Native)" },

  { value: "Assamese-beginner", label: "Assamese (Beginner)" },
  { value: "Assamese-intermediate", label: "Assamese (Intermediate)" },
  { value: "Assamese-fluent", label: "Assamese (Fluent)" },
  { value: "Assamese-native", label: "Assamese (Native)" },

  { value: "Kashmiri-beginner", label: "Kashmiri (Beginner)" },
  { value: "Kashmiri-intermediate", label: "Kashmiri (Intermediate)" },
  { value: "Kashmiri-fluent", label: "Kashmiri (Fluent)" },
  { value: "Kashmiri-native", label: "Kashmiri (Native)" },

  { value: "Sindhi-beginner", label: "Sindhi (Beginner)" },
  { value: "Sindhi-intermediate", label: "Sindhi (Intermediate)" },
  { value: "Sindhi-fluent", label: "Sindhi (Fluent)" },
  { value: "Sindhi-native", label: "Sindhi (Native)" },

  { value: "Sanskrit-beginner", label: "Sanskrit (Beginner)" },
  { value: "Sanskrit-intermediate", label: "Sanskrit (Intermediate)" },
  { value: "Sanskrit-fluent", label: "Sanskrit (Fluent)" },
  { value: "Sanskrit-native", label: "Sanskrit (Native)" },

  { value: "Konkani-beginner", label: "Konkani (Beginner)" },
  { value: "Konkani-intermediate", label: "Konkani (Intermediate)" },
  { value: "Konkani-fluent", label: "Konkani (Fluent)" },
  { value: "Konkani-native", label: "Konkani (Native)" },

  { value: "Manipuri-beginner", label: "Manipuri (Beginner)" },
  { value: "Manipuri-intermediate", label: "Manipuri (Intermediate)" },
  { value: "Manipuri-fluent", label: "Manipuri (Fluent)" },
  { value: "Manipuri-native", label: "Manipuri (Native)" },

  { value: "Nepali-beginner", label: "Nepali (Beginner)" },
  { value: "Nepali-intermediate", label: "Nepali (Intermediate)" },
  { value: "Nepali-fluent", label: "Nepali (Fluent)" },
  { value: "Nepali-native", label: "Nepali (Native)" },

  { value: "Bodo-beginner", label: "Bodo (Beginner)" },
  { value: "Bodo-intermediate", label: "Bodo (Intermediate)" },
  { value: "Bodo-fluent", label: "Bodo (Fluent)" },
  { value: "Bodo-native", label: "Bodo (Native)" },

  { value: "Santhali-beginner", label: "Santhali (Beginner)" },
  { value: "Santhali-intermediate", label: "Santhali (Intermediate)" },
  { value: "Santhali-fluent", label: "Santhali (Fluent)" },
  { value: "Santhali-native", label: "Santhali (Native)" },

  { value: "Maithili-beginner", label: "Maithili (Beginner)" },
  { value: "Maithili-intermediate", label: "Maithili (Intermediate)" },
  { value: "Maithili-fluent", label: "Maithili (Fluent)" },
  { value: "Maithili-native", label: "Maithili (Native)" },

  { value: "Dogri-beginner", label: "Dogri (Beginner)" },
  { value: "Dogri-intermediate", label: "Dogri (Intermediate)" },
  { value: "Dogri-fluent", label: "Dogri (Fluent)" },
  { value: "Dogri-native", label: "Dogri (Native)" },

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
            closeMenuOnSelect={true}
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

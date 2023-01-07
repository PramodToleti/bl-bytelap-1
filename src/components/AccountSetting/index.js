import { Component } from "react"
import Form from "react-bootstrap/Form"
import NavDropdown from "react-bootstrap/NavDropdown"

import HomeHeader from "../HomeHeader"
import Internship1 from "../../register_myself/internship/Internship1"
import Internship2 from "../../register_myself/internship/Internship2"
import Internship3 from "../../register_myself/internship/Internship3"
import Fresher1 from "../../register_myself/fresher/Fresher1"
import Fresher2 from "../../register_myself/fresher/Fresher2"
import Fresher3 from "../../register_myself/fresher/Fresher3"
import Experience1 from "../../register_myself/experience/Experience1"
import Experience2 from "../../register_myself/experience/Experience2"
import Experience3 from "../../register_myself/experience/Experience3"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

const settingsHeaders = [
  {
    id: "MY_INFO",
    displayText: "My Info",
  },
  {
    id: "GRADUATION",
    displayText: "Graduation",
  },
  {
    id: "REGISTER_MYSELF",
    displayText: "Register Myself",
  },
]

class AccountSetting extends Component {
  state = {
    activeSetting: settingsHeaders[2].id,
    activeRegister: "Internship",
    showStep1: true,
    showStep2: false,
    showStep3: false,
  }

  updateStep2 = () => {
    this.setState({ showStep2: true, showStep1: false, showStep3: false })
  }

  updateStep3 = () => {
    this.setState({ showStep3: true, showStep1: false, showStep2: false })
  }

  renderInfo = () => (
    <div className="update-form-container">
      <h1 className="info-heading">My Info</h1>
      <Form className="register-form" onSubmit={this.onSubmitForm}>
        <Form.Group className="mb-3 input-field" controlId="formGroupText">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3 input-field" controlId="formGroupText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3 input-field" controlId="formGroupEmail">
          <Form.Label>Email ID</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3 input-field" controlId="formGroupText">
          <Form.Label>Mobile number</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3 input-field" controlId="formGroupText">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <div className="upload-file-container">
          <p className="resume-text">Nileshresume.pdf</p>
          <p> or </p>
          <button className="upload-file-text">Create New</button>
        </div>
        <button className="upload-file-text change-text">Change</button>
        <button className="next-button" type="submit">
          Update
        </button>
      </Form>
    </div>
  )

  renderGraduation = () => (
    <div className="update-form-container">
      <h1 className="info-heading">Graduation</h1>
      <Form className="register-form" onSubmit={this.onSubmitForm}>
        <Form.Group className="mb-3 input-field" controlId="formGridState">
          <Form.Label>Degree</Form.Label>
          <Form.Select defaultValue="Select">
            <option>Master's</option>
            <option>Bachelor's</option>
            <option>Diploma</option>
            <option>Higher Secondary (12th)</option>
            <option>Secondary (10th)</option>
            <option>Doctorate</option>
            <option>other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 input-field" controlId="formGroupText">
          <Form.Label>Field of Study</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 input-field" controlId="formGroupText">
          <Form.Label>College/University</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 input-field" controlId="formGroupText">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <p className="from-to-heading">From</p>
        <div className="from-to-container">
          <Form.Group className="mb-3 select-option" controlId="formGridState">
            <Form.Select defaultValue="Year">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
                <option>{2000 + i}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3 mr-3 select-option"
            controlId="formGridState"
          >
            <Form.Select defaultValue="Month">
              {[
                "Jan",
                "February",
                "March",
                "April",
                "May",
                "June",
                "August",
                "September",
                "October",
                "Novermber",
                "December",
              ].map((i) => (
                <option>{i}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>

        <p className="from-to-heading">To</p>
        <div className="from-to-container">
          <Form.Group className="mb-3 select-option" controlId="formGridState">
            <Form.Select defaultValue="Year">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
                <option>{2000 + i}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 select-option" controlId="formGridState">
            <Form.Select defaultValue="Month">
              {[
                "Jan",
                "February",
                "March",
                "April",
                "May",
                "June",
                "August",
                "September",
                "October",
                "Novermber",
                "December",
              ].map((i) => (
                <option>{i}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>
        <div className="check-box-container">
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="I'm Currently go here" />
          </Form.Group>
        </div>
        <button className="create-button">Update</button>
      </Form>
    </div>
  )

  renderRegisterDropDown = () => {
    const { activeRegister } = this.state
    return ["sm"].map((expand) => (
      <NavDropdown
        title={activeRegister}
        id={`offcanvasNavbarDropdown-expand-${expand}`}
        className="fs-5"
      >
        <NavDropdown.Item
          onClick={() => this.setState({ activeRegister: "Internship" })}
        >
          Internship
        </NavDropdown.Item>
        <NavDropdown.Item
          onClick={() => this.setState({ activeRegister: "Fresher" })}
        >
          Fresher
        </NavDropdown.Item>
        <NavDropdown.Item
          onClick={() => this.setState({ activeRegister: "Experience" })}
        >
          Experince
        </NavDropdown.Item>
      </NavDropdown>
    ))
  }

  renderRegisterForm = () => {
    const { activeRegister, showStep1, showStep2, showStep3 } = this.state
    switch (activeRegister) {
      case "Internship":
        if (showStep1)
          return (
            <>
              {this.renderRegisterDropDown()}
              <Internship1 updateStep2={this.updateStep2} />
            </>
          )
        if (showStep2) return <Internship2 updateStep3={this.updateStep3} />
        if (showStep3) return <Internship3 />
      case "Fresher":
        if (showStep1)
          return (
            <>
              {this.renderRegisterDropDown()}
              <Fresher1 updateStep2={this.updateStep2} />
            </>
          )
        if (showStep2) return <Fresher2 updateStep3={this.updateStep3} />
        if (showStep3) return <Fresher3 />
      case "Experience":
        if (showStep1)
          return (
            <>
              {this.renderRegisterDropDown()}
              <Experience1 updateStep2={this.updateStep2} />
            </>
          )
        if (showStep2) return <Experience2 updateStep3={this.updateStep3} />
        if (showStep3) return <Experience3 />
      default:
        return null
    }
  }

  renderRegister = () => (
    <div className="register-self-container">{this.renderRegisterForm()}</div>
  )

  renderSettingDetails = () => {
    const { activeSetting } = this.state
    switch (activeSetting) {
      case "MY_INFO":
        return this.renderInfo()
      case "GRADUATION":
        return this.renderGraduation()
      case "REGISTER_MYSELF":
        return this.renderRegister()
      default:
        return null
    }
  }

  navigateToRegister = () => {
    console.log("trigger")
    this.setState({ activeSetting: "REGISTER_MYSELF" })
  }

  render() {
    return (
      <>
        <HomeHeader navigateToRegister={this.navigateToRegister} />
        <div className="account-settings-container">
          <div className="setting-container">
            <ul className="settings-header">
              {settingsHeaders.map((each) => (
                <li
                  key={each.id}
                  className="setting-btn"
                  onClick={() => this.setState({ activeSetting: each.id })}
                >
                  {each.displayText}
                </li>
              ))}
            </ul>
            <div className="update-container">
              {this.renderSettingDetails()}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AccountSetting

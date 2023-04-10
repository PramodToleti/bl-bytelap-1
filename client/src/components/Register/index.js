import { Component } from "react"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"

import "./index.css"

class Register extends Component {
  state = { isNextClicked: false }

  onSubmitForm = (e) => {
    e.preventDefault()
    this.setState({
      isNextClicked: true,
    })
  }

  renderCreateAccount = () => (
    <>
      <h1 className="create-account-heading">Create Account</h1>
      <p className="step-text">Step 1-2</p>
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
          <button className="upload-file-text">Upload Resume</button>
          <p> or </p>
          <button className="upload-file-text">Create New</button>
        </div>
        <button className="next-button" type="submit">
          Next
        </button>
      </Form>
    </>
  )

  renderGraduation = () => (
    <>
      <h1 className="graduation-heading">Graduation</h1>
      <p className="step-text">Step 2-2</p>
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
        <Link to="/home">
          <button className="create-button">Create</button>
        </Link>
      </Form>
      <button
        className="back-btn"
        onClick={() => this.setState({ isNextClicked: false })}
      >
        Back
      </button>
    </>
  )

  render() {
    const { isNextClicked } = this.state
    return (
      <div className="register-container">
        <div className="register-body">
          {isNextClicked ? this.renderGraduation() : this.renderCreateAccount()}
          {isNextClicked ? null : (
            <Link to="/login" className="back-btn">
              <button className="back-btn">Back</button>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default Register

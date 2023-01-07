import { Component } from "react"

import { Link } from "react-router-dom"

import Form from "react-bootstrap/Form"

import "./index.css"

class Login extends Component {
  state = {
    isCandidateActive: true,
    radio1Checked: true,
    radio2Checked: false,
    email: "",
    number: "",
    showEmailErr: false,
    showPassErr: false,
    isEmployeeLoginActive: true,
    isRegisterClicked: false,
  }

  //Candidate or Employee
  onClickOption = () => {
    this.setState((prevState) => ({
      isCandidateActive: !prevState.isCandidateActive,
      showEmailErr: false,
      showPassErr: false,
    }))
  }

  handleRadio1 = () => {
    this.setState({
      radio1Checked: true,
      radio2Checked: false,
    })
  }

  handleRadio2 = () => {
    this.setState({
      radio1Checked: false,
      radio2Checked: true,
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    const { email, number } = this.state
    if (email === "" && number === "") {
      this.setState({
        showEmailErr: true,
        showPassErr: true,
      })
    } else if (email === "" && number !== "") {
      this.setState({
        showEmailErr: true,
      })
    } else if (email !== "" && number === "") {
      this.setState({
        showPassErr: true,
      })
    } else {
      this.setState({
        showEmailErr: false,
        showPassErr: false,
      })
    }
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  onChangePassword = (event) => {
    this.setState({
      number: event.target.value,
    })
  }

  onBlurEmail = (event) => {
    if (event.target.value === "") {
      this.setState({
        showEmailErr: true,
      })
    } else {
      this.setState({
        showEmailErr: false,
      })
    }
  }

  onBlurPassword = (event) => {
    if (event.target.value === "") {
      this.setState({
        showPassErr: true,
      })
    } else {
      this.setState({
        showPassErr: false,
      })
    }
  }

  //Candidate Login Form
  renderCandidate = () => {
    const { showEmailErr, showPassErr } = this.state
    return (
      <>
        <Form className="input-container" onSubmit={this.onSubmitForm}>
          <Form.Group className="mb-3 input-field" controlId="formGroupEmail">
            <Form.Control
              type="email"
              placeholder="Email id / Number"
              onBlur={this.onBlurEmail}
              onChange={this.onChangeEmail}
            />
            {showEmailErr && <p className="error-msg"> *required</p>}
          </Form.Group>
          <Form.Group
            className="mb-3 input-field"
            controlId="formGroupPassword"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={this.onBlurPassword}
              onChange={this.onChangePassword}
            />
            {showPassErr && <p className="error-msg">*required </p>}
          </Form.Group>
          <Link to="/home">
            <button className="login-btn" type="submit">
              Login
            </button>
          </Link>
        </Form>
        <p className="forgot-text">Forgot Password?</p>
        <p className="accounnt-register-text">
          Don't have an account?
          <Link to="/register">
            <button
              className="register-text"
              /*onClick={() => (prevState) => ({
              isRegisterClicked: !prevState.isRegisterClicked,
            })}*/
            >
              Register
            </button>
          </Link>
        </p>
      </>
    )
  }

  //Employee Login Form
  renderEmployee = () => {
    const { isEmployeeLoginActive } = this.state
    const activeLogin = isEmployeeLoginActive
      ? "active-login"
      : "inactive-login"
    const activeSales = isEmployeeLoginActive
      ? "inactive-login"
      : "active-login"
    return (
      <>
        <div className="employee-login-container">
          <button
            className={`employee-login-btn ${activeLogin}`}
            onClick={() =>
              this.setState((prevState) => ({
                isEmployeeLoginActive: !prevState.isEmployeeLoginActive,
              }))
            }
          >
            Login
          </button>
          <button
            className={`employee-login-btn ${activeSales}`}
            onClick={() =>
              this.setState((prevState) => ({
                isEmployeeLoginActive: !prevState.isEmployeeLoginActive,
              }))
            }
          >
            Sales/Enquiry
          </button>
        </div>
        {isEmployeeLoginActive
          ? this.renderEmployeeLogin()
          : this.renderEmployeeSales()}
      </>
    )
  }

  //Employee login
  renderEmployeeLogin = () => {
    const { showEmailErr, showPassErr } = this.state
    return (
      <>
        <Form className="input-container" onSubmit={this.onSubmitForm}>
          <Form.Group className="mb-3 input-field" controlId="formGroupEmail">
            <Form.Control
              type="email"
              placeholder="Registered Email ID"
              onBlur={this.onBlurEmail}
              onChange={this.onChangeEmail}
            />
            {showEmailErr && <p className="error-msg"> *required</p>}
          </Form.Group>
          <Form.Group
            className="mb-3 input-field"
            controlId="formGroupPassword"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={this.onBlurPassword}
              onChange={this.onChangePassword}
            />
            {showPassErr && <p className="error-msg">*required </p>}
          </Form.Group>
          <Link to="/home">
            <button className="login-btn" type="submit">
              Login
            </button>
          </Link>
        </Form>
        <p className="forgot-text">Forgot Password?</p>
        <p className="accounnt-register-text">
          Don't have an account?
          <Link to="/register">
            <button className="register-text"> Register</button>
          </Link>
        </p>
      </>
    )
  }

  //Employee Sales
  renderEmployeeSales = () => (
    <Form
      className="sales-login-container"
      onSubmit={(e) => e.preventDefault()}
    >
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="text" placeholder="Contact Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="text" placeholder="Company Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="text" placeholder="Designation" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="email" placeholder="Email ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <button className="login-btn" type="submit">
        Get a call back
      </button>
    </Form>
  )

  render() {
    const { isCandidateActive, radio1Checked, radio2Checked } = this.state

    return (
      <div className="login-container">
        <div className="login-form">
          {/* Option Container */}
          <div className="select-form-container">
            <div className="select-option-container">
              <Form.Check
                type="radio"
                checked={radio1Checked}
                onChange={this.handleRadio1}
                onClick={this.onClickOption}
              />
              <h1 className="option-heading">Candidate</h1>
            </div>
            <div className="select-option-container">
              <Form.Check
                type="radio"
                checked={radio2Checked}
                onChange={this.handleRadio2}
                onClick={this.onClickOption}
              />

              <h1 className="option-heading">Employee</h1>
            </div>
          </div>
          {/* Input Container */}
          {isCandidateActive ? this.renderCandidate() : this.renderEmployee()}
        </div>
      </div>
    )
  }
}

export default Login

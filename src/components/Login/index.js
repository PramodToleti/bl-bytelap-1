import { Form } from "react-bootstrap"
import { useState } from "react"
import InputGroup from "react-bootstrap/InputGroup"
import Stack from "react-bootstrap/Stack"
import GoogleButton from "react-google-button"
import CandidateLogin from "../CandidateLogin"
import EmployeeLogin from "../EmployeeLogin"

import "./index.css"

function Login() {
  const [selectedValue, setSelectedValue] = useState("candidate")

  const renderCandidateLogin = () => <CandidateLogin />

  const renderEmployeeLogin = () => <EmployeeLogin />

  const renderLoginForm = () => {
    return selectedValue === "candidate"
      ? renderCandidateLogin()
      : renderEmployeeLogin()
  }

  return (
    <div className="login-container">
      <div className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2     border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <Form.Group className="mb-3 mt-2" controlId="formBasicText">
          <Stack direction="horizontal " gap={3}>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-4">
                <Form.Check
                  inline
                  label="For Candidate"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  value="candidate"
                  checked={selectedValue === "candidate"}
                  onChange={(e) => setSelectedValue(e.target.value)}
                />

                <Form.Check
                  className="ms-auto"
                  inline
                  label="For Employer"
                  name="group1"
                  value="employee"
                  type={type}
                  id={`inline-${type}-2`}
                  checked={selectedValue === "employee"}
                  onChange={(e) => setSelectedValue(e.target.value)}
                />
              </div>
            ))}
          </Stack>
        </Form.Group>
        {renderLoginForm()}
      </div>
    </div>
  )
}

export default Login

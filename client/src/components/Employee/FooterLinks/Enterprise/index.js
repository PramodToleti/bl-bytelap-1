import { Button, Form } from "react-bootstrap"
import { useLocation } from "react-router-dom"

import EmployeeFooter from "../../EmployeeFooter"
import UnregisteredNavBar from "../../UnregisteredNavBar"
import EmployeeHome from "../../../EmployeeHome"

const Enterprise = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered

  return (
    <>
      {isRegistered ? <EmployeeHome /> : <UnregisteredNavBar />}
      <div
        className="startup-container container mt-5 mb-3"
        style={{ fontFamily: "Roboto" }}
      >
        <div className="startup-sub-container">
          <h3 className="mb-3">Enterprise Hiring</h3>
          <p className="mb-1">
            Seamless Enterprise Hiring: Streamlining Large-Scale Recruitment for
            Maximum Efficiency and ROI.
          </p>
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1678895181/search-crowdfunder_tts9q8.png"
            className="startup-image"
          />
        </div>
        <div className="startup-form-container">
          <h5>Effortless Recruitment:</h5>
          <p className="mb-5">
            The Benefits of Registering with Us to Simplify your Enterprise
            Hiring Process.
          </p>
          <Form className="mt-4">
            <Form.Control
              type="text"
              placeholder="Name"
              className="mb-4"
              style={{ height: "40px" }}
            />

            <Form.Control
              type="number"
              placeholder="Mobile Number"
              className="mb-4"
              style={{ height: "40px" }}
            />

            <Form.Control
              type="text"
              placeholder="Company Name"
              className="mb-4"
              style={{ height: "40px" }}
            />

            <Form.Control
              type="email"
              placeholder="Official Email ID"
              className="mb-4"
              style={{ height: "40px" }}
            />

            <Form.Control
              type="text"
              placeholder="Designation"
              className="mb-4"
              style={{ height: "40px" }}
            />

            <Button variant="primary" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <EmployeeFooter isRegistered={isRegistered} />
    </>
  )
}

export default Enterprise

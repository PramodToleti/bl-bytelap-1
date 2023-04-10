import { Button, Form } from "react-bootstrap"
import { useLocation } from "react-router-dom"

import EmployeeFooter from "../../EmployeeFooter"
import UnregisteredNavBar from "../../UnregisteredNavBar"
import EmployeeHome from "../../../EmployeeHome"

import "./index.css"

const Startup = () => {
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
          <h3 className="mb-3">Startup Hiring</h3>
          <p className="mb-1">
            The Benefits of Direct Hiring: How Startups Can Save Time and Money
            While Building Their Dream Teams
          </p>
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1678894655/sales-team_1_wcucye.png"
            className="startup-image"
          />
        </div>
        <div className="startup-form-container">
          <h5>Transforming Your Hiring Experience:</h5>
          <p className="mb-5">
            The Benefits of Registering with Us to Find Your Next Hire with
            Ease.
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

export default Startup

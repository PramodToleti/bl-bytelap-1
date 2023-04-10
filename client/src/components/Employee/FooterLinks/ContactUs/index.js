import { Button, Form } from "react-bootstrap"
import { GoLocation } from "react-icons/go"
import { MdOutlineEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import { useLocation } from "react-router-dom"

import UnregisteredNavBar from "../../UnregisteredNavBar"
import EmployeeFooter from "../../EmployeeFooter"
import EmployeeHome from "../../../EmployeeHome"

const ContactUs = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered

  return (
    <>
      {isRegistered ? <EmployeeHome /> : <UnregisteredNavBar />}

      <div className="contact-us-container container mt-4 mb-3">
        <h3 className="mb-4">Contact Us</h3>
        <div className="contact-us">
          <Form className="contact-form-container">
            <Form.Control type="text" placeholder="Name" className="mb-4" />
            <Form.Control type="number" placeholder="Number" className="mb-4" />
            <Form.Control
              type="email"
              placeholder="Email ID"
              className="mb-4"
            />
            <Form.Control type="text" placeholder="Message" className="mb-4" />
            <Button variant="primary" className="mb-3">
              Send
            </Button>
          </Form>
          <div className="address-container">
            <div className="address-details-container">
              <MdOutlineEmail className="address-icons" />
            </div>
            <div className="address-details-container">
              <p className="mt-1">Support@gmail.com</p>
            </div>
            <div className="address-details-container">
              <GoLocation className="address-icons" />
            </div>
            <div className="address-details-container">
              <p>
                Indore, India 10,Sunshine Nalanda Seasons of Joy, Deuguradia
                452016 , Indore.
              </p>
            </div>

            <div className="address-details-container">
              <BsTelephone className="address-icons" />
            </div>
            <div className="address-details-container">
              <p className="mt-1">91-8888-8888-88</p>
            </div>
          </div>
        </div>
      </div>
      <EmployeeFooter isRegistered={isRegistered} />
    </>
  )
}

export default ContactUs

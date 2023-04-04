import { useLocation } from "react-router-dom"

import EmployeeFooter from "../../EmployeeFooter"
import UnregisteredNavBar from "../../UnregisteredNavBar"
import EmployeeHome from "../../../EmployeeHome"

const AboutUs = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered

  return (
    <>
      {isRegistered ? <EmployeeHome /> : <UnregisteredNavBar />}
      <h1 className="mt-3 mb-3">About us</h1>
      <EmployeeFooter />
    </>
  )
}

export default AboutUs

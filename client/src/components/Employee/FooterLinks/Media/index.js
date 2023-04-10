import { useLocation } from "react-router-dom"

import EmployeeFooter from "../../EmployeeFooter"
import UnregisteredNavBar from "../../UnregisteredNavBar"
import EmployeeHome from "../../../EmployeeHome"
import "./index.css"

const Media = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered
  console.log(isRegistered)

  return (
    <>
      {isRegistered ? <EmployeeHome /> : <UnregisteredNavBar />}
      <div className="container mt-4">
        <h3 className="mb-4">Recent</h3>
        <div className="main-image-container mb-3">
          <p>Image</p>
        </div>
        <p
          align="end"
          style={{ color: "blue", fontSize: "16px" }}
          className="mb-5"
        >
          Read More...
        </p>

        <div className="media-sub-images-container mb-5">
          <div className="media-sub-images">
            <p>Image</p>
          </div>
          <div className="media-sub-images">
            <p>Image</p>
          </div>
          <div className="media-sub-images">
            <p>Image</p>
          </div>
        </div>
      </div>
      <EmployeeFooter isRegistered={isRegistered} />
    </>
  )
}

export default Media

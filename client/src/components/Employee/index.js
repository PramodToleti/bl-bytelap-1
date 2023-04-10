import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import EmployeeHome from "../EmployeeHome"
import PostJob from "../PostJob"

const Employee = () => {
  return (
    <>
      <EmployeeHome />
      <PostJob />
    </>
  )
}

export default Employee

import { Route, Redirect } from "react-router-dom"
import Cookies from "js-cookie"

const EmployeeProtectedRoute = (props) => {
  const token = Cookies.get("employeeToken")
  if (!token) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default EmployeeProtectedRoute

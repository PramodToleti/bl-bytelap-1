import { BrowserRouter, Route, Switch } from "react-router-dom"
//Login
import LoginPage from "./components/LoginPage"
import CandidateLogin from "./components/CandidateLogin"
import EmployeeLogin from "./components/EmployeeLogin"
import EmployeeSalesLogin from "./components/EmployeeSalesLogin"
//Forgot Password
import CandidateForgotPassword from "./components/CandidateForgotPassword"
import EmployeeLForgotPassword from "./components/EmployeeForgotPassword"
import NewPassword from "./components/NewPassword"
//Create Account
import CandidateStep1 from "./components/CreateAccountCandidate/CandidateStep1"
import CandidateStep2 from "./components/CreateAccountCandidate/CandidateStep2"
import EmployeeStep1 from "./components/CreateAccountEmployee/EmployeeStep1"
import EmployeeStep2 from "./components/CreateAccountEmployee/EmployeeStep2"
//Home
import Home from "./components/Home"
import EmployeeHome from "./components/EmployeeHome"
import EmployeeDashboard from "./components/EmployeeDashboard"
import EmployeeSettings from "./components/EmployeeSettings"
//Settings
import Accountsetting from "./components/AccountSetting"
import SavedJobs from "./components/SavedJobs"
import RegisteredInfo from "./components/RegisteredInfo"
import RegisteredGraduation from "./components/RegisteredGraduation"
//Internship
import Internship2 from "./RegisterMyself/Internship/Internship2"
import Internship3 from "./RegisterMyself/Internship/Internship3"
//Fresher
import Fresher1 from "./RegisterMyself/Fresher/Fresher1"
import Fresher2 from "./RegisterMyself/Fresher/Fresher2"
import Fresher3 from "./RegisterMyself/Fresher/Fresher3"
//Experience
import Experience1 from "./RegisterMyself/Experience/Experience1"
import Experience2 from "./RegisterMyself/Experience/Experience2"
import Experience3 from "./RegisterMyself/Experience/Experience3"

import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Login Routes */}
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/login/candidate" component={CandidateLogin} />
          <Route exact path="/login/employee" component={EmployeeLogin} />
          <Route
            exact
            path="/login/employee/sales-enquiry"
            component={EmployeeSalesLogin}
          />
          {/* Create New Account Route */}
          <Route
            exact
            path="/candidate/create-account/step-1"
            component={CandidateStep1}
          />
          <Route
            exact
            path="/candidate/create-account/step-2"
            component={CandidateStep2}
          />
          <Route
            exact
            path="/employee/create-account/step-1"
            component={EmployeeStep1}
          />
          <Route
            exact
            path="/employee/create-account/step-2"
            component={EmployeeStep2}
          />
          {/* Forgot Password Routes */}
          <Route
            exact
            path="/candidate/forgot-password"
            component={CandidateForgotPassword}
          />
          <Route
            exact
            path="/employee/forgot-password"
            component={EmployeeLForgotPassword}
          />
          <Route exact path="/create-new-password" component={NewPassword} />

          {/* Home Route */}
          <Route exact path="/" component={Home} />
          <Route exact path="/employee" component={EmployeeHome} />
          <Route
            exact
            path="/employee/dashboard"
            component={EmployeeDashboard}
          />
          <Route
            exact
            path="/employee/account-setting"
            component={EmployeeSettings}
          />
          {/* Account Settings Routes */}
          <Route exact path="/saved-job" component={SavedJobs} />
          <Route
            exact
            path="/account-setting/internship-1"
            component={Accountsetting}
          />
          <Route
            exact
            path="/account-setting/my-info"
            component={RegisteredInfo}
          />
          <Route
            exact
            path="/account-setting/graduation"
            component={RegisteredGraduation}
          />

          <Route
            exact
            path="/account-setting/internship-2"
            component={Internship2}
          />
          <Route
            exact
            path="/account-setting/internship-3"
            component={Internship3}
          />
          <Route exact path="/account-setting/fresher-1" component={Fresher1} />
          <Route exact path="/account-setting/fresher-2" component={Fresher2} />
          <Route exact path="/account-setting/fresher-3" component={Fresher3} />
          <Route
            exact
            path="/account-setting/experience-1"
            component={Experience1}
          />
          <Route
            exact
            path="/account-setting/experience-2"
            component={Experience2}
          />
          <Route
            exact
            path="/account-setting/experience-3"
            component={Experience3}
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

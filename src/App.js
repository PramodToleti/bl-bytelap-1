import { useState } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
//Login
import LoginPage from "./components/LoginPage"
import CandidateLogin from "./components/CandidateLogin"
import EmployeeLogin from "./components/EmployeeLogin"
import EmployeeSalesLogin from "./components/EmployeeSalesLogin"
//Forgot Password
import CandidateForgotPassword from "./components/Candidate/CandidateForgotPassword"
import EmployeeLForgotPassword from "./components/EmployeeForgotPassword"
import NewPassword from "./components/NewPassword"
//Create Account
import CandidateStep1 from "./components/CreateAccountCandidate/CandidateStep1"
import CandidateStep2 from "./components/CreateAccountCandidate/CandidateStep2"
import EmployeeStep1 from "./components/CreateAccountEmployee/EmployeeStep1"
import EmployeeStep2 from "./components/CreateAccountEmployee/EmployeeStep2"
import CreateResume from "./components/CreateResume"
import TemplateView from "./components/TemplateView"
//Home
import Home from "./components/Candidate"
import Employee from "./components/Employee"
import Template from "./components/Template"
//Dashboard
import ActivePosts from "./components/Dashboard/ActivePosts"
//Active Job
import ActiveJob from "./components/Job/ActiveJob"
import ViewApplicant from "./components/Job/ViewApplicant"
//Post job
import EmployeePostJob from "./components/EmployeePostJob"
//Saved Jobs
import SavedJobs from "./components/SavedJobs"
//Account Setting
import MyInfo from "./components/EmployeeSettings/Myinfo"
import CompanySettings from "./components/EmployeeSettings/CompanySettings"
//Register Myself
import CandidateRegistermyself from "./components/CandidateRegistermyself"
import CandidateMyinfo from "./components/Candidate/CandidateMyinfo"

import "./App.css"

const App = () => {
  const [data, setData] = useState({})

  const handleData = (data) => {
    setData(data)
  }

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
            path="/candidate/change-password"
            component={CandidateForgotPassword}
          />

          <Route
            exact
            path="/employee/forgot-password"
            component={EmployeeLForgotPassword}
          />
          <Route exact path="/create-new-password" component={NewPassword} />
          {/* Create Resume */}
          <Route exact path="/create-resume" component={CreateResume} />
          <Route
            exact
            path="/create-resume/template/1"
            component={TemplateView}
          />
          <Route
            exact
            path="/create-resume/template/1/edit"
            component={Template}
          />

          {/* Home Route */}
          <Route exact path="/candidate" component={Home} />
          <Route exact path="/employee" component={Employee} />
          {/*Post Job*/}
          <Route exact path="/employee/post-job" component={EmployeePostJob} />
          {/* Dashboard */}
          <Route
            exact
            path="/employee/dashboard/active-posts"
            component={ActivePosts}
          />

          {/* Active Job */}
          <Route
            exact
            path="/employee/dashboard/active-posts/job"
            component={ActiveJob}
          />
          <Route
            exact
            path="/employee/dashboard/active-posts/job/view-applicant"
            component={ViewApplicant}
          />

          {/* Account Settings Routes */}
          <Route exact path="/saved-job" component={SavedJobs} />
          <Route
            exact
            path="/employee/account-setting/my-info"
            component={MyInfo}
          />
          <Route
            exact
            path="/employee/account-setting/company-setting"
            component={CompanySettings}
          />
          {/*Candidate Register Myself*/}
          <Route
            exact
            path="/candidate/register-myself"
            render={(props) => (
              <CandidateRegistermyself {...props} handleData={handleData} />
            )}
          />
          {/* Candidate My Info */}
          <Route
            exact
            path="/candidate/account-setting/my-info"
            component={CandidateMyinfo}
          />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

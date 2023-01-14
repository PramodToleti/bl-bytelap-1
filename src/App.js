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
import CreateResume from "./components/CreateResume"
import TemplateView from "./components/TemplateView"
//Home
import Home from "./components/Home"
import EmployeeHome from "./components/EmployeeHome"
import EmployeeDashboard from "./components/EmployeeDashboard"
import Template from "./components/Template"
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

//Employee Settings
import Myinfo from "./components/EmployeeSettings/Myinfo"
import CompanySettings from "./components/EmployeeSettings/CompanySettings"

//Employee Internship
import Intern2 from "./DashboardRegister/Internship/Intern2"
import Intern3 from "./DashboardRegister/Internship/Intern3"
import Intern4 from "./DashboardRegister/Internship/Intern4"
//Employee Fresher
import Fresh1 from "./DashboardRegister/Fresher/Fresh1"
import Fresh2 from "./DashboardRegister/Fresher/Fresh2"
import Fresh3 from "./DashboardRegister/Fresher/Fresh3"
import Fresh4 from "./DashboardRegister/Fresher/Fresh4"
//Employee Experience
import Exp1 from "./DashboardRegister/Experience/Exp1"
import Exp2 from "./DashboardRegister/Experience/Exp2"
import Exp3 from "./DashboardRegister/Experience/Exp3"
import Exp4 from "./DashboardRegister/Experience/Exp4"

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
          {/* Employee Settings */}
          <Route
            exact
            path="/employee/account-setting/my-info"
            component={Myinfo}
          />
          <Route
            exact
            path="/employee/account-setting/company-setting"
            component={CompanySettings}
          />
          {/*Employee Internship */}
          <Route
            exact
            path="/employee/dashboard/internship-1"
            component={EmployeeDashboard}
          />
          <Route
            exact
            path="/employee/dashboard/internship-2"
            component={Intern2}
          />
          <Route
            exact
            path="/employee/dashboard/internship-3"
            component={Intern3}
          />
          <Route
            exact
            path="/employee/dashboard/internship-4"
            component={Intern4}
          />
          {/*Employee Fresher */}
          <Route
            exact
            path="/employee/dashboard/fresher-1"
            component={Fresh1}
          />
          <Route
            exact
            path="/employee/dashboard/fresher-2"
            component={Fresh2}
          />
          <Route
            exact
            path="/employee/dashboard/fresher-3"
            component={Fresh3}
          />
          <Route
            exact
            path="/employee/dashboard/fresher-4"
            component={Fresh4}
          />
          {/* Employee Experience */}
          <Route
            exact
            path="/employee/dashboard/experience-1"
            component={Exp1}
          />
          <Route
            exact
            path="/employee/dashboard/experience-2"
            component={Exp2}
          />
          <Route
            exact
            path="/employee/dashboard/experience-3"
            component={Exp3}
          />
          <Route
            exact
            path="/employee/dashboard/experience-4"
            component={Exp4}
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

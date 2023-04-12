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
//Active Job -> Internship
import ActiveJobIntern from "./components/Job/Internship/ActiveJobIntern"
import ViewApplicantIntern from "./components/Job/Internship/ViewApplicantIntern"
//Active Job -> Fresher
import ActiveJobFresher from "./components/Job/Fresher/ActiveJobFresher"
import ViewApplicantFresher from "./components/Job/Fresher/ViewApplicantFresher"
//Active Job -> Experience
import ActiveJobExp from "./components/Job/Experience/ActiveJobExp"
import ViewApplicantExp from "./components/Job/Experience/ViewApplicantExp"
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
//Candidate -> Job Details
import CandidateJobDetails from "./components/Candidate/CandidateJobDetails/InternshipJobDetails"

import EmployeeUnregistered from "./components/Employee/EmployeeUnregistered"

import "./App.css"
import EditAll from "./components/Employee/FooterLinks/Blog/EditAll"
import InternshipJobDetails from "./components/Candidate/CandidateJobDetails/InternshipJobDetails"
import FresherJobDetails from "./components/Candidate/CandidateJobDetails/FresherJobDetails"
import ExperienceJobDetails from "./components/Candidate/CandidateJobDetails/ExperienceJobDetails"
import EmployeeFindResume from "./components/EmployeeFindResume"
//Employee -> Footer Links
import PrivacyPolicy from "./components/Employee/FooterLinks/PrivacyPolicy"
import AboutUs from "./components/Employee/FooterLinks/AboutUs"
import Media from "./components/Employee/FooterLinks/Media"
import Blog from "./components/Employee/FooterLinks/Blog"
import TermsAndConditons from "./components/Employee/FooterLinks/TermsAndConditions"
import ContactUs from "./components/Employee/FooterLinks/ContactUs"
import Subscription from "./components/Employee/Subscription"
import ReportIssue from "./components/Employee/FooterLinks/ReportIssue"
//Candidate -> Footer Links
import AboutUs2 from "./components/Candidate/CandidateFooterLinks/AboutUs2"
import Blog2 from "./components/Candidate/CandidateFooterLinks/Blog2"
import ContactUs2 from "./components/Candidate/CandidateFooterLinks/ContactUs2"
import Media2 from "./components/Candidate/CandidateFooterLinks/Media2"
import PrivacyPolicy2 from "./components/Candidate/CandidateFooterLinks/PrivacyPolicy2"
import TermsAndConditons2 from "./components/Candidate/CandidateFooterLinks/TermsAndConditions2"
import ReportIssue2 from "./components/Candidate/CandidateFooterLinks/ReportIssue2"
import Startup from "./components/Employee/FooterLinks/Startup"
import Enterprise from "./components/Employee/FooterLinks/Enterprise"
import career from "./components/Candidate/CandidateFooterLinks/Career"
import Certification from "./components/Candidate/certification"
import CertificationCard from "./components/Candidate/CertificationCard"
import CandidateProtectedRoute from "./components/CandidateProtectedRoute"

const App = () => {
  const [userResume, setResume] = useState(null)

  const handleResume = (e) => {
    setResume(e)
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
            render={(props) => (
              <CandidateStep1 {...props} handleResume={handleResume} />
            )}
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
          <Route exact path="/employee/home" component={EmployeeUnregistered} />
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
          <CandidateProtectedRoute exact path="/candidate" component={Home} />
          <Route exact path="/employee" component={Employee} />
          {/*Post Job*/}
          <Route exact path="/employee/post-job" component={EmployeePostJob} />
          {/* Dashboard */}
          <Route
            exact
            path="/employee/dashboard/active-posts"
            component={ActivePosts}
          />

          {/* Find Resume */}

          <Route
            exact
            path="/employee/find-resume"
            render={(props) => (
              <EmployeeFindResume {...props} userResume={userResume} />
            )}
          />

          {/* Active Job */}
          <Route
            exact
            path="/employee/dashboard/active-posts/job/internship"
            render={(props) => <ActiveJobIntern {...props} />}
          />

          <Route
            exact
            path="/employee/dashboard/active-posts/job/fresher"
            component={ActiveJobFresher}
          />

          <Route
            exact
            path="/employee/dashboard/active-posts/job/experience"
            component={ActiveJobExp}
          />

          {/* View Applicant */}

          <Route
            exact
            path="/employee/dashboard/active-posts/job/internship/view-applicant"
            render={(props) => <ViewApplicantIntern {...props} />}
          />

          <Route
            path="/employee/dashboard/active-posts/job/fresher/view-applicant"
            component={ViewApplicantFresher}
          />

          <Route
            path="/employee/dashboard/active-posts/job/experience/view-applicant"
            component={ViewApplicantExp}
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
            render={(props) => <CandidateRegistermyself {...props} />}
          />
          {/* Candidate My Info */}
          <Route
            exact
            path="/candidate/account-setting/my-info"
            component={CandidateMyinfo}
          />

          <Route
            exact
            path="/candidate/job-details/internship/:id"
            component={InternshipJobDetails}
          />

          <Route
            exact
            path="/candidate/job-details/fresher/:id"
            component={FresherJobDetails}
          />

          <Route
            exact
            path="/candidate/job-details/experience/:id"
            component={ExperienceJobDetails}
          />

          {/* Candidate Certification */}
          <Route
            exact
            path="/candidate/certification"
            component={Certification}
          />

          <Route
            exact
            path="/candidate/certification/:id"
            component={CertificationCard}
          />

          {/* Employee Footer Links */}

          <Route exact path="/employee/about-us" component={AboutUs} />

          <Route exact path="/employee/media" component={Media} />

          <Route exact path="/employee/blog" component={Blog} />

          <Route
            exact
            path="/employee/terms-and-condition"
            component={TermsAndConditons}
          />

          <Route exact path="/employee/report-issue" component={ReportIssue} />

          <Route exact path="/employee/contact-us" component={ContactUs} />

          <Route
            exact
            path="/employee/privacy-policy"
            component={PrivacyPolicy}
          />

          <Route exact path="/employee/startup-hiring" component={Startup} />

          <Route
            exact
            path="/employee/enterprise-hiring"
            component={Enterprise}
          />

          {/* Candidate Footer Links */}

          <Route exact path="/candidate/about-us" component={AboutUs2} />

          <Route exact path="/candidate/media" component={Media2} />

          <Route exact path="/candiate/blog" component={Blog2} />

          <Route
            exact
            path="/candidate/terms-and-condition"
            component={TermsAndConditons2}
          />

          <Route exact path="/candidate/contact-us" component={ContactUs2} />

          <Route
            exact
            path="/candidate/privacy-policy"
            component={PrivacyPolicy2}
          />
          <Route exact path="/report-issue" component={ReportIssue2} />

          <Route exact path="/candidate/career" component={career} />

          {/* Employee Subscriptions */}

          <Route
            exact
            path="/employee/subscriptions"
            component={Subscription}
          />

          <Route exact path="/employee/admin-blog" component={EditAll} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

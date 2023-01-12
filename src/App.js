import { BrowserRouter, Route, Switch } from "react-router-dom"

import Login from "./components/Login"
import Home from "./components/Home"
import Accountsetting from "./components/AccountSetting"
import SavedJobs from "./components/SavedJobs"

import "./App.css"
import RegisteredInfo from "./components/RegisteredInfo"
import RegisteredGraduation from "./components/RegisteredGraduation"
//Internship
import Internship1 from "./RegisterMyself/Internship/Internship1"
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

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/saved-job" component={SavedJobs} />
      <Route
        exact
        path="/account-setting/internship-1"
        component={Accountsetting}
      />
      <Route exact path="/account-setting/my-info" component={RegisteredInfo} />
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
)

export default App

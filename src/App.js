import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import Accountsetting from "./components/AccountSetting"

import "./App.css"
import RegisteredInfo from "./components/RegisteredInfo"
import RegisteredGraduation from "./components/RegisteredGraduation"
//Internship
import Internship1 from "./RegisterMyself/Internship/Internship1"
import Internship2 from "./RegisterMyself/Internship/Internship2"
import Internship3 from "./RegisterMyself/Internship/Internship3"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/account-setting" component={Accountsetting} />
      <Route exact path="/my-info" component={RegisteredInfo} />
      <Route exact path="/graduation" component={RegisteredGraduation} />
      <Route
        exact
        path="/account-setting/internship-1"
        component={Internship1}
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
    </Switch>
  </BrowserRouter>
)

export default App

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import AccountSetting from "./components/AccountSetting"
import SavedJob from "./components/SavedJob"

import "./App.css"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/account-setting" component={AccountSetting} />
      <Route exact path="/saved-job" component={SavedJob} />
    </Switch>
  </BrowserRouter>
)

export default App

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import Accountsetting from "./components/AccountSetting"

import "./App.css"
import RegisteredInfo from "./components/RegisteredInfo"
import RegisteredGraduation from "./components/RegisteredGraduation"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/account-setting" component={Accountsetting} />
      <Route exact path="/my-info" component={RegisteredInfo} />
      <Route exact path="/graduation" component={RegisteredGraduation} />
    </Switch>
  </BrowserRouter>
)

export default App

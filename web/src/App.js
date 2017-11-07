import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Answer from "./pages/Answer";
import Question from "./pages/Question";
import Profile from "./pages/Profile";

const App = () => (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route path="/answer" component={Answer} />
      <Route path="/question/" component={Question} />
      <Route path="/profile/" component={Profile} />
    </div>
  </Router>
);
export default App;

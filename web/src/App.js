import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//layout
import Layout from "./templates/Layout";

//login
import Login from "./pages/Login";

//home
import Home from "./pages/Home";

//answer
import Answer from "./pages/Answer";

//question
import Question from "./pages/Question";
import ListQuestion from "./pages/ListQuestion";

//profile
import Profile from "./pages/Profile";
import ListProfile from "./pages/ListProfile";

import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/answer" component={Answer} />
        <Route path="/question/" component={Question} />
        <Route path="/listquestion/" component={ListQuestion} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/listprofile" component={ListProfile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);
export default App;

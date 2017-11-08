import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./templates/Layout";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Answer from "./pages/Answer";
import Question from "./pages/Question";
import Profile from "./pages/Profile";

import ListProfile from "./pages/ListProfile";

const App = () => (
  <Router>
    <Layout>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route path="/answer" component={Answer} />
      <Route path="/question/" component={Question} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/listprofiles" component={ListProfile} />
    </Layout>
  </Router>
);
export default App;

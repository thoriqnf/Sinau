import React from "react";
import { NavLink } from "react-router-dom";

import { Row, Col } from "reactstrap";

const USER = {
  _id: 0,
  name: "Administrator"
};

const Home = () => (
  <nav
    style={{
      borderBottom: "1px solid black"
    }}
  >
    <Row>
      <Col xs={10}>
        <NavLink to="/login">Login</NavLink>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/answer">Answer</NavLink>
        <NavLink to="/AskQuestion">Ask Question</NavLink>
        <NavLink to="/ListQuestion">[Q]</NavLink>
      </Col>

      <Col xs={2}>
        <NavLink to={`/profile/${USER._id}`}>Profile</NavLink>
        <NavLink to="/ListProfile">[P]</NavLink>
      </Col>
    </Row>
  </nav>
);

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";

import { Row, Col } from "reactstrap";

const USER = {
  _id: 0,
  name: "Administrator"
};

// const style = {
//   borderBottom: "1px solid black"
// };

// const Logo = () => (
//   <h1>
//     {/* <img src="./img/sinau.png" alt="LOGO" /> */}
//     {/* <img src={require("./img/sinau.png")} /> */}
//   </h1>
// );

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
        <NavLink to="/question">Ask Question</NavLink>
      </Col>

      <Col xs={2}>
        <NavLink to={`/profile/${USER._id}`}>Profile</NavLink>
        <NavLink to="/ListProfile">[P]</NavLink>
        <NavLink to="/questions">[Q]</NavLink>
      </Col>
    </Row>
  </nav>
);

export default Home;

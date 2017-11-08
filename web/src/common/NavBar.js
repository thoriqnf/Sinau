import React from "react";
import { NavLink } from "react-router-dom";

import { Row, Col } from "reactstrap";

// const USER = {
//   _id: 0,
//   name: "Administrator"
// };
//
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
        <NavLink to="/ask">Ask Question</NavLink>
      </Col>

      <Col xs={2}>
        <NavLink to="/profile">Profile</NavLink>
      </Col>
    </Row>
  </nav>
);

export default Home;

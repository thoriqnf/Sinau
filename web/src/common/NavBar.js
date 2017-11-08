import React from "react";
import { NavLink } from "react-router-dom";

const USER = {
  _id: 0,
  name: "Administrator"
};

const style = {
  borderBottom: "1px solid black"
};

const Logo = () => (
  <h1>
    {/* <img src="./img/sinau.png" alt="LOGO" /> */}
    {/* <img src={require("./img/sinau.png")} /> */}
  </h1>
);

const Home = () => (
  <nav style={style}>
    <NavLink to="/login">Login</NavLink>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/answer">Answer</NavLink>
    <NavLink to="/ask">Ask Question</NavLink>
    <NavLink to="/profile">Profile</NavLink>
  </nav>
);

export default Home;

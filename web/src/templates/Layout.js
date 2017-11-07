import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";

import NavigationBar from "../common/NavBar";
import Footer from "../common/Footer";

const Layout = props => (
  <Container>
    <NavigationBar />
    <Content>{props.children}</Content>
    <Footer />
  </Container>
);

export default Layout;

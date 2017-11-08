import React from "react";
// import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Col, Row } from "reactstrap";

const Logo = () => (
  <h1>
    <img src="./img/sinau.png" alt="LOGO" />
  </h1>
);

// row profile top
const ImageProfile = () => <Col xs={3}>image profile</Col>;
const DetailProfile = () => <Col xs={9}>Thoriq Nur Faizal</Col>;

// const ProfileDown = () => (
//   <Col xs={4}>Your Topic</Col>
//   <Col xs={8}>Your Activity</Col>
// )

// row profile down
const Topic = () => <Col xs={3}>Your Topic</Col>;
const Activity = () => <Col xs={3}>Your Activity</Col>;

const Profile = () => (
  <div>
    <Row className="center" id="row-profile-top">
      <ImageProfile />
      <DetailProfile />
    </Row>
    <hr />
    <Row className="text-center" id="row-profile-down">
      <Topic />
      <Activity />
    </Row>
  </div>
);

export default Profile;

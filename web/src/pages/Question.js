import React from "react";
// import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Col } from "reactstrap";

const USER = {
  _id: 1,
  name: "Thoriq",
  title: "TK"
};

const Question = () => (
  <Col xs={8}>
    <Form>
      <span>
        Name {USER.name}, Title {USER.title} asked
      </span>
      <FormGroup>
        <Input
          type="text"
          name="askText"
          id="askText"
          placeholder="What is your question?"
        />
      </FormGroup>
      <Button>Ask Question</Button>
    </Form>
  </Col>
);

export default Question;

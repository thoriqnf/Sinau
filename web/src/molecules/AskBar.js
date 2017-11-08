import react from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

import LinkToProfile from "../atoms/LinkToProfile";

const USER = {
  _id: 1,
  name: "Thoriq",
  title: "TK"
};

const AskBar = () => (
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

export default AskBar;

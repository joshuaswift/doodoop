import React from "react";
import { Button, Form } from "react-bootstrap";

export default function AnswerSubmit() {
  return (
    <Form>
      <Form.Group controlId="answer">
        <Form.Label>Answer</Form.Label>
        <Form.Control placeholder="Enter answer" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

import React from "react";
import {Button, Form} from 'react-bootstrap';

export default function CreateQuiz() {
  return (
    <Form>
      <Form.Group controlId="quizName">
        <Form.Label>Quiz Name</Form.Label>
        <Form.Control placeholder="Enter quiz name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
import React from "react";
import {Button, Form} from 'react-bootstrap';

import DooDoopHeader from "../molecules/doodoop-header";

export default function CreateQuiz() {
  return (
    <>
    <DooDoopHeader/>
    <Form>
      <Form.Group controlId="quizName">
        <Form.Label>Quiz Name</Form.Label>
        <Form.Control placeholder="Enter quiz name" />
      </Form.Group>
      <Button size="lg" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}
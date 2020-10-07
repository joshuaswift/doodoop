import React from "react";
import {Button, Form, ListGroup} from 'react-bootstrap';

export default function QuizSetup() {
  return (
    <div>
      <Form>
        <Form.Group controlId="songUrl">
          <Form.Label>Song URL</Form.Label>
          <Form.Control placeholder="Enter song URL" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <Button variant="primary" type="submit">
        Finish adding songs
      </Button>
    </div>
  );
}
import React from "react";
import {Button, Form, ListGroup} from 'react-bootstrap';
import DooDoopHeader from "../molecules/doodoop-header";

export default function QuizSetup() {
  return (
    <>
      <DooDoopHeader />
      <Form>
        <Form.Group controlId="songUrl">
          <Form.Label>Song URL</Form.Label>
          <Form.Control placeholder="Enter song URL" />
        </Form.Group>
        <Button size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ListGroup className="mt-3">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <Button size="lg" className="mt-3" variant="primary" type="submit">
        Finish adding songs
      </Button>
    </>
  );
}
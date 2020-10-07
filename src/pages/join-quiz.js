import React from "react";
import {Button, Form} from 'react-bootstrap';

export default function JoinQuiz() {
  return (
    <Form>
      <Form.Group controlId="roomCode">
        <Form.Label>Room Code</Form.Label>
        <Form.Control placeholder="Enter room code" />
      </Form.Group>
      <Form.Group controlId="playerName">
        <Form.Label>Player Name</Form.Label>
        <Form.Control placeholder="Enter player name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
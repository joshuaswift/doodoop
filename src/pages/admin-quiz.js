import React from "react";
import {Button, Container, Col, ListGroup, Row, Form} from 'react-bootstrap';

export default function AdminQuiz() {
  return (
    <Form>
      <Container>
        <Row>
          <Col md="auto">
            <ListGroup>
              <ListGroup.Item>Player 1 - 200pts</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="auto">
            <ListGroup>
              <ListGroup.Item>Answer 1</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="auto">
            <Button variant="primary" type="submit">
              Next Song
            </Button>
            <Button variant="primary" type="submit">
              Play Song
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
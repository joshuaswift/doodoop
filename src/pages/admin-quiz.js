import React from "react";
import {Button, Container, Col, ListGroup, Row, Form} from 'react-bootstrap';
import DooDoopHeader from "../molecules/doodoop-header";
import Header from '../atoms/header';

export default function AdminQuiz() {
  return (
    <>
    <DooDoopHeader/>
    <Header name="BuildEmpire Hackdays 2020"/>
    <Form>
      <Container>
        <Row>
          <Col md="3">
            <ListGroup>
              <ListGroup.Item>Player 1 - 200pts</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="9">
            <ListGroup>
              <ListGroup.Item>Answer 1</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <div className="float-right mt-5">
        <Button size="lg" variant="primary" type="submit">
          Next Song
        </Button>
        <Button className="ml-3" size="lg" variant="primary" type="submit">
          Play Song
        </Button>
      </div>
    </Form>
    </>
  );
}
import React from "react";
import { Button, Form, ListGroup } from 'react-bootstrap';
import DooDoopHeader from "../molecules/doodoop-header";
import Header from "../atoms/header";
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';

const GAME_SESSION_QUERY = gql`
  query getGameSession($id: Int){
    gameSessions(id: $id) {
      id
      name
      enterCode
      status
    }
  }
`;

export default function QuizSetup() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GAME_SESSION_QUERY, {
    variables: { id: parseInt(id) },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const { name } = data.gameSessions[0];

  return (
    <>
      <DooDoopHeader />
      <Header name={name} />
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
import React, {useState} from "react";
import { Button, Container, Col, ListGroup, Row, Form, Card } from 'react-bootstrap';
import DooDoopHeader from "../molecules/doodoop-header";
import Header from '../atoms/header';
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import ReactPlayer from "react-player";

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


export default function AdminQuiz() {
  const { id } = useParams();
  const [playing, setPlaying] = useState(false);
  const { loading, error, data } = useQuery(GAME_SESSION_QUERY, {
    variables: { id: parseInt(id) },
  });
  const onClick = (event) => {
    event.preventDefault();
    setPlaying(!playing);
  }

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const { name, enterCode } = data.gameSessions[0];

  return (
    <>
      <DooDoopHeader />
      <Header name={name} />
      <Card className="mb-3">
        <Card.Body>Join code: {enterCode}</Card.Body>
      </Card>
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
          <Button
            className="ml-3"
            size="lg"
            variant="primary"
            type="submit"
            onClick={onClick}
          >
            {playing ? "Stop Song" : "Play Song"}
          </Button>
        </div>
      </Form>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ZyhrYis509A"
        playing={playing}
        className="d-none"
      />
    </>
  );
}
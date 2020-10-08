import React, { useState } from "react";
import { Button, Form, ListGroup } from 'react-bootstrap';
import DooDoopHeader from "../molecules/doodoop-header";
import Header from "../atoms/header";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";

const GAME_SESSION_QUERY = gql`
  query getGameSession($id: Int){
    gameSessions(id: $id) {
      id
      name
      enterCode
      status
      roundElements {
        id
        name
        link
      }
    }
  }
`;

const CREATE_ROUND_ELEMENT_MUTATION = gql`
  mutation createRoundElement(
    $gameSessionId: Int!
    $name: String!
    $link: String!
    $answer: String!
    $points: Int
  ) {
    roundElementsMutations {
      create(
        gameSessionId: $gameSessionId
        name: $name
        link: $link
        answer: $answer
        points: $points
      ) {
        id
      }
    }
  }
`;

export default function QuizSetup() {
  const { id } = useParams();
  const [songUrl, setSongUrl] = useState("");
  const [title, setTitle] = useState("");
  const [roundName, setRoundName] = useState("");
  const [points, setPoints] = useState(1);
  const { loading, error, data, refetch} = useQuery(GAME_SESSION_QUERY, {
    variables: { id: parseInt(id) },
  });

  const [createRoundElement] = useMutation(CREATE_ROUND_ELEMENT_MUTATION, {
    onCompleted: refetch
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createRoundElement({
      variables: {
        gameSessionId: parseInt(id),
        name: roundName,
        link: songUrl,
        answer: title,
        points: parseInt(points),
      },
    });
    setSongUrl("");
    setTitle("");
    setRoundName("");
    setPoints(1);
  };

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const { name , roundElements} = data.gameSessions[0];
  

  const RenderRoundElements = () => {
    return roundElements.map((roundElement) => {      
           return (<ListGroup.Item key={roundElement.id}> {roundElement.name} - {roundElement.link} </ListGroup.Item>);
        })
    }
  

  return (
    <>
      <DooDoopHeader />
      <Header name={name} />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="songUrl">
          <Form.Label>Song URL</Form.Label>
          <Form.Control
            placeholder="Enter song URL"
            onChange={(e) => setSongUrl(e.target.value)}
            value={songUrl}
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="Enter song title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter round name"
            onChange={(e) => setRoundName(e.target.value)}
            value={roundName}
          />
        </Form.Group>
        <Form.Group controlId="points">
          <Form.Label>Points</Form.Label>
          <Form.Control
            placeholder="Enter round points"
            onChange={(e) => setPoints(e.target.value)}
            value={points}
          />
        </Form.Group>
        <Button size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ListGroup className="mt-3">
        <RenderRoundElements />
      </ListGroup>
      <Button size="lg" className="mt-3" variant="primary" type="submit">
        Finish adding songs
      </Button>
    </>
  );
}
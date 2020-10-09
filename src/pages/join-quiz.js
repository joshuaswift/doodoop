import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import DooDoopHeader from '../molecules/doodoop-header';
import { useMutation, gql } from '@apollo/client';
import { useHistory } from "react-router-dom";

const GET_GAME_SESSION_MUTATION = gql`
  mutation getGameSessions($name: String!, $enterCode: String!) {
    gameSessionsMutations {
      join(name: $name, enterCode: $enterCode) {
        name
        id
        gameSessionId
      }
    }
  }
`;

export default function JoinQuiz() {
  const history = useHistory();
  const [enterCode, setEnterCode] = useState("");
  const [playerName, setPlayerName] = useState("");
  const onCompleted = data => {
    const playerId = data.gameSessionsMutations.join.id;
    const gameSessionId = data.gameSessionsMutations.join.gameSessionId;
    history.push(`/player-quiz/${gameSessionId}/${playerId}`);
  };
  const [createGameSession] = useMutation(GET_GAME_SESSION_MUTATION, { onCompleted });

  const handleSubmit = (event) => {
    event.preventDefault();
    createGameSession({ variables: { name: playerName, enterCode: enterCode } });
  };

  return (
    <>
      <DooDoopHeader />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="roomCode">
          <Form.Label>Room Code</Form.Label>
          <Form.Control placeholder="Enter room code" onChange={e => setEnterCode(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="playerName">
          <Form.Label>Player Name</Form.Label>
          <Form.Control placeholder="Enter player name" onChange={e => setPlayerName(e.target.value)} />
        </Form.Group>
        <Button size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
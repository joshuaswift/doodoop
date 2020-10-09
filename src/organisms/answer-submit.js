import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import { useMutation, gql } from "@apollo/client";



const CREATE_ANSWER_MUTATION = gql`
  mutation getGameSessions(
    $playerId: Int!
    $value: String!
    $gameSessionId: Int!
  ) {
    answersMutations {
      create(
        playerId: $playerId
        gameSessionId: $gameSessionId
        value: $value
      ) {
        id
        value
        player {
          name
          id
        }
        roundElement {
          id
          name
          gameSession {
            id
            name
          }
        }
      }
    }
  }
`;

export default function AnswerSubmit({ gameSessionId, playerId }) {
  const [answer, setAnswer] = useState(false);
  const [createAnswer] = useMutation(CREATE_ANSWER_MUTATION);

  const handleSubmit = (event) => {
    event.preventDefault();
    createAnswer({
      variables: {
        value: answer,
        gameSessionId: parseInt(gameSessionId),
        playerId: parseInt(playerId),
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="answer">
        <Form.Label>Answer</Form.Label>
        <Form.Control
          placeholder="Enter answer"
          onChange={(e) => setAnswer(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

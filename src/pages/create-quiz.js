import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

import DooDoopHeader from "../molecules/doodoop-header";
import { useMutation, gql } from '@apollo/client';
import { useHistory } from "react-router-dom";

const CREATE_GAME_SESSION_MUTATION = gql`
  mutation createGameSession($name: String!){
    gameSessionsMutations {
      create(name: $name) {
        id
      }
    }
  }
`;

export default function CreateQuiz() {
  const history = useHistory();
  const [quizName, setQuizName] = useState(false);
  const onCompleted = data => {
    const id = data.gameSessionsMutations.create.id;
    history.push(`/quiz-setup/${id}`);
  };
  const [createGameSession] = useMutation(CREATE_GAME_SESSION_MUTATION, { onCompleted });

  const handleSubmit = (event) => {
    event.preventDefault();
    createGameSession({ variables: { name: quizName } });
  };

  return (
    <>
      <DooDoopHeader />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="quizName">
          <Form.Label>Quiz Name</Form.Label>
          <Form.Control placeholder="Enter quiz name" onChange={e => setQuizName(e.target.value)} />
        </Form.Group>
        <Button size="lg" variant="primary" type="submit">
          Submit
      </Button>
      </Form>
    </>
  );
}
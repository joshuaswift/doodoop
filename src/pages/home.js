import React from "react";
import { Button } from 'react-bootstrap';
import DooDoopHeader from '../molecules/doodoop-header';
import { useHistory } from "react-router-dom";


export default function JoinQuiz() {
  let history = useHistory();

  function createQuiz() {
    history.push("/create-quiz");
  }

  function joinQuiz() {
    history.push("/join-quiz");
  }

  return (
    <>
      <DooDoopHeader />
      <Button
        size="lg"
        block
        variant="primary"
        type="submit"
        onClick={createQuiz}
      >
        Create quiz
      </Button>
      <Button
        size="lg"
        block
        variant="primary"
        type="submit"
        onClick={joinQuiz}
      >
        Join quiz
      </Button>
    </>
  );
}
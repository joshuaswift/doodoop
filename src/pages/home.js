import React from "react";
import { Button } from 'react-bootstrap';
import DooDoopHeader from '../molecules/doodoop-header';

export default function JoinQuiz() {
  return (
    <>
      <DooDoopHeader />
      <Button size="lg" block variant="primary" type="submit">
        Create quiz
      </Button>
      <Button size="lg" block variant="primary" type="submit">
        Join quiz
      </Button>
    </>
  );
}
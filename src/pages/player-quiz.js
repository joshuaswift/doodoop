import React from "react";
import AnswerSubmit from '../organisms/answer-submit';
import WaitingForSong from '../organisms/waiting-for-song';

export default function PlayerQuiz() {
  return (
    <div>
      <AnswerSubmit/>
      <WaitingForSong/>
    </div>
  );
}

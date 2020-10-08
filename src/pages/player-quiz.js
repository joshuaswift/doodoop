import React from "react";
import AnswerSubmit from '../organisms/answer-submit';
import WaitingForSong from '../organisms/waiting-for-song';
import DooDoopHeader from "../molecules/doodoop-header";

export default function PlayerQuiz() {
  return (
    <>
    <DooDoopHeader/>
    <div>
      <AnswerSubmit/>
      <WaitingForSong/>
    </div>
    </>
  );
}

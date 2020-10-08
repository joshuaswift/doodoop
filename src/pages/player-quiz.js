import React from "react";
import AnswerSubmit from '../organisms/answer-submit';
import WaitingForSong from '../organisms/waiting-for-song';
import DooDoopHeader from "../molecules/doodoop-header";
import Header from "../atoms/header";

export default function PlayerQuiz() {
  return (
    <>
      <DooDoopHeader />
      <Header name="BuildEmpire Hackdays 2020" />
      <div>
        <AnswerSubmit />
        <WaitingForSong />
      </div>
    </>
  );
}

import React from "react";
import AnswerSubmit from '../organisms/answer-submit';
import WaitingForSong from '../organisms/waiting-for-song';
import DooDoopHeader from "../molecules/doodoop-header";
import Header from "../atoms/header";
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';

const GAME_SESSION_QUERY = gql`
  query getGameSession($id: Int){
    gameSessions(id: $id) {
      roundElements {
        status
      }
    }
  }
`;

export default function PlayerQuiz() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GAME_SESSION_QUERY, {
    variables: { id: parseInt(id) },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const { name, status } = data.gameSessions[0];
  return (
    <>
      <DooDoopHeader />
      <Header name={name} />
      <div>
        <AnswerSubmit />
        <WaitingForSong />
      </div>
    </>
  );
}

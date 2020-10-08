import React from "react";
import AnswerSubmit from '../organisms/answer-submit';
import Done from '../organisms/done';
import WaitingForSong from '../organisms/waiting-for-song';
import DooDoopHeader from "../molecules/doodoop-header";
import Header from "../atoms/header";
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';

const GAME_SESSION_QUERY = gql`
  query getGameSession($id: Int) {
    gameSessions(id: $id) {
      currentRoundElement {
        name
        status
      }
    }
  }
`;

function PlayerView({status}) {
  const { session_id, player_id } = useParams();

  if (status === 'completed') {
    return <Done />;
  } else if (status === 'playing') {
    return <AnswerSubmit playerId={player_id} gameSessionId={session_id} />
  } else {
    return <WaitingForSong />

  }
}

export default function PlayerQuiz() {
  const { session_id} = useParams();
  const { loading, error, data} = useQuery(GAME_SESSION_QUERY, {
    variables: { id: parseInt(session_id) },
  });
  
  if (loading) return null;
  if (error) return `Error! ${error}`;

  const {name, status} = data.gameSessions[0].currentRoundElement;
  return (
    <>
      <DooDoopHeader />
      <Header name={name} />
      <div>
        <PlayerView status={status}/>
      </div>
    </>
  );
}

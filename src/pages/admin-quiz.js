import React, {useState} from "react";
import { Button, Container, Col, ListGroup, Row, Form, Card } from 'react-bootstrap';
import DooDoopHeader from "../molecules/doodoop-header";
import Header from '../atoms/header';
import { useParams } from "react-router-dom";
import { useQuery, useMutation, gql } from '@apollo/client';
import ReactPlayer from "react-player";

const GAME_SESSION_QUERY = gql`
  query getGameSession($id: Int){
    gameSessions(id: $id) {
      id
      name
      enterCode
      status
      currentRoundElement {
        answers {
          id
          player {
            name
          }
          value
        }
        id
        link
        name
        points
        status
      }
      players {
        name
        id
        points
      }
    }
  }
`;

const NEXT_SONG_MUTATION = gql`
  mutation getGameSessions($id: Int!) {
    gameSessionsMutations {
      startNextSong(id: $id) {
        id
      }
    }
  }
`;

const PLAY_CURRENT_SONG_MUTATION = gql`
  mutation getGameSessions($id: Int!) {
    gameSessionsMutations {
      startPlayingCurrentSong(id: $id) {
        name
        id
        status
        points
        link
      }
    }
  }
`;
const STOP_CURRENT_SONG_MUTATION = gql`
  mutation getGameSessions($id: Int!) {
    gameSessionsMutations {
      stopPlayingCurrentSong(id: $id) {
        name
        id
        status
        points
        link
      }
    }
  }
`;

const FINISH_QUIZ_MUTATION = gql`
  mutation getGameSessions($id: Int!) {
    gameSessionsMutations {
      startNextSong(id: $id) {
        id
      }
    }
  }
`;




export default function AdminQuiz() {
  const { id } = useParams();
  const [playing, setPlaying] = useState(false);
  const { loading, error, data, refetch } = useQuery(GAME_SESSION_QUERY, {
    variables: { id: parseInt(id) },
  });
  console.log("CL: AdminQuiz -> loading", loading);
  const [startNextSong] = useMutation(NEXT_SONG_MUTATION, {
    onCompleted: refetch,
  });
  const [playCurrentSong] = useMutation(PLAY_CURRENT_SONG_MUTATION, {
    onCompleted: refetch,
  });
  const [stopCurrentSong] = useMutation(STOP_CURRENT_SONG_MUTATION, {
    onCompleted: refetch,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

const { name, enterCode, currentRoundElement, players} = data.gameSessions[0];
console.log("CL: currentRoundElement", currentRoundElement);
const completedStatus = currentRoundElement && currentRoundElement.status === 'completed' ? true : false; 

  const playSong = (event) => {
    event.preventDefault();
    playCurrentSong({ variables: { id: parseInt(id) } });
    setPlaying(true);
  };
  const stopSong = (event) => {
    event.preventDefault();
    stopCurrentSong({ variables: { id: parseInt(id) } });
    setPlaying(false);
  };
  const nextSong = (event) => {
    event.preventDefault();
    startNextSong({ variables: { id: parseInt(id) } });
  };

  function ButtonDisplay(props) {
    if (props.status === "pending") {
      return (
        <Button size="lg" variant="primary" type="submit" onClick={nextSong}>
          Next Song
        </Button>
      );
    } else if (props.status === "started") {
      return (
        <Button
          className="ml-3"
          size="lg"
          variant="primary"
          type="submit"
          onClick={playSong}
        >
          Play Song
        </Button>
      );
    } else if (props.status === "playing") {
      return (
        <Button
          className="ml-3"
          size="lg"
          variant="primary"
          type="submit"
          onClick={stopSong}
        >
          Stop Song
        </Button>
      );
    } else {
      return null;
    }

  }

  const RenderAnswers = () => {
    return currentRoundElement ? currentRoundElement.answers.map(
      (answer) => {
        return (
          <ListGroup.Item key={answer.id}>
            {answer.player.name} - {answer.value}
          </ListGroup.Item>
        );
      }
    ) : null;
  };


  const RenderPlayersList = () => {
    return players.map((player) => {
      return (<ListGroup.Item key={player.id}> {player.name} - {player.points || 0} pts </ListGroup.Item>);
    })
  }
  return (
    <>
      <DooDoopHeader />
      <Header name={name} />
      <Card className="mb-3">
        <Card.Body>Join code: {enterCode}</Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          Round: {currentRoundElement ? currentRoundElement.name : ""}
        </Card.Body>
      </Card>
      <Form>
        <Container>
          <Row>
            <Col md="3">
              <ListGroup>
                <RenderPlayersList />
              </ListGroup>
            </Col>
            <Col md="9">{completedStatus ? <RenderAnswers /> : null}</Col>
          </Row>
        </Container>
        <div className="float-right mt-5">
          <ButtonDisplay
            status={
              currentRoundElement ? currentRoundElement.status : "pending"
            }
          />
        </div>
      </Form>
      <ReactPlayer
        url={
          currentRoundElement
            ? currentRoundElement.link
            : "https://www.youtube.com/watch?v=ZyhrYis509A"
        }
        playing={playing}
        className="d-none"
      />
    </>
  );
}
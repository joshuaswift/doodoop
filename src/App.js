import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AdminQuiz, CreateQuiz, JoinQuiz, PlayerQuiz, QuizSetup, Home } from "../src/pages/index";
import { Container } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/client';
import gqlClient from "./utils/gql-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

export default function App() {
  const [response, setResponse] = useState("");
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);
  
  return (
    <ApolloProvider client={gqlClient}>
      <Router>
        <Container>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/join-quiz">Join Quiz</Link>
                <Link to="/create-quiz">Create Quiz</Link>
                <Link to="/quiz-setup/1">Quiz Setup</Link>
                <Link to="/admin-quiz/1">Admin Quiz</Link>
                <Link to="/player-quiz/1/1">Player Quiz</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/join-quiz">
              <JoinQuiz />
            </Route>
            <Route path="/admin-quiz/:id">
              <AdminQuiz />
            </Route>
            <Route path="/create-quiz">
              <CreateQuiz />
            </Route>
            <Route path="/player-quiz/:session_id/:player_id">
              <PlayerQuiz />
            </Route>
            <Route path="/quiz-setup/:id">
              <QuizSetup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AdminQuiz, CreateQuiz, JoinQuiz, PlayerQuiz, QuizSetup, Home } from "../src/pages/index";
import { Container } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/client';
import gqlClient from "./utils/gql-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {
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
                <Link to="/player-quiz">Player Quiz</Link>
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
            <Route path="/player-quiz">
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

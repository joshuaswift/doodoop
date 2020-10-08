import {Navbar} from 'react-bootstrap';
import React from "react";

export default function DooDoopHeader() {
  return (
    <Navbar
      className="d-flex justify-content-center mb-3"
      variant="dark"
      bg="primary"
    >
      <Navbar.Brand>DooDoop</Navbar.Brand>
    </Navbar>
  );
}

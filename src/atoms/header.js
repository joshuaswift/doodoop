import { Navbar } from "react-bootstrap";
import React from "react";

export default function DooDoopHeader(props) {
  return (
    <Navbar
      className="d-flex justify-content-center mb-3"
      variant="dark"
      bg="primary"
    >
      <Navbar.Brand>{props.name}</Navbar.Brand>
    </Navbar>
  );
}

import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function registerToCalendarMode() {
  return (
    <div>
      <h1>hello</h1>

      <Container>
        <Link to="/">
          <Button variant="secondary">Back</Button>
        </Link>
      </Container>
    </div>
  );
}

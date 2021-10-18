import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import ConvenientMode from "./ConvenientMode";
import registerToCalendarMode from "./registerToCalendarMode";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

export default function Home() {
  const renderHome = () => {
    return (
      <Container className="content">
        <Link to="/convenient-mode">
          <Button variant="primary">바로실행!</Button>
        </Link>{" "}
        <Link to="/move-to-calendar-mode">
          <Button variant="danger">캘린더에 등록하기!</Button>
        </Link>
      </Container>
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={renderHome} />
        <Route path="/convenient-mode" component={ConvenientMode} />
        <Route
          path="/move-to-calendar-mode"
          component={registerToCalendarMode}
        />
      </Switch>
    </BrowserRouter>
  );
}

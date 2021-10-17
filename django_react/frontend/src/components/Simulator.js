import React, { useState } from "react";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";

export default function Simulator() {
  const [id, setid] = useState(null);
  const [pw, setpw] = useState(null);
  // const [state, setstate] = useState(initialState);

  const settingID = (e) => {
    setid(e.target.value);
  };
  const settingPW = (e) => {
    setpw(e.target.value);
  };
  const simulation = () => {
    console.log(id, pw);
    goSimulate();
  };
  const goSimulate = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        password: pw,
      }),
    };
    fetch("http://127.0.0.1:8000/api/simulation", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("hello world");
      });
  };
  return (
    <div>
      <Container fluid="sm">
        <InputGroup className="mb-3">
          <InputGroup.Text>e-강의동 ID</InputGroup.Text>
          <FormControl onChange={settingID} aria-label="First name" />
          <InputGroup.Text>e-강의동 PW</InputGroup.Text>
          <FormControl onChange={settingPW} aria-label="Last name" />
        </InputGroup>
      </Container>
      <Container>
        <Button onClick={simulation}>Let's simulate!</Button>
      </Container>
    </div>
  );
}

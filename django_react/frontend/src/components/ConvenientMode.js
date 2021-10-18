import React, { useState } from "react";
import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ConvenientMode() {
  const [id, setid] = useState(null);
  const [pw, setpw] = useState(null);
  // const [state, setstate] = useState(initialState);
  const [subjects, setSubjects] = useState([]);
  const [titels, setTitle] = useState([]);
  const [dates, setDate] = useState([]);

  const settingID = (e) => {
    setid(e.target.value);
  };
  const settingPW = (e) => {
    setpw(e.target.value);
  };
  const simulation = () => {
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
        setTitle(data.title);
        setSubjects(data.subject);
        setDate(data.due);
        console.log(subjects);
        console.log(titels);
        console.log(dates);
      });
  };
  return (
    <div>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            e-강의동 ID{" "}
            <Form.Control
              type="text"
              placeholder="e-강의동 ID"
              onChange={settingID}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Password
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={settingPW}
            />
          </Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={simulation}>
          Submit
        </Button>
      </Form> */}

      <Container fluid="sm">
        <InputGroup className="mb-3">
          <InputGroup.Text>e-강의동 ID</InputGroup.Text>
          <FormControl
            placeholder="id"
            type="text"
            onChange={settingID}
            aria-label="First name"
          />

          <InputGroup.Text>e-강의동 PW</InputGroup.Text>
          <FormControl
            onChange={settingPW}
            aria-label="Last name"
            type="password"
            placeholder="password"
          />
        </InputGroup>
      </Container>

      <Container>
        <Button onClick={simulation}>Let's simulate!</Button>{" "}
        <Link to="/">
          <Button variant="secondary">Back</Button>
        </Link>
      </Container>
    </div>
  );
}

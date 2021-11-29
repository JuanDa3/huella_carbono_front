import React, { useState } from "react";
import banner1 from "../images/banner1.PNG";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InitialMenu from "./InitialMenu";
import { Col, Form } from "react-bootstrap";
import axios from "axios";

const baseURL = "http://localhost:8000/prove-from-react/";

function Login() {
  const [post, setPost] = React.useState(null);
  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "prueba del post gg",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <>
      <InitialMenu disable={"hidden"} />
      <div className="mt-5 w-100 h-100 d-flex">
        <div className="col1 w-50">
          <img
            src={banner1}
            className="w-100 h-100"
            alt="React Bootstrap logo"
          />
        </div>
        <div className="col2 w-25 p-5 m-auto d-flex flex-column">
          <h1>Iniciar Sesión</h1>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={(e) => handle(e)}
                plaintext
                placeholder="Email"
              />
            </Col>
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={(e) => handle(e)}
                type="password"
                placeholder="Password"
              />
            </Col>
            <button onClick={createPost}>Create Post</button>
            <Button onClick={createPost} variant="primary">
              Iniciar sesión
            </Button>{" "}
          </Form.Group>
          <Link to=""></Link>
        </div>
      </div>
    </>
  );
}

export default Login;

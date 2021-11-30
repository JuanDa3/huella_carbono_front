import React, { useState } from "react";
import banner1 from "../images/banner1.PNG";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InitialMenu from "./InitialMenu";
import { Col, Form } from "react-bootstrap";
import axios from "axios";
import login from "../css/login.css";

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
      <div className="content-login">
        <InitialMenu disable={"hidden"} />
        <div className="mt-5 w-100 d-flex justify-content-center">
          <div className=" d-flex flex-column align-items-center login-window">
            <h3>Iniciar Sesión</h3>
            <Form.Group>
              <Form.Label style={{ color: "black" }}>Email address</Form.Label>
              <Form.Control
                onChange={(e) => handle(e)}
                type="email"
                id="email"
                placeholder="Enter email"
              />
              <Form.Label style={{ color: "black" }} column sm="2">
                Password
              </Form.Label>
              <Form.Control
                onChange={(e) => handle(e)}
                type="password"
                id="pass"
                placeholder="Password"
              />
              <a href="/userpage">
                <Button className="mt-3" onClick={createPost} variant="primary">
                  Iniciar sesión
                </Button>{" "}
              </a>
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

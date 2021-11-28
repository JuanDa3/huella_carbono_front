import React, { useState } from "react";
import banner1 from "../images/banner1.PNG";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InitialMenu from "./InitialMenu";
import { Col, Form } from "react-bootstrap";
import { Axios } from "axios";

function Login() {
  const url = "https://main.d3nc7if2jw05q3.amplifyapp.com/probe";
  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      mail: data.email,
      password: data.pass,
    }).then((res) => {
      console.log(res.data);
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
          <Form onSubmit={(e) => submit(e)}>
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
            </Form.Group>

            <Form.Group className="mb-3" controlId="pass">
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
            </Form.Group>
            <Link to="/userpage">
              <Button variant="primary">Iniciar sesión</Button>{" "}
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;

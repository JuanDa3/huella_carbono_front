import React from "react";
import banner1 from "../images/banner1.PNG";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InitialMenu from "./InitialMenu";
import { Col, Form } from "react-bootstrap";

function Login() {
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
          <Form>
            <Form.Group className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>

          <Link to="/userpage">
            <Button variant="primary">Iniciar sesión</Button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;

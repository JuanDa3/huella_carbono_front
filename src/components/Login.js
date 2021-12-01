import React, { useState } from "react";
import banner1 from "../images/banner1.PNG";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InitialMenu from "./InitialMenu";
import { Form } from "react-bootstrap";
//import axios from "axios";
import login from "../css/login.css";
//import { useAuth0 } from "@auth0/auth0-react";

const baseURL = "";

function Login() {
  //const { loginWithRedirect } = useAuth0();
  //const { logout } = useAuth0();

  const [sesion, setSesion] = React.useState("/login");
  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  function validarUsuario() {
    if (data.email == "demo@uqvirtual.edu.co" && data.pass == "123") {
      setSesion("/userpage");
    } else {
      alert("el usuario no existe");
    }
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
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
              <Button
                onClick={() => validarUsuario()}
                className="mt-3"
                variant="primary"
                href={sesion}
              >
                Iniciar sesión
              </Button>{" "}
              {/* <Button
                onClick={() => logout()}
                className="mt-3"
                variant="primary"
              >
                Logout
              </Button>{" "} */}
            </Form.Group>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

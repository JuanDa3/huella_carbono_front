import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoUniversidad from "../images/logoUniversidad.png";
import Button from "react-bootstrap/Button";
import UserPage from "./UserPage";

function InitialMenu(props) {
  const [disabled, setDisabled] = useState(false);
  const InitialMenu = (props) => <span>hola</span>;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logoUniversidad}
              width="55"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Consumos"
                id="basic-nav-dropdown"
                style={{ visibility: props.disable }}
              >
                <NavDropdown.Item className="gas" href="/gas">
                  Gas
                </NavDropdown.Item>
                <NavDropdown.Item href="/energia">
                  Energia electrica
                </NavDropdown.Item>
                <NavDropdown.Item href="/agua">Agua</NavDropdown.Item>
                <NavDropdown.Item href="/papel">Papel</NavDropdown.Item>
                <NavDropdown.Item href="/gasolina">Gasolina</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Residuos"
                id="basic-nav-dropdown"
                style={{ visibility: props.disable }}
              >
                <NavDropdown.Item href="/peligrosos">
                  Peligrosos
                </NavDropdown.Item>
                <NavDropdown.Item href="/solidos">Solidos</NavDropdown.Item>
                <NavDropdown.Item href="/organicos">Organicos</NavDropdown.Item>
                <NavDropdown.Item href="/aprovechados">
                  Aprovechados
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <a href="login" style={{ visibility: props.log }}>
              <Button variant="primary">login</Button>{" "}
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default InitialMenu;

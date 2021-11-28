import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoUniversidad from "../images/logoUniversidad.png";
import Button from "react-bootstrap/Button";

function InitialMenu(props) {
  const [disabled, setDisabled] = useState(false);
  const onClick = () => setDisabled(true);

  console.log(props.disable);

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
                <NavDropdown.Item href="#action/3.1">Gas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Energia electrica
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Agua</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Papel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Gasolina</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Residuos"
                id="basic-nav-dropdown"
                style={{ visibility: props.disable }}
              >
                <NavDropdown.Item href="#action/3.1">
                  Peligrosos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Solidos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Organicos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
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

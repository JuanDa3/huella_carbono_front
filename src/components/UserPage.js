import React from "react";
import { FloatingLabel, Form, FormGroup } from "react-bootstrap";
import InitialMenu from "./InitialMenu";
import Button from "react-bootstrap/Button";

function UserPage(props) {
  return (
    <div>
      <InitialMenu disable={"visible"} log={"hidden"} />
      <h1>Seleccione en el menú los calculos que desea efectuar</h1>
    </div>
  );
}

export default UserPage;

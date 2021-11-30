import React from "react";
import { FloatingLabel, Form, FormGroup } from "react-bootstrap";
import InitialMenu from "./InitialMenu";
import Button from "react-bootstrap/Button";
import userpage from "../css/userpage.css";

function UserPage(props) {
  return (
    <div className="content-initial-menu">
      <InitialMenu disable={"visible"} log={"hidden"} />
      <div className="description">
        <h1>Seleccione en el menú los calculos que desea efectuar</h1>
      </div>
    </div>
  );
}

export default UserPage;

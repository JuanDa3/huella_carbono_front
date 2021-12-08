import React from "react";
import { FloatingLabel, Form, FormGroup } from "react-bootstrap";
import InitialMenu from "./InitialMenu";
import Button from "react-bootstrap/Button";
import userpage from "../css/userpage.css";
import MenuConsumos from "./MenuConsumos";
import Gas from "./Gas";

function UserPage(props) {
  return (
    <div className="content-initial-menu mt-5">
      <div className="">
        <h1 style={{ color: "black" }}>Seleccione</h1>
      </div>
      <MenuConsumos />
    </div>
  );
}

export default UserPage;

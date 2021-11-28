import React from "react";
import { FloatingLabel, Form, FormGroup } from "react-bootstrap";
import InitialMenu from "./InitialMenu";
import Button from "react-bootstrap/Button";

function UserPage() {
  return (
    <div>
      <InitialMenu disable={"visible"} log={"hidden"} />
      <div>
        <h1>Nombre del consumo seleccionado</h1>
        <Form.Group className=" container mt-5">
          <div className="w-50 h-100 d-flex flex-column">
            <label htmlFor="">Cantidad Consumo</label>
            <input type="text" placeholder="Ej:80" />

            <label htmlFor="">Unidad de medidad</label>
            <input type="text" placeholder="Ej: Kw/h" readOnly />

            <label htmlFor="">Factor de emisión</label>
            <input type="text" placeholder="Ej:80" />

            <FloatingLabel
              controlId="floatingSelect"
              label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </div>
          <Button type="submit">Submit form</Button>
        </Form.Group>

        <div className="w-50 h-100"></div>
      </div>
    </div>
  );
}

export default UserPage;

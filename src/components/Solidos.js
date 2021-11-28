import React from "react";
import { FloatingLabel, Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InitialMenu from "./InitialMenu";

function Solidos() {
  return (
    <div>
      <InitialMenu disable={"visible"} log={"hidden"} />
      <div>
        <h1>Solidos</h1>
        <Form.Group className=" container mt-5">
          <div className="w-50 h-100 d-flex flex-column">
            <label htmlFor="">Cantidad Consumo</label>
            <input type="text" placeholder="Ej:80" />

            <label htmlFor="">Unidad de medida</label>
            <input type="text" placeholder="Ej: Kw/h" readOnly />

            <label htmlFor="">Factor de emisión</label>
            <input type="text" placeholder="Ej:80" />

            <label htmlFor="">Fuente de emisión</label>
            <FloatingLabel controlId="floatingSelect">
              <Form.Select aria-label="Floating label select example">
                <option>Seleccione la fuente de emision</option>
                <option value="1">Activos fijos</option>
                <option value="2">Sistema de gestíon ambiental</option>
                <option value="3">Vicerrectoria</option>
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

export default Solidos;

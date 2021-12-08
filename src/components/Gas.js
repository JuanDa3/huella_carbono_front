import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InitialMenu from "./InitialMenu";
//import calculates from "../css/calculates.css";
import formula from "../images/formula.PNG";

const baseURL = "http://localhost:8000/calculo/consumo/";

function Gas() {
  const [calculo, setCalculo] = useState("Resultado");
  const [data, setData] = useState({
    cantidad: "",
    tipoConsumo: "GAS",
    unidadMedida: "Lb/mes",
    fuente: "",
    observaciones: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  async function createPost() {
    const response = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCalculo(response);
        alert("Calculo realizado satisfactoriamente");
      });
  }

  async function createPost2() {
    const response = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        cantidad: 100,
        fuente: "Activos Fijos",
        consumo: "GAS",
        unidad_medida: "Lb/mes",
        factor_emision: 0.08,
        observaciones: "tomada del año 2021",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div className="main">
      <InitialMenu disable={"visible"} log={"hidden"} />
      <div className="d-flex">
        <div className="w-50">
          <h1>Consumo de Gas</h1>
          <Form.Group className="container mt-5">
            <div className="h-100 d-flex flex-column container-form">
              <label htmlFor="">Cantidad Consumo</label>

              <Form.Control
                style={{ textAlign: "center" }}
                id="cantidad"
                onChange={(e) => handle(e)}
                type="number"
                placeholder="Ej:80"
              />

              <label htmlFor="">Fuente</label>
              <FloatingLabel controlId="floatingSelect">
                <Form.Select
                  name="fuente"
                  style={{ textAlign: "center" }}
                  onChange={(e) => handle(e)}
                  id="fuente"
                  aria-label="Floating label select example"
                >
                  <option>Seleccione la fuente</option>
                  <option value="Activos fijos">Activos fijos</option>
                  <option value="Sistema de gestion ambiental">
                    Sistema de gestíon ambiental
                  </option>
                  <option value="vicerrectoria">Vicerrectoria</option>
                </Form.Select>
              </FloatingLabel>

              <label htmlFor="">Unidad de medida</label>

              <Form.Control
                style={{ textAlign: "center" }}
                readOnly
                type="text"
                value="Lb/mes"
              />

              <label htmlFor="">Factor de emisión</label>

              <Form.Control
                style={{ textAlign: "center" }}
                readOnly
                type="text"
                value="0.08"
              />

              <label htmlFor="">Observaciones</label>
              <FloatingLabel label="Comments">
                <label htmlFor="">Cantidad Consumo</label>

                <Form.Control
                  onChange={(e) => handle(e)}
                  style={{ textAlign: "center" }}
                  id="observaciones"
                  style={{ height: "150px" }}
                  type="textarea"
                  placeholder="Aqui van las observaciones"
                />
              </FloatingLabel>
            </div>
            <Button onClick={createPost} className="button-enviar">
              Registrar
            </Button>

            <Button onClick={createPost2} className="button-enviar">
              Registrar Prueba
            </Button>
          </Form.Group>
        </div>
        <div className="w-50 d-flex flex-column align-items-center justify-content-center">
          <img src={formula} width="80%" alt="" />
          <div className="result">
            <h3>Resultado Emisión</h3>
            <Form.Control
              style={{ width: "530px", textAlign: "center" }}
              className=""
              type="text"
              placeholder="Resultado"
              readOnly
              value={calculo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gas;

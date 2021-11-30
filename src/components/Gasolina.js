import React from "react";
import { FloatingLabel, Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InitialMenu from "./InitialMenu";
import axios from "axios";
import formula from "../images/formula.PNG";

const baseURL = "http://localhost:8080/residuo/lista-residuos";

function Gasolina() {
  const [post, setPost] = React.useState(null);

  async function createPost() {
    // Simple POST request with a JSON body using axios
    const article = { title: "React POST Request Example" };
    await axios
      .get(baseURL)
      .then((response) => this.setState({ articleId: response.data.id }));
  }

  async function createPost2() {
    axios({
      method: "post",
      url: baseURL,
      data: {
        firstName: "Fred",
        lastName: "Flintstone",
      },
    });
  }

  async function getArray() {
    axios({
      method: "get",
      url: baseURL,
      responseType: "stream",
    }).then(function (response) {
      console.log(response);
    });
  }

  return (
    <div className="main">
      <InitialMenu disable={"visible"} log={"hidden"} />
      <div className="d-flex">
        <div className="w-50">
          <h1>Gasolina</h1>
          <Form.Group className=" container mt-5">
            <div className="h-100 d-flex flex-column">
              <label htmlFor="">Cantidad Consumo</label>
              <input type="text" placeholder="Ej:80" />

              <label htmlFor="">Unidad de medida</label>
              <input type="text" placeholder="Ej: Kw/h" readOnly />

              <label htmlFor="">Factor de emisión</label>
              <input type="text" placeholder="Ej:80" />

              <label htmlFor="">Fuente</label>
              <FloatingLabel controlId="floatingSelect">
                <Form.Select aria-label="Floating label select example">
                  <option>Seleccione la fuente</option>
                  <option value="1">Activos fijos</option>
                  <option value="2">Sistema de gestíon ambiental</option>
                  <option value="3">Vicerrectoria</option>
                </Form.Select>
              </FloatingLabel>

              <label htmlFor="">Observaciones</label>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </div>
            <Button onClick={getArray} className="button-enviar" type="submit">
              Registrar
            </Button>
          </Form.Group>
        </div>
        <div className="w-50 d-flex flex-column align-items-center justify-content-center">
          <img src={formula} width="80%" alt="" />
          <div className="result">
            <h3>Resultado</h3>
            <p>Emision</p>
            <Form.Control
              style={{ width: "530px" }}
              className=""
              type="text"
              placeholder="Resultado"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gasolina;

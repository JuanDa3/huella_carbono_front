import React, { useState, useEffect } from "react";
import userpage from "../css/menuConsumos.css";
import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

//const baseURL =
//"https://fastapi-back-huella-i4p2h5iogq-uc.a.run.app/calculo/consumo/";

const baseURL = "http://localhost:8000/calculo/consumo/";

function MenuConsumos() {
  const [calculo, setCalculo] = useState("");
  const [lblconsumo, setLblconsumo] = useState("Consumos");
  const [unidadmedida, setUnidadmedida] = useState("Seleccione una opcion");
  const [factoremision, setFactoremision] = useState("seleccione una opcion");
  const [data, setData] = useState();

  //variables
  const [cantconsumo, setCantconsumo] = useState("");
  const [consumo, setConsumo] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [factor_emision_valor, setFactor_emision_valor] = useState("");
  const [fuente, setFuente] = useState("");
  const [listaconsumos, setListaconsumos] = useState([]);

  const [postData, setPostData] = useState({
    cantidad: 0,
    consumo: "",
    emision: 0,
    factor_emision: "",
    factor_emision_valor: 0,
    observaciones: "",
    unidad_medida: "",
    usuario: "admin",
    fuente: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  console.log(postData);

  function menu(e) {
    if (postData.consumo != undefined) {
      if (e.target.value == "GAS") {
        setLblconsumo("Calculo de consumo de Gas");
        setConsumo(e.target.value);
        setUnidadmedida("Lb/mes");
        setFactoremision("kWtCO2eq");
        setFactor_emision_valor(1.98);

        postData.consumo = e.target.value;
        postData.unidad_medida = unidadmedida;
        postData.factor_emision = factoremision;
        postData.factor_emision_valor = factor_emision_valor;
      } else if (e.target.value == "ENERGIA") {
        setLblconsumo("Calculo de consumo de Energia");
        setConsumo(e.target.value);
        setUnidadmedida("Kw");
        setFactoremision("kWtCO2eq");
        setFactor_emision_valor(0.166);

        postData.consumo = e.target.value;
        postData.unidad_medida = unidadmedida;
        postData.factor_emision = factoremision;
        postData.factor_emision_valor = factor_emision_valor;
      } else if (e.target.value == "AGUA") {
        setLblconsumo("Calculo de consumo de Agua");
        setConsumo(e.target.value);
        setUnidadmedida("m3");
        setFactoremision("m3tCO2eq");
        setFactor_emision_valor(0.0835);

        postData.consumo = e.target.value;
        postData.unidad_medida = unidadmedida;
        postData.factor_emision = factoremision;
        postData.factor_emision_valor = factor_emision_valor;
      } else if (e.target.value == "PAPEL_CARTA") {
        setLblconsumo("Calculo de consumo de Papel Carta");
        setConsumo(e.target.value);
        setUnidadmedida("kg");
        setFactoremision("kgtCO2eq");
        setFactor_emision_valor(0.61);

        postData.consumo = e.target.value;
        postData.unidad_medida = unidadmedida;
        postData.factor_emision = factoremision;
        postData.factor_emision_valor = factor_emision_valor;
      } else if (e.target.value == "PAPEL_OFICIO") {
        setLblconsumo("Calculo de consumo de Papel Oficio");
        setConsumo(e.target.value);
        setUnidadmedida("kg");
        setFactoremision("kgtCO2eq");
        setFactor_emision_valor(0.61);

        postData.consumo = e.target.value;
        postData.unidad_medida = unidadmedida;
        postData.factor_emision = factoremision;
        postData.factor_emision_valor = factor_emision_valor;
      } else if (e.target.value == "GASOLINA") {
        setLblconsumo("Calculo de consumo de Gasolina");
        setConsumo(e.target.value);
        setUnidadmedida("m3");
        setFactoremision("m3tCO2eq");
        setFactor_emision_valor(1.98);

        postData.consumo = e.target.value;
        postData.unidad_medida = unidadmedida;
        postData.factor_emision = factoremision;
        postData.factor_emision_valor = factor_emision_valor;
      }
    }
  }

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = "hola mundo";
  });

  async function createPost() {
    const response = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCalculo(response);
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
        cantidad: 190,
        fuente: "",
        consumo: "GAS",
        unidad_medida: "Lb/mes",
        factor_emision: "kWtCO2eq",
        factor_emision_valor: 1.98,
        observaciones: "",
        emision: 13,
        usuario: "admin",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <>
      <div className="cards-menu">
        <div className="container container-card">
          <div>
            <button value="GAS" onClick={(e) => menu(e)}>
              Gas
            </button>
            <button value="ENERGIA" onClick={(e) => menu(e)}>
              Energia Electrica
            </button>
            <button value="AGUA" onClick={(e) => menu(e)}>
              AGUA
            </button>
            <button value="PAPEL_CARTA" onClick={(e) => menu(e)}>
              Papel Carta
            </button>
            <button value="PAPEL_OFICIO" onClick={(e) => menu(e)}>
              Papel Oficio
            </button>

            <button value="GASOLINA" onClick={(e) => menu(e)}>
              Gasolina
            </button>
          </div>
          <div>
            <a href="/peligrosos">Peligrosos</a>
            <a href="/solidos">Solidos</a>
            <a href="/organicos">Organicos</a>
            <a href="/aprovechados">Aprovechados</a>
          </div>
        </div>
      </div>
      <h1 className="mt-5" style={{ color: "black" }}>
        {lblconsumo}
      </h1>
      <div className="form_calculo">
        <div className="">
          <div className="d-flex">
            <div className="w-50">
              <Form.Group className="container mt-5">
                <div className="h-100 d-flex flex-column container-form">
                  <label style={{ color: "black" }} htmlFor="">
                    Cantidad Consumo
                  </label>

                  <Form.Control
                    style={{ textAlign: "center" }}
                    id="cantidad"
                    name="cantidad"
                    onChange={handleChange}
                    //onChange={(e) => handleCantConsumo(e)}
                    type="number"
                    placeholder="Ej:80"
                  />

                  <label style={{ color: "black" }} htmlFor="">
                    Fuente
                  </label>
                  <FloatingLabel controlId="floatingSelect">
                    <Form.Select
                      name="fuente"
                      style={{ textAlign: "center" }}
                      onChange={(e) => handleChange(e)}
                      //onChange={handleChange}
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

                  <label style={{ color: "black" }} htmlFor="">
                    Unidad de medida
                  </label>

                  <Form.Control
                    style={{ textAlign: "center" }}
                    readOnly
                    type="text"
                    value={unidadmedida}
                  />

                  <label style={{ color: "black" }} htmlFor="">
                    Factor de emisión
                  </label>

                  <Form.Control
                    style={{ textAlign: "center" }}
                    readOnly
                    type="text"
                    value={factor_emision_valor}
                  />

                  <label style={{ color: "black" }} htmlFor="">
                    Observaciones
                  </label>
                  <FloatingLabel label="Comments">
                    <label htmlFor="">Cantidad Consumo</label>

                    <Form.Control
                      onChange={handleChange}
                      style={{ textAlign: "center" }}
                      name="observaciones"
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
      </div>
    </>
  );
}

export default MenuConsumos;

import React from "react";
import huella1 from "../images/huella1.jpg";
import InitialMenu from "./InitialMenu";
import initialMenu from "../css/home.css";
import bombillos from "../images/bombillos.webp";
import huella4 from "../images/huella4.webp";
import huella6 from "../images/huella6.webp";

function Home() {
  return (
    <>
      <div className="mt-5">
        <div>
          <header className="header-index">
            <InitialMenu disable="hidden" log="visible"></InitialMenu>
            <div className="title">
              <h1>Huella de Carbono</h1>
            </div>
          </header>

          <section className="description">
            <h3 className="">Beneficios de calcular la huella de carbono</h3>
            <div className="content-cards">
              <div className="card">
                <img
                  src="https://drive.google.com/file/d/1iJOUmktSuf1tGLcOg7c1wMsh52JXmJil/view?usp=sharing"
                  alt=""
                  className="m-auto"
                />
                <p>
                  Generar diversas estrategias que permitan un ahorro de energía
                  eficaz y reducción de costos que pueden ir destinados a otro
                  tipo de actividades en pro del medio ambiente.
                </p>
              </div>
              <div className="card">
                <img className="m-auto" src={huella4} alt="" />
                <p>
                  Lograr una mayor comprensión del impacto ambiental generado a
                  lo largo de diversas actividades realizadas dentro del campus.
                </p>
              </div>
              <div className="card">
                <img className="m-auto" src={huella6} alt="" />
                <p>
                  A partir de los datos expuestos al publico, se crea conciencia
                  ambiental hacia todas las personas que hacen uso de las
                  instalaciones al interior de la universidad.{" "}
                </p>
              </div>
            </div>
          </section>
          <section className="huella">
            <h2>¿Qué es la huella de carbono?</h2>
            <p>
              La huella de carbono se crea a partir de la importancia de conocer
              el nivel de impacto en cuanto a emisiones de gases de efecto
              invernadero que genera ya sea cada persona, organización, región,
              entre otras, con respecto a sus actividades diarias. Esta se
              convierte en una herramienta útil de gestión para mejorar el uso
              de nuestros recursos. Es por esto que, por medio del proyecto
              HUELLA DE CARBONO, se busca evaluar el nivel de emisiones que
              genera la Universidad del Quindío a través de una plataforma que
              será destinada a la recolección, almacenaje y análisis de datos
              respectivos a la emisión de gases generados en el campus
              universitario. Esto con el fin de buscar estrategias que permitan
              a largo plazo disminuir satisfactoriamente el impacto ambiental
              generado en este.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;

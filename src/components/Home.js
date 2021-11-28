import React from "react";
import huella1 from "../images/huella1.jpg";
import InitialMenu from "./InitialMenu";

function Home() {
  return (
    <>
      <InitialMenu disable="hidden" log="visible"></InitialMenu>
      <div className="mt-5 container">
        <h1>Huella de Carbono</h1>
        <p>
          La huella de carbono se crea a partir de la importancia de conocer el
          nivel de impacto en cuanto a emisiones de gases de efecto invernadero
          que genera ya sea cada persona, organización, región, entre otras, con
          respecto a sus actividades diarias. Esta se convierte en una
          herramienta útil de gestión para mejorar el uso de nuestros recursos.
          Es por esto que, por medio del proyecto HUELLA DE CARBONO, se busca
          evaluar el nivel de emisiones que genera la Universidad del Quindío a
          través de una plataforma que será destinada a la recolección,
          almacenaje y análisis de datos respectivos a la emisión de gases
          generados en el campus universitario. Esto con el fin de buscar
          estrategias que permitan a largo plazo disminuir satisfactoriamente el
          impacto ambiental generado en este.
        </p>

        <img src={huella1} alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vitae
          dolorum possimus voluptatum accusantium dolorem qui voluptatibus
          quaerat explicabo laudantium expedita deleniti placeat quos nam!
          Eligendi esse ab corrupti maxime. Itaque cumque rem maiores porro
          dignissimos! Possimus deserunt non cupiditate expedita, obcaecati
          architecto debitis aliquam voluptas porro magni rem tenetur minus ab
          numquam. Deleniti voluptatem esse, ut facilis architecto inventore?
          Assumenda placeat itaque dolore odio ab doloribus, doloremque deleniti
          repellendus commodi cum recusandae provident atque quae magni
          voluptatem! Repudiandae temporibus ex iusto ratione enim nulla
          doloremque saepe unde dolore eligendi.
        </p>
        <a href="https://www.suster.org/wp-content/uploads/2019/10/uniquindio.jpg">
          Foto tomada de :
          https://www.suster.org/wp-content/uploads/2019/10/uniquindio.jpg
        </a>
      </div>
    </>
  );
}

export default Home;

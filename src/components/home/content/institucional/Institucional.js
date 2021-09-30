import React from "react";

import Title from "./title/Title";

import "./institucional.css";

const Institucional = ({ title }) => {
  return (
    <div className="institucional-body">
      <div className="institucional-container">
        <Title title={"Quienes somos"} />
        <p>
          Nuestra sociedad está
          integrada por un grupo
          de personas
          que nos dedicamos a 
          <br/>
          <span>criar </span>
          <span>, mejorar </span>, <span> conservar</span> y <span>difundir </span>
           la cría del 
          <strong> ave de raza pura</strong>.
          <br />
          Nuestro principal objetivo
          es conservar las razas
          totalmente puras,
          <br/>
          evitando así su extinción,
          principalmente en nuestro país.
          <br />
          Reproducimos, 
          seleccionamos y  
          criamos futuros reproductores.
        </p>
        <p>
          Nuestra principal 
          vidriera es la exposición 
          anual en la Expo Prado,
          <br />
          en ella participan 
          unas 550 Aves y unos 60 
          expositores de
           la sociedad
          y del interior del país.
          <br />
          Todos nuestros reproductores
          están inscriptos en los
          registros
          genealógicos del Uruguay.
          <br />
          Como dice nuestra bandera, 
          que todo sea en <br/>
          <strong> "AMISTAD Y COMPETENCIA"</strong>.
        </p>

        <Title title={"Historia"} />
        <p>
          En el año <span>1935 </span> se funda 
          dentro de las gremiales
          de la A.R.U.
          la sociedad de 
          avicultores del Uruguay.
          <br />
          En <span>1939</span> la sociedad de 
          avicultores del Uruguay
          agrega la Cunicultura y 
          la sociedad toma el nombre de
          <br /> 
          "Sociedad de Avicultura 
          y Cunicultura del Uruguay",
          S.A.C.U.
          <br />
          En <span>1941</span> se inicia la 
          que hasta hoy es llamada 
          "Exposición invernal de aves".
          <br />
          En el año <span>1939</span> las aves
          y los conejos se separan,
          el sector de aves cambia su nombre
          <br/> 
          pero mantiene
          la sigla, pasando a 
          llamarse hasta la actualidad
          <br />
          <span>"Sociedad de Avicultores 
          y Cabañeros del Uruguay"</span>,
          <br />
          <strong>S.A.C.U.</strong>
        </p>
        <Title title={"Actividades"} />
        <p>
          Algunas de las actividades 
          que la Gremial lleva a cabo 
          durante el año son:
         </p>
          <ul>
            <li>
          Organizar la exposición 
          anual de aves en la 
          Expo Prado
          </li>
          <li>
          Declaración de planteles
          </li>
          <li>
          Declaración de nacimientos
          </li>
          <li>
          Revisión sanitaria
          </li>
          <li>
          Trámites ante el M.G.A.P. 
          para obtener el número de
          DICOSE para todos los socios
          </li>
          </ul>
      </div>
    </div>
  );
};

export default Institucional;

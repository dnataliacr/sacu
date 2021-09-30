import React from "react";

import "./directiva.css";

const Directiva = () => {
  return (
    <div className="directiva-body">
      <div className="directiva-container">
        <h2>Comision directiva para el ejercicio 2021 - 2022 </h2>
        <table className="directiva-table">
          <thead>
            <tr>
              <th> </th>
              <th>TITULARES</th>
              <th>SUPLENTES</th>
              <th>Comision Fiscal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Presidente</th>
              <td>Laurindo Cabral</td>
              <td>Jose River</td>
              <td>Atilio Navarro</td>
            </tr>
            <tr>
              <th>Vicepresidente</th>
              <td>Nestor Buela</td>
              <td>Fabian Facal</td>

              <td>Yamila Cruz</td>
            </tr>
            <tr>
              <th>Secretario</th>
              <td>Juan Furtado</td>
              <td>Alejandro Gallego</td>
              <td>Victor Munioz</td>
            </tr>
            <tr>
              <th>Tesorero</th>
              <td>Mirtha Rodriguez</td>
              <td>Enrique Goros</td>
              <td></td>
            </tr>
            <tr>
              <th>Vocal</th>
              <td>Ruben Larranaga</td>
              <td>Marcelo Curbelo</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Directiva;

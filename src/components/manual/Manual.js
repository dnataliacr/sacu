import React from "react";

import "./manual.css";
import chick1 from '../../images/chick1.png'
import chick2 from '../../images/chick2.jpg'
import chick3 from '../../images/chick3.png'
import chick4 from '../../images/chick4.png'

const Manual = () => {
  return (
    <div className="manual-content-body">
      <div className="manual-content-container">
        <h1> Pequeño manual de incubación</h1>
        <div className="manual-div-img"> 
<img src={chick3} alt="pollito"/>
        </div>
        <div>
          <p>
            <h2> Incubación:</h2>
            Describiremos la incubación como una etapa más dentro del proceso
            reproductivo de las aves, más concretamente en la gallina. <br />
            Antes de comenzar a describír la incubación debemos definir que es
            un <em> huevo fértil:</em> <br />
            es aquel producido por un plantel reproductor en el que conviven
            machos y hembras y se encuentra fertilizado, <br />
            cuando este es puesto (20hr) ya existe desarrollo embrionario en él
            (blastodermo)
          </p>
        </div>
        <div>
          <p>
            Huevo incubable es aquel huevo fecundado, conservado y transportado
            hasta la incubación en condiciones adecuadas <br />
            de manejo e higiene y con una calidad externa (cascará) e interna
            (albumen) <br />
            que permita el desarrollo embrionario.
          </p>
        </div>
        <div>
          <h3> Fenómenos importantes del desarrollo embrionario:</h3>
          <p>
            <span>
              {" "}
              <em>Antes de la postura:</em> Fecundación{" "}
            </span>{" "}
            <br />
            <span>
              {" "}
              <em> Entre postura e incubación: </em> se detiene el desarrollo,
              estado de vida latente del embrión.
            </span>
          </p>
        </div>

        <div>
          <h2> Incubación natural: </h2>
          <p>
            La incubación abarca en las aves la segunda etapa de los procesos
            reproductivos, <br />
            esta viene acompañada con cambios en el comportamiento de las
            mismas, apareciendo el instinto maternal <br />
            que regula la incubación de los huevos y cuidado de las crías.{" "}
            <br />
            El estímulo incubador cloquez, con la aparición de la incubación
            artificial no solo no es deseable, <br />
            sino que desde el punto de vista productivo es perjudicial, <br />
            ya que reduce el número de huevos puestos por hembra.
            <br />
            <em>
              Por ese motivo tratamos de anular o disminuir ese instinto,
              utilizando dos métodos complementarios:{" "}
            </em>
          </p>
          <div className="manual-div-img"> 
<img src={chick1} alt="pollito"/>
        </div>
          <div className="manual-div-ul">
            <h3>
              {" "}
              Modificación de factores medioambientales que favorecen la
              aparición de la cloquez:
            </h3>
            <ul>
              <li>
                Nido: la existencia de ellos hace que la hembra pase mucho
                tiempo en ellos estimulando la cloquez.
              </li>

              <li>
                Presencia de huevo en los nidos, de aquí la importancia de
                recogida frecuentes a lo largo del día.
              </li>

              <li>
                Temperatura ambiental al aumentar favorece el cese de la puesta
                y el inicio de la incubación.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Selección genética de las aves: </h3>

          <p>
            {" "}
            Aquí tenemos que en las líneas de ponedoras comerciales una
            tendencia muy baja a la cloquez, <br />
            lo mismo ocurre con ciertas razas usadas en la avicultura clásica
            que por la selección que ha sido <br />
            efectuada durante años es prácticamente inexistente la aparición de
            la cloquez, <br />
            por ejemplo en la raza New Hampshire. <br />
            Lo mismo ocurre con el caso de la codorniz, no así con otras aves{" "}
            <br />
            en donde la tendencia a la cloquez es muy acentuada como por ejemplo
            ganso, pato, pavo.
          </p>
          <p>
            En el manejo de las aves previniendo la cloquez, además de las
            medidas anteriores, <br />
            debemos identificar rápidamente las hembras cluecas por sus cambios
            morfológicos, <br />
            disminución de peso, disminución del tamaño de la cresta, <br />
            áreas sin plumas en el abdomen, así como cambios en la conducta,{" "}
            <br />
            permanencia en los nidos, agresividad. <br />
            Si esto ocurre debemos trasladar la hembra para modificar su
            ambiente colocándola en jaula <br />y favorecer el consumo de
            alimento.
          </p>
        </div>

        <div>
          <h2>Incubación artificial: </h2>
          <p>
            Primeramente trataremos el manejo del huevo fértil, ya que este{" "}
            <br />
            una vez puesto por la gallina detiene el desarrollo siempre y cuando
            la temperatura <br />
            sea menor a 21C, de ahí la importancia de un correcto manejo y
            almacenamiento <br />
            del mismo hasta el momento de cargar la incubadora.
            <h3>El galpón o granja: </h3>
            <strong> Nidos: </strong>
            correcta cantidad de los mismos según el número de aves, <br />
            uno por cada cuatro gallinas, en caso de ponederos comunitarios
            1m2/25,
            <br />
            con material limpio e higiénico, cambiado regularmente. <br />
            Recuerde que cuando el huevo es puesto se encuentra limpio y libre
            de microorganismos. <br />
            <strong> Recolección: </strong> a intervalos frecuentes 4/5 día, que
            puede ser necesario <br />
            aumentar en días calurosos o climas cálidos. <br />
            <strong>
              Eliminación para la incubación de los huevos recogidos del piso,
            </strong>
            ya que estos entraron en contacto con la cama <br />
            y materias fecales por lo cual poseen una alta contaminación. <br />
            <strong> Eliminación de huevos sucios, </strong>
            sobre todo si es con materia fecal <br />
            <strong> Desinfección: </strong>Rociado con desinfectante:
            <br /> Rociado de los huevos con Formol al 1% amonios cuaternarios
            (cloruro de benzalconio).
          </p>
          <h5>
            {" "}
            Luego estamos en condiciones de seleccionarlos y almacenarlos hasta
            el momento de cargar la incubadora.
          </h5>
          <div className="manual-div-img"> 
<img src={chick2} alt="pollito"/>
        </div>
          <div className="manual-div-ul">
            <ul>
              <li>
                <strong>- Almacenamiento:</strong> Cuando la temperatura
                ambiente es alta (27 grados) <br />
                hay que trasladarlos rápidamente a un lugar con temperatura por
                debajo de los 20 grados, <br />
                para así evitar el desarrollo del embrión que luego puede
                debilitarse y morir <br />
                en la incubación, por este motivo deben evitarse <br />
                las fluctuaciones de temperatura.
              </li>
              <li>
                <strong>- Humedad:</strong> Entre 70-80% no debiendo alcanzar la
                saturacion, <br />
                ya que la condensación de agua sobre la cáscara del huevo <br />
                proporciona un medio para la multiplicación bacteriana.
              </li>
              <li>
                {" "}
                <strong>- Temperatura: </strong> Depende del tiempo previsto de
                conservación, <br />
                si no sabemos cuantos días va a estar almacenado recomendamos
                conservaros a 15-18C, <br />
                las líneas de huevo castaño necesitaran un poco más de H: Blanco
                12-15 c-H: Castaño 18C.
              </li>

              <li>
                {" "}
                <strong>- Tiempo: </strong> El óptimo de almacenamiento son tres
                día, pero puede llegar a siete. <br />
                Deben mantenerse en maples siempre con la cámara de aire
                (extremo romo) hacia arriba
              </li>
            </ul>
          </div>
          <div className="manual-div-table">
            <table>
              <thead>
                <th>Tiempo de Conservacion(d)</th>
                <th>Temperatura(C)</th>
                <th>Humedad(%)</th>
              </thead>

              <tbody>
                <td>1-3</td>
                <td>22</td>
                <td>70-80</td>
              </tbody>
              <tbody>
                <td>22</td>
                <td>16</td>
                <td>12</td>
              </tbody>
              <tbody>
                <td>70-80</td>
                <td>70-80</td>
                <td>70-80</td>
              </tbody>
            </table>
          </div>
          <h5> Selección: </h5>
          <p>
            {" "}
            Tratamos en este momento de identificar los huevos no aptos para la
            incubación, <br />
            es un paso previo al cargado de la incubadora.
          </p>
          <div className="manual-div-ul">
            <h5>No aptos:</h5>
            <ul>
              <li>
                Demasiado grandes o pequeños, dependiendo de la línea 52-64gr.{" "}
              </li>
              <li>Doble yema </li>
              <li>Sucios/rotos </li>
              <li>Problemas de cáscara débil o gruesa </li>
              <li> Cámara de aire grande o flotante </li>
              <li>
                {" "}
                Alteración de la forma, anillada Presencia de manchas de sangre.
              </li>
            </ul>
          </div>
          <h3> Segunda desinfección: </h3>
          <p>
            La realizaremos con los mismos productos que vimos para la
            desinfección en la granja.
          </p>
          <em>
            La importancia de la desinfección la podemos observar el siguiente
            cuadro:{" "}
          </em>
          <div className="manual-div-table">
            <table>
              <thead>
                <th>Edad del huevo</th>
                <th>Nro bacterias/cascara</th>
                <th> </th>
              </thead>

              <tbody>
                <td>Puesta</td>
                <td>15 minutos</td>
                <td>1 hora</td>
              </tbody>
              <tbody>
                <td>300 - 500</td>
                <td>1500 - 3000</td>
                <td>20000 30000</td>
              </tbody>
              <tbody>
                <td>70-80</td>
                <td>70-80</td>
                <td>70-80</td>
              </tbody>
            </table>
          </div>
          <div className="manual-div-ul">
            <h2> INCUBACIÓN: </h2>
            El proceso de incubación depende esencialmente de cuatro factores:
            <ul>
              <li> Temperatura </li>
              <li> Humead </li>
              <li> Ventilación </li>
              <li>Volteo </li>
            </ul>
          </div>
          <div className="manual-div-table">
            Las condiciones de incubación ideales son:
            <table>
              <thead>
                <th>Temperatura</th>
                <th>Ventilación</th>
                <th>Volteo máximo</th>
                <th>Humedad</th>
              </thead>

              <tbody>
                <td>37.8C</td>
                <td>Dióxido de Carbono 0.5% Oxigeno 21% </td>
                <td>1 cada hora</td>
                <td>60%</td>
              </tbody>
            </table>
          </div>
          <div className="mucho-texto">
            <p>
              En cuanto a incubadoras caseras en las cuales no podemos regular{" "}
              <br />
              la ventilación se aconseja a partir de la semana cuando hacemos{" "}
              <br />
              los volteos dejar unos minutos abierta la puerta para favorecer{" "}
              <br />
              la ventilación.
            </p>
            El volteo es necesario para evitar que el embrión se adhiera <br />a
            la cara interna de a cáscara y membranas vitelinas.
            <p>
              El ángulo correcto de volteo es 45 a cada lado de la vertical{" "}
              <br />
              (total 90) en cuanto a la frecuencia de los sistemas actuales
              programan <br />
              volteos cada hora, en máquinas manuales lo recordable <br />
              sería 6 volteos diarios fundamentalmente la primera semana <br />
              que es cuando el riesgo de adherencia es mayor. <br />
            </p>
            <strong>
              {" "}
              Recordar que debemos colocarlos en la incubadora siempre con la
              cara de aire hacia arriba.{" "}
            </strong>
          </div>
        </div>
        <div className="manual-div-tab">
          <h3>
            {" "}
            Fenómenos importantes en el desarrollo embrionario durante la
            incubación:{" "}
          </h3>
          <table>
            <thead>
              <th>Dia de incubacion</th>
              <th></th>
            </thead>

            <tbody>
              <td>1</td>
              <td>Comienza a esbozarse el embrión</td>
            </tbody>
            <tbody>
              <td>2</td>
              <td> Comienza a latir el corazón</td>
            </tbody>
            <tbody>
              <td>3</td>
              <td>Formación de amnios y alantoides</td>
            </tbody>
            <tbody>
              <td>4</td>
              <td> Esbozo de cola, patas y ala</td>
            </tbody>
            <tbody>
              <td>5</td>
              <td>
                {" "}
                Formación de los órganos de la reproducción y diferenciación
                sexual
              </td>
            </tbody>
            <tbody>
              <td>8</td>
              <td> Comienza la formacion de las plumas</td>
            </tbody>
            <tbody>
              <td>10</td>
              <td>Vomienza la mineralización ósea</td>
            </tbody>
            <tbody>
              <td>14</td>
              <td>Gira la cabeza hacia el polo obtuso del huevo</td>
            </tbody>
            <tbody>
              <td>17</td>
              <td>Vuelve el pico hacia la cámara de aire</td>
            </tbody>
            <tbody>
              <td>19</td>
              <td>Empieza a reabsorberse el saco vitelino</td>
            </tbody>
            <tbody>
              <td>20</td>
              <td>
                El saco vitelino está dentro del cuerpo, el embrión ocupa todo
                el interior del huevo excepto la cámara de aire.
              </td>
            </tbody>
          </table>
        </div>

        <div className="mucho-texto">
          {" "}
          <h2> TRANSFERENCIA: </h2>
          <p>
            {" "}
            En el ámbito de la incubación artificial se llama transferencia al{" "}
            <br />
            proceso de trasladar los huevos que se han incubado 18 días en el{" "}
            <br />
            caso de la gallina, a una bandeja en la que se producirá el
            nacimiento, <br />
            para realizarlo correctamente es necesario que el embrión no sufra{" "}
            <br />
            bajas temperaturas y no dañar con golpes el huevo <br />
            durante el procedimiento.
          </p>
          <p>
            En las incubadoras horizontales se puede instalar una bandeja <br />
            en la parte más baja de la incubadora <br />
            para producir en ella el nacimiento de los bebes.
          </p>
          <h4>
            Los motivos por los cuales es necesario separar las actividades de
            incubación y nacimiento son las siguientes:{" "}
          </h4>
          <strong> Productivo: </strong>
          En nacedoras se mejora el índice de eclosión y viabilidad del pollito{" "}
          <br />
          por disminución de la temperatura y aumento de la humedad. <br />
          <strong>Sanitario: </strong>El nacimiento es un momento de gran <br />
          diseminación bacteriana que puede contaminar los huevos <br /> que
          están siendo incubadas.
        </div>
        <div className="manual-div-img"> 
<img src={chick4} alt="pollito"/>
        </div>
        <div className="manual-div-table">
          Las condiciones ideales de temperatura nacedora son:
          <table>
            <thead>
              <th>Temperatura</th>
              <th>Ventilación</th>
              <th>Volteo máximo</th>
              <th>Humedad</th>
            </thead>

            <tbody>
              <td> 36.8C</td>
              <td>Dióxido de Carbono 0.5% Oxigeno 21%</td>
              <td>No se ejecuta volteo</td>
              <td>70%</td>
            </tbody>
          </table>
        </div>
        <div>
          <h3> Control de incubación: </h3>
          <p>
            El primer miraje lo llevaremos a cabo al 5-6 día para eliminar los
            huevos no fecundados, aquí los distinguimos como “huevos claros”, el
            miraje debe ser realizado lo mas rápido posible para evitar el
            enfriamiento de los huevos. El 2 miraje lo practicamos en el momento
            de pasaje a nacedera (día 18). El tiempo de eclosión puede variar en
            24 horas{" "}
          </p>
        </div>
        <div className="manual-div-ul">
          <h3>Los factores que incrementan el tiempo de incubación son: </h3>
          <ul>
            <li>
              {" "}
              Huevos viejos, con largo periodo de almacenamiento, por cada día
              aumenta en una hora el tiempo de incubación.
            </li>
            <li> Baja temperatura en la incubadora </li>
            <li> Huevos de gran tamaño </li>
            <li>
              Los huevos almacenados por más de siete días deben ser cargados 30
              minutos antes por cada día que pase del octavo.
            </li>
          </ul>
        </div>
        <div className="manual-div-ul">
          <h3> Los factores que disminuyen el tiempo de incubación son: </h3>
          <ul>
            <li> Alta temperatura en la incubadora</li>
            <li>Huevos pequeños </li>
            <li>Huevos de lote reproductor de animales jóvenes </li>
          </ul>
        </div>
        <div className="manual-div-table">
          <span>
            <em>
              Por último tomar en cuenta el número de pollitos nacidos por el
              total de huevos cargados en la incubadora es el índice que
              llamaremos incubabilidad.
            </em>
          </span>
          <table>
            <tbody>
              <td></td>
              <td></td>
              <td>Numero de nacimientos x 100</td>
            </tbody>
            <tbody>
              <td></td>
              <td></td>
              <td>Huevos cargados</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manual;

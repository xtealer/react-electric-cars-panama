import React from 'react';

const BlogView = () => {
  return (
    <div className="row flex-row justify-content-center mx-0">
      <div className="col-10 px-0">
        <hr className="mt-5" />
        <h3 className="text-center">Autos eléctricos circulando en Panamá</h3>
        <hr />
        <p className="text-justify">
          Se estima que en Panamá circulan 200 vehículos, entre autos y
          autobuses, totalmente eléctricos, y unos 1,400 autos híbridos,
          aquellos que operan con carga eléctrica y combustible. En el
          territorio nacional podrán instalarse estaciones de carga, que serán
          diferenciadas por categorías.
        </p>
        <p className="text-justify mb-0">
          Durante el foro informativo organizado por la Autoridad de los
          Servicios Públicos (Asep) se presentó a los asistentes un documento
          borrador sobre el procedimiento para regular la instalación de
          cargadores y medición de consumo de vehículos eléctricos, que incluyó
          las disposiciones generales, las estaciones de carga y los tipos de
          clientes.
        </p>
        <div className="row col-md mx-0 pb-4 px-0">
          <div className="col pl-0 mt-4 text-center">
            <img
              style={{ maxWidth: 150 }}
              src={require('../images/good-thumb.jpg')}
              alt="good-thumb"
            />
            <h3 className="text-center text-success my-3 px-0">Ventajas</h3>
            <ul className="list-group text-left">
              <li className="list-group-item">Aire más limpio</li>
              <li className="list-group-item">Poco mantenimiento</li>
              <li className="list-group-item">
                Conducción más cómoda y relajada
              </li>
              <li className="list-group-item">
                Contribuye con el medio ambiente
              </li>
              <li className="list-group-item">
                Mayor eficiencia y con ello ahorro
              </li>
            </ul>
          </div>
          <div className="col pr-0 mt-4 text-center">
            <img
              style={{ maxHeight: 150 }}
              src={require('../images/bad-thumb.png')}
              alt="bad-thumb"
            />
            <h3 className="text-center text-danger my-3">Desventajas</h3>
            <ul className="list-group text-left">
              <li className="list-group-item">MayorPrecio</li>
              <li className="list-group-item">Escasa red de recarga</li>
              <li className="list-group-item">Tiempo de recarga elevado</li>
              <li className="list-group-item">Menor autonomía</li>
              <li className="list-group-item">Pocos talleres autorizados</li>
            </ul>
          </div>
        </div>
        <img
          className="my-4 w-100"
          src={require('../images/recharge.jpg')}
          alt="ev-plug"
        />
        <hr />
        <h3 className="text-center">
          ¿Vale la pena comprar un EV?
        </h3>
        <hr />
        <ol className="list-group mb-5 px-0">
          <li className="text-justify">
            Podemos destacar que es ‘eco-friendly’. Es decir, es respetuoso
            con el entorno, ya que no emite gases CO₂ al circular ni hace
            tanto ruido como los vehículos tradicionales.
          </li>
          <li className="mt-3 text-justify">
            Usar la electricidad como ‘combustible’ hace que los
            desplazamientos sean más baratos. El uso del coche eléctrico es
            más rentable a la larga, ya que el km recorrido con electricidad
            es más económico que hacerlo con diesel o gasolina.
          </li>
          <li className="mt-3 text-justify">
            Los accidentes de transito se reducirán debido a que los vehículos
            autónomos tienen un sistema inteligente que está programado con
            sensores, rayos láser y GPS, para tomar las decisiones adecuadas
            al momento de la conducción en las carreteras. Este sistema
            permite relacionar, percibir situaciones en la vía e conectarse
            con otros vehículos, lo que permite la toma de decisiones
            adecuadas evitando los accidentes.
          </li>
          <li className="mt-3 text-justify">
            Menos ruidosos. Otra ventaja que ofrecen estos coches es una menor
            contaminación acústica, que es uno de los problemas principales de
            para las urbanizaciones.
          </li>
        </ol>
        <hr />
        <h2 className="text-center mb-0">
          Puntos a tomar en cuenta al momento de comprar EV's
        </h2>
        <hr />
        <img
          className="my-4 w-100"
          src={require('../images/58.jpg')}
          alt="ev-car-1"
        />
        <hr />
        <h4 className="text-center">Carga fácil</h4>
        <hr />
        <p className="text-justify">
          <span className="font-weight-bold">Tipo 1:</span> Se refiere al uso de
          cualquier toma de corriente doméstica estándar de tres puntas, la
          misma que alimenta cualquier teléfono inteligente. Prácticamente,
          todos admiten este tipo de carga. La mala noticia es que es
          odiosamente lenta. Por ejemplo, rehabilitar un Nissan Leaf con un
          cargador estándar de 120 voltios toma más de 20 horas.
        </p>
        <p className="text-justify">
          <span className="font-weight-bold">Tipo 2:</span> Es mucho más rápido
          y será el que quieras usar con mayor frecuencia, especialmente si
          instalas un cargador en el garaje. Para el mismo Leaf, una carga
          completa por esta vía de 240 voltios toma entre cuatro y ocho horas.
        </p>
        <h5 style={{ color: 'red' }}>Información importante:</h5>
        <p className="text-justify">
          Los tiempos de carga variarán según el estado de carga de la batería,
          su antigüedad y su kilometraje. Las baterías de iones de litio que
          alimentan a la gran mayoría de los autos eléctricos pierden su
          capacidad de mantener una carga en el tiempo. En un período de 10
          años, la pérdida gradual podría alcanzar cerca de un tercio, aunque la
          mayoría de los autos están respaldados por una buena garantía.
        </p>
        <hr className="mt-5" />
        <h4 className="text-center">Mejor en casa</h4>
        <hr />
        <p className="text-justify mb-5">
          Si estás decidido a comprar un auto eléctrico, te recomendamos
          instalar un cargador de Nivel 2 en casa. Si bien es posible
          arreglárselas con uno de Nivel 1 (básicamente un tomacorriente de
          pared), o incluso usando estaciones de carga públicas, no hay nada
          mejor que tener uno en el garaje. Los cargadores de Nivel 2 funcionan
          con sistemas 220/240 como un electrodoméstico, de modo que la mayoría
          de los electricistas pueden instalar uno. Incluso puedes comprar uno a
          través de Amazon, que además te recomendará un experto. Kia y Audi se
          encuentran entre las compañías que se han asociado con Amazon para
          ayudar a los consumidores a obtener el cargador que más les convenga.
        </p>
      </div>
    </div>
  );
};

export default BlogView;

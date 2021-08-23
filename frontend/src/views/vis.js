import React from 'react';
import {
  XYPlot,
  VerticalBarSeries,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

const data_year_sold = [
  { x: '2011', y: 129 },
  { x: '2012', y: 171 },
  { x: '2013', y: 121 },
  { x: '2014', y: 118 },
  { x: '2015', y: 251 },
  { x: '2016', y: 289 },
  { x: '2017', y: 358 },
  { x: '2018', y: 233 }
];

const data_model_total1 = [
  { x: 'prius', y: 129 },
  { x: 'civic_hybrid', y: 171 },
  { x: 'e5', y: 121 },
  { x: 'e6', y: 118 },
  { x: 'i8', y: 251 },
  { x: 'i3', y: 289 },
  { x: 'i3 94AH', y: 358 },
  { x: 'i3S 94AH', y: 233 },
  { x: 'x5 xdrive 40e', y: 129 },
  { x: '530e', y: 171 },
  { x: '740e', y: 121 },
  { x: 'active Hybrid 7', y: 118 },
  { x: 'active Hybrid 5', y: 251 },
  { x: 'cooper S All4', y: 289 },
  { x: 'q50 H', y: 358 }
];

const data_model_total2 = [
  { x: 'qx60H', y: 233 },
  { x: 's400 Hybrid Long', y: 358 },
  { x: 's400 Hybrid', y: 233 },
  { x: 'ct 200H', y: 129 },
  { x: 'rx 450H', y: 171 },
  { x: 'nx 300H', y: 121 },
  { x: 'gs450H', y: 118 },
  { x: 'es300H', y: 251 },
  { x: 'cayenne S E- HIBRID', y: 289 },
  { x: 'cayenne S HIBRID TIP', y: 358 },
  { x: 'panamera 4 E - HYBRID', y: 233 }
];

const data_model_emissions1 = [
  { x: 'prius', y: 25 },
  { x: 'civic_hybrid', y: 109 },
  { x: 'e5', y: 0 },
  { x: 'e6', y: 0 },
  { x: 'i8', y: 49 },
  { x: 'i3', y: 0 },
  { x: 'i3 94AH', y: 12 },
  { x: 'i3S 94AH', y: 13 },
  { x: 'x5 xdrive 40e', y: 77 },
  { x: '530e', y: 40 },
  { x: '740e', y: 51 },
  { x: 'active Hybrid 7', y: 158 },
  { x: 'active Hybrid 5', y: 141 }
];

const data_model_emissions2 = [
  { x: 'cooper S All4', y: 149 },
  { x: 'q50 H', y: 114 },
  { x: 'qx60H', y: 156 },
  { x: 's400 Hybrid Long', y: 188 },
  { x: 's400 Hybrid', y: 186 },
  { x: 'ct 200H', y: 87 },
  { x: 'rx 450H', y: 136 },
  { x: 'nx 300H', y: 94 },
  { x: 'gs450H', y: 104 },
  { x: 'es300H', y: 100 },
  { x: 'panamera 4 E - HYBRID', y: 62 }
];

class Viz extends React.Component {
  render() {
    return (
      <div className="row flex-row mx-0">
        <div className="col px-0">
          <div className="bg-dark py-4">
            <h1 className="display-5 mb-0 mt-2 text-center text-light">
              DATASET
          </h1>
          </div>
          <h2 className="text-center mb-0 mt-5">Registro de Autos Electricos/Hibridos</h2>
          <div className="h-scroll mt-2 mx-auto w-75">
            <XYPlot height={400} width={700} xType="ordinal">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data_year_sold} />
            </XYPlot>
          </div>
          <h2 className="text-center mb-0 mt-5">Total de Autos por Modelo Parte 1</h2>
          <div className="h-scroll mt-2 mx-auto">
            <XYPlot height={400} width={1800} xType="ordinal">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalBarSeries data={data_model_total1} />
            </XYPlot>
          </div>
          <h2 className="text-center mb-0 mt-5">Total de Autos por Modelo Parte 2</h2>
          <div className="h-scroll mt-2 mx-auto">
            <XYPlot height={400} width={2000} xType="ordinal">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalBarSeries data={data_model_total2} />
            </XYPlot>
          </div>
          <h2 className="text-center mb-0 mt-5">Emisiones de Carbono por Kilometro Recorrido 1 (g/KM)</h2>
          <div className="h-scroll mt-2 mx-auto">
            <XYPlot height={400} width={1700} xType="ordinal">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalBarSeries data={data_model_emissions1} />
            </XYPlot>
          </div>
          <h2 className="text-center mb-0 mt-5">Emisiones de Carbono por Kilometro Recorrido 2 (g/KM)</h2>
          <div className="h-scroll mt-2 mx-auto">
            <XYPlot height={400} width={1600} xType="ordinal">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalBarSeries data={data_model_emissions2} />
            </XYPlot>
          </div>
        </div>
      </div>
    );
  }
}
export default Viz;

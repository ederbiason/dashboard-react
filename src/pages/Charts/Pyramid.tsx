import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, AccumulationDataLabel, Inject, AccumulationTooltip, PyramidSeries, AccumulationSelection } from "@syncfusion/ej2-react-charts"

import { ChartsHeader } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider"

import { PyramidData } from "../../data/dummy";

export default function Pyramid() {
  const { currentMode } = useStateContext()
  
  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{background: 'white'}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltip={{ enable: true }}
        >
          <Inject services={[AccumulationLegend, AccumulationSelection, PyramidSeries, AccumulationDataLabel, AccumulationTooltip]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{mode: 'Drop', fill: 'red'}}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}
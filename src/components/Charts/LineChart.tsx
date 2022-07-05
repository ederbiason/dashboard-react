import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from "@syncfusion/ej2-react-charts"

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"

export default function LineChart() {
  const { currentMode } = useStateContext()

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: {width: 0 }}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[DateTime, LineSeries, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Tooltip, ColumnSeries, Category, Legend } from "@syncfusion/ej2-react-charts"

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"
import { ChartsHeader } from "../../components"

export default function Bar() {
  const { currentMode } = useStateContext()

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <ChartComponent
        id="charts"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: {width: 0 }}}
        tooltip={{enable: true}}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{background: 'white'}}
      >
        <Inject services={[Tooltip, DataLabel, Legend, ColumnSeries, Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
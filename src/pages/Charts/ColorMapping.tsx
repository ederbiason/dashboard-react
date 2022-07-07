import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category,Tooltip, Legend, RangeColorSettingsDirective, RangeBandSettingDirective, RangeColorSettingDirective } from "@syncfusion/ej2-react-charts"

import { colorMappingData, ColorMappingPrimaryYAxis, ColorMappingPrimaryXAxis, rangeColorMapping } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"
import { ChartsHeader } from "../../components"

export default function ColorMapping() {
  const { currentMode } = useStateContext()

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="AAPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: {width: 0 }}}
          legendSettings={{mode: 'Range', background: 'white'}}
          tooltip={{enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[Tooltip, Legend, ColumnSeries, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              xName='x'
              yName='y'
              name="USA" 
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10
              }}
            />
          </SeriesCollectionDirective>

          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} /> )}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}
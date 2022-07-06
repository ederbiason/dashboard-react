import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from "@syncfusion/ej2-react-charts"
import { ReactNode } from "react";

import { useStateContext } from "../../contexts/ContextProvider"

type PieProps = {
  id: string;
  data: { x: string; y: number; text: string; }[];
  legendVisibility: boolean;
  height: string;
}

export default function Pie({id, data, legendVisibility, height}: PieProps) {
  const { currentMode } = useStateContext()
  
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{visible: legendVisibility, background: 'white'}}
      height={height}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />

      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
          name="Sales"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            }
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}
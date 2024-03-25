import React from 'react';
import { LineChartBicolor } from '../../LineChart/LineChartBicolor';

const BiColorAreaChart = () => {
  const lineData = [
    {value: 0, label:'0'},
    {value: 20, label:'20'},
    {value: -18, label:'-18'},
    {value: 40, label:'40'},
    {value: 36, label:'36'},
    {value: -60, label:'-60'},
    {value: 54, label:'54'},
    {value: 85, label:'85'},
  ];
  return (
    <div style={{borderWidth:1}}>
      <LineChartBicolor
        data={lineData}
        areaChart
        color="green"
        colorNegative="red"
        startFillColor="green"
        startFillColorNegative="red"
        showXAxisIndices
        showVerticalLines
      />
    </div>
  );
};

export default BiColorAreaChart;

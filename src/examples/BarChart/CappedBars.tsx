import React from 'react';
import {BarChart} from '../../BarChart';
import { yAxisSides } from 'gifted-charts-core';

const CappedBars = () => {
  const data = [
    {value: 15, label: 'Jan'},
    {value: 40, label: 'Feb'},
    {value: 10, label: 'Mar'},
    {value: 30, label: 'Apr'},
  ];
  return (
    <div style={{borderWidth:1}}>
      <BarChart
        data={data}
        barWidth={35}
        cappedBars
        capColor={'rgb(78, 0, 142)'}
        capThickness={4}
        showGradient
        gradientColor={'rgba(200, 100, 244,0.8)'}
        frontColor={'rgba(219, 182, 249,0.2)'}
        width={220}
        yAxisSide={yAxisSides.RIGHT}
      />
    </div>
  );
};

export default CappedBars;

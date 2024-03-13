import React from 'react';
import {BarChart} from '../../BarChart';
import { ruleTypes } from 'gifted-charts-core';

const BarChartWithGivenNumberOfVerticalLines = () => {
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
        width={300}
        showVerticalLines
        noOfVerticalLines={7}
        verticalLinesSpacing={40}
        rulesType={ruleTypes.SOLID}
        showValuesAsTopLabel
        isAnimated
      />
    </div>
  );
};

export default BarChartWithGivenNumberOfVerticalLines;

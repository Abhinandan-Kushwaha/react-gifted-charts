import React from 'react';
import {PieChart} from '../../PieChart';

const ProgressPie = () => {
  const pieData = [
    {value: 70, color: '#177AD5'},
    {value: 30, color: 'lightgray'},
  ];
  return (
    <div style={{borderWidth:1}}>
      <PieChart
        donut
        innerRadius={80}
        data={pieData}
        centerLabelComponent={() => {
          return <div style={{fontSize: 30}}>70%</div>;
        }}
      />
    </div>
  );
};

export default ProgressPie;

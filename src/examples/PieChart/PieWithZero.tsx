import React from 'react';
import {PieChart} from '../../PieChart';

const PieWithZero = () => {
  const pieData = [
    {value: 0, text: '0'},
    {value: 1, text: '1'},
  ];
  const pieData2 = [
    {value: 0, text: '0'},
    {value: 0, text: '0'},
  ];
  return (
    <div style={{borderWidth:1}}>
      <PieChart data={pieData} showText showTextBackground donut />
      <PieChart data={pieData2} />
    </div>
  );
};

export default PieWithZero;

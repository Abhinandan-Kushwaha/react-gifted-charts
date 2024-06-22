import React from 'react';
import {PieChart} from '../../main/PieChart';

const SplitPie = () => {
  const pieData = [
    {value: 54, color: '#177AD5'},
    {value: 40, color: '#79D2DE'},
    {value: 20, color: '#ED6665', shiftX: -10, shiftY: -18},
  ];
  return (
    <div style={{borderWidth: 1}}>
      <PieChart data={pieData} />
    </div>
  );
};

export default SplitPie;

import React from 'react';
import {PieChart} from '../../PieChart';

const InwardFocusPie = () => {
  const pieData = [
    {value: 54, color: '#177AD5', text: '54%'},
    {value: 30, color: '#79D2DE', text: '30%', focused: true},
    {value: 26, color: '#ED6665', text: '26%'},
  ];
  return (
    <div style={{borderWidth:1}}>
      <PieChart
        donut
        showText
        textColor="black"
        innerRadius={70}
        showTextBackground
        textBackgroundColor="white"
        textBackgroundRadius={22}
        data={pieData}
        focusOnPress
        inwardExtraLengthForFocused={70}
        extraRadiusForFocused={0}
      />
    </div>
  );
};

export default InwardFocusPie;

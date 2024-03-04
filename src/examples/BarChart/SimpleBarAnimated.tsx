import {BarChart} from '../../BarChart';
import React from 'react';

const SimpleBarAnimated = () => {
  const barData = [
    {value: 230, label: 'Jan', frontColor: '#4ABFF4'},
    {value: 180, label: 'Feb', frontColor: '#79C3DB'},
    {value: 200, label: 'Mar', frontColor: '#28B2B3'},
    {value: 250, label: 'Apr', frontColor: '#4ADDBA'},
    {value: 320, label: 'May', frontColor: '#91E3E3'},
  ];
  return (
    <div style={{borderWidth:1}}>
      <BarChart
        showFractionalValues
        showYAxisIndices
        noOfSections={4}
        maxValue={400}
        data={barData}
        isAnimated
      />
    </div>
  );
};

export default SimpleBarAnimated;

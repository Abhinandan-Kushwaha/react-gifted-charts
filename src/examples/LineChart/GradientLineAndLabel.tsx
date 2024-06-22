import React from 'react';
import {LineChart} from '../../main/LineChart';

const GradientLineAndLabel = () => {
  const offset = 130;

  const customDataPointComp = (v:any) => {
    const isUp = v + offset > 175;
    const color =
      v + offset > 180 ? '#EA3335' : v + offset > 150 ? '#F5AF22' : '#8B943B';
    return (
      <div style={{height: 16, width: 28, alignItems: 'center'}}>
        <div
          style={{
            position: 'absolute',
            top: isUp ? -20 : 15,
            color,
            fontWeight: 'bold',
            fontSize: 16,
            fontStyle: 'italic',
          }}>
          {v + offset}
        </div>
        <div
          style={{
            height: 16,
            width: 16,
            borderRadius: 8,
            borderWidth: 2,
            borderColor: color,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            style={{
              height: 6,
              width: 6,
              borderRadius: 3,
              backgroundColor: color,
            }}
          />
        </div>
      </div>
    );
  };

  const dv = [
    {value: 170},
    {value: 220},
    {value: 170},
    {value: 196},
    {value: 176},
    {value: 141},
    {value: 172},
  ];

  return (
    <div style={{borderWidth: 1}}>
      <LineChart
        data={dv}
        noOfSections={5}
        lineGradient
        lineGradientId="ggrd"
        lineGradientComponent={() => {
          return (
            <linearGradient id="ggrd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={'#EA3335'} />
              <stop offset="0.5" stopColor={'#F5AF22'} />
              <stop offset="1" stopColor={'#8B943B'} />
            </linearGradient>
          );
        }}
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisOffset={offset}
        customDataPoint={(item:any) => {
          return customDataPointComp(item.value);
        }}
      />
    </div>
  );
};

export default GradientLineAndLabel;

import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useBarChart, yAxisSides } from 'gifted-charts-core'
import { PopulationPyramid } from './PopulationPyramid'
import { PieChart } from './PieChart'
import { BarChart } from './BarChart'
import Examples from './examples'

function App() {
  const popData = [
    { left: 30, right: 40, midAxisLabel: '~115' },
    { left: 40, right: 44, midAxisLabel: '~105' },
    { left: 55, right: 57, midAxisLabel: '~95' },
    { left: 94, right: 87, midAxisLabel: '~85' },
    { left: 90, right: 88, midAxisLabel: '~75' },
    { left: 88, right: 86, midAxisLabel: '~65' }
  ]

  // const data = [
  //   {value: 15, label: 'Jan'},
  //   {value: 40, label: 'Feb'},
  //   {value: 10, label: 'Mar'},
  //   {value: 30, label: 'Apr'},
  // ];
  // return (
  //   <div style={{borderWidth:1}}>
  //     <BarChart
  //       data={data}
  //       // width={300}
  //       // showVerticalLines
  //       // noOfVerticalLines={7}
  //       // verticalLinesSpacing={40}
  //       // rulesType={ruleTypes.SOLID}
  //     />
  //   </div>
  // );

  // return <Examples />
  return (
    <div className='App'>
      Hello
      {/* <PopulationPyramid
        data={popData}
        yAxisLabelTexts={[
          '0-10',
          '10-20',
          '20-30',
          '30-40',
          '40-50',
          '50-60',
          '60-70',
          '70-80',
          '80-90',
          '90-100',
          '100-110',
          '110-120'
        ].reverse()}
        yAxisLabelFontSize={9}
        // showYAxisIndices
        yAxisStrokeDashArray={[2, 2]}
        showMidAxis
        midAxisLabelFontSize={10}
        midAxisLabelColor={'gray'}
        leftBarLabelColor={'blue'}
        rightBarLabelColor={'red'}
        midAxisLeftColor={'blue'}
        midAxisRightColor={'red'}
        // hide
      /> */}
      <div
        style={
          {
            // width:400,
            // height:300,
            // backgroundColor:'red'
          }
        }
      >
        <BarChart
          data={[
            { value: 9, label: 'M' },
            { value: 4, label: 'T' },
            { value: 7, label: 'W' },
            // { value: 11, label: 'W' }
          ]}
          showYAxisIndices
          rulesColor='red'
          showGradient
          // yAxisSide={yAxisSides.RIGHT}
          // cappedBars
          height={200}
          noOfSections={3}


          // rulesThickness={0}
          // hideRules
          // yAxisLabelWidth={100}
          // stepHeight={80}
        />
      </div>
      {/* <PieChart data={[{value:10},{value:4},{value:8},]} radius={200} donut strokeColor='black' strokeWidth={5} innerCircleBorderWidth={5} innerCircleBorderColor={'black'}/> */}
      {/* <div style={{height:100,width:100, backgroundColor:'red', borderWidth:10, borderColor:'black', borderStyle:'solid'}} /> */}
    </div>
  )
}

export default App

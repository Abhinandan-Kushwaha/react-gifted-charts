import React from 'react'
import BarChartWithGivenNumberOfVerticalLines from './BarChart/BarChartWithGivenNumberOfVerticalLines'
import BarPairWithLine from './BarChart/BarPairWithLine'
import BarThreeD from './BarChart/BarThreeD'
import BarWithGradient from './BarChart/BarWithGradient'
import CappedBars from './BarChart/CappedBars'
import RoundStackBar from './BarChart/RoundStackBar'
import SimpleBarAnimated from './BarChart/SimpleBarAnimated'
import SimpleBarsEndReached from './BarChart/SimpleBarsEndReached'
import SimpleBlueBars from './BarChart/SimpleBlueBars'
import SimpleBlueBarsVerticalLines from './BarChart/SimpleBlueBarsVerticalLines'
import StackWithNegative from './BarChart/StackWithNegative'
import BothSideFocusPie from './PieChart/BothSideFocusPie'
import InwardFocusPie from './PieChart/InwardFocusPie'
import PieChartFocusOnPress from './PieChart/PieChartFocusOnPress'
import PieSingleData from './PieChart/PieSingleData'
import PieWithZero from './PieChart/PieWithZero'
import ProgressPie from './PieChart/ProgressPie'
import SimplePie from './PieChart/SimplePie'
import SplitPie from './PieChart/SplitPie'
import ThreeDPie from './PieChart/ThreeDPie'
import AreaTwo from './LineChart/AreaTwo'
import LineChartTwo from './LineChart/LineChartTwo'
import GradientLineAndLabel from './LineChart/GradientLineAndLabel'
import SecondaryLineChart from './LineChart/SecondaryLineChart'
import CaloriesBurnt from './LineChart/CaloriesBurnt'
import DataSetSteppedChart from './LineChart/DataSetSteppedChart'
import HighlightedRange from './LineChart/HighlightedRange'
import Segmented from './LineChart/Segmented'
import SegmentedDataSetChart from './LineChart/SegmentedDataSet'
import BiColorAreaChart from './LineChart/BiColorAreaChart'
import PopulationChart from './PyramidChart/PopulationChart'

const Examples = () => {
  const Separator = () => <div style={{ marginBottom: 30 }} />
  return (
    <div>
      <h3>Bar Charts:</h3>
      <BarChartWithGivenNumberOfVerticalLines />
      <Separator />

      {/* <BarPairWithLine /> */}

      <BarThreeD />
      <Separator />

      <BarWithGradient />
      <Separator />

      <CappedBars />
      <Separator />

      <RoundStackBar />
      <Separator />

      <SimpleBarAnimated />
      <Separator />

      <SimpleBarsEndReached />
      <Separator />

      <SimpleBlueBars />
      <Separator />

      <SimpleBlueBarsVerticalLines />
      <Separator />

      <StackWithNegative />
      <Separator />

      <h3>Line Charts:</h3>
      <LineChartTwo />
      <Separator />

      <AreaTwo />
      <Separator />

      <BiColorAreaChart />
      <Separator />

      <GradientLineAndLabel />
      <Separator />

      <SecondaryLineChart />
      <Separator />

      <CaloriesBurnt />
      <Separator />

      <DataSetSteppedChart />
      <Separator />

      <HighlightedRange />
      <Separator />

      <Segmented />
      <Separator />

      <SegmentedDataSetChart />
      <Separator />

      <h3>Pie Charts:</h3>
      <BothSideFocusPie />
      <Separator />

      <InwardFocusPie />
      <Separator />

      <PieChartFocusOnPress />
      <Separator />

      <PieSingleData />
      <Separator />

      <PieWithZero />
      <Separator />

      <ProgressPie />
      <Separator />

      <SimplePie />
      <Separator />

      <SplitPie />
      <Separator />

      <ThreeDPie />
      <Separator />

      <h3>Pyramid Charts</h3>
      <PopulationChart />
      <Separator />
    </div>
  )
}

export default Examples

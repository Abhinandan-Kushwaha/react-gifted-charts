import React from "react";
import BarChartWithGivenNumberOfVerticalLines from "./BarChart/BarChartWithGivenNumberOfVerticalLines";
import BarPairWithLine from "./BarChart/BarPairWithLine";
import BarThreeD from "./BarChart/BarThreeD";
import BarWithGradient from "./BarChart/BarWithGradient";
import CappedBars from "./BarChart/CappedBars";
import RoundStackBar from "./BarChart/RoundStackBar";
import SimpleBarAnimated from "./BarChart/SimpleBarAnimated";
import SimpleBarsEndReached from "./BarChart/SimpleBarsEndReached";
import SimpleBlueBars from "./BarChart/SimpleBlueBars";
import SimpleBlueBarsVerticalLines from "./BarChart/SimpleBlueBarsVerticalLines";
import StackWithNegative from "./BarChart/StackWithNegative";
import BothSideFocusPie from "./PieChart/BothSideFocusPie";
import InwardFocusPie from "./PieChart/InwardFocusPie";
import PieChartFocusOnPress from "./PieChart/PieChartFocusOnPress";
import PieSingleData from "./PieChart/PieSingleData";
import PieWithZero from "./PieChart/PieWithZero";
import ProgressPie from "./PieChart/ProgressPie";
import SimplePie from "./PieChart/SimplePie";
import SplitPie from "./PieChart/SplitPie";
import ThreeDPie from "./PieChart/ThreeDPie";

const Examples = () => {
    return(
        <div>
            <h3>Bar Charts:</h3>
            <BarChartWithGivenNumberOfVerticalLines />
            {/* <BarPairWithLine /> */}
            {/* <BarThreeD /> */}
            <BarWithGradient />
            <CappedBars />
            <RoundStackBar />
            <SimpleBarAnimated />
            <SimpleBarsEndReached />
            <SimpleBlueBars />
            <SimpleBlueBarsVerticalLines />
            <StackWithNegative />

            <h3>Pie Charts:</h3>
            <BothSideFocusPie />
            <InwardFocusPie />
            <PieChartFocusOnPress />
            <PieSingleData />
            <PieWithZero />
            <ProgressPie />
            <SimplePie />
            <SplitPie />
            <ThreeDPie />
        </div>
    )
}

export default Examples;
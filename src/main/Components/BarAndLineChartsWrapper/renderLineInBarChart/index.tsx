import { renderSpecificVerticalLines } from './renderSpecificVerticalLines'
import { renderDataPoints } from './renderDataPoints'
import { renderSpecificDataPoints } from './renderSpecificDataPoints'
import { LineInBarChartPropsType } from 'gifted-charts-core'
import { DataPointProps } from 'gifted-charts-core'

const RenderLineInBarChart = (props: LineInBarChartPropsType) => {
  const {
    yAxisLabelWidth,
    initialSpacing,
    spacing,
    containerHeight,
    lineConfig,
    maxValue,
    animatedWidth,
    lineBehindBars,
    points,
    arrowPoints,
    data,
    totalWidth,
    barWidth,
    labelsExtraHeight,
    xAxisLabelsVerticalShift,
    selectedIndex,
    containerHeightIncludingBelowXAxis,
    yAxisOffset
  } = props

  const firstBarWidth = data[0].barWidth ?? barWidth

  const dataPointsProps: DataPointProps = {
    data,
    lineConfig,
    barWidth,
    containerHeight,
    maxValue,
    firstBarWidth,
    yAxisLabelWidth,
    spacing,
    selectedIndex,
    yAxisOffset
  }

  const specificVerticalLinesProps = {
    data,
    barWidth,
    yAxisLabelWidth,
    initialSpacing,
    spacing,
    containerHeight,
    lineConfig,
    maxValue
  }

  const specificDataPointsProps = {
    data,
    barWidth,
    firstBarWidth,
    yAxisLabelWidth,
    lineConfig,
    spacing,
    containerHeight,
    maxValue,
    yAxisOffset
  }

  const renderAnimatedLine = () => {
    return (
      <div
        // pointerEvents="none"
        style={{
          position: 'absolute',
          height: containerHeightIncludingBelowXAxis + labelsExtraHeight,
          left: 6 - yAxisLabelWidth,
          bottom: 60 + xAxisLabelsVerticalShift, //stepHeight * -0.5 + xAxisThickness,
          width: totalWidth,
          zIndex: lineBehindBars ? -1 : 100000
          // backgroundColor: 'wheat',
        }}
      >
        <svg height={containerHeightIncludingBelowXAxis + labelsExtraHeight}>
          <path
            d={points}
            fill='none'
            stroke={lineConfig.color}
            strokeWidth={lineConfig.thickness}
          />

          {renderSpecificVerticalLines(specificVerticalLinesProps)}

          {!lineConfig.hideDataPoints
            ? renderDataPoints(dataPointsProps)
            : renderSpecificDataPoints(specificDataPointsProps)}
          {lineConfig.showArrow && (
            <path
              d={arrowPoints}
              fill={lineConfig.arrowConfig?.fillColor}
              stroke={lineConfig.arrowConfig?.strokeColor}
              strokeWidth={lineConfig.arrowConfig?.strokeWidth}
            />
          )}
        </svg>
      </div>
    )
  }

  const renderLine = () => {
    return (
      <div
        // pointerEvents="none"
        style={{
          position: 'absolute',
          height: containerHeightIncludingBelowXAxis + labelsExtraHeight,
          left: 6 - yAxisLabelWidth,
          bottom: 60 + xAxisLabelsVerticalShift, //stepHeight * -0.5 + xAxisThickness,
          width: totalWidth,
          zIndex: lineBehindBars ? -1 : 100000
          // backgroundColor: 'rgba(200,150,150,0.1)'
        }}
      >
        <svg height={containerHeightIncludingBelowXAxis + labelsExtraHeight}>
          <path
            d={points}
            fill='none'
            stroke={lineConfig.color}
            strokeWidth={lineConfig.thickness}
          />
          {renderSpecificVerticalLines(specificVerticalLinesProps)}

          {!lineConfig.hideDataPoints
            ? renderDataPoints(dataPointsProps)
            : renderSpecificDataPoints(specificDataPointsProps)}
          {lineConfig.showArrow && (
            <path
              d={arrowPoints}
              fill={lineConfig.arrowConfig?.fillColor}
              stroke={lineConfig.arrowConfig?.strokeColor}
              strokeWidth={lineConfig.arrowConfig?.strokeWidth}
            />
          )}
        </svg>
      </div>
    )
  }

  if (lineConfig.isAnimated) {
    return renderAnimatedLine()
  }

  return renderLine()
}

export default RenderLineInBarChart

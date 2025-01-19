import React from 'react'
import { chartTypes } from 'gifted-charts-core'

const RenderVerticalLines = (props: any) => {
  const {
    verticalLinesAr,
    verticalLinesSpacing,
    spacing,
    initialSpacing,
    verticalLinesZIndex,
    verticalLinesHeight,
    verticalLinesThickness,
    verticalLinesColor,
    verticalLinesStrokeDashArray,
    verticalLinesShift,
    verticalLinesUptoDataPoint,
    xAxisThickness,
    labelsExtraHeight,
    containerHeight,
    data,
    barWidth,
    maxValue,
    chartType,
    containerHeightIncludingBelowXAxis,
    totalWidth,
    xAxisLabelsVerticalShift,
    verticalLinesStrokeLinecap
  } = props

  const getHeightOfVerticalLine = (index: number) => {
    if (verticalLinesUptoDataPoint) {
      if (index < data.length) {
        return (data[index].value * containerHeight) / maxValue - xAxisThickness
      } else {
        return verticalLinesHeight ?? 0
      }
    } else {
      return (
        verticalLinesHeight ||
        containerHeightIncludingBelowXAxis - xAxisThickness
      )
    }
  }

  const extendedContainerHeight = containerHeight + 10 + labelsExtraHeight

  let totalSpacing = 0

  const thickness = verticalLinesThickness || 2
  const heightAdjustmentDueToStrokeLinecap =
    verticalLinesStrokeLinecap === 'round' ||
    verticalLinesStrokeLinecap === 'square'
      ? thickness / 2
      : 0

  return (
    <div
      style={{
        position: 'absolute',
        height: containerHeightIncludingBelowXAxis,
        bottom: xAxisLabelsVerticalShift + 70, //(noOfSectionsBelowXAxis ? 22 : 30), //stepHeight * -0.5 + xAxisThickness,
        width: totalWidth,
        zIndex: verticalLinesZIndex || -1
      }}
    >
      <svg height={containerHeightIncludingBelowXAxis} width={totalWidth}>
        {verticalLinesAr.map((item: any, index: number) => {
          if (verticalLinesSpacing) {
            totalSpacing = verticalLinesSpacing * (index + 1)
          } else {
            totalSpacing += (data[index]?.barWidth || barWidth || 30) / 2
            totalSpacing += index ? spacing : 0
            totalSpacing += index
              ? (data[index - 1]?.barWidth || barWidth || 30) / 2
              : 0
          }

          const x =
            verticalLinesShift +
            1 +
            (chartType === chartTypes.BAR
              ? totalSpacing + initialSpacing - 2
              : verticalLinesSpacing
              ? verticalLinesSpacing * (index + 1)
              : index * spacing + (initialSpacing - 2))

          return (
            <line
              key={index}
              x1={x}
              y1={
                extendedContainerHeight -
                getHeightOfVerticalLine(index) +
                heightAdjustmentDueToStrokeLinecap +
                7
              }
              x2={x}
              y2={
                containerHeightIncludingBelowXAxis -
                heightAdjustmentDueToStrokeLinecap
              }
              stroke={verticalLinesColor || 'lightgray'}
              strokeWidth={verticalLinesThickness || 2}
              strokeDasharray={verticalLinesStrokeDashArray ?? ''}
              strokeLinecap={verticalLinesStrokeLinecap}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default RenderVerticalLines

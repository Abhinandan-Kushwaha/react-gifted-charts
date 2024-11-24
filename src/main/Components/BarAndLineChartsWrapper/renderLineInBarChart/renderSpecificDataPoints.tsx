import { Fragment } from 'react'
import { getXForLineInBar, getYForLineInBar } from 'gifted-charts-core'

export const renderSpecificDataPoints = (props: any) => {
  const {
    data,
    barWidth,
    firstBarWidth,
    yAxisLabelWidth,
    lineConfig,
    spacing,
    containerHeight,
    maxValue,
    yAxisOffset
  } = props
  return data.map((item: any, index: number) => {
    const currentBarWidth = item.barWidth || barWidth || 30
    const x = getXForLineInBar(
      index,
      firstBarWidth,
      currentBarWidth,
      yAxisLabelWidth,
      lineConfig,
      spacing
    )
    const y = getYForLineInBar(
      item.value,
      lineConfig.shiftY,
      containerHeight,
      maxValue,
      yAxisOffset
    )
    if (item.showDataPoint) {
      if (item.dataPointShape === 'rectangular') {
        return (
          <Fragment key={index}>
            <rect
              x={x}
              y={y - item.dataPointsHeight / 2}
              width={item.dataPointWidth || lineConfig.dataPointsWidth}
              height={item.dataPointHeight || 2}
              fill={item.dataPointColor || 'black'}
            />
            {item.dataPointText && (
              <text
                fill={item.textColor || 'black'}
                fontSize={item.textFontSize || 10}
                x={x + (item.textShiftX || lineConfig.textShiftX || 0)}
                y={
                  y -
                  (item.dataPointHeight || lineConfig.dataPointsHeight) / 2 +
                  (item.textShiftY || lineConfig.textShiftY || 0)
                }
              >
                {item.dataPointText}
              </text>
            )}
          </Fragment>
        )
      } else {
        return (
          <Fragment key={index}>
            <circle
              cx={x}
              cy={y}
              r={item.dataPointRadius || 3}
              fill={item.dataPointColor || 'black'}
            />
            {item.dataPointText && (
              <text
                fill={item.textColor || 'black'}
                fontSize={item.textFontSize || 10}
                x={x + (item.textShiftX || lineConfig.textShiftX || 0)}
                y={
                  y -
                  (item.dataPointHeight || lineConfig.dataPointsHeight) / 2 +
                  (item.textShiftY || lineConfig.textShiftY || 0)
                }
              >
                {item.dataPointText}
              </text>
            )}
          </Fragment>
        )
      }
    }
    return null
  })
}

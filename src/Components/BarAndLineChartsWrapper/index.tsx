import React, { Fragment, useEffect } from 'react'
import { renderHorizSections } from './renderHorizSections'
import RenderVerticalLines from './renderVerticalLines'
import {
  chartTypes,
  yAxisSides,
  BarAndLineChartsWrapperTypes,
  useBarAndLineChartsWrapper
} from 'gifted-charts-core'

const BarAndLineChartsWrapper = (props: BarAndLineChartsWrapperTypes) => {
  const {
    chartType,
    containerHeight,
    noOfSectionsBelowXAxis,
    stepHeight,
    labelsExtraHeight,
    yAxisLabelWidth,
    horizontal,
    scrollRef,
    initialSpacing,
    data,
    barWidth,
    xAxisThickness,
    totalWidth,
    disableScroll,
    showScrollIndicator,
    scrollToEnd,
    scrollToIndex,
    scrollAnimation,
    indicatorColor,
    spacing,
    showLine,
    points2,
    renderChartContent,
    remainingScrollViewProps,
    endSpacing,
    hideAxesAndRules,

    showXAxisIndices,
    xAxisIndicesHeight,
    xAxisIndicesWidth,
    xAxisIndicesColor,

    pointerConfig,
    getPointerProps,
    pointerIndex,
    pointerX,
    pointerY,

    onEndReached,
    onStartReached
  } = props

  const {
    containerHeightIncludingBelowXAxis,
    xAxisLabelsVerticalShift,
    trimYAxisAtTop,
    yAxisExtraHeight,
    overflowTop,
    xAxisLabelsHeight,
    xAxisTextNumberOfLines,
    actualContainerWidth,
    transformForHorizontalForReactJS,
    horizSectionProps,
    referenceLinesOverChartContent,
    setCanMomentum,
    isCloseToStart,
    isCloseToEnd,
    canMomentum,
    yAxisAtTop,
    yAxisThickness,
    yAxisSide,
    showVerticalLines,
    verticalLinesProps,
    lineInBarChartProps,
    lineInBarChartProps2
  } = useBarAndLineChartsWrapper({ ...props, isRTL: false })

  useEffect(() => {
    if (pointerConfig && getPointerProps) {
      getPointerProps({ pointerIndex, pointerX, pointerY })
    }
  }, [pointerIndex, pointerX, pointerY])

  /*******************************************************************************************************************************************/
  /*******************************************************************************************************************************************/

  let container: React.CSSProperties = {
    width: '100%',
    overflow:'hidden',
    position:'relative',
    height:
      containerHeightIncludingBelowXAxis +
      labelsExtraHeight +
      xAxisLabelsVerticalShift +
      (trimYAxisAtTop ? 0 : yAxisExtraHeight) +
      20 -
      overflowTop,
    marginTop: trimYAxisAtTop ? containerHeight / 20 : 0,
    marginBottom: (xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18) - 20 //This is to not let the Things that should be rendered below the chart overlap with it
  }

  if (horizontal) {
    container = {
      ...container,
      width: actualContainerWidth,
      transform: transformForHorizontalForReactJS
    }
  }

  // return <div>Hello</div>

  return (
    <div style={container}>
      {hideAxesAndRules !== true
        ? renderHorizSections({
            ...horizSectionProps,
            onlyReferenceLines: false,
            renderReferenceLines: !referenceLinesOverChartContent
          })
        : null}
      <div
        ref={scrollRef}
        style={(() => {
          let style: React.CSSProperties = {
            display:'flex',
            width: '100%',
            overflow:'scroll',
            marginLeft:
              (horizontal && !yAxisAtTop)
                ? -yAxisThickness -
                  (props.width ? 20 : 0) -
                  (data[data.length - 1]?.barWidth ?? barWidth ?? 0) / 2
                : yAxisSide === yAxisSides.RIGHT
                ? 0
                : yAxisLabelWidth + yAxisThickness,
            paddingLeft: initialSpacing,
            position: 'absolute',
            bottom: chartType === chartTypes.LINE_BI_COLOR ? 0 : xAxisThickness
          }
          if (!!props.width) {
            style.width = props.width
          }
          if (horizontal) {
            style.width =
              (props.width ?? totalWidth) + (props.width ? endSpacing : -20)
          }
          return style
        })()}
        // contentContainerStyle={(() => {
        //   let style = {
        //     height:
        //       containerHeightIncludingBelowXAxis +
        //       yAxisExtraHeight +
        //       labelsExtraHeight +
        //       (50 + xAxisLabelsVerticalShift),
        //     width: Math.max(
        //       props.width ?? 0,
        //       totalWidth - spacing + endSpacing
        //     ),
        //     paddingLeft: initialSpacing,
        //     paddingBottom:
        //       noOfSectionsBelowXAxis * stepHeight + labelsExtraHeight,
        //     alignItems: 'flex-end'
        //   }
        //   if (!props.width) {
        //     style.width = totalWidth
        //   }
        //   return style
        // })()}
        // scrollEnabled={!disableScroll}
        // showsHorizontalScrollIndicator={showScrollIndicator}
        // indicatorStyle={indicatorColor}
        // onContentSizeChange={() => {
        //   if (scrollRef.current && scrollToEnd) {
        //     scrollRef.current.scrollToEnd({ animated: scrollAnimation })
        //   } else if (scrollRef.current && scrollToIndex) {
        //     scrollRef.current.scrollTo({
        //       x:
        //         initialSpacing +
        //         ((barWidth ?? 0) + spacing) * scrollToIndex -
        //         spacing
        //     })
        //   }
        // }}
        {...remainingScrollViewProps}
      >
          {showVerticalLines ? (
            <RenderVerticalLines {...verticalLinesProps} />
          ) : null}
          {
            // Only For Bar Charts-
            // showLine ? <RenderLineInBarChart {...lineInBarChartProps} /> : null
          }
          {
            // Only For Bar Charts-
            // showLine && points2?.length ? (
            //   <RenderLineInBarChart {...lineInBarChartProps2} />
            // ) : null
          }
          {
            // Only For Line Charts-
            chartType === chartTypes.LINE &&
              data.map((item: any, index: number) => {
                return showXAxisIndices || item.showXAxisIndex ? (
                  <div
                    key={index + '' + item.value}
                    style={{
                      position: 'absolute',
                      height: xAxisIndicesHeight,
                      width: xAxisIndicesWidth,
                      backgroundColor: xAxisIndicesColor.toString(),
                      bottom: 60 - xAxisIndicesHeight / 2,
                      left:
                        index * spacing +
                        (initialSpacing - xAxisIndicesWidth / 2) -
                        3,
                    }}
                  />
                ) : null;
              })
          }
          {renderChartContent()}
      </div>
      {referenceLinesOverChartContent
        ? renderHorizSections({
            ...horizSectionProps,
            onlyReferenceLines: true
          })
        : null}
    </div>
  )
}

export default BarAndLineChartsWrapper

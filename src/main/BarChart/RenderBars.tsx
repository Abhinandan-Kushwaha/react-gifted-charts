import React, { RefObject } from 'react'
import Animated2DWithGradient from './Animated2DWithGradient'
import {
  getPropsForAnimated2DWithGradient,
  RenderBarsPropsType,
  AxesAndRulesDefaults,
  useRenderBars
} from 'gifted-charts-core'
import AnimatedThreeDBar from '../Components/AnimatedThreeDBar'
import Tooltip from '../Components/BarSpecificComponents/tooltip'
import { RenderBarsPropsTypeForWeb } from 'gifted-charts-core/dist/BarChart/types'

interface IRenderBarsPropsTypes extends RenderBarsPropsTypeForWeb {
  yTranslate: number
  scrollToBarRef: RefObject<HTMLDivElement>
  scrollToIndex?: number
  stepHeight: number
}

const RenderBars = (props: IRenderBarsPropsTypes) => {
  const {
    item,
    index,
    containerHeight,
    maxValue,
    minHeight,
    spacing,
    propSpacing,
    side,
    data,
    barBorderWidth,
    barBorderColor,
    isThreeD,
    isAnimated,
    rotateLabel,
    appearingOpacity,
    animationDuration,
    autoShiftLabels,
    label,
    secondaryLabel,
    labelTextStyle,
    secondaryLabelTextStyle,
    xAxisTextNumberOfLines,
    xAxisLabelsVerticalShift,
    renderTooltip,
    renderTooltipConditions,
    initialSpacing,
    selectedIndex,
    setSelectedIndex,
    xAxisThickness = AxesAndRulesDefaults.xAxisThickness,
    horizontal,
    rtl,
    pointerConfig,
    noOfSectionsBelowXAxis,
    yTranslate,
    scrollToBarRef,
    scrollToIndex,
    barWidth,
    labelsDistanceFromXaxis = 0,
    secondaryXAxis,
    secondaryNoOfSectionsBelowXAxis,
    barMarginBottom = 0,
    highlightEnabled,
    highlightedBarIndex,
    lowlightOpacity
  } = props

  const { barHeight, tooltipProps } = useRenderBars(props)

  const {
    commonStyleForBar,
    commonPropsFor2dAnd3dBars,
    isFocused,
    focusedBarConfig,
    localFrontColor
  } = getPropsForAnimated2DWithGradient({ ...props, barHeight })

  // const barStyleWithBackground:React.CSSProperties = {}

  const itemOrPropsBarInnerComponent =
    item.barInnerComponent ?? props.barInnerComponent
  const localBarInnerComponent = isFocused
    ? focusedBarConfig?.barInnerComponent ?? itemOrPropsBarInnerComponent
    : itemOrPropsBarInnerComponent

  const isStaticGradient =
    (item.showGradient || props.showGradient) && !isAnimated

  const adjustBarStyle = {
    transform: `translateY(${yTranslate}px)`,
    width: commonPropsFor2dAnd3dBars.barWidth
  }
  // const adjustForGradientBars = {
  //   transform: `translateY(${yTranslate - barHeight}px)`
  // }

  const prevAndCurrentSpacing =
    (item.spacing ?? spacing) + (data[index - 1]?.spacing ?? spacing)

  const labelWidth =
    item.labelWidth ||
    props.labelWidth ||
    (item.barWidth || barWidth) + prevAndCurrentSpacing / 2

  const renderLabel = (
    top: boolean,
    label: string,
    labelTextStyle: any,
    value: number
  ) => {
    return (
      <div
        style={(() => {
          let style: React.CSSProperties = {
            width: labelWidth,
            left: spacing / -2,
            position: 'absolute',
            height:
              props.xAxisLabelsHeight ??
              xAxisTextNumberOfLines * 18 -
                (value < 0
                  ? -xAxisLabelsVerticalShift
                  : xAxisLabelsVerticalShift),
            bottom: top
              ? (containerHeight || 200) +
                (secondaryXAxis?.labelsDistanceFromXaxis ?? 15)
              : (rotateLabel
                  ? -40
                  : -6 -
                    xAxisTextNumberOfLines * 18 -
                    (value < 0
                      ? -xAxisLabelsVerticalShift
                      : xAxisLabelsVerticalShift)) -
                barMarginBottom -
                xAxisThickness -
                (value < 0 && !autoShiftLabels
                  ? -labelsDistanceFromXaxis
                  : labelsDistanceFromXaxis)
          }
          if (rotateLabel) {
            if (horizontal) {
              style.transform = `rotate(330deg)`
            } else {
              style.transform = `rotate(${value < 0 ? '240deg' : '60deg'})
                    translateX(${value < 0 ? 56 : (labelWidth - 50) / 2}px)
                    translateY(${value < 0 ? 32 : -10}px)`
            }
          } else {
            if (horizontal) {
              style.transform = `rotate(-90deg)`
            } else if (value < 0 && autoShiftLabels) {
              style.transform = `translateY(${-30}px)`
            }
          }
          return style
        })()}
      >
        {top ? (
          item.secondaryLabelComponent ? (
            item.secondaryLabelComponent()
          ) : (
            <div
              style={(() => {
                let style: React.CSSProperties = { textAlign: 'center' }
                if (rtl && horizontal) {
                  style.transform = `rotate(180deg)`
                }
                style = { ...style, ...labelTextStyle }
                return style
              })()}
              // numberOfLines={xAxisTextNumberOfLines}
            >
              {label}
            </div>
          )
        ) : item.labelComponent ? (
          item.labelComponent()
        ) : (
          <div
            style={(() => {
              let style: React.CSSProperties = {
                textAlign: rotateLabel ? 'left' : 'center'
              }
              if (rtl && horizontal) {
                style.transform = `rotate(180deg)`
              }
              style = { ...style, ...labelTextStyle }
              return style
            })()}
            // numberOfLines={xAxisTextNumberOfLines}
          >
            {label}
          </div>
        )}
      </div>
    )
  }

  const renderAnimatedLabel = (
    top: boolean,
    label: string,
    labelTextStyle: any,
    value: number
  ) => {
    return (
      <div
        style={(() => {
          let style: React.CSSProperties = {
            width: labelWidth,
            left: spacing / -2,
            position: 'absolute',
            height:
              props.xAxisLabelsHeight ??
              xAxisTextNumberOfLines * 18 -
                (value < 0
                  ? -xAxisLabelsVerticalShift
                  : xAxisLabelsVerticalShift),
            bottom: top
              ? (containerHeight || 200) +
                (secondaryXAxis?.labelsDistanceFromXaxis ?? 15)
              : (rotateLabel
                  ? -40
                  : -6 -
                    xAxisTextNumberOfLines * 18 -
                    xAxisLabelsVerticalShift) -
                barMarginBottom -
                labelsDistanceFromXaxis,
            opacity: appearingOpacity
          }
          if (value < 0) {
            style.transform = `rotate(180deg)`
          }
          if (rotateLabel) {
            if (horizontal) {
              style.transform = `rotate(330deg)`
            } else {
              style.transform = `rotate(60deg)`
            }
          } else {
            if (horizontal) {
              style.transform = `rotate(-90deg)`
            } else if (value < 0) {
              style.transform = `translateY(${
                autoShiftLabels ? -16.5 * xAxisTextNumberOfLines - 10 : 0
              }px)`
            }
          }
          return style
        })()}
      >
        {top ? (
          item.secondaryLabelComponent ? (
            item.secondaryLabelComponent()
          ) : (
            <div
              style={(() => {
                let style: React.CSSProperties = { textAlign: 'center' }
                if (rtl && horizontal) {
                  style.transform = `rotate(180deg)`
                }
                style = { ...style, ...labelTextStyle }
                return style
              })()}
              // numberOfLines={xAxisTextNumberOfLines}
            >
              {label}
            </div>
          )
        ) : item.labelComponent ? (
          item.labelComponent()
        ) : (
          <div
            style={(() => {
              let style: React.CSSProperties = { textAlign: 'center' }
              if (rtl && horizontal) {
                style.transform = `rotate(180deg)`
              }
              style = { ...style, ...labelTextStyle }
              return style
            })()}
            // numberOfLines={xAxisTextNumberOfLines}
          >
            {label}
          </div>
        )}
      </div>
    )
  }

  let leftSpacing = initialSpacing
  for (let i = 0; i < index; i++) {
    leftSpacing +=
      (data[i].spacing ?? propSpacing) + (data[i].barWidth || barWidth || 30)
  }

  let barWrapperStyle: React.CSSProperties = {
    // overflow: 'visible',
    opacity: highlightEnabled
      ? highlightedBarIndex === -1
        ? 1
        : highlightedBarIndex === index
        ? 1
        : lowlightOpacity
      : 1,
    marginBottom: 60 + barMarginBottom + xAxisLabelsVerticalShift,
    width: commonPropsFor2dAnd3dBars.barWidth,
    height: barHeight,
    marginRight: spacing,
    position: 'relative',
    transform: `translateY(${-xAxisLabelsVerticalShift}px)`
    // transform: `translateY(
    //   ${
    //     (containerHeight || 200) -
    //     (barHeight - 10 + xAxisLabelsVerticalShift)
    //   }px)`
  }
  // if (item.value < 0) {
  //   barWrapperStyle.transform = `translateY(
  //               ${
  //                 (containerHeight || 200) -
  //                 (barHeight - 10 + xAxisLabelsVerticalShift)
  //               }px) rotateZ(180deg)`
  // }
  if (side !== 'right') {
    barWrapperStyle.zIndex = data.length - index
  }

  const pressDisabled =
    item.disablePress ||
    props.disablePress ||
    (pointerConfig && pointerConfig.barTouchable !== true)

  const barContent = () => {
    const isBarBelowXaxisAndInvisible =
      item.value < 0 &&
      !(noOfSectionsBelowXAxis || secondaryNoOfSectionsBelowXAxis)

    const animated2DWithGradient = (
      noGradient: boolean,
      noAnimation: boolean
    ) => (
      <div style={adjustBarStyle}>
        <Animated2DWithGradient
          {...commonPropsFor2dAnd3dBars}
          animationDuration={animationDuration || 800}
          roundedBottom={props.roundedBottom || false}
          roundedTop={props.roundedTop || false}
          noGradient={noGradient}
          noAnimation={noAnimation}
          containerHeight={containerHeight}
          maxValue={maxValue}
          minHeight={minHeight ?? 0}
          barMarginBottom={barMarginBottom}
          cappedBars={props.cappedBars}
          capThickness={props.capThickness}
          capColor={props.capColor}
          capRadius={props.capRadius}
          horizontal={horizontal}
          barBorderWidth={barBorderWidth}
          barBorderColor={barBorderColor}
          commonStyleForBar={commonStyleForBar}
          yTranslate={yTranslate}
        />
      </div>
    )
    return (
      <>
        {(props.showXAxisIndices || item.showXAxisIndex) && (
          <div
            style={{
              zIndex: 2,
              position: 'absolute',
              width: props.xAxisIndicesHeight,
              height: props.xAxisIndicesWidth,
              bottom: barHeight - (containerHeight ?? 200) * 1.05, //props.xAxisIndicesHeight / -2,
              left:
                (commonPropsFor2dAnd3dBars.barWidth - props.xAxisIndicesWidth) /
                2,
              backgroundColor: props.xAxisIndicesColor.toString()
            }}
          />
        )}
        {isBarBelowXaxisAndInvisible ? null : isThreeD ? (
          <AnimatedThreeDBar
            {...commonPropsFor2dAnd3dBars}
            sideWidth={
              item.sideWidth ||
              props.sideWidth ||
              (item.barWidth || barWidth) / 2
            }
            side={side || 'left'}
            sideColor={item.sideColor || props.sideColor || ''}
            topColor={item.topColor || props.topColor || ''}
            horizontal={horizontal}
            isAnimated={isAnimated}
            animationDuration={animationDuration || 800}
            selectedIndex={selectedIndex}
            containerHeight={containerHeight ?? 200}
          />
        ) : item.showGradient || props.showGradient ? (
          isAnimated ? (
            animated2DWithGradient(false, false)
          ) : (
            animated2DWithGradient(false, true)
          )
        ) : isAnimated ? (
          animated2DWithGradient(true, false)
        ) : (
          animated2DWithGradient(true, true)
        )}
        <div style={adjustBarStyle}>
          {isAnimated
            ? renderAnimatedLabel(false, label, labelTextStyle, item.value)
            : renderLabel(false, label, labelTextStyle, item.value)}
          {secondaryXAxis
            ? isAnimated
              ? renderAnimatedLabel(
                  true,
                  secondaryLabel,
                  secondaryLabelTextStyle,
                  item.value
                )
              : renderLabel(
                  true,
                  secondaryLabel,
                  secondaryLabelTextStyle,
                  item.value
                )
            : null}
        </div>
      </>
    )
  }

  return (
    <>
      {pressDisabled ? (
        <div
          // pointerEvents='none'
          style={barWrapperStyle}
        >
          {barContent()}
        </div>
      ) : (
        <div
          ref={
            index === (scrollToIndex ?? data.length - 1) ? scrollToBarRef : null
          }
          // activeOpacity={props.activeOpacity || 0.2}
          onClick={() => {
            if (renderTooltip || props.focusBarOnPress) {
              setSelectedIndex(index)
            }
            item.onPress ? item.onPress() : props.onPress?.(item, index)
          }}
          onContextMenu={(event) => {
            if (item.onContextMenu || props.onContextMenu)
              event.preventDefault()
            item.onContextMenu
              ? item.onContextMenu()
              : props.onContextMenu?.(item, index)
          }}
          onMouseEnter={() => {
            item.onMouseEnter
              ? item.onMouseEnter()
              : props.onMouseEnter?.(item, index)
            if (
              (renderTooltip && renderTooltipConditions.includes('onHover')) ||
              highlightEnabled
            ) {
              setSelectedIndex(index)
            }
          }}
          onMouseLeave={() => {
            item.onMouseLeave
              ? item.onMouseLeave()
              : props.onMouseLeave?.(item, index)
            if (
              (renderTooltip && renderTooltipConditions.includes('onHover')) ||
              highlightEnabled
            ) {
              setSelectedIndex(-1)
            }
          }}
          // onLongPress={() => {
          //   item.onLongPress
          //     ? item.onLongPress()
          //     : props.onLongPress?.(item, index)
          // }}
          // onPressOut={() => {
          //   item.onPressOut
          //     ? item.onPressOut()
          //     : props.onPressOut?.(item, index)
          // }}
          style={barWrapperStyle}
        >
          {barContent()}
        </div>
      )}
      {renderTooltip && selectedIndex === index && (
        <Tooltip {...tooltipProps} />
      )}
    </>
  )
}

export default RenderBars

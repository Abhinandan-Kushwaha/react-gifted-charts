import React, { RefObject } from 'react'
// import AnimatedThreeDBar from '../Components/AnimatedThreeDBar'
import Animated2DWithGradient from './Animated2DWithGradient'
import Cap from '../Components/BarSpecificComponents/cap'
import BarBackgroundPattern from '../Components/BarSpecificComponents/barBackgroundPattern'
import {
  getPropsForAnimated2DWithGradient,
  RenderBarsPropsType,
  barDataItem,
  AxesAndRulesDefaults
} from 'gifted-charts-core'
import AnimatedThreeDBar from '../Components/AnimatedThreeDBar'
import Tooltip from '../Components/BarSpecificComponents/tooltip'

interface IRenderBarsPropsTypes extends RenderBarsPropsType {
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
    leftShiftForTooltip,
    leftShiftForLastIndexTooltip,
    initialSpacing,
    selectedIndex,
    setSelectedIndex,
    xAxisThickness = AxesAndRulesDefaults.xAxisThickness,
    horizontal,
    rtl,
    intactTopLabel,
    showValuesAsTopLabel,
    topLabelContainerStyle,
    topLabelTextStyle,
    pointerConfig,
    noOfSectionsBelowXAxis,
    yTranslate,
    scrollToBarRef,
    scrollToIndex,
    stepHeight,
    yAxisOffset,
    barWidth,
    labelsDistanceFromXaxis = 0,
    stepValue,
    negativeStepHeight,
    negativeStepValue,
    autoCenterTooltip,
    secondaryXAxis
  } = props

  const heightFactor =
    item.value < 0
      ? negativeStepHeight / negativeStepValue
      : stepHeight / stepValue

  const barHeight = Math.max(
    0,
    Math.abs(item.value) * heightFactor - xAxisThickness
  )

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
  const adjustForGradientBars = {
    transform: `translateY(${yTranslate - barHeight}px)`
  }

  const barMarginBottom =
    item.barMarginBottom === 0
      ? 0
      : item.barMarginBottom || props.barMarginBottom || 0

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
            height: props.xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18,
            bottom: top
              ? (containerHeight || 200) +
                (secondaryXAxis?.labelsDistanceFromXaxis ?? 15)
              : (rotateLabel
                  ? -40
                  : -6 -
                    xAxisTextNumberOfLines * 18 -
                    xAxisLabelsVerticalShift) -
                barMarginBottom -
                xAxisThickness -
                labelsDistanceFromXaxis
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
            height: props.xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18,
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

  const static2DWithGradient = (item: barDataItem) => {
    const localGradientColor =
      item.gradientColor || props.gradientColor || 'white'
    return (
      <>
        <div
          style={(() => {
            const style = {
              ...adjustForGradientBars,
              height: barHeight,
              width: commonPropsFor2dAnd3dBars.barWidth,
              backgroundImage: `linear-gradient(${
                isFocused
                  ? focusedBarConfig?.gradientColor ?? localGradientColor
                  : localGradientColor
              },${localFrontColor.toString()})`
            }
            if (item.value < 0) {
              style.transform = `rotate(180deg) translateY(${-yTranslate}px)`
            }
            return style
          })()}
        >
          {props.cappedBars && item.value ? (
            <Cap
              capThicknessFromItem={item.capThickness}
              capThicknessFromProps={props.capThickness}
              capColorFromItem={item.capColor}
              capColorFromProps={props.capColor}
              capRadiusFromItem={item.capRadius}
              capRadiusFromProps={props.capRadius}
            />
          ) : null}
        </div>
        {(item.barBackgroundPattern || props.barBackgroundPattern) && (
          <BarBackgroundPattern
            barBackgroundPatternFromItem={item.barBackgroundPattern}
            barBackgroundPatternFromProps={props.barBackgroundPattern}
            patternIdFromItem={item.patternId}
            patternIdFromProps={props.patternId}
          />
        )}
        {(item.topLabelComponent || showValuesAsTopLabel) && (
          <div
            style={(() => {
              let style: React.CSSProperties = {
                position: 'absolute',
                ...adjustForGradientBars,
                top: -30,
                height: 30,
                width: commonPropsFor2dAnd3dBars.barWidth,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
              if (item.value < 0) {
                style.transform = `translateY(${-barHeight}px)`
              }
              if (horizontal && !intactTopLabel) {
                style.transform = `rotate(270deg)`
              }
              if (topLabelContainerStyle) {
                style = { ...style, ...topLabelContainerStyle }
              } else {
                style = { ...style, ...item.topLabelContainerStyle }
              }
              return style
            })()}
          >
            {showValuesAsTopLabel ? (
              <div>{item.value + yAxisOffset}</div>
            ) : (
              item.topLabelComponent?.()
            )}
          </div>
        )}
        {localBarInnerComponent ? (
          <div style={{ height: '100%', width: '100%' }}>
            {localBarInnerComponent(item, index)}
          </div>
        ) : null}
      </>
    )
  }

  let barWrapperStyle: React.CSSProperties = {
    // overflow: 'visible',
    marginBottom: 60 + barMarginBottom + xAxisLabelsVerticalShift,
    width: commonPropsFor2dAnd3dBars.barWidth,
    height: barHeight,
    marginRight: spacing,
    position: 'relative'
  }
  if (item.value < 0) {
    barWrapperStyle.transform = `translateY(
                ${
                  (containerHeight || 200) -
                  (barHeight - 10 + xAxisLabelsVerticalShift) +
                  (item.value < 0 ? Math.abs(item.value) * heightFactor : 0)
                } rotateZ(180deg)`
  } else if (item.value < 0) {
    barWrapperStyle.transform = `translateY(${
      Math.abs(item.value) * heightFactor
    })`
  }
  if (side !== 'right') {
    barWrapperStyle.zIndex = data.length - index
  }

  const pressDisabled =
    item.disablePress ||
    props.disablePress ||
    (pointerConfig && pointerConfig.barTouchable !== true)

  const barContent = () => {
    const isBarBelowXaxisAndInvisible =
      item.value < 0 && !noOfSectionsBelowXAxis

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
              bottom: barHeight - (containerHeight ?? 200) * 1.05 - 31, //props.xAxisIndicesHeight / -2,
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
            static2DWithGradient(item)
          )
        ) : isAnimated ? (
          animated2DWithGradient(true, false)
        ) : (
          animated2DWithGradient(true, true)
        )}
        <div style={isStaticGradient ? adjustForGradientBars : adjustBarStyle}>
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

  const tooltipProps = {
    barHeight,
    barWidth: item.barWidth || barWidth,
    item,
    index,
    isLast: index === data.length - 1,
    leftSpacing,
    leftShiftForLastIndexTooltip,
    leftShiftForTooltip: item.leftShiftForTooltip ?? leftShiftForTooltip ?? 0,
    renderTooltip,
    autoCenterTooltip,
    horizontal
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

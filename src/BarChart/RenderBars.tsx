import React from 'react'
// import AnimatedThreeDBar from '../Components/AnimatedThreeDBar'
import Animated2DWithGradient from './Animated2DWithGradient'
import Cap from '../Components/BarSpecificComponents/cap'
import BarBackgroundPattern from '../Components/BarSpecificComponents/barBackgroundPattern'
import {
  getPropsForAnimated2DWithGradient,
  RenderBarsPropsType,
  barDataItem
} from 'gifted-charts-core'

interface RenderBarsPropsTypes extends RenderBarsPropsType {
  biggest: number
}

const RenderBars = (props: RenderBarsPropsTypes) => {
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
    labelTextStyle,
    xAxisTextNumberOfLines,
    xAxisLabelsVerticalShift,
    renderTooltip,
    leftShiftForTooltip,
    leftShiftForLastIndexTooltip,
    initialSpacing,
    selectedIndex,
    setSelectedIndex,
    xAxisThickness,
    horizontal,
    rtl,
    intactTopLabel,
    showValuesAsTopLabel,
    topLabelContainerStyle,
    topLabelTextStyle,
    pointerConfig,
    noOfSectionsBelowXAxis,
    biggest
  } = props

  const barHeight = Math.max(
    minHeight,
    (Math.abs(item.value) * (containerHeight || 200)) / (maxValue || 200) -
      (xAxisThickness ?? 0)
  )
  const factor = (containerHeight ?? 0) / maxValue
  const translateY = biggest * factor + 15 + (containerHeight ?? 200) / 20
  const adjustBarStyle = {
    transform: `translateY(${translateY}px)`
  }
  const adjustForGradientBars = {
    transform: `translateY(${translateY - barHeight}px)`
  }

  const {
    commonStyleForBar,
    commonPropsFor2Dand3Dbars,
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

  const barMarginBottom =
    item.barMarginBottom === 0
      ? 0
      : item.barMarginBottom || props.barMarginBottom || 0

  const renderLabel = (label: String, labelTextStyle: any, value: number) => {
    return (
      <div
        style={(() => {
          let style: React.CSSProperties = {
            width:
              (item.labelWidth ||
                props.labelWidth ||
                item.barWidth ||
                props.barWidth ||
                30) + spacing,
            left: spacing / -2,
            position: 'absolute',
            height: props.xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18,
            bottom:
              (rotateLabel
                ? -40
                : -6 - xAxisTextNumberOfLines * 18 - xAxisLabelsVerticalShift) -
              barMarginBottom
          }
          if (rotateLabel) {
            if (horizontal) {
              style.transform = `rotate(330deg)`
            } else {
              style.transform = `rotate(${value < 0 ? '240deg' : '60deg'})
                    translateX(${value < 0 ? 56 : 0})
                    translateY(${value < 0 ? 32 : 0})`
            }
          } else {
            if (horizontal) {
              style.transform = `rotate(-90deg)`
            } else if (value < 0) {
              style.transform = `rotate(180deg) translateY(${
                autoShiftLabels ? 0 : 16.5 * xAxisTextNumberOfLines + 14
              })`
            }
          }
          return style
        })()}
      >
        {item.labelComponent ? (
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
            {label || ''}
          </div>
        )}
      </div>
    )
  }

  const renderAnimatedLabel = (
    label: String,
    labelTextStyle: any,
    value: number
  ) => {
    return (
      <div
        style={(() => {
          let style: React.CSSProperties = {
            width:
              (item.labelWidth ||
                props.labelWidth ||
                item.barWidth ||
                props.barWidth ||
                30) + spacing,
            left: spacing / -2,
            position: 'absolute',
            height: props.xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18,
            bottom:
              (rotateLabel
                ? -40
                : -6 - xAxisTextNumberOfLines * 18 - xAxisLabelsVerticalShift) -
              barMarginBottom,
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
              style.transform = `rotate(180deg) translateY(${
                autoShiftLabels ? 0 : 16.5 * xAxisTextNumberOfLines + 14
              })`
            }
          }
          return style
        })()}
      >
        {item.labelComponent ? (
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
            {label || ''}
          </div>
        )}
      </div>
    )
  }

  let leftSpacing = initialSpacing
  for (let i = 0; i < index; i++) {
    leftSpacing +=
      (data[i].spacing ?? propSpacing) +
      (data[i].barWidth || props.barWidth || 30)
  }

  const static2DWithGradient = (item: barDataItem) => {
    const localGradientColor =
      item.gradientColor || props.gradientColor || 'white'
    return (
      <>
        <div
          style={{
            ...adjustForGradientBars,
            height: barHeight,
            width: 30,
            backgroundImage: `linear-gradient(${
              isFocused
                ? focusedBarConfig?.gradientColor ?? localGradientColor
                : localGradientColor
            },${localFrontColor.toString()})`
          }}
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
                top: (item.barWidth || props.barWidth || 30) * -1,
                height: item.barWidth || props.barWidth || 30,
                width: item.barWidth || props.barWidth || 30,
                justifyContent:
                  (horizontal && !intactTopLabel) || item.value < 0
                    ? 'center'
                    : 'flex-end',
                alignItems: 'center'
              }
              if (item.value < 0) {
                style.transform = `rotate(180deg)`
              }
              if (horizontal && !intactTopLabel) {
                style.transform = `rotate(270deg`
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
              <div style={topLabelTextStyle}>{item.value}</div>
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
    width: commonPropsFor2Dand3Dbars.barWidth,
    height: barHeight,
    marginRight: spacing,
    position: 'relative'
  }
  if (item.value < 0) {
    barWrapperStyle.transform = `translateY(
                ${
                  (Math.abs(item.value) * (containerHeight || 200)) /
                  (maxValue || 200)
                } rotateZ(180deg)`
  } else if (pointerConfig) {
    barWrapperStyle.transform = `translateY(${
      (containerHeight || 200) - (barHeight - 10 + xAxisLabelsVerticalShift)
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
          {...commonPropsFor2Dand3Dbars}
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
              height: props.xAxisIndicesHeight,
              width: props.xAxisIndicesWidth,
              bottom: props.xAxisIndicesHeight / -2,
              left:
                ((item.barWidth || props.barWidth || 30) -
                  props.xAxisIndicesWidth) /
                2,
              backgroundColor: props.xAxisIndicesColor.toString()
            }}
          />
        )}
        {isBarBelowXaxisAndInvisible
          ? null
          : isThreeD
          ? null
          : item.showGradient || props.showGradient
          ? isAnimated
            ? animated2DWithGradient(false, false)
            : static2DWithGradient(item)
          : isAnimated
          ? animated2DWithGradient(true, false)
          : animated2DWithGradient(true, true)}
        <div
          style={
            (item.showGradient || props.showGradient) && !isAnimated
              ? adjustForGradientBars
              : adjustBarStyle
          }
        >
          {isAnimated
            ? renderAnimatedLabel(label, labelTextStyle, item.value)
            : renderLabel(label, labelTextStyle, item.value)}
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
        <div
          style={{
            position: 'absolute',
            bottom: barHeight + 60,
            left:
              index === data.length - 1
                ? leftSpacing - leftShiftForLastIndexTooltip
                : leftSpacing -
                  (item?.leftShiftForTooltip ?? leftShiftForTooltip ?? 0),
            zIndex: 1000
          }}
        >
          {renderTooltip(item, index)}
        </div>
      )}
    </>
  )
}

export default RenderBars
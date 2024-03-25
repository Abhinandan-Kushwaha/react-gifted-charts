import React, { LegacyRef, RefObject } from 'react'
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
    labelTextStyle,
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
    yAxisOffset
  } = props

  const barHeight = Math.max(
    0,
    (Math.abs(item.value) * (containerHeight || 200)) / (maxValue || 200) -
      xAxisThickness
  )

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

  const isStaticGradient =
    (item.showGradient || props.showGradient) && !isAnimated

  const adjustBarStyle = {
    transform: `translateY(${yTranslate}px)`,
    width: commonPropsFor2Dand3Dbars.barWidth
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
    (item.barWidth || props.barWidth || 30) + prevAndCurrentSpacing / 2

  const renderLabel = (label: String, labelTextStyle: any, value: number) => {
    return (
      <div
        style={(() => {
          let style: React.CSSProperties = {
            width: labelWidth,
            left: spacing / -2,
            position: 'absolute',
            height: props.xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18,
            bottom:
              (rotateLabel
                ? -40
                : -6 - xAxisTextNumberOfLines * 18 - xAxisLabelsVerticalShift) -
              barMarginBottom -
              xAxisThickness
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
        {item.labelComponent ? (
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
          style={(() => {
            const style = {
              ...adjustForGradientBars,
              height: barHeight,
              width: commonPropsFor2Dand3Dbars.barWidth,
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
                width: commonPropsFor2Dand3Dbars.barWidth,
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
                (commonPropsFor2Dand3Dbars.barWidth - props.xAxisIndicesWidth) /
                2,
              backgroundColor: props.xAxisIndicesColor.toString()
            }}
          />
        )}
        {isBarBelowXaxisAndInvisible ? null : isThreeD ? (
          <AnimatedThreeDBar
            {...commonPropsFor2Dand3Dbars}
            sideWidth={
              item.sideWidth ||
              props.sideWidth ||
              (item.barWidth || props.barWidth || 30) / 2
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

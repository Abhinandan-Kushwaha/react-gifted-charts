import React, { useEffect, useState } from 'react'
import {
  useRenderStackBars,
  BarDefaults,
  StackedBarChartPropsType
} from 'gifted-charts-core'

const RenderStackBars = (props: StackedBarChartPropsType) => {
  const {
    barBackgroundPattern,
    patternId,
    item,
    index,
    containerHeight,
    spacing,
    rotateLabel,
    label,
    labelTextStyle,
    xAxisTextNumberOfLines,
    xAxisLabelsVerticalShift,
    renderTooltip,
    leftShiftForTooltip,
    leftShiftForLastIndexTooltip,
    selectedIndex,
    setSelectedIndex,
    activeOpacity,
    stackData,
    animationDuration = BarDefaults.animationDuration,
    barBorderWidth,
    barBorderColor,
    stackBorderRadius,
    stackBorderTopLeftRadius,
    stackBorderTopRightRadius,
    stackBorderBottomLeftRadius,
    stackBorderBottomRightRadius,
    showValuesAsTopLabel
  } = props
  const {
    cotainsNegative,
    noAnimation,
    localBarInnerComponent,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    leftSpacing,
    disablePress,
    totalHeight,
    height,
    setHeight,
    getBarHeight,
    getPosition,
    lowestBarPosition,
    getStackBorderRadii
  } = useRenderStackBars(props)

  const prevAndCurrentSpacing =
    (item.spacing ?? spacing) + (stackData[index - 1]?.spacing ?? spacing)
  const labelWidth =
    (item.stacks[0].barWidth || props.barWidth || 30) +
    prevAndCurrentSpacing / 2

  const renderLabel = (label: String, labelTextStyle: any) => {
    return (
      <div
        style={(() => {
          const style: React.CSSProperties = {
            width: labelWidth,
            marginLeft:
              prevAndCurrentSpacing / -4 + (rotateLabel ? labelWidth / 6 : 0),
            position: 'absolute',
            left: leftSpacing,
            bottom: (rotateLabel ? labelWidth / -2 + 18 : 6) + 40
          }
          if (rotateLabel) {
            if (props.horizontal) {
              style.transform = `rotate(330deg)`
            } else {
              style.transform = `rotate(60deg)`
            }
          } else if (props.horizontal) {
            style.transform = `rotate(-90deg)`
          }
          return style
        })()}
      >
        {item.labelComponent ? (
          item.labelComponent()
        ) : (
          <div
            style={{
              textAlign: rotateLabel ? 'left' : 'center',
              ...labelTextStyle
            }}
            // numberOfLines={xAxisTextNumberOfLines}
          >
            {label || ''}
          </div>
        )}
      </div>
    )
  }

  // useEffect(() => {
  //   if (!noAnimation) {
  //     layoutAppear();
  //   }
  // }, [totalHeight]);

  // const elevate = () => {
  //   LayoutAnimation.configureNext({
  //     duration: animationDuration,
  //     update: {type: 'linear', property: 'scaleXY'},
  //   });
  //   setHeight(totalHeight);
  // };

  // const layoutAppear = () => {
  //   LayoutAnimation.configureNext({
  //     duration: Platform.OS == 'ios' ? animationDuration : 20,
  //     create: {type: 'linear', property: 'opacity'},
  //     update: {type: 'linear', property: 'scaleXY'},
  //   });
  //   setTimeout(() => elevate(), Platform.OS == 'ios' ? 10 : 100);
  // };

  const static2DSimple = () => {
    return (
      <>
        <div
          // disabled={disablePress}
          // activeOpacity={activeOpacity}
          onClick={() => {
            setSelectedIndex(index)
            if (item.onPress) {
              item.onPress()
            } else if (props.onPress) {
              props.onPress(item, index)
            }
          }}
          // onLongPress={() => {
          //   if (item.onLongPress) {
          //     item.onLongPress();
          //   } else if (props.onLongPress) {
          //     props.onLongPress(item, index);
          //   }
          // }}
          // onPressOut={() => {
          //   if (item.onPressOut) {
          //     item.onPressOut();
          //   } else if (props.onPressOut) {
          //     props.onPressOut(item, index);
          //   }
          // }}
          style={{
            position: 'relative',
            top: (containerHeight ?? 200) * 1.05 - totalHeight + 28,
            width: item.stacks[0].barWidth || props.barWidth || 30,
            height: '100%',
            borderTopLeftRadius:
              borderTopLeftRadius ??
              borderRadius ??
              stackBorderTopLeftRadius ??
              stackBorderRadius,
            borderTopRightRadius:
              borderTopRightRadius ??
              borderRadius ??
              stackBorderTopRightRadius ??
              stackBorderRadius,
            borderBottomLeftRadius:
              borderBottomLeftRadius ??
              borderRadius ??
              stackBorderBottomLeftRadius ??
              stackBorderRadius,
            borderBottomRightRadius:
              borderBottomRightRadius ??
              borderRadius ??
              stackBorderBottomRightRadius ??
              stackBorderRadius,
            overflow: lowestBarPosition ? 'visible' : 'hidden'
          }}
        >
          {item.stacks.map((stackItem, index) => {
            const borderRadii = getStackBorderRadii(item, index)
            const barHeight = getBarHeight(
              stackItem.value,
              stackItem.marginBottom
            )

            return (
              <div
                key={index}
                onClick={stackItem.onPress}
                // activeOpacity={activeOpacity}
                // disabled={disablePress || !stackItem.onPress}
                style={{
                  position: 'absolute',
                  bottom: getPosition(index) + (stackItem.marginBottom || 0),
                  width: '100%',
                  height: barHeight,
                  backgroundColor: (
                    stackItem.color ||
                    item.color ||
                    props.color ||
                    'black'
                  ).toString(),
                  backgroundImage: props.showGradient
                    ? `linear-gradient(${
                        stackItem.gradientColor ||
                        item.gradientColor ||
                        props.gradientColor ||
                        'white'
                      },${(
                        stackItem.color ||
                        item.color ||
                        props.color ||
                        'black'
                      ).toString()})`
                    : ``,
                  borderWidth: barBorderWidth ?? 0,
                  borderColor: barBorderColor.toString(),
                  ...borderRadii
                }}
              >
                {/* {stackItem.showGradient ||
                item.showGradient ||
                props.showGradient ? (
                  <LinearGradient
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      ...borderRadii,
                    }}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={[
                      stackItem.gradientColor ||
                        item.gradientColor ||
                        props.gradientColor ||
                        'white',
                      stackItem.color || item.color || props.color || 'black',
                    ]}
                  />
                ) : null} */}
                {stackItem.innerBarComponent && stackItem.innerBarComponent()}
              </div>
            )
          })}
          {(item.barBackgroundPattern || barBackgroundPattern) && (
            <svg>
              <defs>
                {item.barBackgroundPattern
                  ? item.barBackgroundPattern()
                  : barBackgroundPattern?.()}
              </defs>
              <rect
                stroke='transparent'
                x='1'
                y='1'
                width='100%'
                height='100%'
                fill={`url(#${item.patternId || patternId})`}
              />
            </svg>
          )}
        </div>
        {localBarInnerComponent ? (
          <div style={{ height: '100%', width: '100%' }}>
            {localBarInnerComponent(item, index)}
          </div>
        ) : null}
        {(item.topLabelComponent || showValuesAsTopLabel) && (
          <div
            style={(() => {
              const style: React.CSSProperties = {
                position: 'absolute',
                height: 30,
                width: item.barWidth || props.barWidth || 30,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
              if (noAnimation) {
                style.bottom = totalHeight + 70
              } else {
                style.top = (containerHeight ?? 200) - totalHeight + 14
              }
              if (cotainsNegative) {
                style.transform = `translateY(${totalHeight * 2}px)`
              }
              if (props.horizontal && !props.intactTopLabel) {
                style.transform = `rotate(270deg)`
              }
              return { ...style, ...item.topLabelContainerStyle }
            })()}
          >
            {showValuesAsTopLabel ? (
              <div style={item.topLabelTextStyle}>
                {item.stacks.reduce((acc, stack) => acc + stack.value, 0)}
              </div>
            ) : (
              item.topLabelComponent?.()
            )}
          </div>
        )}
      </>
    )
  }

  useEffect(() => {
    if (!noAnimation) {
      setTimeout(() => setHeight(totalHeight), 20)
    }
  }, [])

  const barWrapper = () => {
    return noAnimation ? (
      static2DSimple()
    ) : (
      <div
        style={{
          position: 'absolute',
          left: leftSpacing,
          bottom: (containerHeight ?? 200) - height + 113,
          height: height,
          transition: `height ${animationDuration / 1000}s`
          // overflow: 'hidden'
        }}
      >
        {static2DSimple()}
      </div>
    )
  }

  return (
    <>
      <div
        // pointerEvents={
        //   props.pointerConfig
        //     ? props.pointerConfig.pointerEvents ?? 'none'
        //     : 'auto'
        // }
        style={(() => {
          const style: React.CSSProperties = {
            // overflow: 'hidden',
            // marginBottom: -60 + xAxisLabelsVerticalShift,
            width: item.stacks[0].barWidth || props.barWidth || 30,
            height: totalHeight,
            marginRight: spacing
          }

          if (props.pointerConfig) {
            style.transform = `translateY(${
              (containerHeight || 200) -
              totalHeight -
              10 +
              xAxisLabelsVerticalShift
            }px`
          }
          return style
        })()}
      >
        {/* {props.showVerticalLines && (
          <div
            style={{
              zIndex: props.verticalLinesZIndex,
              position: 'absolute',
              height: (containerHeight || 200) + 15,
              width: props.verticalLinesThickness,
              bottom: 0,
              left: (item.barWidth || props.barWidth || 30) / 2,
              backgroundColor: props.verticalLinesColor,
            }}
          />
        )} */}
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
        {barWrapper()}
        {renderLabel(label || '', labelTextStyle)}
      </div>
      {renderTooltip && selectedIndex === index && (
        <div
          style={{
            position: 'absolute',
            bottom: totalHeight + 60,
            left:
              index === stackData.length - 1
                ? leftSpacing - leftShiftForLastIndexTooltip
                : leftSpacing -
                  (item.leftShiftForTooltip ?? leftShiftForTooltip ?? 0),
            zIndex: 1000
          }}
        >
          {renderTooltip(item, index)}
        </div>
      )}
    </>
  )
}

export default RenderStackBars

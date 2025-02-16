import React, { useState } from 'react'
import { PieChartMain } from './main'
import { PieChartPropsType, pieColors, usePieChart } from 'gifted-charts-core'

export const PieChart = (props: PieChartPropsType) => {
  const {
    radius,
    extraRadius,
    selectedIndex,
    setSelectedIndex,
    startAngle,
    total,
    donut,
    isThreeD,
    semiCircle,
    inwardExtraLengthForFocused,
    canvasWidth,
    canvasHeight,
    innerRadius,
    innerCircleColor,
    innerCircleBorderWidth,
    innerCircleBorderColor,
    shiftInnerCenterX,
    shiftInnerCenterY,
    tiltAngle,
    isDataShifted,
    paddingHorizontal,
    paddingVertical,
    data,
    showTooltip,
    tooltipHorizontalShift,
    tooltipVerticalShift,
    tooltipComponent,
    getTooltipText,
    tooltipBackgroundColor,
    tooltipBorderRadius,
    tooltipWidth,
    textColor,
    textSize,
    font,
    fontWeight,
    fontStyle,
    tooltipSelectedIndex,
    setTooltipSelectedIndex
  } = usePieChart(props)

  const [touchX, setTouchX] = useState(0)
  const [touchY, setTouchY] = useState(0)

  const renderTooltip = () => {
    return (
      <div
        style={{
          position: 'absolute',
          left:
            touchX > (radius + extraRadius) * 1.5
              ? props.tooltipHorizontalShift
                ? touchX - tooltipHorizontalShift
                : touchX -
                  (tooltipWidth ??
                    getTooltipText(tooltipSelectedIndex).length * 10)
              : touchX - tooltipHorizontalShift,
          top:
            touchY < 30
              ? props.tooltipVerticalShift
                ? touchY - tooltipVerticalShift
                : touchY
              : touchY - tooltipVerticalShift
        }}
      >
        {data[tooltipSelectedIndex].tooltipComponent ? (
          data[tooltipSelectedIndex].tooltipComponent?.()
        ) : tooltipComponent ? (
          tooltipComponent(tooltipSelectedIndex)
        ) : (
          <div
            style={{
              backgroundColor: tooltipBackgroundColor.toString(),
              borderRadius: tooltipBorderRadius,
              paddingLeft: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingTop: 4,
              width: tooltipWidth
            }}
          >
            <text
              // numberOfLines={tooltipTextNoOfLines}
              style={{
                color:
                  data[tooltipSelectedIndex].textColor || textColor || 'white',
                textAlign: 'center',
                fontSize: textSize,
                fontFamily: font,
                fontWeight,
                fontStyle
              }}
            >
              {getTooltipText(tooltipSelectedIndex)}
            </text>
          </div>
        )}
      </div>
    )
  }

  const renderInnerCircle = (
    innerRadius: number,
    innerCircleBorderWidth: number
  ) => {
    if (props.centerLabelComponent || (donut && !isDataShifted)) {
      let containerStyle: React.CSSProperties = {
        height: innerRadius * 2,
        width: innerRadius * 2,
        borderRadius: innerRadius + innerCircleBorderWidth,
        position: 'absolute',
        // zIndex: 100,
        alignSelf: 'center',
        backgroundColor: innerCircleColor.toString(),
        left:
          canvasWidth / 2 -
          innerRadius +
          shiftInnerCenterX +
          extraRadius +
          paddingHorizontal / 2 -
          innerCircleBorderWidth,
        top:
          canvasHeight / 2 -
          innerRadius +
          shiftInnerCenterY +
          extraRadius +
          paddingVertical / 2 -
          innerCircleBorderWidth,
        borderWidth: innerCircleBorderWidth,
        borderColor: innerCircleBorderColor.toString(),
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }

      if (isThreeD) {
        containerStyle = {
          ...containerStyle,
          borderTopWidth: innerCircleBorderWidth * 5,
          borderLeftWidth: shiftInnerCenterX
            ? innerCircleBorderWidth * 2
            : innerCircleBorderWidth,
          transform: `rotateX(${tiltAngle})`
        }

        if (semiCircle) {
          containerStyle = {
            ...containerStyle,
            borderTopWidth: isThreeD
              ? innerCircleBorderWidth * 5
              : innerCircleBorderWidth,
            borderLeftWidth: 0.5,
            borderLeftColor: innerCircleColor.toString(),
            borderBottomWidth: 0,
            borderRightWidth: 0.5,
            borderRightColor: innerCircleColor.toString()
          }
        }
      }

      return (
        <div style={containerStyle}>
          <div style={{ marginTop: semiCircle ? -0.5 * innerRadius : 0 }}>
            {props.centerLabelComponent ? props.centerLabelComponent() : null}
          </div>
        </div>
      )
    }
    return null
  }

  if (!total) return null

  return (
    <div
      style={{
        height:
          (radius + extraRadius + paddingVertical / 2) *
          (props.semiCircle ? 1 : 2),
        width: (radius + extraRadius + paddingHorizontal / 2) * 2,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute' }}>
        <PieChartMain
          {...props}
          setTouchX={setTouchX}
          setTouchY={setTouchY}
          tooltipSelectedIndex={tooltipSelectedIndex}
          setTooltipSelectedIndex={setTooltipSelectedIndex}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          paddingHorizontal={paddingHorizontal}
          paddingVertical={paddingVertical}
          extraRadius={extraRadius}
        />
      </div>
      {renderInnerCircle(innerRadius, innerCircleBorderWidth)}
      {props.data.length > 1 &&
        props.data[selectedIndex] && // don't forget to add this one so there are no errors when the data is empty / updating
        (props.focusOnPress || props.sectionAutoFocus) &&
        selectedIndex !== -1 && (
          <div
            style={{
              position: 'absolute',
              top: -extraRadius,
              left: -extraRadius,
              // zIndex: -1,
              pointerEvents: 'none'
            }}
          >
            <PieChartMain
              {...props}
              setTouchX={setTouchX}
              setTouchY={setTouchY}
              tooltipSelectedIndex={tooltipSelectedIndex}
              setTooltipSelectedIndex={setTooltipSelectedIndex}
              data={[
                {
                  ...props.data[selectedIndex]
                },
                {
                  value: total - props.data[selectedIndex].value,
                  // onPress: () => alert('black'),
                  peripheral: true,
                  strokeWidth: 0
                }
              ]}
              radius={radius + extraRadius}
              initialAngle={startAngle}
              innerRadius={props.innerRadius || radius / 2.5}
              isBiggerPie
              setSelectedIndex={setSelectedIndex}
              paddingHorizontal={paddingHorizontal}
              paddingVertical={paddingVertical}
              extraRadius={extraRadius}
            />
          </div>
        )}
      {renderInnerCircle(
        innerRadius - inwardExtraLengthForFocused,
        inwardExtraLengthForFocused ? 0 : innerCircleBorderWidth
      )}
      {showTooltip && tooltipSelectedIndex !== -1 ? renderTooltip() : null}
    </div>
  )
}

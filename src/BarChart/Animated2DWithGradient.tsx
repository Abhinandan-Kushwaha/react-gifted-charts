import React, { useEffect, useState } from 'react'
import Cap from '../Components/BarSpecificComponents/cap'
import { Animated2DWithGradientPropsType } from 'gifted-charts-core'

// if (Platform.OS === 'android') {
//   UIManager.setLayoutAnimationEnabledExperimental &&
//     UIManager.setLayoutAnimationEnabledExperimental(true);
// }

interface Ianimated2DWithGradientPropsType
  extends Animated2DWithGradientPropsType {
  yTranslate: number
}

const Animated2DWithGradient = (props: Ianimated2DWithGradientPropsType) => {
  const {
    barBackgroundPattern,
    patternId,
    barWidth,
    barStyle,
    item,
    index,
    opacity,
    animationDuration,
    noGradient,
    noAnimation,
    containerHeight,
    maxValue,
    barMarginBottom,
    barInnerComponent,
    intactTopLabel,
    showValuesAsTopLabel,
    topLabelContainerStyle,
    topLabelTextStyle,
    commonStyleForBar,
    yTranslate
  } = props
  const [height, setHeight] = useState(noAnimation ? props.height : 0.2)
  // const [initialRender, setInitialRender] = useState(noAnimation ? false : true)

  useEffect(() => {
    if (!noAnimation) {
      setHeight(props.height)
    }
  }, [props.height])

  // useEffect(() => {
  //   if (!noAnimation) {
  //     if (initialRender) {
  //       setTimeout(() => layoutAppear(), 20);
  //     } else {
  //       elevate();
  //     }
  //   }
  // }, [props.height]);

  // const elevate = () => {
  //   LayoutAnimation.configureNext({
  //     duration: animationDuration,
  //     update: {type: 'linear', property: 'scaleXY'},
  //   });
  //   setHeight(props.height);
  // };

  // const layoutAppear = () => {
  //   LayoutAnimation.configureNext({
  //     duration: Platform.OS == 'ios' ? animationDuration : 20,
  //     create: {type: 'linear', property: 'opacity'},
  //     update: {type: 'linear', property: 'scaleXY'},
  //   });
  //   setInitialRender(false);
  //   setTimeout(() => elevate(), Platform.OS == 'ios' ? 10 : 100);
  // };

  return (
    <>
      <div
        style={(() => {
          let style: React.CSSProperties = {
            position: 'absolute',
            bottom: 0,
            width: item.barWidth ?? props.barWidth ?? 30,
            overflow: 'hidden',
            transition: `height ${animationDuration / 1000}s`,
            height:
              (noAnimation
                ? Math.max(
                    props.minHeight,
                    (Math.abs(item.value) * (containerHeight || 200)) /
                      (maxValue || 200)
                  )
                : height) - (barMarginBottom || 0)
          }
          if (item.value < 0) {
            style.transform = `rotate(180deg) translateY(${
              -props.height - (noAnimation ? 2 : 0)
            }px)`
          }

          if (noGradient) {
            style.backgroundColor = props.frontColor.toString()
          } else {
            style.backgroundImage = `linear-gradient(${
              item.gradientColor || props.gradientColor || 'white'
            },${
              item.frontColor?.toString() ||
              props.frontColor?.toString() ||
              'black'
            })`
          }

          return style
        })()}
      >
        <div
          style={(() => {
            let style: React.CSSProperties = {
              width: '100%',
              height:
                (noAnimation
                  ? Math.max(
                      props.minHeight,
                      (Math.abs(item.value) * (containerHeight || 200)) /
                        (maxValue || 200)
                    )
                  : height) - (barMarginBottom || 0)
            }

            if (item.barStyle) {
              style = { ...style, ...item.barStyle }
            } else {
              style = { ...style, ...barStyle }
            }
            return style
          })()}
        >
          <div>
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
                width={item.barWidth || props.barWidth || 30}
                height={
                  noAnimation
                    ? (Math.abs(item.value) * (containerHeight || 200)) /
                      (maxValue || 200)
                    : height
                }
                fill={`url(#${item.patternId || patternId})`}
              />
            </svg>
          )}
          {barInnerComponent ? (
            <div style={{ height: '100%', width: '100%' }}>
              {barInnerComponent(item, index)}
            </div>
          ) : null}
        </div>
      </div>
      {item.topLabelComponent || showValuesAsTopLabel ? (
        <div
          style={(() => {
            let style: React.CSSProperties = {
              position: 'absolute',
              top: -30 - height,
              height: 30,
              width: item.barWidth || barWidth || 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: opacity
            }
            if (item.value < 0) {
              style.transform = `rotate(180deg)`
            }
            if (props.horizontal && !intactTopLabel) {
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
            <div style={topLabelTextStyle}>{item.value}</div>
          ) : (
            item.topLabelComponent?.()
          )}
        </div>
      ) : null}
    </>
  )
}

export default Animated2DWithGradient

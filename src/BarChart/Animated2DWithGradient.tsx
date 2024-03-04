import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Svg, { Defs, Rect } from 'react-native-svg'
import Cap from '../Components/BarSpecificComponents/cap'
import { Animated2DWithGradientPropsType } from 'gifted-charts-core'

// if (Platform.OS === 'android') {
//   UIManager.setLayoutAnimationEnabledExperimental &&
//     UIManager.setLayoutAnimationEnabledExperimental(true);
// }

const Animated2DWithGradient = (props: Animated2DWithGradientPropsType) => {
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
    commonStyleForBar
  } = props
  const [height, setHeight] = useState(noAnimation ? props.height : 0.2)
  const [initialRender, setInitialRender] = useState(noAnimation ? false : true)

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
      {!initialRender && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            overflow: 'hidden',
            height:
              (noAnimation
                ? Math.max(
                    props.minHeight,
                    (Math.abs(item.value) * (containerHeight || 200)) /
                      (maxValue || 200)
                  )
                : height) - (barMarginBottom || 0),
            backgroundColor: props.frontColor.toString()
          }}
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
            {noGradient ? (
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
            ) : null
            // <LinearGradient
            //   style={commonStyleForBar}
            //   start={{x: 0, y: 0}}
            //   end={{x: 1, y: 1}}
            //   colors={[
            //     item.gradientColor || props.gradientColor || 'white',
            //     item.frontColor || props.frontColor || 'black',
            //   ]}>
            //   {props.cappedBars && (
            //     <div
            //       style={{
            //         position: 'absolute',
            //         width: '100%',
            //         height:
            //           item.capThickness === 0
            //             ? 0
            //             : item.capThickness || props.capThickness || 6,
            //         backgroundColor:
            //           item.capColor || props.capColor || 'black',
            //         borderTopLeftRadius:
            //           item.capRadius === 0
            //             ? 0
            //             : item.capRadius || props.capRadius || 0,
            //         borderTopRightRadius:
            //           item.capRadius === 0
            //             ? 0
            //             : item.capRadius || props.capRadius || 0,
            //       }}
            //     />
            //   )}
            // </LinearGradient>
            }
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
      )}
      {item.topLabelComponent || showValuesAsTopLabel ? (
        <div
          style={(() => {
            let style: React.CSSProperties = {
              position: 'absolute',
              top: (item.barWidth || barWidth || 30) * -1,
              height: item.barWidth || barWidth || 30,
              width: item.barWidth || barWidth || 30,
              justifyContent:
                (props.horizontal && !intactTopLabel) || item.value < 0
                  ? 'center'
                  : 'flex-end',
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

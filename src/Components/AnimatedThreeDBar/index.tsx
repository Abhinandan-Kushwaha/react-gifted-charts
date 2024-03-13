import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import {
  useAnimatedThreeDBar,
  animatedBarPropTypes,
  trianglePropTypes
} from 'gifted-charts-core'

const TriangleCorner = (props: trianglePropTypes) => {
  return (
    <div
      style={{
        ...triangleStyles.triangleCorner,
        ...props.style,
        borderRightWidth: props.width / 2,
        borderTopWidth: props.width / 2,
        borderTopColor: props.color
      }}
    />
  )
}

const triangleStyles = {
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRightColor: 'transparent',
    transform: [{ rotate: '90deg' }]
  }
}

interface IanimatedBarPropTypes extends animatedBarPropTypes {
  containerHeight: number
}

const AnimatedThreeDBar = (props: IanimatedBarPropTypes) => {
  const [height, setHeight] = useState(props.isAnimated ? 0 : props.height)

  const {
    isAnimated,
    animationDuration,
    item,
    index,
    barWidth,
    sideWidth,
    barStyle,
    barBackgroundPattern,
    barInnerComponent,
    patternId,
    intactTopLabel,
    showValuesAsTopLabel,
    topLabelContainerStyle,
    topLabelTextStyle,
    containerHeight
  } = props

  const {
    showGradient,
    gradientColor,
    frontColor,
    sideColor,
    topColor,
    opacity,
    initialRender,
    setInitialRender
  } = useAnimatedThreeDBar(props)

  //   useEffect(() => {
  //     if (isAnimated) {
  //       if (initialRender) {
  //         setTimeout(() => {
  //           layoutAppear();
  //         }, 20);
  //       } else {
  //         elevate();
  //       }
  //     }
  //   }, [props.height]);

  //   const elevate = () => {
  //     LayoutAnimation.configureNext({
  //       duration: animationDuration,
  //       update: {type: 'linear', property: 'scaleY'},
  //     });
  //     setHeight(props.height);
  //   };

  //   const layoutAppear = () => {
  //     LayoutAnimation.configureNext({
  //       duration: Platform.OS == 'ios' ? animationDuration : 20,
  //       create: {type: 'linear', property: 'scaleY'},
  //       // update: { type: 'linear' }
  //     });
  //     setInitialRender(false);
  //     setTimeout(() => elevate(), Platform.OS == 'ios' ? 10 : 100);
  //   };

  const [isAnimating, setIsAnimating] = useState(isAnimated)
  useEffect(() => {
    if (isAnimated) {
      setTimeout(() => setHeight(props.height), 20)
      setTimeout(() => setIsAnimating(false), animationDuration - 50)
    }
  }, [props.height])

  return (
    <div
      style={{
        ...styles.container
        // transform:`rotate(180deg) translateY(-200px)`
      }}
    >
      <div
        style={{
          ...styles.row,
          opacity: opacity,
          position: 'absolute',
          overflow: isAnimating
            ? 'hidden'
            : item.topLabelComponent ?? showValuesAsTopLabel
            ? 'visible'
            : 'hidden',
          height: height + sideWidth / 2,
          transition: isAnimated ? `height ${animationDuration / 1000}s` : ``,
          bottom: 0,
          transform: `${
            props.side === 'right' ? 'rotateY(180deg)' : ''
          } translateY(${containerHeight * 1.05 + 28 - props.height}px)`
        }}
      >
        {/*******************          Top div             *****************/}
        {props.height ? (
          <div style={{ position: 'absolute', top: sideWidth / 2 }}>
            <div style={{ position: 'absolute', top: sideWidth / -2 }}>
              <TriangleCorner
                color={topColor}
                width={sideWidth}
                style={{ transform: `rotate(90deg)`, opacity: opacity }}
              />
            </div>
            <div
              style={{ position: 'absolute', top: sideWidth / -2, zIndex: -1 }}
            >
              <div
                style={{
                  width: barWidth,
                  height: barWidth * 0.4,
                  // left: barWidth / 2,
                  backgroundColor: topColor.toString(),
                  opacity: opacity
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: sideWidth / -2,
                left: barWidth
              }}
            >
              <TriangleCorner
                color={topColor}
                width={sideWidth}
                style={{ transform: `rotate(-90deg)`, opacity: opacity }}
              />
            </div>
          </div>
        ) : null}

        {/*******************************************************************/}

        <div>
          <TriangleCorner
            color={height ? sideColor : 'transparent'}
            width={sideWidth}
            style={{ transform: `rotate(-90deg)`, opacity: opacity }}
          />
          <div
            style={{
              width: sideWidth / 2,
              height: height - sideWidth / 2, //animatedSideHeight
              backgroundColor: sideColor.toString(),
              opacity: opacity
            }}
          />
          <TriangleCorner
            color={height ? sideColor : 'transparent'}
            width={sideWidth}
            style={{ transform: `rotate(90deg)`, opacity: opacity }}
          />
        </div>

        <div
          style={{
            width: barWidth,
            height: height, //animatedHeight
            backgroundColor: frontColor.toString(),
            backgroundImage: showGradient
              ? `linear-gradient(${gradientColor},${frontColor.toString()})`
              : ``,
            borderLeftWidth: 0.5,
            borderTopWidth: 0.5,
            borderColor: 'white',
            opacity: opacity,
            marginTop: sideWidth / 2,
            ...(item.barStyle || barStyle)
          }}
        >
          {/* {showGradient && (
              <LinearGradient
                style={{position: 'absolute', width: '100%', height: '100%'}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={[gradientColor, frontColor]}
              />
            )} */}
          {barBackgroundPattern && (
            <svg>
              <defs>{barBackgroundPattern()}</defs>
              <rect
                stroke='transparent'
                x='1'
                y='1'
                width={barWidth || 30}
                height={height}
                fill={`url(#${patternId})`}
              />
            </svg>
          )}
          {barInnerComponent ? (
            <div style={{ height: '100%', width: '100%' }}>
              {barInnerComponent(item, index)}
            </div>
          ) : null}
        </div>

        {/*******************          Top Label            *****************/}

        {(item.topLabelComponent || showValuesAsTopLabel) && (
          <div
            style={(() => {
              let style: React.CSSProperties = {
                position: 'absolute',
                top: -30,
                height: 30,
                width: barWidth,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: opacity
              }
              if (props.horizontal && !intactTopLabel) {
                style.transform = `rotate(270deg)`
              }
              if (props.side === 'right') {
                style.transform = `rotateY(180deg)`
              }
              if (topLabelContainerStyle) {
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

        {/*******************************************************************/}
      </div>
    </div>
  )
}

export default AnimatedThreeDBar

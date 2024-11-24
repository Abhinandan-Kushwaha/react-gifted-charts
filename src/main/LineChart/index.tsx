import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { styles } from './styles'
import { screenWidth, usePrevious } from '../utils'
import {
  getSegmentedPathObjects,
  getRegionPathObjects,
  RANGE_ENTER,
  RANGE_EXIT,
  SEGMENT_END,
  SEGMENT_START,
  STOP,
  LineChartPropsType,
  lineDataItem,
  LineSvgProps,
  useLineChart,
  adjustToOffset,
  LineProperties
} from 'gifted-charts-core'
import BarAndLineChartsWrapper from '../Components/BarAndLineChartsWrapper'
import { StripAndLabel } from '../Components/common/StripAndLabel'
import { Pointer } from '../Components/common/Pointer'
import { animated, useSpring } from '@react-spring/web'

// let initialData: Array<lineDataItem> | null = null;
// let animations: Array<Animated.Value> = [];

let prevPoints = ''

export const LineChart = (props: LineChartPropsType) => {
  const scrollRef = useRef(null)
  // const opacValue = useMemo(() => new Animated.Value(0), []);
  // const heightValue = useMemo(() => new Animated.Value(0), []);
  // const widthValue = useMemo(() => new Animated.Value(0), []);
  // const widthValue2 = useMemo(() => new Animated.Value(0), []);
  // const widthValue3 = useMemo(() => new Animated.Value(0), []);
  // const widthValue4 = useMemo(() => new Animated.Value(0), []);
  // const widthValue5 = useMemo(() => new Animated.Value(0), []);

  // if (!initialData) {
  //   initialData = props.dataSet?.[0]?.data ?? props.data ?? [];
  //   animations = initialData.map(item => new Animated.Value(item.value));
  // }

  const {
    curveType,
    scrollX,
    setScrollX,
    arrow1Points,
    arrow2Points,
    arrow3Points,
    arrow4Points,
    arrow5Points,
    secondaryArrowPoints,
    setPointerIndex,
    pointerX,
    setPointerX,
    pointerY,
    setPointerY,
    pointerItem,
    setPointerItem,
    pointerY2,
    setPointerY2,
    pointerItem2,
    setPointerItem2,
    pointerY3,
    setPointerY3,
    pointerItem3,
    setPointerItem3,
    pointerY4,
    setPointerY4,
    pointerItem4,
    setPointerItem4,
    pointerY5,
    setPointerY5,
    pointerItem5,
    setPointerItem5,
    pointerYsForDataSet,
    setPointerYsForDataSet,
    secondaryPointerY,
    setSecondaryPointerY,
    secondaryPointerItem,
    setSecondaryPointerItem,
    responderStartTime,
    setResponderStartTime,
    setResponderActive,
    points,
    points2,
    points3,
    points4,
    points5,
    secondaryPoints,
    fillPoints,
    fillPoints2,
    fillPoints3,
    fillPoints4,
    fillPoints5,
    secondaryFillPoints,
    pointsFromSet,
    fillPointsFromSet,
    arrowPointsFromSet,
    selectedIndex,
    setSelectedIndex,
    containerHeight,
    data,
    data2,
    data3,
    data4,
    data5,
    secondaryData,
    dataSet,
    data0,
    labelsExtraHeight,
    animationDuration,
    onDataChangeAnimationDuration,
    animateTogether,
    animateOnDataChange,
    startIndex1,
    startIndex2,
    endIndex1,
    endIndex2,
    startIndex3,
    endIndex3,
    startIndex4,
    endIndex4,
    startIndex5,
    endIndex5,
    initialSpacing,
    thickness,
    yAxisLabelWidth,
    spacing,
    xAxisThickness,
    dataPointsHeight1,
    dataPointsWidth1,
    dataPointsRadius1,
    dataPointsColor1,
    dataPointsShape1,
    dataPointsHeight2,
    dataPointsWidth2,
    dataPointsRadius2,
    dataPointsColor2,
    dataPointsShape2,
    dataPointsHeight3,
    dataPointsWidth3,
    dataPointsRadius3,
    dataPointsColor3,
    dataPointsShape3,
    dataPointsHeight4,
    dataPointsWidth4,
    dataPointsRadius4,
    dataPointsColor4,
    dataPointsShape4,
    dataPointsHeight5,
    dataPointsWidth5,
    dataPointsRadius5,
    dataPointsColor5,
    dataPointsShape5,
    getIsNthAreaChart,
    textFontSize1,
    textFontSize2,
    textFontSize3,
    textFontSize4,
    textFontSize5,
    textColor1,
    textColor2,
    textColor3,
    textColor4,
    textColor5,
    totalWidth,
    maxValue,
    overflowTop,
    extendedContainerHeight,
    getX,
    getY,
    getSecondaryY,
    secondaryMaxValue,
    showValuesAsDataPointsText,
    thickness1,
    thickness2,
    thickness3,
    thickness4,
    thickness5,
    zIndex1,
    zIndex2,
    zIndex3,
    zIndex4,
    zIndex5,
    strokeDashArray1,
    strokeDashArray2,
    strokeDashArray3,
    strokeDashArray4,
    strokeDashArray5,
    rotateLabel,
    isAnimated,
    hideDataPoints1,
    hideDataPoints2,
    hideDataPoints3,
    hideDataPoints4,
    hideDataPoints5,
    color1,
    color2,
    color3,
    color4,
    color5,
    startFillColor1,
    endFillColor1,
    startOpacity1,
    endOpacity1,
    startFillColor2,
    endFillColor2,
    startOpacity2,
    endOpacity2,
    startFillColor3,
    endFillColor3,
    startOpacity3,
    endOpacity3,
    startFillColor4,
    endFillColor4,
    startOpacity4,
    endOpacity4,
    startFillColor5,
    endFillColor5,
    startOpacity5,
    endOpacity5,
    arrowStrokeWidth1,
    arrowStrokeColor1,
    arrowFillColor1,
    arrowStrokeWidth2,
    arrowStrokeColor2,
    arrowFillColor2,
    arrowStrokeWidth3,
    arrowStrokeColor3,
    arrowFillColor3,
    arrowStrokeWidth4,
    arrowStrokeColor4,
    arrowFillColor4,
    arrowStrokeWidth5,
    arrowStrokeColor5,
    arrowFillColor5,
    arrowStrokeWidthsFromSet,
    arrowStrokeColorsFromSet,
    arrowFillColorsFromSet,
    secondaryLineConfig,
    gradientDirection,
    stepHeight,
    noOfSectionsBelowXAxis,
    xAxisTextNumberOfLines,
    xAxisLabelsVerticalShift,
    pointerConfig,
    pointerHeight,
    pointerWidth,
    pointerRadius,
    pointerColor,
    pointerComponent,
    showPointerStrip,
    pointerStripHeight,
    pointerStripWidth,
    pointerStripColor,
    pointerStripUptoDataPoint,
    pointerLabelComponent,
    stripOverPointer,
    shiftPointerLabelX,
    shiftPointerLabelY,
    pointerLabelWidth,
    pointerLabelHeight,
    autoAdjustPointerLabelPosition,
    pointerVanishDelay,
    activatePointersOnLongPress,
    activatePointersDelay,
    persistPointer,
    hidePointer1,
    hidePointer2,
    hidePointer3,
    hidePointer4,
    hidePointer5,
    cumulativeSpacing1,
    cumulativeSpacing2,
    cumulativeSpacing3,
    cumulativeSpacing4,
    cumulativeSpacing5,
    cumulativeSpacingSecondary,
    cumulativeSpacingForSet,
    hideSecondaryPointer,
    pointerEvents,
    focusEnabled,
    showDataPointOnFocus,
    showStripOnFocus,
    showTextOnFocus,
    showDataPointLabelOnFocus,
    stripHeight,
    stripWidth,
    stripColor,
    stripOpacity,
    stripStrokeDashArray,
    unFocusOnPressOut,
    delayBeforeUnFocus,
    containerHeightIncludingBelowXAxis = 0,
    lineGradient,
    lineGradientDirection,
    lineGradientStartColor,
    lineGradientEndColor,
    barAndLineChartsWrapperProps,
    areaChart,
    mostNegativeValue
    // oldPoints
  } = useLineChart({ ...props, parentWidth: props.parentWidth ?? screenWidth })

  const { secondaryXAxis, intersectionAreaConfig } = props

  // const widthValuesFromSet = useMemo(
  //   () => dataSet?.map(set => new Animated.Value(0)),
  //   [],
  // );

  // useEffect(() => {
  //   if (animateOnDataChange) {
  //     Animated.parallel(
  //       animations.map((anItem, index) =>
  //         Animated.timing(anItem, {
  //           toValue: data[index]?.value ?? 0,
  //           useNativeDriver: Platform.OS === 'ios', // if useNativeDriver is set to true, animateOnDataChange feature fails for Android, so setting it true only for iOS
  //           duration: onDataChangeAnimationDuration,
  //         }),
  //       ),
  //     ).start();
  //   }
  // }, [animateOnDataChange, data, onDataChangeAnimationDuration]);

  // const labelsAppear = useCallback(() => {
  //   opacValue.setValue(0);
  //   Animated.timing(opacValue, {
  //     toValue: 1,
  //     duration: 500,
  //     easing: Easing.ease,
  //     useNativeDriver: false,
  //   }).start();
  // }, [opacValue]);

  // const appearingOpacity = opacValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 1],
  // });

  // const [mounted, setMounted] = useState(false)
  // const [mounted2, setMounted2] = useState(false)
  // const [mounted3, setMounted3] = useState(false)
  // const [mounted4, setMounted4] = useState(false)
  // const [mounted5, setMounted5] = useState(false)
  const [mountedForDataSet, setMountedForDataSet] = useState(
    dataSet?.map((v) => false)
  )

  const { width: widthValue } = useSpring({
    from: { width: 0 },
    to: { width: totalWidth },
    config: { duration: animationDuration }
  })
  const { width: widthValue2 } = useSpring({
    from: { width: 0 },
    to: { width: totalWidth },
    delay: animateTogether ? 0 : animationDuration,
    config: { duration: animationDuration }
  })
  const { width: widthValue3 } = useSpring({
    from: { width: 0 },
    to: { width: totalWidth },
    delay: animateTogether ? 0 : animationDuration * 2,
    config: { duration: animationDuration }
  })
  const { width: widthValue4 } = useSpring({
    from: { width: 0 },
    to: { width: totalWidth },
    delay: animateTogether ? 0 : animationDuration * 3,
    config: { duration: animationDuration }
  })
  const { width: widthValue5 } = useSpring({
    from: { width: 0 },
    to: { width: totalWidth },
    delay: animateTogether ? 0 : animationDuration * 4,
    config: { duration: animationDuration }
  })

  const { widthValuesFromSet } = useSpring({
    widthValuesFromSet: mountedForDataSet?.map((v, i) =>
      mountedForDataSet[i] ? totalWidth : 0
    )
  })

  // const decreaseWidth = useCallback(() => {
  //   widthValue.setValue(0);
  //   Animated.timing(widthValue, {
  //     toValue: totalWidth,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue]);

  // const decreaseWidth2 = useCallback(() => {
  //   widthValue2.setValue(0);
  //   Animated.timing(widthValue2, {
  //     toValue: totalWidth,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue2]);

  // const decreaseWidth3 = useCallback(() => {
  //   widthValue3.setValue(0);
  //   Animated.timing(widthValue3, {
  //     toValue: totalWidth,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue3]);

  // const decreaseWidth4 = useCallback(() => {
  //   widthValue4.setValue(0);
  //   Animated.timing(widthValue4, {
  //     toValue: totalWidth,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue4]);

  // const decreaseWidth5 = useCallback(() => {
  //   widthValue5.setValue(0);
  //   Animated.timing(widthValue5, {
  //     toValue: totalWidth,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue5]);

  // const decreaseWidthsFromSet = useCallback(() => {
  //   dataSet?.map((set, index) => {
  //     widthValuesFromSet?.[index]?.setValue(0);
  //     if (widthValuesFromSet?.[index]) {
  //       Animated.timing(widthValuesFromSet?.[index], {
  //         toValue: totalWidth,
  //         duration: animationDuration,
  //         easing: Easing.linear,
  //         useNativeDriver: false,
  //       }).start();
  //     }
  //   });
  // }, [animationDuration, widthValuesFromSet]);

  // useEffect(() => {
  //   setMounted(true)
  //   // labelsAppear();
  //   // widthValuesFromSet?.forEach((item, index) => {
  //   //   setTimeout(
  //   //     () => {
  //   //       setMountedForDataSet(dataSet?.map((v,i)=>i===index));
  //   //     },
  //   //     animateTogether ? 0 : animationDuration * index,
  //   //   );
  //   // });
  //   dataSet?.forEach((item, index) => {
  //     setTimeout(
  //       () => {
  //         setMountedForDataSet(dataSet?.map((v, i) => i === index))
  //       },
  //       animateTogether ? 0 : animationDuration * index
  //     )
  //   })
  //   setTimeout(
  //     () => {
  //       setMounted2(true)
  //     },
  //     animateTogether ? 0 : animationDuration
  //   )
  //   setTimeout(
  //     () => {
  //       setMounted3(true)
  //     },
  //     animateTogether ? 0 : animationDuration * 2
  //   )
  //   setTimeout(
  //     () => {
  //       setMounted4(true)
  //     },
  //     animateTogether ? 0 : animationDuration * 3
  //   )
  //   setTimeout(
  //     () => {
  //       setMounted5(true)
  //     },
  //     animateTogether ? 0 : animationDuration * 4
  //   )
  // }, [
  //   animateTogether,
  //   animationDuration
  //   // labelsAppear,
  // ])

  const labelsWidth = spacing + labelsExtraHeight

  const svgWrapperViewStyle: React.CSSProperties = {
    position: 'absolute',
    height:
      containerHeightIncludingBelowXAxis +
      (props.overflowBottom ?? dataPointsRadius1),
    left: 0,
    bottom: 73 + xAxisLabelsVerticalShift + labelsExtraHeight - xAxisThickness,
    zIndex: 1,
    overflow: 'hidden'
  }

  const renderLabel = (
    top: boolean,
    index: number,
    label: String,
    labelTextStyle: any,
    labelComponent: Function | undefined
  ) => {
    return (
      <div
        style={{
          position: 'absolute',
          bottom: top
            ? containerHeight +
              60 +
              (secondaryXAxis?.labelsDistanceFromXaxis ?? 15)
            : 64 - xAxisThickness - xAxisTextNumberOfLines * 18,
          zIndex: 10,
          width: spacing + labelsExtraHeight,
          left:
            initialSpacing * 2 +
            spacing * index -
            labelsWidth / 2 +
            (index === 0 && initialSpacing < 10 ? 10 : -2),
          // index === 0 && initialSpacing < 10
          //   ? initialSpacing / 2 + spacing * index + spacing/2
          //   : initialSpacing / 2 + spacing * index + spacing/2 - 10,
          height: props.xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18,
          transform: rotateLabel ? `rotate(60deg)` : ``
        }}
      >
        {labelComponent ? (
          labelComponent()
        ) : (
          <div
            style={{ textAlign: 'center', ...labelTextStyle }}
            // numberOfLines={xAxisTextNumberOfLines}
          >
            {label || ''}
          </div>
        )}
      </div>
    )
  }

  // const renderAnimatedLabel = (
  //   index: number,
  //   label: String,
  //   labelTextStyle: any,
  //   labelComponent: Function | undefined,
  // ) => {
  //   return (
  //     <Animated.View
  //       style={[
  //         {
  //           height: rotateLabel
  //             ? 40
  //             : props.xAxisLabelsHeight ?? xAxisTextNumberOfLines * 18,
  //           position: 'absolute',
  //           bottom: rotateLabel ? 10 : 54 - xAxisTextNumberOfLines * 18,
  //           zIndex: 10,
  //           width: spacing,
  //           left:
  //             index === 0 && initialSpacing < 10
  //               ? initialSpacing / 2 + spacing * index - spacing / 2 + 4
  //               : initialSpacing / 2 + spacing * index - spacing / 2 - 10,
  //           opacity: appearingOpacity,
  //         },
  //         rotateLabel && {transform: [{rotate: '60deg'}]},
  //       ]}>
  //       {labelComponent ? (
  //         labelComponent()
  //       ) : (
  //         <Text
  //           style={[{textAlign: 'center'}, labelTextStyle]}
  //           numberOfLines={xAxisTextNumberOfLines}>
  //           {label || ''}
  //         </Text>
  //       )}
  //     </Animated.View>
  //   );
  // };

  const onStripPress = (item: lineDataItem, index: number) => {
    if (props.focusedDataPointIndex === undefined || !props.onFocus) {
      setSelectedIndex(index)
    }
    if (props.onFocus) {
      props.onFocus(item, index)
    }
  }

  const renderDataPoints = (
    hideDataPoints: any,
    dataForRender: any,
    originalDataFromProps: any,
    dataPtsShape: any,
    dataPtsWidth: any,
    dataPtsHeight: any,
    dataPtsColor: any,
    dataPtsRadius: any,
    textColor: any,
    textFontSize: any,
    startIndex: any,
    endIndex: any,
    isSecondary: any,
    showValuesAsDataPointsText: any,
    spacingArray: number[]
  ) => {
    const getYOrSecondaryY = isSecondary ? getSecondaryY : getY
    return dataForRender.map((item: lineDataItem, index: number) => {
      if (index < startIndex || index > endIndex) return null
      if (item.hideDataPoint) {
        return null
      }
      let dataPointsShape,
        dataPointsWidth,
        dataPointsHeight,
        dataPointsColor,
        dataPointsRadius,
        text,
        customDataPoint,
        dataPointLabelComponent
      if (index === selectedIndex) {
        dataPointsShape =
          item.focusedDataPointShape ||
          props.focusedDataPointShape ||
          item.dataPointShape ||
          dataPtsShape
        dataPointsWidth =
          item.focusedDataPointWidth ||
          props.focusedDataPointWidth ||
          item.dataPointWidth ||
          dataPtsWidth
        dataPointsHeight =
          item.focusedDataPointHeight ||
          props.focusedDataPointHeight ||
          item.dataPointHeight ||
          dataPtsHeight
        dataPointsColor =
          item.focusedDataPointColor || props.focusedDataPointColor || 'orange'
        dataPointsRadius =
          item.focusedDataPointRadius ??
          props.focusedDataPointRadius ??
          item.dataPointRadius ??
          dataPtsRadius
        if (showTextOnFocus) {
          text = item.dataPointText
        }
        customDataPoint =
          item.focusedCustomDataPoint ||
          props.focusedCustomDataPoint ||
          item.customDataPoint ||
          props.customDataPoint
        dataPointLabelComponent =
          item.focusedDataPointLabelComponent || item.dataPointLabelComponent
      } else {
        dataPointsShape = item.dataPointShape || dataPtsShape
        dataPointsWidth = item.dataPointWidth || dataPtsWidth
        dataPointsHeight = item.dataPointHeight || dataPtsHeight
        dataPointsColor = item.dataPointColor || dataPtsColor
        dataPointsRadius = item.dataPointRadius ?? dataPtsRadius
        if (showTextOnFocus) {
          text = ''
        }
        customDataPoint = item.customDataPoint || props.customDataPoint
        dataPointLabelComponent = item.dataPointLabelComponent
      }

      if (showValuesAsDataPointsText) {
        text = originalDataFromProps[index].value
      }

      const currentStripHeight = item.stripHeight ?? stripHeight
      const currentStripWidth = item.stripWidth ?? stripWidth
      const currentStripOpacity = item.stripOpacity ?? stripOpacity
      const currentStripColor = item.stripColor || stripColor
      const currentStripStrokeDashArray =
        item.stripStrokeDashArray ?? stripStrokeDashArray ?? ''
      const position = 'left' // I18nManager.isRTL ? 'right' : 'left';

      const y1 = currentStripHeight
        ? containerHeight - currentStripHeight + 8
        : containerHeight -
          dataPointsHeight / 2 +
          14 -
          (item.value * containerHeight) / maxValue

      const actualStripHeight =
        currentStripHeight ||
        (item.value * containerHeight) / maxValue - 2 + overflowTop

      return (
        <Fragment key={index}>
          {focusEnabled ? (
            <>
              {unFocusOnPressOut ? ( // remove strip on onFocus
                <rect
                  // onPressIn={() => onStripPress(item, index)}
                  // onPressOut={() =>
                  //   setTimeout(() => setSelectedIndex(-1), delayBeforeUnFocus)
                  // }
                  x={initialSpacing + (spacing * index - spacing / 2)}
                  y={8}
                  width={spacing}
                  height={containerHeight - 0}
                  fill={'none'}
                />
              ) : (
                <rect
                  onClick={() => onStripPress(item, index)}
                  x={initialSpacing + (spacing * index - spacing / 2)}
                  y={8}
                  width={spacing}
                  height={containerHeight}
                  fill={'none'}
                />
              )}
            </>
          ) : null}
          {item.showStrip ||
          (focusEnabled && index === selectedIndex && showStripOnFocus) ? (
            <line
              x1={initialSpacing + spacing * index - currentStripWidth / 2 - 1}
              y1={y1}
              x2={initialSpacing + spacing * index - currentStripWidth / 2 - 1}
              y2={y1 + actualStripHeight}
              strokeWidth={currentStripWidth}
              stroke={currentStripColor}
              strokeDasharray={currentStripStrokeDashArray.toString()}
              opacity={currentStripOpacity}
            />
          ) : null}
          {hideDataPoints ? null : (
            <>
              {customDataPoint ? (
                <div
                  style={{
                    ...styles.customDataPointContainer,
                    height: dataPointsHeight,
                    width: dataPointsWidth,
                    top: getYOrSecondaryY(item.value),
                    [position]:
                      initialSpacing - dataPointsWidth + spacing * index
                    // transform: `scaleX(${I18nManager.isRTL ? -1 : 1}px)`,
                  }}
                >
                  {customDataPoint(item, index)}
                </div>
              ) : null}
              {dataPointsShape === 'rectangular' ? (
                <Fragment key={index}>
                  {customDataPoint ? null : (
                    <rect
                      x={getX(spacingArray, index) - dataPointsWidth / 2}
                      y={getYOrSecondaryY(item.value) - dataPointsHeight / 2}
                      width={dataPointsWidth}
                      height={dataPointsHeight}
                      fill={
                        showDataPointOnFocus
                          ? index === selectedIndex
                            ? dataPointsColor
                            : 'none'
                          : dataPointsColor
                      }
                      onClick={() => {
                        if (item.onPress) {
                          item.onPress(item, index)
                        } else if (props.onPress) {
                          props.onPress(item, index)
                        }
                      }}
                    />
                  )}
                </Fragment>
              ) : (
                <Fragment key={index}>
                  {customDataPoint ? null : (
                    <circle
                      cx={getX(spacingArray, index)}
                      cy={getYOrSecondaryY(item.value)}
                      r={dataPointsRadius}
                      fill={
                        showDataPointOnFocus
                          ? index === selectedIndex
                            ? dataPointsColor
                            : 'none'
                          : dataPointsColor
                      }
                      onClick={() => {
                        if (item.onPress) {
                          item.onPress(item, index)
                        } else if (props.onPress) {
                          props.onPress(item, index)
                        }
                      }}
                    />
                  )}
                </Fragment>
              )}
              {dataPointLabelComponent ? (
                !showTextOnFocus || index === selectedIndex ? (
                  <div
                    style={{
                      ...styles.customDataPointContainer,
                      zIndex: index === selectedIndex ? 1000 : 0,
                      top:
                        containerHeight +
                        (item.dataPointLabelShiftY ||
                          props.dataPointLabelShiftY ||
                          0) -
                        (item.value * containerHeight) / maxValue,
                      left:
                        initialSpacing +
                        (item.dataPointLabelShiftX ||
                          props.dataPointLabelShiftX ||
                          0) -
                        (item.dataPointLabelWidth
                          ? item.dataPointLabelWidth + 20
                          : props.dataPointLabelWidth
                          ? props.dataPointLabelWidth + 20
                          : 50) /
                          2 +
                        spacing * index
                    }}
                  >
                    {showDataPointLabelOnFocus
                      ? index === selectedIndex
                        ? dataPointLabelComponent()
                        : null
                      : dataPointLabelComponent()}
                  </div>
                ) : null
              ) : text || item.dataPointText ? (
                !showTextOnFocus || index === selectedIndex ? (
                  <text
                    fill={item.textColor || textColor}
                    fontSize={item.textFontSize || textFontSize}
                    x={
                      getX(spacingArray, index) -
                      dataPointsWidth +
                      (item.textShiftX || props.textShiftX || 0)
                    }
                    y={
                      getYOrSecondaryY(item.value) -
                      dataPointsHeight / 2 +
                      (item.textShiftY || props.textShiftY || 0)
                    }
                  >
                    {!showTextOnFocus && !showValuesAsDataPointsText
                      ? item.dataPointText
                      : text}
                  </text>
                ) : null
              ) : null}
            </>
          )}
        </Fragment>
      )
    })
  }

  const renderSpecificVerticalLines = (
    dataForRender: any,
    spacingArray: number[]
  ) => {
    return dataForRender.map((item: lineDataItem, index: number) => {
      if (item.showVerticalLine) {
        const x = getX(spacingArray, index)
        return (
          <line
            key={index}
            x1={x}
            y1={extendedContainerHeight}
            x2={x}
            y2={
              item.verticalLineUptoDataPoint ?? props.verticalLinesUptoDataPoint
                ? getY(item.value)
                : -xAxisThickness
            }
            stroke={(
              item.verticalLineColor ||
              props.verticalLinesColor ||
              'lightgray'
            ).toString()}
            strokeWidth={
              item.verticalLineThickness || props.verticalLinesThickness || 2
            }
            strokeDasharray={(
              item.verticalLineStrokeDashArray ??
              props.verticalLinesStrokeDashArray ??
              ''
            ).toString()}
          />
        )
      }
      return null
    })
  }

  const renderPointer = (lineNumber: number, isDataSet?: boolean) => {
    if (isDataSet) {
      let pointerItemLocal, pointerYLocal, pointerColorLocal
      return dataSet?.map((set, index) => {
        const pIndex = barAndLineChartsWrapperProps.pointerIndex
        pointerItemLocal = set.data[pIndex]
        pointerYLocal = pointerYsForDataSet[index]
        pointerColorLocal =
          pointerConfig?.pointerColorsForDataSet?.[index] ?? pointerColor
        return (
          <Fragment key={'dSetPts' + index}>
            {Pointer({
              pointerX,
              pointerYLocal: pointerYLocal + xAxisThickness,
              pointerComponent,
              pointerHeight,
              pointerRadius,
              pointerWidth,
              pointerItemLocal,
              pointerColorLocal
            })}
          </Fragment>
        )
      })
    }
    if (lineNumber === 1 && hidePointer1) return
    if (lineNumber === 2 && hidePointer2) return
    if (lineNumber === 3 && hidePointer3) return
    if (lineNumber === 4 && hidePointer4) return
    if (lineNumber === 5 && hidePointer5) return
    // 6 is for secondaryData
    if (lineNumber === 6 && hideSecondaryPointer) return

    let pointerItemLocal, pointerYLocal, pointerColorLocal
    switch (lineNumber) {
      case 1:
        pointerItemLocal = pointerItem
        pointerYLocal = pointerY
        pointerColorLocal = pointerConfig?.pointer1Color || pointerColor
        break
      case 2:
        pointerItemLocal = pointerItem2
        pointerYLocal = pointerY2
        pointerColorLocal = pointerConfig?.pointer2Color || pointerColor
        break
      case 3:
        pointerItemLocal = pointerItem3
        pointerYLocal = pointerY3
        pointerColorLocal = pointerConfig?.pointer3Color || pointerColor
        break
      case 4:
        pointerItemLocal = pointerItem4
        pointerYLocal = pointerY4
        pointerColorLocal = pointerConfig?.pointer4Color || pointerColor
        break
      case 5:
        pointerItemLocal = pointerItem5
        pointerYLocal = pointerY5
        pointerColorLocal = pointerConfig?.pointer5Color || pointerColor
        break
      case 6:
        pointerItemLocal = secondaryPointerItem
        pointerYLocal = secondaryPointerY
        pointerColorLocal = pointerConfig?.secondaryPointerColor || pointerColor
        break
    }

    return Pointer({
      pointerX,
      pointerYLocal,
      pointerComponent,
      pointerHeight,
      pointerRadius,
      pointerWidth,
      pointerItemLocal,
      pointerColorLocal
    })
  }

  const renderStripAndLabel = () => {
    let pointerItemLocal, pointerYLocal

    pointerItemLocal = [pointerItem]
    let arr = [pointerY]
    if (pointerY2 !== 0) {
      arr.push(pointerY2)
      pointerItemLocal.push(pointerItem2)
    }
    if (pointerY3 !== 0) {
      arr.push(pointerY3)
      pointerItemLocal.push(pointerItem3)
    }
    if (pointerY4 !== 0) {
      arr.push(pointerY4)
      pointerItemLocal.push(pointerItem4)
    }
    if (pointerY5 !== 0) {
      arr.push(pointerY5)
      pointerItemLocal.push(pointerItem5)
    }
    pointerYLocal = Math.min(...arr)

    return StripAndLabel({
      autoAdjustPointerLabelPosition,
      pointerX,
      pointerLabelWidth,
      activatePointersOnLongPress,
      yAxisLabelWidth,
      pointerRadius,
      pointerWidth,
      shiftPointerLabelX,
      pointerLabelHeight,
      pointerYLocal,
      pointerStripUptoDataPoint,
      pointerStripHeight,
      shiftPointerLabelY,
      pointerItemLocal,
      showPointerStrip,
      pointerStripWidth,
      containerHeight,
      xAxisThickness,
      pointerStripColor,
      pointerConfig,
      pointerLabelComponent,
      secondaryPointerItem,
      scrollX,
      pointerEvents,
      width: totalWidth,
      screenWidth:
        props.width ??
        Math.min(totalWidth, props.parentWidth ?? screenWidth) -
          yAxisLabelWidth,
      hasDataSet: !!dataSet,
      containsNegative: mostNegativeValue < 0,
      horizontalStripConfig: pointerConfig?.horizontalStripConfig
    })
  }

  const getLineGradientComponent = (key: string) => {
    return props.lineGradientComponent ? (
      props.lineGradientComponent()
    ) : (
      <linearGradient
        id={`lineGradient${key}`}
        x1='0'
        y1='0'
        x2={lineGradientDirection === 'horizontal' ? '1' : '0'}
        y2={lineGradientDirection === 'vertical' ? '1' : '0'}
      >
        <stop offset='0' stopColor={lineGradientStartColor} />
        <stop offset='1' stopColor={lineGradientEndColor} />
      </linearGradient>
    )
  }

  const getAreaGradientComponent = (
    startFillColor: string,
    endFillColor: string,
    startOpacity: number,
    endOpacity: number,
    key: string
  ) => {
    return props.areaGradientComponent ? (
      props.areaGradientComponent()
    ) : (
      <linearGradient
        id={`Gradient${key}`}
        x1='0'
        y1='0'
        x2={gradientDirection === 'horizontal' ? '1' : '0'}
        y2={gradientDirection === 'vertical' ? '1' : '0'}
      >
        <stop
          offset='0'
          stopColor={startFillColor}
          stopOpacity={startOpacity.toString()}
        />
        <stop
          offset='1'
          stopColor={endFillColor}
          stopOpacity={endOpacity.toString()}
        />
      </linearGradient>
    )
  }

  const renderIntersection = () => {
    return (
      <div style={{ ...svgWrapperViewStyle, width: totalWidth }}>
        <svg
          height={
            containerHeightIncludingBelowXAxis +
            (props.overflowBottom ?? dataPointsRadius1) -
            6
          }
          width={totalWidth}
        >
          {/* Define the paths path1 & path2 */}
          <path id='path1' d={fillPoints} fill='none' stroke={'none'} />
          <path id='path2' d={fillPoints2} fill='none' stroke={'none'} />

          <clipPath id='clip'>
            <use href='#path1' />
          </clipPath>

          {/* Render the clipped Path */}
          <path
            d={fillPoints2}
            clipPath='url(#clip)'
            fill={(intersectionAreaConfig?.fillColor ?? 'white') as string}
          />

          {/* Render the Line1 again as its clipped portion gets hidden */}
          <path
            d={points}
            stroke={color1}
            strokeWidth={thickness1 ?? thickness}
            fill={'none'}
          />
        </svg>
      </div>
    )
  }

  // const oldPoints = usePrevious(points);
  // const oldFillPoints = usePrevious(fillPoints);

  // console.log('oldPoints---->>>>',oldPoints)
  // console.log('points............',points)

  const lineSvgComponent = (
    points: any,
    currentLineThickness: number | undefined,
    color: string,
    fillPoints: any,
    startFillColor: string,
    endFillColor: string,
    startOpacity: number,
    endOpacity: number,
    strokeDashArray: Array<number> | undefined | null,
    showArrow: boolean,
    arrowPoints: any,
    arrowStrokeWidth: any,
    arrowStrokeColor: any,
    arrowFillColor: any,
    key: number,
    hideDataPoints: any,
    data: any,
    propsData: any,
    dataPointsShape: any,
    dataPointsWidth: any,
    dataPointsHeight: any,
    dataPointsColor: any,
    dataPointsRadius: any,
    textColor: any,
    textFontSize: any,
    startIndex: any,
    endIndex: any,
    isSecondary: any,
    showValuesAsDataPointsText: any,
    spacingArray: number[]
  ) => {
    // console.log('oldPoints---->', oldPoints)
    // console.log('points---->', points)
    // console.log(' = ',oldPoints === points)
    // const shouldAnimate = animateOnDataChange && prevPoints

    //   const animatedTag = <animate
    //   dur="1s"
    //   attributeName='d'
    //   values={`${oldPoints};${points}`}
    //   fill='freeze'
    // />

    if (!points) return null
    const uniqueGradientKey = (key ?? -1).toString() + Math.random()
    const isNthAreaChart = getIsNthAreaChart(key ?? 0)
    const isCurved = points.includes('C') || points.includes('Q')
    let ar: LineProperties[] = [{ d: '', color: '', strokeWidth: 0 }]
    if (points.includes(RANGE_ENTER)) {
      ar = getRegionPathObjects(
        points,
        color,
        currentLineThickness ?? 0,
        thickness,
        strokeDashArray ?? [],
        isCurved,
        RANGE_ENTER,
        STOP,
        RANGE_EXIT,
        curveType
      )
    } else if (points.includes(SEGMENT_START)) {
      ar = getSegmentedPathObjects(
        points,
        color,
        currentLineThickness ?? 0,
        thickness,
        strokeDashArray ?? [],
        isCurved,
        SEGMENT_START,
        SEGMENT_END,
        curveType
      )
    }
    const lineSvgPropsOuter: any = {
      d: points,
      fill: 'none',
      stroke: (lineGradient
        ? props.lineGradientId
          ? `url(#${props.lineGradientId})`
          : `url(#lineGradient)`
        : color
      ).toString(),
      strokeWidth: currentLineThickness || thickness
    }
    if (strokeDashArray) {
      lineSvgPropsOuter.strokeDasharray = strokeDashArray
    }
    return (
      <svg
        height={
          containerHeightIncludingBelowXAxis +
          (props.overflowBottom ?? dataPointsRadius1)
        }
        width={totalWidth}
        onClick={props.onBackgroundPress as any}
      >
        {lineGradient && getLineGradientComponent(uniqueGradientKey)}
        {points.includes(SEGMENT_START) || points.includes(RANGE_ENTER) ? (
          ar.map((item, index) => {
            const lineSvgProps: any = {
              d: item.d,
              fill: 'none',
              stroke: (lineGradient
                ? props.lineGradientId
                  ? `url(#${props.lineGradientId})`
                  : `url(#lineGradient${uniqueGradientKey})`
                : item.color
              ).toString(),
              strokeWidth: item.strokeWidth
            }
            if (
              item.strokeDashArray &&
              item.strokeDashArray.length === 2 &&
              typeof item.strokeDashArray[0] === 'number' &&
              typeof item.strokeDashArray[1] === 'number'
            ) {
              lineSvgProps.strokeDasharray = item.strokeDashArray
            }
            return <path key={index} {...lineSvgProps} />
          })
        ) : (
          <path {...lineSvgPropsOuter} d={points}>
            <animate
              id={Math.random().toString()}
              dur='1s'
              attributeName='d'
              values={`${points};${'M9 160 L31 166.66666666666666 L53 196.66666666666666 L75 210 L97 233.33333333333334 L119 230 L141 240 L163 206.66666666666666 L185 136.66666666666669 L207 166.66666666666666 L229 160 L251 196.66666666666666 L273 216.66666666666666 L295 206.66666666666666 L317 166.66666666666666 L339 160 L361 196.66666666666666 L383 133.33333333333331 L405 160'}`}
            />
          </path>
        )}

        {/***********************      For Area Chart        ************/}

        {isNthAreaChart &&
          getAreaGradientComponent(
            startFillColor,
            endFillColor,
            startOpacity,
            endOpacity,
            uniqueGradientKey
          )}
        {isNthAreaChart &&
          (props.interpolateMissingValues === false &&
          propsData.some(
            (item: any) => isNaN(item.value) // if we have a null/undefined value in data & interpolation is disabled, then don't render area
          ) ? null : (
            <path
              d={fillPoints}
              fill={
                props.areaGradientId
                  ? `url(#${props.areaGradientId})`
                  : `url(#Gradient${uniqueGradientKey})`
              }
              stroke={'none'}
              strokeWidth={currentLineThickness || thickness}
            >
              {/* {oldFillPoints&&animateOnDataChange ? (
              <animate
                dur={`${animationDuration/1000}s`}
                attributeName='d'
                values={`${oldFillPoints};${fillPoints}`}
              />
            ) : null} */}
            </path>
          ))}

        {/******************************************************************/}

        {renderSpecificVerticalLines(data, cumulativeSpacing1)}
        {renderSpecificVerticalLines(data2, cumulativeSpacing2)}
        {renderSpecificVerticalLines(data3, cumulativeSpacing3)}
        {renderSpecificVerticalLines(data4, cumulativeSpacing4)}
        {renderSpecificVerticalLines(data5, cumulativeSpacing5)}

        {dataSet?.map((set) =>
          renderSpecificVerticalLines(set?.data, cumulativeSpacingForSet)
        ) ?? null}

        {/***  !!! Here it's done thrice intentionally, trying to make it to only 1 breaks things !!!  ***/}
        {renderDataPoints(
          hideDataPoints,
          data,
          propsData,
          dataPointsShape,
          dataPointsWidth,
          dataPointsHeight,
          dataPointsColor,
          dataPointsRadius,
          textColor,
          textFontSize,
          startIndex,
          endIndex,
          isSecondary,
          showValuesAsDataPointsText,
          spacingArray
        )}

        {showArrow && (
          <path
            d={arrowPoints}
            fill={arrowFillColor}
            stroke={arrowStrokeColor}
            strokeWidth={arrowStrokeWidth}
          />
        )}
      </svg>
    )
  }

  const renderLine = (
    containerHeightIncludingBelowXAxis: number,
    zIndex: number,
    points: any,
    currentLineThickness: number | undefined,
    color: string,
    fillPoints: any,
    startFillColor: string,
    endFillColor: string,
    startOpacity: number,
    endOpacity: number,
    strokeDashArray: Array<number> | undefined | null,
    showArrow: any,
    arrowPoints: any,
    arrowStrokeWidth: any,
    arrowStrokeColor: any,
    arrowFillColor: any,
    hideDataPoints: any,
    data: any,
    propsData: any,
    dataPointsShape: any,
    dataPointsWidth: any,
    dataPointsHeight: any,
    dataPointsColor: any,
    dataPointsRadius: any,
    textColor: any,
    textFontSize: any,
    startIndex: any,
    endIndex: any,
    isSecondary: any,
    showValuesAsDataPointsText: any,
    spacingArray: number[],
    key?: number
  ) => {
    return (
      <div
        key={key ?? 0}
        // onStartShouldSetResponder={evt => (pointerConfig ? true : false)}
        // onMoveShouldSetResponder={evt => (pointerConfig ? true : false)}
        // onResponderGrant={evt => {
        //   if (!pointerConfig) return;
        //   setResponderStartTime(evt.timeStamp);
        //   if (activatePointersOnLongPress) {
        //     return;
        //   }
        //   let x = evt.nativeEvent.locationX;
        //   if (
        //     !activatePointersOnLongPress &&
        //     x > (props.width || Dimensions.get('window').width)
        //   )
        //     return;
        //   let factor = (x - initialSpacing) / spacing;
        //   factor = Math.round(factor);
        //   factor = Math.min(factor, (data0 ?? data).length - 1);
        //   factor = Math.max(factor, 0);
        //   let z =
        //     initialSpacing +
        //     spacing * factor -
        //     (pointerRadius || pointerWidth / 2) -
        //     1;
        //   setPointerX(z);
        //   setPointerIndex(factor);
        //   let item, y;
        //   item = (data0 ?? data)[factor];
        //   y =
        //     containerHeight -
        //     (item.value * containerHeight) / maxValue -
        //     (pointerRadius || pointerHeight / 2) +
        //     10;
        //   setPointerY(y);
        //   setPointerItem(item);
        //   if (data2 && data2.length) {
        //     item = data2[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setPointerY2(y);
        //       setPointerItem2(item);
        //     }
        //   }
        //   if (data3 && data3.length) {
        //     item = data3[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setPointerY3(y);
        //       setPointerItem3(item);
        //     }
        //   }
        //   if (data4 && data4.length) {
        //     item = data4[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setPointerY4(y);
        //       setPointerItem4(item);
        //     }
        //   }
        //   if (data5 && data5.length) {
        //     item = data5[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setPointerY5(y);
        //       setPointerItem5(item);
        //     }
        //   }
        //   if (secondaryData?.length) {
        //     item = secondaryData[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / secondaryMaxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setSecondaryPointerY(y);
        //       setSecondaryPointerItem(item);
        //     }
        //   }
        //    if (dataSet?.length) {
        //      if (dataSet[0].data[factor]) {
        //        const ysForDataSet = dataSet.map(set => {
        //        const item = set.data[factor];
        //        const y = item
        //          ? containerHeight -
        //          (item.value * containerHeight) / maxValue -
        //          (pointerRadius || pointerHeight / 2) +
        //          10
        //        : 0;
        //        return y;
        //      });
        //      setPointerYsForDataSet(ysForDataSet);
        //    }
        //  }
        // }}
        // onResponderMove={evt => {
        //   if (!pointerConfig) return;
        //   if (
        //     activatePointersOnLongPress &&
        //     evt.timeStamp - responderStartTime < activatePointersDelay
        //   ) {
        //     return;
        //   } else {
        //     setResponderActive(true);
        //   }
        //   let x = evt.nativeEvent.locationX;
        //   if (
        //     !activatePointersOnLongPress &&
        //     x > (props.width || Dimensions.get('window').width)
        //   )
        //     return;
        //   let factor = (x - initialSpacing) / spacing;
        //   factor = Math.round(factor);
        //   factor = Math.min(factor, (data0 ?? data).length - 1);
        //   factor = Math.max(factor, 0);
        //   let z =
        //     initialSpacing +
        //     spacing * factor -
        //     (pointerRadius || pointerWidth / 2) -
        //     1;
        //   let item, y;
        //   setPointerX(z);
        //   setPointerIndex(factor);
        //   item = (data0 ?? data)[factor];
        //   y =
        //     containerHeight -
        //     (item.value * containerHeight) / maxValue -
        //     (pointerRadius || pointerHeight / 2) +
        //     10;
        //   setPointerY(y);
        //   setPointerItem(item);
        //   if (data2 && data2.length) {
        //     item = data2[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setPointerY2(y);
        //       setPointerItem2(item);
        //     }
        //   }
        //   if (data3 && data3.length) {
        //     item = data3[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setPointerY3(y);
        //       setPointerItem3(item);
        //     }
        //   }
        //   if (data4 && data4.length) {
        //     item = data4[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setPointerY4(y);
        //       setPointerItem4(item);
        //     }
        //   }
        //   if (data5 && data5.length) {
        //     item = data5[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setPointerY5(y);
        //       setPointerItem5(item);
        //     }
        //   }
        //   if (secondaryData?.length) {
        //     item = secondaryData[factor];
        //     if (item) {
        //       y =
        //         containerHeight -
        //         (item.value * containerHeight) / secondaryMaxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10;
        //       setSecondaryPointerY(y);
        //       setSecondaryPointerItem(item);
        //     }
        //   }
        //   if (dataSet?.length) {
        //     const ysForDataSet = dataSet.map(set => {
        //       const item = set.data[factor];
        //       const y = item
        //         ? containerHeight -
        //         (item.value * containerHeight) / maxValue -
        //         (pointerRadius || pointerHeight / 2) +
        //         10
        //        : 0;
        //       return y;
        //     });
        //     setPointerYsForDataSet(ysForDataSet);
        //   }
        // }}
        // // onResponderReject={evt => {
        // //   console.log('evt...reject.......',evt);
        // // }}
        // onResponderEnd={evt => {
        //   // console.log('evt...end.......',evt);
        //   setResponderStartTime(0);
        //   setPointerIndex(-1);
        //   setResponderActive(false);
        //   if (!persistPointer)
        //     setTimeout(() => setPointerX(0), pointerVanishDelay);
        // }}
        // onResponderTerminationRequest={evt => false}
        // // onResponderTerminate={evt => {
        // //   console.log('evt...terminate.......',evt);
        // // }}
        // // onResponderRelease={evt => {
        // //   setResponderStartTime(0);
        // //   setResponderActive(false);
        // //   setTimeout(() => setPointerX(0), pointerVanishDelay);
        // // }}
        style={{
          ...svgWrapperViewStyle,
          width: totalWidth,
          height: containerHeightIncludingBelowXAxis,
          zIndex
          // left:8,
        }}
      >
        {lineSvgComponent(
          points,
          currentLineThickness,
          color,
          fillPoints,
          startFillColor,
          endFillColor,
          startOpacity,
          endOpacity,
          strokeDashArray,
          showArrow,
          arrowPoints,
          arrowStrokeWidth,
          arrowStrokeColor,
          arrowFillColor,
          key ?? 0,
          hideDataPoints,
          data,
          propsData,
          dataPointsShape,
          dataPointsWidth,
          dataPointsHeight,
          dataPointsColor,
          dataPointsRadius,
          textColor,
          textFontSize,
          startIndex,
          endIndex,
          isSecondary,
          showValuesAsDataPointsText,
          spacingArray
        )}
      </div>
    )
  }

  const renderAnimatedLine = (
    containerHeightIncludingBelowXAxis: number,
    zIndex: number,
    points: any,
    animatedWidth: any,
    currentLineThickness: number | undefined,
    color: string,
    fillPoints: any,
    startFillColor: string,
    endFillColor: string,
    startOpacity: number,
    endOpacity: number,
    strokeDashArray: Array<number> | undefined | null,
    showArrow: any,
    arrowPoints: any,
    arrowStrokeWidth: any,
    arrowStrokeColor: any,
    arrowFillColor: any,
    hideDataPoints: any,
    data: any,
    propsData: any,
    dataPointsShape: any,
    dataPointsWidth: any,
    dataPointsHeight: any,
    dataPointsColor: any,
    dataPointsRadius: any,
    textColor: any,
    textFontSize: any,
    startIndex: any,
    endIndex: any,
    isSecondary: any,
    showValuesAsDataPointsText: any,
    spacingArray: number[],
    key?: number
  ) => {
    return (
      <animated.div
        style={{
          ...svgWrapperViewStyle,
          width: animatedWidth,
          height: containerHeightIncludingBelowXAxis,
          zIndex
          // left:8,
        }}
      >
        {lineSvgComponent(
          points,
          currentLineThickness,
          color,
          fillPoints,
          startFillColor,
          endFillColor,
          startOpacity,
          endOpacity,
          strokeDashArray,
          showArrow,
          arrowPoints,
          arrowStrokeWidth,
          arrowStrokeColor,
          arrowFillColor,
          key ?? 0,
          hideDataPoints,
          data,
          propsData,
          dataPointsShape,
          dataPointsWidth,
          dataPointsHeight,
          dataPointsColor,
          dataPointsRadius,
          textColor,
          textFontSize,
          startIndex,
          endIndex,
          isSecondary,
          showValuesAsDataPointsText,
          spacingArray
        )}
      </animated.div>
    )
  }

  // const renderAnimatedLine = (
  //   containerHeightIncludingBelowXAxis: number,
  //   zIndex: number,
  //   points: any,
  //   animatedWidth: any,
  //   currentLineThickness: number | undefined,
  //   color: string,
  //   fillPoints: any,
  //   startFillColor: string,
  //   endFillColor: string,
  //   startOpacity: number,
  //   endOpacity: number,
  //   strokeDashArray: Array<number> | undefined | null,
  //   showArrow: any,
  //   arrowPoints: any,
  //   arrowStrokeWidth: any,
  //   arrowStrokeColor: any,
  //   arrowFillColor: any,
  //   hideDataPoints: any,
  //   paramsData: any,
  //   propsData: any,
  //   dataPointsShape: any,
  //   dataPointsWidth: any,
  //   dataPointsHeight: any,
  //   dataPointsColor: any,
  //   dataPointsRadius: any,
  //   textColor: any,
  //   textFontSize: any,
  //   startIndex: any,
  //   endIndex: any,
  //   isSecondary: any,
  //   showValuesAsDataPointsText: any,
  //   key?: number
  // ) =>
  //   renderLine(
  //     zIndex,
  //     points,
  //     currentLineThickness,
  //     color,
  //     fillPoints,
  //     startFillColor,
  //     endFillColor,
  //     startOpacity,
  //     endOpacity,
  //     strokeDashArray,
  //     showArrow,
  //     arrowPoints,
  //     arrowStrokeWidth,
  //     arrowStrokeColor,
  //     arrowFillColor,
  //     hideDataPoints,
  //     paramsData,
  //     propsData,
  //     dataPointsShape,
  //     dataPointsWidth,
  //     dataPointsHeight,
  //     dataPointsColor,
  //     dataPointsRadius,
  //     textColor,
  //     textFontSize,
  //     startIndex,
  //     endIndex,
  //     isSecondary,
  //     showValuesAsDataPointsText,
  //     key
  //   )

  // const renderAnimatedLine = (
  //   zIndex: number,
  //   points: any,
  //   animatedWidth: any,
  //   currentLineThickness: number | undefined,
  //   color: ColorValue,
  //   fillPoints: any,
  //   startFillColor: string,
  //   endFillColor: string,
  //   startOpacity: number,
  //   endOpacity: number,
  //   strokeDashArray: Array<number> | undefined | null,
  //   showArrow,
  //   arrowPoints,
  //   arrowStrokeWidth,
  //   arrowStrokeColor,
  //   arrowFillColor,
  //   key?: number,
  // ) => {
  //   return (
  //     <Animated.View
  //       key={key ?? 0}
  //       onStartShouldSetResponder={evt => (pointerConfig ? true : false)}
  //       onMoveShouldSetResponder={evt => (pointerConfig ? true : false)}
  //       onResponderGrant={evt => {
  //         if (!pointerConfig) return;
  //         setResponderStartTime(evt.timeStamp);
  //         if (activatePointersOnLongPress) {
  //           return;
  //         }
  //         let x = evt.nativeEvent.locationX;
  //         if (
  //           !activatePointersOnLongPress &&
  //           x > (props.width || Dimensions.get('window').width)
  //         )
  //           return;
  //       activatePointers(x);
  //       }}
  //       onResponderMove={evt => {
  //         if (!pointerConfig) return;
  //         if (
  //           activatePointersOnLongPress &&
  //           evt.timeStamp - responderStartTime < activatePointersDelay
  //         ) {
  //           return;
  //         } else {
  //           setResponderActive(true);
  //         }
  //         let x = evt.nativeEvent.locationX;
  //         if (
  //           !activatePointersOnLongPress &&
  //           x > (props.width || Dimensions.get('window').width)
  //         )
  //           return;
  //         let factor = (x - initialSpacing) / spacing;
  //         factor = Math.round(factor);
  //         factor = Math.min(factor, (data0 ?? data).length - 1);
  //         factor = Math.max(factor, 0);
  //         let z =
  //           initialSpacing +
  //           spacing * factor -
  //           (pointerRadius || pointerWidth / 2) -
  //           1;
  //         let item, y;
  //         setPointerX(z);
  //         setPointerIndex(factor);
  //         item = (data0 ?? data)[factor];
  //         y =
  //           containerHeight -
  //           (item.value * containerHeight) / maxValue -
  //           (pointerRadius || pointerHeight / 2) +
  //           10;
  //         setPointerY(y);
  //         setPointerItem(item);
  //         if (data2 && data2.length) {
  //           item = data2[factor];
  //           if (item) {
  //             y =
  //               containerHeight -
  //               (item.value * containerHeight) / maxValue -
  //               (pointerRadius || pointerHeight / 2) +
  //               10;
  //             setPointerY2(y);
  //             setPointerItem2(item);
  //           }
  //         }
  //         if (data3 && data3.length) {
  //           item = data3[factor];
  //           if (item) {
  //             y =
  //               containerHeight -
  //               (item.value * containerHeight) / maxValue -
  //               (pointerRadius || pointerHeight / 2) +
  //               10;
  //             setPointerY3(y);
  //             setPointerItem3(item);
  //           }
  //         }
  //         if (data4 && data4.length) {
  //           item = data4[factor];
  //           if (item) {
  //             y =
  //               containerHeight -
  //               (item.value * containerHeight) / maxValue -
  //               (pointerRadius || pointerHeight / 2) +
  //               10;
  //             setPointerY4(y);
  //             setPointerItem4(item);
  //           }
  //         }
  //         if (data5 && data5.length) {
  //           item = data5[factor];
  //           if (item) {
  //             y =
  //               containerHeight -
  //               (item.value * containerHeight) / maxValue -
  //               (pointerRadius || pointerHeight / 2) +
  //               10;
  //             setPointerY5(y);
  //             setPointerItem5(item);
  //           }
  //         }
  //         if (secondaryData?.length) {
  //           item = secondaryData[factor];
  //           if (item) {
  //             y =
  //               containerHeight -
  //               (item.value * containerHeight) / maxValue -
  //               (pointerRadius || pointerHeight / 2) +
  //               10;
  //             setSecondaryPointerY(y);
  //             setSecondaryPointerItem(item);
  //           }
  //         }
  //       }}
  //       // onResponderReject={evt => {
  //       //   console.log('evt...reject.......',evt);
  //       // }}
  //       onResponderEnd={evt => {
  //         // console.log('evt...end.......',evt);
  //         setResponderStartTime(0);
  //         setPointerIndex(-1);
  //         setResponderActive(false);
  //         if (!persistPointer)
  //           setTimeout(() => setPointerX(0), pointerVanishDelay);
  //       }}
  //       onResponderTerminationRequest={evt => false}
  //       // onResponderTerminate={evt => {
  //       //   console.log('evt...terminate.......',evt);
  //       // }}
  //       // onResponderRelease={evt => {
  //       //   setResponderStartTime(0);
  //       //   setResponderActive(false);
  //       //   setTimeout(() => setPointerX(0), pointerVanishDelay);
  //       // }}
  //      style={{
  //        ...svgWrapperViewStyle,
  //        width: animatedWidth,
  //       }}>
  //       {lineSvgComponent(
  //         points,
  //         currentLineThickness,
  //         color,
  //         fillPoints,
  //         startFillColor,
  //         endFillColor,
  //         startOpacity,
  //         endOpacity,
  //         strokeDashArray,
  //         showArrow,
  //         arrowPoints,
  //         arrowStrokeWidth,
  //         arrowStrokeColor,
  //         arrowFillColor,
  //       )}
  //     </Animated.View>
  //   );
  // };

  const remainingScrollViewProps = {
    onScroll: (ev: any) => {
      props.onScroll?.(ev)
      if (
        pointerConfig &&
        pointerConfig.activatePointersOnLongPress &&
        pointerConfig.autoAdjustPointerLabelPosition
      ) {
        setScrollX(ev.nativeEvent.contentOffset.x)
      }
    }
  }

  const renderChartContent = () => {
    return (
      <>
        {dataSet
          ? pointsFromSet.length
            ? dataSet.map((set, index) => {
                if (isAnimated) {
                  return renderAnimatedLine(
                    containerHeightIncludingBelowXAxis,
                    set.zIndex ?? zIndex1,
                    pointsFromSet[index],
                    0, //animatedWidth,
                    set.thickness ?? thickness1,
                    set.color ?? color1,
                    fillPointsFromSet[index],
                    set.startFillColor ?? startFillColor1,
                    set.endFillColor ?? endFillColor1,
                    set.startOpacity ?? startOpacity1,
                    set.endOpacity ?? endOpacity1,
                    set.strokeDashArray ?? strokeDashArray1,
                    set.showArrow || props.showArrows,
                    arrowPointsFromSet[index],
                    arrowStrokeWidthsFromSet?.[index],
                    arrowStrokeColorsFromSet?.[index],
                    arrowFillColorsFromSet?.[index],
                    set.hideDataPoints ?? hideDataPoints1,
                    set.data,
                    adjustToOffset(set.data, -(props.yAxisOffset ?? 0)), // need the actual values passed by user
                    set.dataPointsShape ?? dataPointsShape1,
                    set.dataPointsWidth ?? dataPointsWidth1,
                    set.dataPointsHeight ?? dataPointsHeight1,
                    set.dataPointsColor ?? dataPointsColor1,
                    set.dataPointsRadius ?? dataPointsRadius1,
                    set.textColor ?? textColor1,
                    set.textFontSize ?? textFontSize1,
                    set.startIndex ?? 0,
                    set.endIndex ?? set.data.length - 1,
                    set.isSecondary,
                    showValuesAsDataPointsText,
                    cumulativeSpacingForSet[index],
                    index
                  )
                } else {
                  return renderLine(
                    containerHeightIncludingBelowXAxis,
                    set.zIndex ?? zIndex1,
                    pointsFromSet[index],
                    set.thickness ?? thickness1,
                    set.color ?? color1,
                    fillPointsFromSet[index],
                    set.startFillColor ?? startFillColor1,
                    set.endFillColor ?? endFillColor1,
                    set.startOpacity ?? startOpacity1,
                    set.endOpacity ?? endOpacity1,
                    set.strokeDashArray ?? strokeDashArray1,
                    set.showArrow || props.showArrows,
                    arrowPointsFromSet[index],
                    arrowStrokeWidthsFromSet?.[index],
                    arrowStrokeColorsFromSet?.[index],
                    arrowFillColorsFromSet?.[index],
                    set.hideDataPoints ?? hideDataPoints1,
                    set.data,
                    adjustToOffset(set.data, -(props.yAxisOffset ?? 0)), // need the actual values passed by user
                    set.dataPointsShape ?? dataPointsShape1,
                    set.dataPointsWidth ?? dataPointsWidth1,
                    set.dataPointsHeight ?? dataPointsHeight1,
                    set.dataPointsColor ?? dataPointsColor1,
                    set.dataPointsRadius ?? dataPointsRadius1,
                    set.textColor ?? textColor1,
                    set.textFontSize ?? textFontSize1,
                    set.startIndex ?? 0,
                    set.endIndex ?? set.data.length - 1,
                    set.isSecondary,
                    showValuesAsDataPointsText,
                    cumulativeSpacingForSet[index],
                    index
                  )
                }
              })
            : null
          : isAnimated
          ? renderAnimatedLine(
              containerHeightIncludingBelowXAxis,
              zIndex1,
              points,
              widthValue, //0, //animatedWidth,
              thickness1,
              color1,
              fillPoints,
              startFillColor1,
              endFillColor1,
              startOpacity1,
              endOpacity1,
              strokeDashArray1,
              props.showArrow1 || props.showArrows,
              arrow1Points,
              arrowStrokeWidth1,
              arrowStrokeColor1,
              arrowFillColor1,
              hideDataPoints1,
              data,
              props.data,
              dataPointsShape1,
              dataPointsWidth1,
              dataPointsHeight1,
              dataPointsColor1,
              dataPointsRadius1,
              textColor1,
              textFontSize1,
              startIndex1,
              endIndex1,
              false,
              showValuesAsDataPointsText,
              cumulativeSpacing1,
              0
            )
          : renderLine(
              containerHeightIncludingBelowXAxis,
              zIndex1,
              points,
              thickness1,
              color1,
              fillPoints,
              startFillColor1,
              endFillColor1,
              startOpacity1,
              endOpacity1,
              strokeDashArray1,
              props.showArrow1 || props.showArrows,
              arrow1Points,
              arrowStrokeWidth1,
              arrowStrokeColor1,
              arrowFillColor1,
              hideDataPoints1,
              data,
              props.data,
              dataPointsShape1,
              dataPointsWidth1,
              dataPointsHeight1,
              dataPointsColor1,
              dataPointsRadius1,
              textColor1,
              textFontSize1,
              startIndex1,
              endIndex1,
              false,
              showValuesAsDataPointsText,
              cumulativeSpacing1,
              0
            )}
        {secondaryPoints
          ? isAnimated
            ? renderAnimatedLine(
                containerHeightIncludingBelowXAxis,
                secondaryLineConfig.zIndex,
                secondaryPoints,
                widthValue2, //animatedWidth,
                secondaryLineConfig.thickness,
                secondaryLineConfig.color.toString(),
                secondaryFillPoints,
                secondaryLineConfig.startFillColor,
                secondaryLineConfig.endFillColor,
                secondaryLineConfig.startOpacity,
                secondaryLineConfig.endOpacity,
                secondaryLineConfig.strokeDashArray,
                secondaryLineConfig.showArrow,
                secondaryArrowPoints,
                secondaryLineConfig.arrowConfig?.strokeWidth,
                secondaryLineConfig.arrowConfig?.strokeColor,
                secondaryLineConfig.arrowConfig?.fillColor,
                secondaryLineConfig.hideDataPoints,
                secondaryData,
                props.secondaryData,
                secondaryLineConfig.dataPointsShape,
                secondaryLineConfig.dataPointsWidth,
                secondaryLineConfig.dataPointsHeight,
                secondaryLineConfig.dataPointsColor,
                secondaryLineConfig.dataPointsRadius,
                secondaryLineConfig.textColor,
                secondaryLineConfig.textFontSize,
                secondaryLineConfig.startIndex,
                secondaryLineConfig.endIndex,
                true,
                secondaryLineConfig.showValuesAsDataPointsText,
                cumulativeSpacingSecondary,
                6
              )
            : renderLine(
                containerHeightIncludingBelowXAxis,
                secondaryLineConfig.zIndex,
                secondaryPoints,
                secondaryLineConfig.thickness,
                secondaryLineConfig.color.toString(),
                secondaryFillPoints,
                secondaryLineConfig.startFillColor,
                secondaryLineConfig.endFillColor,
                secondaryLineConfig.startOpacity,
                secondaryLineConfig.endOpacity,
                secondaryLineConfig.strokeDashArray,
                secondaryLineConfig.showArrow,
                secondaryArrowPoints,
                secondaryLineConfig.arrowConfig?.strokeWidth,
                secondaryLineConfig.arrowConfig?.strokeColor,
                secondaryLineConfig.arrowConfig?.fillColor,
                secondaryLineConfig.hideDataPoints,
                secondaryData,
                props.secondaryData,
                secondaryLineConfig.dataPointsShape,
                secondaryLineConfig.dataPointsWidth,
                secondaryLineConfig.dataPointsHeight,
                secondaryLineConfig.dataPointsColor,
                secondaryLineConfig.dataPointsRadius,
                secondaryLineConfig.textColor,
                secondaryLineConfig.textFontSize,
                secondaryLineConfig.startIndex,
                secondaryLineConfig.endIndex,
                true,
                secondaryLineConfig.showValuesAsDataPointsText,
                cumulativeSpacingSecondary,
                6
              )
          : null}
        {points2
          ? isAnimated
            ? renderAnimatedLine(
                containerHeightIncludingBelowXAxis,
                zIndex2,
                points2,
                widthValue3, //animatedWidth2,
                thickness2,
                color2,
                fillPoints2,
                startFillColor2,
                endFillColor2,
                startOpacity2,
                endOpacity2,
                strokeDashArray2,
                props.showArrow2 || props.showArrows,
                arrow2Points,
                arrowStrokeWidth2,
                arrowStrokeColor2,
                arrowFillColor2,
                hideDataPoints2,
                data2,
                props.data2,
                dataPointsShape2,
                dataPointsWidth2,
                dataPointsHeight2,
                dataPointsColor2,
                dataPointsRadius2,
                textColor2,
                textFontSize2,
                startIndex2,
                endIndex2,
                false,
                showValuesAsDataPointsText,
                cumulativeSpacing2,
                1
              )
            : renderLine(
                containerHeightIncludingBelowXAxis,
                zIndex2,
                points2,
                thickness2,
                color2,
                fillPoints2,
                startFillColor2,
                endFillColor2,
                startOpacity2,
                endOpacity2,
                strokeDashArray2,
                props.showArrow2 || props.showArrows,
                arrow2Points,
                arrowStrokeWidth2,
                arrowStrokeColor2,
                arrowFillColor2,
                hideDataPoints2,
                data2,
                props.data2,
                dataPointsShape2,
                dataPointsWidth2,
                dataPointsHeight2,
                dataPointsColor2,
                dataPointsRadius2,
                textColor2,
                textFontSize2,
                startIndex2,
                endIndex2,
                false,
                showValuesAsDataPointsText,
                cumulativeSpacing2,
                1
              )
          : null}
        {points3
          ? isAnimated
            ? renderAnimatedLine(
                containerHeightIncludingBelowXAxis,
                zIndex3,
                points3,
                widthValue4, //animatedWidth3,
                thickness3,
                color3,
                fillPoints3,
                startFillColor3,
                endFillColor3,
                startOpacity3,
                endOpacity3,
                strokeDashArray3,
                props.showArrow3 || props.showArrows,
                arrow3Points,
                arrowStrokeWidth3,
                arrowStrokeColor3,
                arrowFillColor3,
                hideDataPoints3,
                data3,
                props.data3,
                dataPointsShape3,
                dataPointsWidth3,
                dataPointsHeight3,
                dataPointsColor3,
                dataPointsRadius3,
                textColor3,
                textFontSize3,
                startIndex3,
                endIndex3,
                false,
                showValuesAsDataPointsText,
                cumulativeSpacing3,
                2
              )
            : renderLine(
                containerHeightIncludingBelowXAxis,
                zIndex3,
                points3,
                thickness3,
                color3,
                fillPoints3,
                startFillColor3,
                endFillColor3,
                startOpacity3,
                endOpacity3,
                strokeDashArray3,
                props.showArrow3 || props.showArrows,
                arrow3Points,
                arrowStrokeWidth3,
                arrowStrokeColor3,
                arrowFillColor3,
                hideDataPoints3,
                data3,
                props.data3,
                dataPointsShape3,
                dataPointsWidth3,
                dataPointsHeight3,
                dataPointsColor3,
                dataPointsRadius3,
                textColor3,
                textFontSize3,
                startIndex3,
                endIndex3,
                false,
                showValuesAsDataPointsText,
                cumulativeSpacing3,
                2
              )
          : null}
        {points4
          ? isAnimated
            ? renderAnimatedLine(
                containerHeightIncludingBelowXAxis,
                zIndex4,
                points4,
                widthValue5, //animatedWidth4,
                thickness4,
                color4,
                fillPoints4,
                startFillColor4,
                endFillColor4,
                startOpacity4,
                endOpacity4,
                strokeDashArray4,
                props.showArrow4 || props.showArrows,
                arrow4Points,
                arrowStrokeWidth4,
                arrowStrokeColor4,
                arrowFillColor4,
                hideDataPoints4,
                data4,
                props.data4,
                dataPointsShape4,
                dataPointsWidth4,
                dataPointsHeight4,
                dataPointsColor4,
                dataPointsRadius4,
                textColor4,
                textFontSize4,
                startIndex4,
                endIndex4,
                false,
                showValuesAsDataPointsText,
                cumulativeSpacing4,
                3
              )
            : renderLine(
                containerHeightIncludingBelowXAxis,
                zIndex4,
                points4,
                thickness4,
                color4,
                fillPoints4,
                startFillColor4,
                endFillColor4,
                startOpacity4,
                endOpacity4,
                strokeDashArray4,
                props.showArrow4 || props.showArrows,
                arrow4Points,
                arrowStrokeWidth4,
                arrowStrokeColor4,
                arrowFillColor4,
                hideDataPoints4,
                data4,
                props.data4,
                dataPointsShape4,
                dataPointsWidth4,
                dataPointsHeight4,
                dataPointsColor4,
                dataPointsRadius4,
                textColor4,
                textFontSize4,
                startIndex4,
                endIndex4,
                false,
                showValuesAsDataPointsText,
                cumulativeSpacing4,
                3
              )
          : null}
        {points5
          ? isAnimated
            ? renderAnimatedLine(
                containerHeightIncludingBelowXAxis,
                zIndex5,
                points5,
                0, //animatedWidth5,
                thickness5,
                color5,
                fillPoints5,
                startFillColor5,
                endFillColor5,
                startOpacity5,
                endOpacity5,
                strokeDashArray5,
                props.showArrow5 || props.showArrows,
                arrow5Points,
                arrowStrokeWidth5,
                arrowStrokeColor5,
                arrowFillColor5,
                hideDataPoints5,
                data5,
                props.data5,
                dataPointsShape5,
                dataPointsWidth5,
                dataPointsHeight5,
                dataPointsColor5,
                dataPointsRadius5,
                textColor5,
                textFontSize5,
                startIndex5,
                endIndex5,
                false,
                showValuesAsDataPointsText,
                cumulativeSpacing5,
                4
              )
            : renderLine(
                containerHeightIncludingBelowXAxis,
                zIndex5,
                points5,
                thickness5,
                color5,
                fillPoints5,
                startFillColor5,
                endFillColor5,
                startOpacity5,
                endOpacity5,
                strokeDashArray5,
                props.showArrow5 || props.showArrows,
                arrow5Points,
                arrowStrokeWidth5,
                arrowStrokeColor5,
                arrowFillColor5,
                hideDataPoints5,
                data5,
                props.data5,
                dataPointsShape5,
                dataPointsWidth5,
                dataPointsHeight5,
                dataPointsColor5,
                dataPointsRadius5,
                textColor5,
                textFontSize5,
                startIndex5,
                endIndex5,
                false,
                showValuesAsDataPointsText,
                cumulativeSpacing5,
                4
              )
          : null}
        {intersectionAreaConfig &&
        (props.areaChart || (props.areaChart1 && props.areaChart2))
          ? renderIntersection()
          : null}
        {pointerX > 0 ? (
          <div
            // pointerEvents={pointerEvents ?? 'none'}
            style={{
              position: 'absolute',
              height:
                extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
              bottom:
                58 + labelsExtraHeight + xAxisLabelsVerticalShift - overflowTop,
              // width: totalWidth,
              zIndex: 20
            }}
          >
            {!stripOverPointer && renderStripAndLabel()}
            {dataSet ? (
              renderPointer(1, true)
            ) : (
              <>
                {renderPointer(1)}
                {points2 ? renderPointer(2) : null}
                {points3 ? renderPointer(3) : null}
                {points4 ? renderPointer(4) : null}
                {points5 ? renderPointer(5) : null}
                {secondaryPoints ? renderPointer(6) : null}
                {stripOverPointer && renderStripAndLabel()}
              </>
            )}
          </div>
        ) : null}
        {(data0 ?? data).map((item: lineDataItem, index: number) => {
          const secondaryLabel =
            item.secondaryLabel ?? secondaryXAxis?.labelTexts?.[index] ?? ''
          const secondaryLabelTextStyle =
            item.secondaryLabelTextStyle ??
            secondaryXAxis?.labelsTextStyle ??
            item.labelTextStyle ??
            props.xAxisLabelTextStyle
          return (
            <div key={index}>
              {/* {isAnimated
                ? renderAnimatedLabel(
                    index,
                    item.label ||
                      (props.xAxisLabelTexts && props.xAxisLabelTexts[index]
                        ? props.xAxisLabelTexts[index]
                        : ''),
                    item.labelTextStyle || props.xAxisLabelTextStyle,
                    item.labelComponent,
                  )
                : renderLabel(
                    index,
                    item.label ||
                      (props.xAxisLabelTexts && props.xAxisLabelTexts[index]
                        ? props.xAxisLabelTexts[index]
                        : ''),
                    item.labelTextStyle || props.xAxisLabelTextStyle,
                    item.labelComponent,
                  )} */}
              {renderLabel(
                false,
                index,
                item.label ||
                  (props.xAxisLabelTexts && props.xAxisLabelTexts[index]
                    ? props.xAxisLabelTexts[index]
                    : ''),
                item.labelTextStyle || props.xAxisLabelTextStyle,
                item.labelComponent
              )}
              {/* {renderLabel(index, item.label, item.labelTextStyle)} */}
              {secondaryXAxis
                ? renderLabel(
                    true,
                    index,
                    secondaryLabel,
                    secondaryLabelTextStyle,
                    item.secondaryLabelComponent
                  )
                : null}
            </div>
          )
        })}
        {/* {pointerConfig?.dynamicLegendComponent && pointerX > 0 ? (
          <div
            style={{
              position: 'absolute',
              ...pointerConfig.dynamicLegendContainerStyle,
            }}>
            {pointerConfig.dynamicLegendComponent(
              dataSet
                ? pointerItemsForSet
                : [
                    pointerItem,
                    pointerItem2,
                    pointerItem3,
                    pointerItem4,
                    pointerItem5,
                  ].filter(item => !!item),
              pointerIndex,
            )}
          </div>
        ) : null} */}
      </>
    )
  }

  return (
    <BarAndLineChartsWrapper
      {...barAndLineChartsWrapperProps}
      dataSet={props.dataSet}
      scrollRef={scrollRef}
      // animatedWidth={animatedWidth}
      renderChartContent={renderChartContent}
      remainingScrollViewProps={remainingScrollViewProps}
    />
  )
}

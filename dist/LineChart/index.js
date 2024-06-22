"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineChart = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _utils = require("../utils");
var _giftedChartsCore = require("gifted-charts-core");
var _BarAndLineChartsWrapper = _interopRequireDefault(require("../Components/BarAndLineChartsWrapper"));
var _StripAndLabel = require("../Components/common/StripAndLabel");
var _Pointer = require("../Components/common/Pointer");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// let initialData: Array<lineDataItem> | null = null;
// let animations: Array<Animated.Value> = [];

const LineChart = props => {
  const scrollRef = (0, _react.useRef)(null);
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
    hideSecondaryPointer,
    pointerEvents,
    focusEnabled,
    showDataPointOnFocus,
    showStripOnFocus,
    showTextOnFocus,
    stripHeight,
    stripWidth,
    stripColor,
    stripOpacity,
    unFocusOnPressOut,
    delayBeforeUnFocus,
    containerHeightIncludingBelowXAxis,
    lineGradient,
    lineGradientDirection,
    lineGradientStartColor,
    lineGradientEndColor,
    barAndLineChartsWrapperProps
  } = (0, _giftedChartsCore.useLineChart)({
    ...props,
    parentWidth: _utils.screenWidth
  });

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

  // const decreaseWidth = useCallback(() => {
  //   widthValue.setValue(0);
  //   Animated.timing(widthValue, {
  //     toValue: 1,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue]);

  // const decreaseWidth2 = useCallback(() => {
  //   widthValue2.setValue(0);
  //   Animated.timing(widthValue2, {
  //     toValue: 1,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue2]);

  // const decreaseWidth3 = useCallback(() => {
  //   widthValue3.setValue(0);
  //   Animated.timing(widthValue3, {
  //     toValue: 1,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue3]);

  // const decreaseWidth4 = useCallback(() => {
  //   widthValue4.setValue(0);
  //   Animated.timing(widthValue4, {
  //     toValue: 1,
  //     duration: animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [animationDuration, widthValue4]);

  // const decreaseWidth5 = useCallback(() => {
  //   widthValue5.setValue(0);
  //   Animated.timing(widthValue5, {
  //     toValue: 1,
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
  //         toValue: 1,
  //         duration: animationDuration,
  //         easing: Easing.linear,
  //         useNativeDriver: false,
  //       }).start();
  //     }
  //   });
  // }, [animationDuration, widthValuesFromSet]);

  // useEffect(() => {
  //   decreaseWidth();
  //   labelsAppear();
  //   widthValuesFromSet?.forEach((item, index) => {
  //     setTimeout(
  //       () => {
  //         decreaseWidthsFromSet?.[index]?.();
  //       },
  //       animateTogether ? 0 : animationDuration * index,
  //     );
  //   });
  //   setTimeout(
  //     () => {
  //       decreaseWidth2();
  //     },
  //     animateTogether ? 0 : animationDuration,
  //   );
  //   setTimeout(
  //     () => {
  //       decreaseWidth3();
  //     },
  //     animateTogether ? 0 : animationDuration * 2,
  //   );
  //   setTimeout(
  //     () => {
  //       decreaseWidth4();
  //     },
  //     animateTogether ? 0 : animationDuration * 3,
  //   );
  //   setTimeout(
  //     () => {
  //       decreaseWidth5();
  //     },
  //     animateTogether ? 0 : animationDuration * 4,
  //   );
  // }, [
  //   animateTogether,
  //   animationDuration,
  //   decreaseWidth,
  //   decreaseWidth2,
  //   decreaseWidth3,
  //   decreaseWidth4,
  //   decreaseWidth5,
  //   labelsAppear,
  // ]);

  const labelsWidth = spacing + labelsExtraHeight;
  const renderLabel = (index, label, labelTextStyle, labelComponent) => {
    var _props$xAxisLabelsHei;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 64 - xAxisThickness - xAxisTextNumberOfLines * 18,
        zIndex: 10,
        width: spacing + labelsExtraHeight,
        left: initialSpacing * 2 + spacing * index - labelsWidth / 2 + (index === 0 && initialSpacing < 10 ? 10 : -2),
        // index === 0 && initialSpacing < 10
        //   ? initialSpacing / 2 + spacing * index + spacing/2
        //   : initialSpacing / 2 + spacing * index + spacing/2 - 10,
        height: (_props$xAxisLabelsHei = props.xAxisLabelsHeight) !== null && _props$xAxisLabelsHei !== void 0 ? _props$xAxisLabelsHei : xAxisTextNumberOfLines * 18,
        transform: rotateLabel ? "rotate(60deg)" : ""
      }
    }, labelComponent ? labelComponent() : /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: 'center',
        ...labelTextStyle
      }
      // numberOfLines={xAxisTextNumberOfLines}
    }, label || ''));
  };

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

  // const animatedWidth = widthValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, totalWidth],
  // });

  // const animatedWidth2 = widthValue2.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, totalWidth],
  // });

  // const animatedWidth3 = widthValue3.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, totalWidth],
  // });

  // const animatedWidth4 = widthValue4.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, totalWidth],
  // });

  // const animatedWidth5 = widthValue5.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, totalWidth],
  // });

  const onStripPress = (item, index) => {
    setSelectedIndex(index);
    if (props.onFocus) {
      props.onFocus(item, index);
    }
  };
  const renderDataPoints = (hideDataPoints, dataForRender, originalDataFromProps, dataPtsShape, dataPtsWidth, dataPtsHeight, dataPtsColor, dataPtsRadius, textColor, textFontSize, startIndex, endIndex, isSecondary, showValuesAsDataPointsText) => {
    const getYOrSecondaryY = isSecondary ? getSecondaryY : getY;
    return dataForRender.map((item, index) => {
      var _item$stripHeight, _item$stripWidth, _item$stripOpacity;
      if (index < startIndex || index > endIndex) return null;
      if (item.hideDataPoint) {
        return null;
      }
      let dataPointsShape, dataPointsWidth, dataPointsHeight, dataPointsColor, dataPointsRadius, text, customDataPoint, dataPointLabelComponent;
      if (index === selectedIndex) {
        dataPointsShape = item.focusedDataPointShape || props.focusedDataPointShape || item.dataPointShape || dataPtsShape;
        dataPointsWidth = item.focusedDataPointWidth || props.focusedDataPointWidth || item.dataPointWidth || dataPtsWidth;
        dataPointsHeight = item.focusedDataPointHeight || props.focusedDataPointHeight || item.dataPointHeight || dataPtsHeight;
        dataPointsColor = item.focusedDataPointColor || props.focusedDataPointColor || 'orange';
        dataPointsRadius = item.focusedDataPointRadius || props.focusedDataPointRadius || item.dataPointRadius || dataPtsRadius;
        if (showTextOnFocus) {
          text = item.dataPointText;
        }
        customDataPoint = item.focusedCustomDataPoint || props.focusedCustomDataPoint || item.customDataPoint || props.customDataPoint;
        dataPointLabelComponent = item.focusedDataPointLabelComponent || item.dataPointLabelComponent;
      } else {
        dataPointsShape = item.dataPointShape || dataPtsShape;
        dataPointsWidth = item.dataPointWidth || dataPtsWidth;
        dataPointsHeight = item.dataPointHeight || dataPtsHeight;
        dataPointsColor = item.dataPointColor || dataPtsColor;
        dataPointsRadius = item.dataPointRadius || dataPtsRadius;
        if (showTextOnFocus) {
          text = '';
        }
        customDataPoint = item.customDataPoint || props.customDataPoint;
        dataPointLabelComponent = item.dataPointLabelComponent;
      }
      if (showValuesAsDataPointsText) {
        text = originalDataFromProps[index].value;
      }
      const currentStripHeight = (_item$stripHeight = item.stripHeight) !== null && _item$stripHeight !== void 0 ? _item$stripHeight : stripHeight;
      const currentStripWidth = (_item$stripWidth = item.stripWidth) !== null && _item$stripWidth !== void 0 ? _item$stripWidth : stripWidth;
      const currentStripOpacity = (_item$stripOpacity = item.stripOpacity) !== null && _item$stripOpacity !== void 0 ? _item$stripOpacity : stripOpacity;
      const currentStripColor = item.stripColor || stripColor;
      const position = 'left'; // I18nManager.isRTL ? 'right' : 'left';

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: index
      }, focusEnabled ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, unFocusOnPressOut ?
      /*#__PURE__*/
      // remove strip on onFocus
      _react.default.createElement("rect", {
        // onPressIn={() => onStripPress(item, index)}
        // onPressOut={() =>
        //   setTimeout(() => setSelectedIndex(-1), delayBeforeUnFocus)
        // }
        x: initialSpacing + (spacing * index - spacing / 2),
        y: 8,
        width: spacing,
        height: containerHeight - 0,
        fill: 'none'
      }) : /*#__PURE__*/_react.default.createElement("rect", {
        onClick: () => onStripPress(item, index),
        x: initialSpacing + (spacing * index - spacing / 2),
        y: 8,
        width: spacing,
        height: containerHeight,
        fill: 'none'
      })) : null, item.showStrip || focusEnabled && index === selectedIndex && showStripOnFocus ? /*#__PURE__*/_react.default.createElement("rect", {
        x: initialSpacing + spacing * index - currentStripWidth / 2 - 1,
        y: currentStripHeight ? containerHeight - currentStripHeight + 8 : containerHeight - dataPointsHeight / 2 + 14 - item.value * containerHeight / maxValue,
        width: currentStripWidth,
        height: currentStripHeight || item.value * containerHeight / maxValue - 2 + overflowTop,
        opacity: currentStripOpacity,
        fill: currentStripColor
      }) : null, hideDataPoints ? null : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, customDataPoint ? /*#__PURE__*/_react.default.createElement("div", {
        style: {
          ..._styles.styles.customDataPointContainer,
          height: dataPointsHeight,
          width: dataPointsWidth,
          top: getYOrSecondaryY(item.value),
          [position]: initialSpacing - dataPointsWidth + spacing * index
          // transform: `scaleX(${I18nManager.isRTL ? -1 : 1}px)`,
        }
      }, customDataPoint(item, index)) : null, dataPointsShape === 'rectangular' ? /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: index
      }, customDataPoint ? null : /*#__PURE__*/_react.default.createElement("rect", {
        x: getX(index) - dataPointsWidth / 2,
        y: getYOrSecondaryY(item.value) - dataPointsHeight / 2,
        width: dataPointsWidth,
        height: dataPointsHeight,
        fill: showDataPointOnFocus ? index === selectedIndex ? dataPointsColor : 'none' : dataPointsColor,
        onClick: () => {
          if (item.onPress) {
            item.onPress(item, index);
          } else if (props.onPress) {
            props.onPress(item, index);
          }
        }
      })) : /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: index
      }, customDataPoint ? null : /*#__PURE__*/_react.default.createElement("circle", {
        cx: getX(index),
        cy: getYOrSecondaryY(item.value),
        r: dataPointsRadius,
        fill: showDataPointOnFocus ? index === selectedIndex ? dataPointsColor : 'none' : dataPointsColor,
        onClick: () => {
          if (item.onPress) {
            item.onPress(item, index);
          } else if (props.onPress) {
            props.onPress(item, index);
          }
        }
      })), dataPointLabelComponent ? !showTextOnFocus || index === selectedIndex ? /*#__PURE__*/_react.default.createElement("div", {
        style: {
          ..._styles.styles.customDataPointContainer,
          zIndex: index === selectedIndex ? 1000 : 0,
          top: containerHeight + (item.dataPointLabelShiftY || props.dataPointLabelShiftY || 0) - item.value * containerHeight / maxValue,
          left: initialSpacing + (item.dataPointLabelShiftX || props.dataPointLabelShiftX || 0) - (item.dataPointLabelWidth ? item.dataPointLabelWidth + 20 : props.dataPointLabelWidth ? props.dataPointLabelWidth + 20 : 50) / 2 + spacing * index
        }
      }, dataPointLabelComponent()) : null : text || item.dataPointText ? !showTextOnFocus || index === selectedIndex ? /*#__PURE__*/_react.default.createElement("text", {
        fill: item.textColor || textColor,
        fontSize: item.textFontSize || textFontSize,
        x: getX(index) - dataPointsWidth + (item.textShiftX || props.textShiftX || 0),
        y: getYOrSecondaryY(item.value) - dataPointsHeight / 2 + (item.textShiftY || props.textShiftY || 0)
      }, !showTextOnFocus && !showValuesAsDataPointsText ? item.dataPointText : text) : null : null));
    });
  };
  const renderSpecificVerticalLines = dataForRender => {
    return dataForRender.map((item, index) => {
      if (item.showVerticalLine) {
        var _item$verticalLineUpt, _ref, _item$verticalLineStr;
        const x = getX(index);
        return /*#__PURE__*/_react.default.createElement("line", {
          key: index,
          x1: x,
          y1: extendedContainerHeight,
          x2: x,
          y2: ((_item$verticalLineUpt = item.verticalLineUptoDataPoint) !== null && _item$verticalLineUpt !== void 0 ? _item$verticalLineUpt : props.verticalLinesUptoDataPoint) ? getY(item.value) : -xAxisThickness,
          stroke: (item.verticalLineColor || props.verticalLinesColor || 'lightgray').toString(),
          strokeWidth: item.verticalLineThickness || props.verticalLinesThickness || 2,
          strokeDasharray: ((_ref = (_item$verticalLineStr = item.verticalLineStrokeDashArray) !== null && _item$verticalLineStr !== void 0 ? _item$verticalLineStr : props.verticalLinesStrokeDashArray) !== null && _ref !== void 0 ? _ref : '').toString()
        });
      }
      return null;
    });
  };
  const renderPointer = lineNumber => {
    if (lineNumber === 1 && hidePointer1) return;
    if (lineNumber === 2 && hidePointer2) return;
    if (lineNumber === 3 && hidePointer3) return;
    if (lineNumber === 4 && hidePointer4) return;
    if (lineNumber === 5 && hidePointer5) return;
    // 6 is for secondaryData
    if (lineNumber === 6 && hideSecondaryPointer) return;
    let pointerItemLocal, pointerYLocal, pointerColorLocal;
    switch (lineNumber) {
      case 1:
        pointerItemLocal = pointerItem;
        pointerYLocal = pointerY;
        pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer1Color) || pointerColor;
        break;
      case 2:
        pointerItemLocal = pointerItem2;
        pointerYLocal = pointerY2;
        pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer2Color) || pointerColor;
        break;
      case 3:
        pointerItemLocal = pointerItem3;
        pointerYLocal = pointerY3;
        pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer3Color) || pointerColor;
        break;
      case 4:
        pointerItemLocal = pointerItem4;
        pointerYLocal = pointerY4;
        pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer4Color) || pointerColor;
        break;
      case 5:
        pointerItemLocal = pointerItem5;
        pointerYLocal = pointerY5;
        pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer5Color) || pointerColor;
        break;
      case 6:
        pointerItemLocal = secondaryPointerItem;
        pointerYLocal = secondaryPointerY;
        pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.secondaryPointerColor) || pointerColor;
        break;
    }
    return (0, _Pointer.Pointer)({
      pointerX,
      pointerYLocal,
      pointerComponent,
      pointerHeight,
      pointerRadius,
      pointerWidth,
      pointerItemLocal,
      pointerColorLocal
    });
  };
  const renderStripAndLabel = () => {
    let pointerItemLocal, pointerYLocal;
    pointerItemLocal = [pointerItem];
    let arr = [pointerY];
    if (pointerY2 !== 0) {
      arr.push(pointerY2);
      pointerItemLocal.push(pointerItem2);
    }
    if (pointerY3 !== 0) {
      arr.push(pointerY3);
      pointerItemLocal.push(pointerItem3);
    }
    if (pointerY4 !== 0) {
      arr.push(pointerY4);
      pointerItemLocal.push(pointerItem4);
    }
    if (pointerY5 !== 0) {
      arr.push(pointerY5);
      pointerItemLocal.push(pointerItem5);
    }
    if (secondaryPointerY !== 0) {
      pointerItemLocal.push(secondaryPointerItem);
    }
    pointerYLocal = Math.min(...arr);
    return (0, _StripAndLabel.StripAndLabel)({
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
      pointerEvents
    });
  };
  const getLineGradientComponent = key => {
    return props.lineGradientComponent ? props.lineGradientComponent() : /*#__PURE__*/_react.default.createElement("linearGradient", {
      id: "lineGradient".concat(key),
      x1: "0",
      y1: "0",
      x2: lineGradientDirection === 'horizontal' ? '1' : '0',
      y2: lineGradientDirection === 'vertical' ? '1' : '0'
    }, /*#__PURE__*/_react.default.createElement("stop", {
      offset: "0",
      stopColor: lineGradientStartColor
    }), /*#__PURE__*/_react.default.createElement("stop", {
      offset: "1",
      stopColor: lineGradientEndColor
    }));
  };
  const getAreaGradientComponent = (startFillColor, endFillColor, startOpacity, endOpacity, key) => {
    return props.areaGradientComponent ? props.areaGradientComponent() : /*#__PURE__*/_react.default.createElement("linearGradient", {
      id: "Gradient".concat(key),
      x1: "0",
      y1: "0",
      x2: gradientDirection === 'horizontal' ? '1' : '0',
      y2: gradientDirection === 'vertical' ? '1' : '0'
    }, /*#__PURE__*/_react.default.createElement("stop", {
      offset: "0",
      stopColor: startFillColor,
      stopOpacity: startOpacity.toString()
    }), /*#__PURE__*/_react.default.createElement("stop", {
      offset: "1",
      stopColor: endFillColor,
      stopOpacity: endOpacity.toString()
    }));
  };
  const lineSvgComponent = (points, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, key) => {
    var _props$overflowBottom, _dataSet$map, _dataSet$map2;
    if (!points) return null;
    const uniqueGradientKey = (key !== null && key !== void 0 ? key : -1).toString() + Math.random();
    const isNthAreaChart = getIsNthAreaChart(key !== null && key !== void 0 ? key : 0);
    const isCurved = points.includes('C');
    let ar = [{
      d: '',
      color: '',
      strokeWidth: 0
    }];
    if (points.includes(_giftedChartsCore.RANGE_ENTER)) {
      ar = (0, _giftedChartsCore.getRegionPathObjects)(points, color, currentLineThickness !== null && currentLineThickness !== void 0 ? currentLineThickness : 0, thickness, strokeDashArray !== null && strokeDashArray !== void 0 ? strokeDashArray : [], isCurved, _giftedChartsCore.RANGE_ENTER, _giftedChartsCore.STOP, _giftedChartsCore.RANGE_EXIT);
    } else if (points.includes(_giftedChartsCore.SEGMENT_START)) {
      ar = (0, _giftedChartsCore.getSegmentedPathObjects)(points, color, currentLineThickness !== null && currentLineThickness !== void 0 ? currentLineThickness : 0, thickness, strokeDashArray !== null && strokeDashArray !== void 0 ? strokeDashArray : [], isCurved, _giftedChartsCore.SEGMENT_START, _giftedChartsCore.SEGMENT_END);
    }
    const lineSvgPropsOuter = {
      d: points,
      fill: 'none',
      stroke: (lineGradient ? props.lineGradientId ? "url(#".concat(props.lineGradientId, ")") : "url(#lineGradient)" : color).toString(),
      strokeWidth: currentLineThickness || thickness
    };
    if (strokeDashArray) {
      lineSvgPropsOuter.strokeDasharray = strokeDashArray;
    }
    return /*#__PURE__*/_react.default.createElement("svg", {
      height: containerHeightIncludingBelowXAxis + ((_props$overflowBottom = props.overflowBottom) !== null && _props$overflowBottom !== void 0 ? _props$overflowBottom : dataPointsRadius1),
      width: totalWidth
    }, lineGradient && getLineGradientComponent(uniqueGradientKey), points.includes(_giftedChartsCore.SEGMENT_START) || points.includes(_giftedChartsCore.RANGE_ENTER) ? ar.map((item, index) => {
      const lineSvgProps = {
        d: item.d,
        fill: 'none',
        stroke: (lineGradient ? props.lineGradientId ? "url(#".concat(props.lineGradientId, ")") : "url(#lineGradient".concat(uniqueGradientKey, ")") : item.color).toString(),
        strokeWidth: item.strokeWidth
      };
      if (item.strokeDashArray && item.strokeDashArray.length === 2 && typeof item.strokeDashArray[0] === 'number' && typeof item.strokeDashArray[1] === 'number') {
        lineSvgProps.strokeDasharray = item.strokeDashArray;
      }
      return /*#__PURE__*/_react.default.createElement("path", _extends({
        key: index
      }, lineSvgProps));
    }) : /*#__PURE__*/_react.default.createElement("path", lineSvgPropsOuter), isNthAreaChart && getAreaGradientComponent(startFillColor, endFillColor, startOpacity, endOpacity, uniqueGradientKey), isNthAreaChart && /*#__PURE__*/_react.default.createElement("path", {
      d: fillPoints,
      fill: props.areaGradientId ? "url(#".concat(props.areaGradientId, ")") : "url(#Gradient".concat(uniqueGradientKey, ")"),
      stroke: 'transparent',
      strokeWidth: currentLineThickness || thickness
    }), renderSpecificVerticalLines(data), renderSpecificVerticalLines(data2), renderSpecificVerticalLines(data3), renderSpecificVerticalLines(data4), renderSpecificVerticalLines(data5), (_dataSet$map = dataSet === null || dataSet === void 0 ? void 0 : dataSet.map(set => renderSpecificVerticalLines(set === null || set === void 0 ? void 0 : set.data))) !== null && _dataSet$map !== void 0 ? _dataSet$map : null, (_dataSet$map2 = dataSet === null || dataSet === void 0 ? void 0 : dataSet.map(set => {
      var _set$hideDataPoints, _props$yAxisOffset, _set$dataPointsShape, _set$dataPointsWidth, _set$dataPointsHeight, _set$dataPointsColor, _set$dataPointsRadius, _set$textColor, _set$textFontSize, _set$startIndex, _set$endIndex;
      return renderDataPoints((_set$hideDataPoints = set.hideDataPoints) !== null && _set$hideDataPoints !== void 0 ? _set$hideDataPoints : hideDataPoints1, set.data, (0, _giftedChartsCore.adjustToOffset)(set.data, -((_props$yAxisOffset = props.yAxisOffset) !== null && _props$yAxisOffset !== void 0 ? _props$yAxisOffset : 0)), // need the actual values passed by user
      (_set$dataPointsShape = set.dataPointsShape) !== null && _set$dataPointsShape !== void 0 ? _set$dataPointsShape : dataPointsShape1, (_set$dataPointsWidth = set.dataPointsWidth) !== null && _set$dataPointsWidth !== void 0 ? _set$dataPointsWidth : dataPointsWidth1, (_set$dataPointsHeight = set.dataPointsHeight) !== null && _set$dataPointsHeight !== void 0 ? _set$dataPointsHeight : dataPointsHeight1, (_set$dataPointsColor = set.dataPointsColor) !== null && _set$dataPointsColor !== void 0 ? _set$dataPointsColor : dataPointsColor1, (_set$dataPointsRadius = set.dataPointsRadius) !== null && _set$dataPointsRadius !== void 0 ? _set$dataPointsRadius : dataPointsRadius1, (_set$textColor = set.textColor) !== null && _set$textColor !== void 0 ? _set$textColor : textColor1, (_set$textFontSize = set.textFontSize) !== null && _set$textFontSize !== void 0 ? _set$textFontSize : textFontSize1, (_set$startIndex = set.startIndex) !== null && _set$startIndex !== void 0 ? _set$startIndex : 0, (_set$endIndex = set.endIndex) !== null && _set$endIndex !== void 0 ? _set$endIndex : set.data.length - 1, false, showValuesAsDataPointsText);
    })) !== null && _dataSet$map2 !== void 0 ? _dataSet$map2 : null, renderDataPoints(hideDataPoints1, data, props.data, dataPointsShape1, dataPointsWidth1, dataPointsHeight1, dataPointsColor1, dataPointsRadius1, textColor1, textFontSize1, startIndex1, endIndex1, false, showValuesAsDataPointsText), renderDataPoints(hideDataPoints2, data2, props.data2, dataPointsShape2, dataPointsWidth2, dataPointsHeight2, dataPointsColor2, dataPointsRadius2, textColor2, textFontSize2, startIndex2, endIndex2, false, showValuesAsDataPointsText), renderDataPoints(hideDataPoints3, data3, props.data3, dataPointsShape3, dataPointsWidth3, dataPointsHeight3, dataPointsColor3, dataPointsRadius3, textColor3, textFontSize3, startIndex3, endIndex3, false, showValuesAsDataPointsText), renderDataPoints(hideDataPoints4, data4, props.data4, dataPointsShape4, dataPointsWidth4, dataPointsHeight4, dataPointsColor4, dataPointsRadius4, textColor4, textFontSize4, startIndex4, endIndex4, false, showValuesAsDataPointsText), renderDataPoints(hideDataPoints5, data5, props.data5, dataPointsShape5, dataPointsWidth5, dataPointsHeight5, dataPointsColor5, dataPointsRadius5, textColor5, textFontSize5, startIndex5, endIndex5, false, showValuesAsDataPointsText), secondaryData !== null && secondaryData !== void 0 && secondaryData.length ? renderDataPoints(secondaryLineConfig.hideDataPoints, secondaryData, props.secondaryData, secondaryLineConfig.dataPointsShape, secondaryLineConfig.dataPointsWidth, secondaryLineConfig.dataPointsHeight, secondaryLineConfig.dataPointsColor, secondaryLineConfig.dataPointsRadius, secondaryLineConfig.textColor, secondaryLineConfig.textFontSize, secondaryLineConfig.startIndex, secondaryLineConfig.endIndex, true, secondaryLineConfig.showValuesAsDataPointsText) : null, showArrow && /*#__PURE__*/_react.default.createElement("path", {
      d: arrowPoints,
      fill: arrowFillColor,
      stroke: arrowStrokeColor,
      strokeWidth: arrowStrokeWidth
    }));
  };
  const renderLine = (zIndex, points, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, key) => {
    var _props$overflowBottom2, _props$overflowBottom3;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key !== null && key !== void 0 ? key : 0
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
      //         (item.value * containerHeight) / maxValue -
      //         (pointerRadius || pointerHeight / 2) +
      //         10;
      //       setSecondaryPointerY(y);
      //       setSecondaryPointerItem(item);
      //     }
      //   }
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
      //         (item.value * containerHeight) / maxValue -
      //         (pointerRadius || pointerHeight / 2) +
      //         10;
      //       setSecondaryPointerY(y);
      //       setSecondaryPointerItem(item);
      //     }
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
      ,
      style: {
        position: 'absolute',
        height: containerHeightIncludingBelowXAxis + ((_props$overflowBottom2 = props.overflowBottom) !== null && _props$overflowBottom2 !== void 0 ? _props$overflowBottom2 : dataPointsRadius1),
        bottom: 70 + xAxisLabelsVerticalShift + labelsExtraHeight - xAxisThickness - ((_props$overflowBottom3 = props.overflowBottom) !== null && _props$overflowBottom3 !== void 0 ? _props$overflowBottom3 : dataPointsRadius1),
        zIndex: zIndex,
        // transform: `scaleX(${I18nManager.isRTL ? -1 : 1}px)`,
        width: totalWidth
        // left:8,
      }
    }, lineSvgComponent(points, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, key));
  };
  const renderAnimatedLine = (zIndex, points, animatedWidth, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor, key) => renderLine(zIndex, points, currentLineThickness, color, fillPoints, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray, showArrow, arrowPoints, arrowStrokeWidth, arrowStrokeColor, arrowFillColor);

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
  //         let factor = (x - initialSpacing) / spacing;
  //         factor = Math.round(factor);
  //         factor = Math.min(factor, (data0 ?? data).length - 1);
  //         factor = Math.max(factor, 0);
  //         let z =
  //           initialSpacing +
  //           spacing * factor -
  //           (pointerRadius || pointerWidth / 2) -
  //           1;
  //         setPointerX(z);
  //         setPointerIndex(factor);
  //         let item, y;
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
  //       style={{
  //         position: 'absolute',
  //         height:
  //           containerHeightIncludingBelowXAxis +
  //           (props.overflowBottom ?? dataPointsRadius1),
  //         bottom:
  //           60 +
  //           xAxisLabelsVerticalShift +
  //           labelsExtraHeight -
  //           (props.overflowBottom ?? dataPointsRadius1),
  //         zIndex: zIndex,
  //         transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  //         width: animatedWidth,
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
    onScroll: ev => {
      var _props$onScroll;
      (_props$onScroll = props.onScroll) === null || _props$onScroll === void 0 || _props$onScroll.call(props, ev);
      if (pointerConfig && pointerConfig.activatePointersOnLongPress && pointerConfig.autoAdjustPointerLabelPosition) {
        setScrollX(ev.nativeEvent.contentOffset.x);
      }
    }
  };
  const renderChartContent = () => {
    var _secondaryLineConfig$, _secondaryLineConfig$2, _secondaryLineConfig$3, _secondaryLineConfig$4, _secondaryLineConfig$5, _secondaryLineConfig$6;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dataSet ? pointsFromSet.length ? dataSet.map((set, index) => {
      if (isAnimated) {
        var _set$zIndex, _set$thickness, _set$color, _set$startFillColor, _set$endFillColor, _set$startOpacity, _set$endOpacity, _set$strokeDashArray;
        return renderAnimatedLine((_set$zIndex = set.zIndex) !== null && _set$zIndex !== void 0 ? _set$zIndex : zIndex1, pointsFromSet[index], 0, //animatedWidth,
        (_set$thickness = set.thickness) !== null && _set$thickness !== void 0 ? _set$thickness : thickness1, (_set$color = set.color) !== null && _set$color !== void 0 ? _set$color : color1, fillPointsFromSet[index], (_set$startFillColor = set.startFillColor) !== null && _set$startFillColor !== void 0 ? _set$startFillColor : startFillColor1, (_set$endFillColor = set.endFillColor) !== null && _set$endFillColor !== void 0 ? _set$endFillColor : endFillColor1, (_set$startOpacity = set.startOpacity) !== null && _set$startOpacity !== void 0 ? _set$startOpacity : startOpacity1, (_set$endOpacity = set.endOpacity) !== null && _set$endOpacity !== void 0 ? _set$endOpacity : endOpacity1, (_set$strokeDashArray = set.strokeDashArray) !== null && _set$strokeDashArray !== void 0 ? _set$strokeDashArray : strokeDashArray1, set.showArrow || props.showArrows, arrowPointsFromSet[index], arrowStrokeWidthsFromSet === null || arrowStrokeWidthsFromSet === void 0 ? void 0 : arrowStrokeWidthsFromSet[index], arrowStrokeColorsFromSet === null || arrowStrokeColorsFromSet === void 0 ? void 0 : arrowStrokeColorsFromSet[index], arrowFillColorsFromSet === null || arrowFillColorsFromSet === void 0 ? void 0 : arrowFillColorsFromSet[index], index);
      } else {
        var _set$zIndex2, _set$thickness2, _set$color2, _set$startFillColor2, _set$endFillColor2, _set$startOpacity2, _set$endOpacity2, _set$strokeDashArray2;
        return renderLine((_set$zIndex2 = set.zIndex) !== null && _set$zIndex2 !== void 0 ? _set$zIndex2 : zIndex1, pointsFromSet[index], (_set$thickness2 = set.thickness) !== null && _set$thickness2 !== void 0 ? _set$thickness2 : thickness1, (_set$color2 = set.color) !== null && _set$color2 !== void 0 ? _set$color2 : color1, fillPointsFromSet[index], (_set$startFillColor2 = set.startFillColor) !== null && _set$startFillColor2 !== void 0 ? _set$startFillColor2 : startFillColor1, (_set$endFillColor2 = set.endFillColor) !== null && _set$endFillColor2 !== void 0 ? _set$endFillColor2 : endFillColor1, (_set$startOpacity2 = set.startOpacity) !== null && _set$startOpacity2 !== void 0 ? _set$startOpacity2 : startOpacity1, (_set$endOpacity2 = set.endOpacity) !== null && _set$endOpacity2 !== void 0 ? _set$endOpacity2 : endOpacity1, (_set$strokeDashArray2 = set.strokeDashArray) !== null && _set$strokeDashArray2 !== void 0 ? _set$strokeDashArray2 : strokeDashArray1, set.showArrow || props.showArrows, arrowPointsFromSet[index], arrowStrokeWidthsFromSet === null || arrowStrokeWidthsFromSet === void 0 ? void 0 : arrowStrokeWidthsFromSet[index], arrowStrokeColorsFromSet === null || arrowStrokeColorsFromSet === void 0 ? void 0 : arrowStrokeColorsFromSet[index], arrowFillColorsFromSet === null || arrowFillColorsFromSet === void 0 ? void 0 : arrowFillColorsFromSet[index], index);
      }
    }) : null : isAnimated ? renderAnimatedLine(zIndex1, points, 0,
    //animatedWidth,
    thickness1, color1, fillPoints, startFillColor1, endFillColor1, startOpacity1, endOpacity1, strokeDashArray1, props.showArrow1 || props.showArrows, arrow1Points, arrowStrokeWidth1, arrowStrokeColor1, arrowFillColor1, 0) : renderLine(zIndex1, points, thickness1, color1, fillPoints, startFillColor1, endFillColor1, startOpacity1, endOpacity1, strokeDashArray1, props.showArrow1 || props.showArrows, arrow1Points, arrowStrokeWidth1, arrowStrokeColor1, arrowFillColor1, 0), secondaryPoints ? isAnimated ? renderAnimatedLine(secondaryLineConfig.zIndex, secondaryPoints, 0,
    //animatedWidth,
    secondaryLineConfig.thickness, secondaryLineConfig.color.toString(), secondaryFillPoints, secondaryLineConfig.startFillColor, secondaryLineConfig.endFillColor, secondaryLineConfig.startOpacity, secondaryLineConfig.endOpacity, secondaryLineConfig.strokeDashArray, secondaryLineConfig.showArrow, secondaryArrowPoints, (_secondaryLineConfig$ = secondaryLineConfig.arrowConfig) === null || _secondaryLineConfig$ === void 0 ? void 0 : _secondaryLineConfig$.strokeWidth, (_secondaryLineConfig$2 = secondaryLineConfig.arrowConfig) === null || _secondaryLineConfig$2 === void 0 ? void 0 : _secondaryLineConfig$2.strokeColor, (_secondaryLineConfig$3 = secondaryLineConfig.arrowConfig) === null || _secondaryLineConfig$3 === void 0 ? void 0 : _secondaryLineConfig$3.fillColor, 6) : renderLine(secondaryLineConfig.zIndex, secondaryPoints, secondaryLineConfig.thickness, secondaryLineConfig.color.toString(), secondaryFillPoints, secondaryLineConfig.startFillColor, secondaryLineConfig.endFillColor, secondaryLineConfig.startOpacity, secondaryLineConfig.endOpacity, secondaryLineConfig.strokeDashArray, secondaryLineConfig.showArrow, secondaryArrowPoints, (_secondaryLineConfig$4 = secondaryLineConfig.arrowConfig) === null || _secondaryLineConfig$4 === void 0 ? void 0 : _secondaryLineConfig$4.strokeWidth, (_secondaryLineConfig$5 = secondaryLineConfig.arrowConfig) === null || _secondaryLineConfig$5 === void 0 ? void 0 : _secondaryLineConfig$5.strokeColor, (_secondaryLineConfig$6 = secondaryLineConfig.arrowConfig) === null || _secondaryLineConfig$6 === void 0 ? void 0 : _secondaryLineConfig$6.fillColor, 6) : null, points2 ? isAnimated ? renderAnimatedLine(zIndex2, points2, 0,
    //animatedWidth2,
    thickness2, color2, fillPoints2, startFillColor2, endFillColor2, startOpacity2, endOpacity2, strokeDashArray2, props.showArrow2 || props.showArrows, arrow2Points, arrowStrokeWidth2, arrowStrokeColor2, arrowFillColor2, 1) : renderLine(zIndex2, points2, thickness2, color2, fillPoints2, startFillColor2, endFillColor2, startOpacity2, endOpacity2, strokeDashArray2, props.showArrow2 || props.showArrows, arrow2Points, arrowStrokeWidth2, arrowStrokeColor2, arrowFillColor2, 1) : null, points3 ? isAnimated ? renderAnimatedLine(zIndex3, points3, 0,
    //animatedWidth3,
    thickness3, color3, fillPoints3, startFillColor3, endFillColor3, startOpacity3, endOpacity3, strokeDashArray3, props.showArrow3 || props.showArrows, arrow3Points, arrowStrokeWidth3, arrowStrokeColor3, arrowFillColor3, 2) : renderLine(zIndex3, points3, thickness3, color3, fillPoints3, startFillColor3, endFillColor3, startOpacity3, endOpacity3, strokeDashArray3, props.showArrow3 || props.showArrows, arrow3Points, arrowStrokeWidth3, arrowStrokeColor3, arrowFillColor3, 2) : null, points4 ? isAnimated ? renderAnimatedLine(zIndex4, points4, 0,
    //animatedWidth4,
    thickness4, color4, fillPoints4, startFillColor4, endFillColor4, startOpacity4, endOpacity4, strokeDashArray4, props.showArrow4 || props.showArrows, arrow4Points, arrowStrokeWidth4, arrowStrokeColor4, arrowFillColor4, 3) : renderLine(zIndex4, points4, thickness4, color4, fillPoints4, startFillColor4, endFillColor4, startOpacity4, endOpacity4, strokeDashArray4, props.showArrow4 || props.showArrows, arrow4Points, arrowStrokeWidth4, arrowStrokeColor4, arrowFillColor4, 3) : null, points5 ? isAnimated ? renderAnimatedLine(zIndex5, points5, 0,
    //animatedWidth5,
    thickness5, color5, fillPoints5, startFillColor5, endFillColor5, startOpacity5, endOpacity5, strokeDashArray5, props.showArrow5 || props.showArrows, arrow5Points, arrowStrokeWidth5, arrowStrokeColor5, arrowFillColor5, 4) : renderLine(zIndex5, points5, thickness5, color5, fillPoints5, startFillColor5, endFillColor5, startOpacity5, endOpacity5, strokeDashArray5, props.showArrow5 || props.showArrows, arrow5Points, arrowStrokeWidth5, arrowStrokeColor5, arrowFillColor5, 4) : null, pointerX > 0 ? /*#__PURE__*/_react.default.createElement("div", {
      // pointerEvents={pointerEvents ?? 'none'}
      style: {
        position: 'absolute',
        height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
        bottom: 58 + labelsExtraHeight + xAxisLabelsVerticalShift - overflowTop,
        // width: totalWidth,
        zIndex: 20
      }
    }, !stripOverPointer && renderStripAndLabel(), dataSet ? renderPointer(1) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderPointer(1), points2 ? renderPointer(2) : null, points3 ? renderPointer(3) : null, points4 ? renderPointer(4) : null, points5 ? renderPointer(5) : null, secondaryPoints ? renderPointer(6) : null, stripOverPointer && renderStripAndLabel())) : null, (data0 !== null && data0 !== void 0 ? data0 : data).map((item, index) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: index
      }, renderLabel(index, item.label || (props.xAxisLabelTexts && props.xAxisLabelTexts[index] ? props.xAxisLabelTexts[index] : ''), item.labelTextStyle || props.xAxisLabelTextStyle, item.labelComponent));
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_BarAndLineChartsWrapper.default, _extends({}, barAndLineChartsWrapperProps, {
    scrollRef: scrollRef
    // animatedWidth={animatedWidth}
    ,
    renderChartContent: renderChartContent,
    remainingScrollViewProps: remainingScrollViewProps
  }));
};
exports.LineChart = LineChart;
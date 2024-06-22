"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineChartBicolor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _BarAndLineChartsWrapper = _interopRequireDefault(require("../Components/BarAndLineChartsWrapper"));
var _giftedChartsCore = require("gifted-charts-core");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LineChartBicolor = props => {
  const scrollRef = (0, _react.useRef)();
  // const heightValue = useMemo(() => new Animated.Value(0), []);
  // const widthValue = useMemo(() => new Animated.Value(0), []);
  // const opacValue = useMemo(() => new Animated.Value(0), []);

  const {
    pointsArray,
    fillPointsArray,
    selectedIndex,
    setSelectedIndex,
    containerHeight,
    data,
    labelsExtraHeight,
    animationDuration,
    startIndex1,
    endIndex1,
    initialSpacing,
    thickness,
    spacing,
    xAxisThickness,
    dataPointsHeight1,
    dataPointsWidth1,
    dataPointsRadius1,
    dataPointsColor1,
    dataPointsShape1,
    areaChart,
    textFontSize1,
    textColor1,
    totalWidth,
    maxValue,
    extendedContainerHeight,
    getX,
    getY,
    stepHeight,
    noOfSectionsBelowXAxis,
    thickness1,
    zIndex,
    strokeDashArray1,
    rotateLabel,
    isAnimated,
    hideDataPoints1,
    color,
    colorNegative,
    startFillColor,
    endFillColor,
    startOpacity,
    endOpacity,
    startFillColorNegative,
    endFillColorNegative,
    startOpacityNegative,
    endOpacityNegative,
    gradientDirection,
    xAxisTextNumberOfLines,
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
    barAndLineChartsWrapperProps
  } = (0, _giftedChartsCore.useLineChartBiColor)({
    ...props,
    parentWidth: _utils.screenWidth
  });

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

  // useEffect(() => {
  //   decreaseWidth();
  //   labelsAppear();
  // }, [animationDuration, decreaseWidth, labelsAppear]);
  const labelsWidth = spacing + labelsExtraHeight;
  const renderLabel = (index, label, labelTextStyle, labelComponent) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 64 - xAxisTextNumberOfLines * 18,
        zIndex: 10,
        width: spacing + labelsExtraHeight,
        left: initialSpacing * 2 + spacing * index - labelsWidth / 2 + (index === 0 && initialSpacing < 10 ? 10 : -2),
        justifyContent: 'center',
        transform: rotateLabel ? "rotate(60deg)" : ""
      }
    }, labelComponent ? labelComponent() : /*#__PURE__*/_react.default.createElement("div", {
      style: labelTextStyle || {
        textAlign: 'center'
      }
      // numberOfLines={xAxisTextNumberOfLines}
    }, label || ''));
  };

  // const renderAnimatedLabel = (
  //   index: number,
  //   label: String,
  //   labelTextStyle: any,
  //   labelComponent?: Function,
  // ) => {
  //   return (
  //     <Animated.View
  //       style={[
  //         {
  //           height: rotateLabel ? 40 : 20,
  //           // backgroundColor: 'yellow',
  //           position: 'absolute',
  //           bottom: rotateLabel ? 10 : 30,
  //           zIndex: 10,
  //           width: spacing,
  //           left:
  //             index === 0 && initialSpacing < 10
  //               ? getX(index) - spacing / 2 + 8
  //               : getX(index) - spacing / 2,
  //           opacity: appearingOpacity,
  //         },
  //         rotateLabel && {transform: [{rotate: '60deg'}]},
  //       ]}>
  //       {labelComponent ? (
  //         labelComponent()
  //       ) : (
  //         <Text
  //           style={labelTextStyle || {textAlign: 'center'}}
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

  const onStripPress = (item, index) => {
    setSelectedIndex(index);
    if (props.onFocus) {
      props.onFocus(item, index);
    }
  };
  const renderDataPoints = (dataForRender, dataPtsShape, dataPtsWidth, dataPtsHeight, dataPtsColor, dataPtsRadius, textColor, textFontSize, startIndex, endIndex) => {
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
      const currentStripHeight = (_item$stripHeight = item.stripHeight) !== null && _item$stripHeight !== void 0 ? _item$stripHeight : stripHeight;
      const currentStripWidth = (_item$stripWidth = item.stripWidth) !== null && _item$stripWidth !== void 0 ? _item$stripWidth : stripWidth;
      const currentStripOpacity = (_item$stripOpacity = item.stripOpacity) !== null && _item$stripOpacity !== void 0 ? _item$stripOpacity : stripOpacity;
      const currentStripColor = item.stripColor || stripColor;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: index
      }, focusEnabled ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, unFocusOnPressOut ? /*#__PURE__*/_react.default.createElement("rect", {
        // onPressIn={() => onStripPress(item, index)}
        // onPressOut={() =>
        //   setTimeout(() => setSelectedIndex(-1), delayBeforeUnFocus)
        // }
        x: initialSpacing + (spacing * index - spacing / 2),
        y: 8,
        width: spacing,
        height: containerHeight,
        fill: 'none'
      }) : /*#__PURE__*/_react.default.createElement("rect", {
        onClick: () => onStripPress(item, index),
        x: initialSpacing + (spacing * index - spacing / 2),
        y: 8,
        width: spacing,
        height: containerHeight,
        fill: 'none'
      })) : null, item.showStrip || focusEnabled && index === selectedIndex && showStripOnFocus ? /*#__PURE__*/_react.default.createElement("rect", {
        x: initialSpacing + (spacing * index - dataPointsWidth / 2),
        y: currentStripHeight ? containerHeight - currentStripHeight + 8 : containerHeight - dataPointsHeight / 2 + 20 - item.value * containerHeight / maxValue,
        width: currentStripWidth,
        height: currentStripHeight || containerHeight - dataPointsHeight / 2 + 20,
        opacity: currentStripOpacity,
        fill: currentStripColor
      }) : null, customDataPoint ? /*#__PURE__*/_react.default.createElement("div", {
        style: {
          ..._styles.styles.customDataPointContainer,
          height: dataPointsHeight,
          width: dataPointsWidth,
          top: containerHeight - item.value * containerHeight / maxValue,
          left: getX(index) - dataPointsWidth
        }
      }, customDataPoint()) : null, dataPointsShape === 'rectangular' ? /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: index
      }, customDataPoint ? null : /*#__PURE__*/_react.default.createElement("rect", {
        x: getX(index) - dataPointsWidth,
        y: extendedContainerHeight + dataPointsHeight / 2 - item.value * containerHeight / maxValue,
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
        cy: getY(index),
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
          top: containerHeight + (item.dataPointLabelShiftY || props.dataPointLabelShiftY || 0) - item.value * containerHeight / maxValue,
          left: initialSpacing + (item.dataPointLabelShiftX || props.dataPointLabelShiftX || 0) - (item.dataPointLabelWidth ? item.dataPointLabelWidth + 20 : props.dataPointLabelWidth ? props.dataPointLabelWidth + 20 : 50) / 2 + spacing * index
        }
      }, dataPointLabelComponent()) : null : text || item.dataPointText ? !showTextOnFocus || index === selectedIndex ? /*#__PURE__*/_react.default.createElement("text", {
        fill: item.textColor || textColor,
        fontSize: item.textFontSize || textFontSize,
        x: initialSpacing - dataPointsWidth + spacing * index + (item.textShiftX || props.textShiftX || 0),
        y: extendedContainerHeight - dataPointsHeight / 2 - item.value * containerHeight / maxValue + (item.textShiftY || props.textShiftY || 0)
      }, !showTextOnFocus ? item.dataPointText : text) : null : null);
    });
  };
  const renderSpecificVerticalLines = dataForRender => {
    return dataForRender.map((item, index) => {
      if (item.showVerticalLine) {
        return /*#__PURE__*/_react.default.createElement("rect", {
          key: index,
          x: initialSpacing - (item.verticalLineThickness || 1) / 2 - 1 + spacing * index,
          y: item.verticalLineUptoDataPoint ? containerHeight - item.value * containerHeight / maxValue + 10 : -xAxisThickness,
          width: item.verticalLineThickness || 1,
          height: item.verticalLineUptoDataPoint ? item.value * containerHeight / maxValue - xAxisThickness : containerHeight + 10 - xAxisThickness,
          fill: item.verticalLineColor || 'lightgray'
        });
      }
      return null;
    });
  };
  const lineSvgComponent = (pointsArray, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray) => {
    return /*#__PURE__*/_react.default.createElement("svg", {
      height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight + dataPointsRadius1,
      width: totalWidth
    }, strokeDashArray && strokeDashArray.length === 2 && typeof strokeDashArray[0] === 'number' && typeof strokeDashArray[1] === 'number' ? pointsArray.map((points, index) => /*#__PURE__*/_react.default.createElement("path", {
      key: index,
      d: points.points,
      fill: "none",
      stroke: points.color === 'green' ? color : colorNegative,
      strokeWidth: currentLineThickness || thickness,
      strokeDasharray: strokeDashArray.toString()
    })) : pointsArray.map((points, index) => {
      return /*#__PURE__*/_react.default.createElement("path", {
        key: index,
        d: points.points,
        fill: "none",
        stroke: points.color === 'green' ? color : colorNegative,
        strokeWidth: currentLineThickness || thickness
      });
    }), areaChart && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("linearGradient", {
      id: "Gradient",
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
    })), /*#__PURE__*/_react.default.createElement("linearGradient", {
      id: "GradientNegative",
      x1: "0",
      y1: "0",
      x2: gradientDirection === 'horizontal' ? '1' : '0',
      y2: gradientDirection === 'vertical' ? '1' : '0'
    }, /*#__PURE__*/_react.default.createElement("stop", {
      offset: "1",
      stopColor: startFillColorNegative,
      stopOpacity: startOpacityNegative.toString()
    }), /*#__PURE__*/_react.default.createElement("stop", {
      offset: "0",
      stopColor: endFillColorNegative,
      stopOpacity: endOpacityNegative.toString()
    }))), areaChart ? fillPointsArray.map((item, index) => {
      return /*#__PURE__*/_react.default.createElement("path", {
        key: index,
        d: item.points,
        fill: item.color === 'green' ? 'url(#Gradient)' : 'url(#GradientNegative)',
        stroke: 'transparent',
        strokeWidth: currentLineThickness || thickness
      });
    }) : null, renderSpecificVerticalLines(data), !hideDataPoints1 ? renderDataPoints(data, dataPointsShape1, dataPointsWidth1, dataPointsHeight1, dataPointsColor1, dataPointsRadius1, textColor1, textFontSize1, startIndex1, endIndex1) : null);
  };
  const renderLine = (zIndex, pointsArray, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
        bottom: 70 + labelsExtraHeight,
        width: totalWidth,
        zIndex: zIndex
      }
    }, pointsArray.length ? lineSvgComponent(pointsArray, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray) : null);
  };
  const renderAnimatedLine = (zIndex, points, animatedWidth, currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray) => {
    return renderLine(zIndex, points,
    // animatedWidth,
    currentLineThickness, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray);
  };

  // const renderAnimatedLine = (
  //   zIndex: number,
  //   points: any,
  //   animatedWidth: any,
  //   currentLineThickness: number | undefined,
  //   color: string,
  //   startFillColor: string,
  //   endFillColor: string,
  //   startOpacity: number,
  //   endOpacity: number,
  //   strokeDashArray: Array<number> | undefined | null,
  // ) => {
  //   return (
  //     <Animated.View
  //       style={{
  //         position: 'absolute',
  //         height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
  //         bottom: 60, //stepHeight * -0.5 + xAxisThickness,
  //         width: animatedWidth,
  //         zIndex: zIndex,
  //         // backgroundColor: 'wheat',
  //       }}>
  //       {lineSvgComponent(
  //         points,
  //         currentLineThickness,
  //         color,
  //         startFillColor,
  //         endFillColor,
  //         startOpacity,
  //         endOpacity,
  //         strokeDashArray,
  //       )}
  //     </Animated.View>
  //   );
  // };

  const renderChartContent = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isAnimated ? renderAnimatedLine(zIndex, pointsArray, 0,
    // animatedWidth,
    thickness1, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray1) : renderLine(zIndex, pointsArray, thickness1, color, startFillColor, endFillColor, startOpacity, endOpacity, strokeDashArray1), data.map((item, index) => {
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
    remainingScrollViewProps: {
      onScroll: ev => {
        var _props$onScroll;
        return (_props$onScroll = props.onScroll) === null || _props$onScroll === void 0 ? void 0 : _props$onScroll.call(props, ev);
      }
    }
  }));
};
exports.LineChartBicolor = LineChartBicolor;
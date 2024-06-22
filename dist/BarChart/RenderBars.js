"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Animated2DWithGradient = _interopRequireDefault(require("./Animated2DWithGradient"));
var _cap = _interopRequireDefault(require("../Components/BarSpecificComponents/cap"));
var _barBackgroundPattern = _interopRequireDefault(require("../Components/BarSpecificComponents/barBackgroundPattern"));
var _giftedChartsCore = require("gifted-charts-core");
var _AnimatedThreeDBar = _interopRequireDefault(require("../Components/AnimatedThreeDBar"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // import AnimatedThreeDBar from '../Components/AnimatedThreeDBar'
const RenderBars = props => {
  var _item$barInnerCompone, _focusedBarConfig$bar, _item$spacing, _data$spacing, _data, _ref, _item$leftShiftForToo;
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
    xAxisThickness = _giftedChartsCore.AxesAndRulesDefaults.xAxisThickness,
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
  } = props;
  const barHeight = Math.max(0, Math.abs(item.value) * (containerHeight || 200) / (maxValue || 200) - xAxisThickness);
  const {
    commonStyleForBar,
    commonPropsFor2Dand3Dbars,
    isFocused,
    focusedBarConfig,
    localFrontColor
  } = (0, _giftedChartsCore.getPropsForAnimated2DWithGradient)({
    ...props,
    barHeight
  });

  // const barStyleWithBackground:React.CSSProperties = {}

  const itemOrPropsBarInnerComponent = (_item$barInnerCompone = item.barInnerComponent) !== null && _item$barInnerCompone !== void 0 ? _item$barInnerCompone : props.barInnerComponent;
  const localBarInnerComponent = isFocused ? (_focusedBarConfig$bar = focusedBarConfig === null || focusedBarConfig === void 0 ? void 0 : focusedBarConfig.barInnerComponent) !== null && _focusedBarConfig$bar !== void 0 ? _focusedBarConfig$bar : itemOrPropsBarInnerComponent : itemOrPropsBarInnerComponent;
  const isStaticGradient = (item.showGradient || props.showGradient) && !isAnimated;
  const adjustBarStyle = {
    transform: "translateY(".concat(yTranslate, "px)"),
    width: commonPropsFor2Dand3Dbars.barWidth
  };
  const adjustForGradientBars = {
    transform: "translateY(".concat(yTranslate - barHeight, "px)")
  };
  const barMarginBottom = item.barMarginBottom === 0 ? 0 : item.barMarginBottom || props.barMarginBottom || 0;
  const prevAndCurrentSpacing = ((_item$spacing = item.spacing) !== null && _item$spacing !== void 0 ? _item$spacing : spacing) + ((_data$spacing = (_data = data[index - 1]) === null || _data === void 0 ? void 0 : _data.spacing) !== null && _data$spacing !== void 0 ? _data$spacing : spacing);
  const labelWidth = item.labelWidth || props.labelWidth || (item.barWidth || props.barWidth || 30) + prevAndCurrentSpacing / 2;
  const renderLabel = (label, labelTextStyle, value) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: (_props$xAxisLabelsHei => {
        let style = {
          width: labelWidth,
          left: spacing / -2,
          position: 'absolute',
          height: (_props$xAxisLabelsHei = props.xAxisLabelsHeight) !== null && _props$xAxisLabelsHei !== void 0 ? _props$xAxisLabelsHei : xAxisTextNumberOfLines * 18,
          bottom: (rotateLabel ? -40 : -6 - xAxisTextNumberOfLines * 18 - xAxisLabelsVerticalShift) - barMarginBottom - xAxisThickness
        };
        if (rotateLabel) {
          if (horizontal) {
            style.transform = "rotate(330deg)";
          } else {
            style.transform = "rotate(".concat(value < 0 ? '240deg' : '60deg', ")\n                    translateX(").concat(value < 0 ? 56 : (labelWidth - 50) / 2, "px)\n                    translateY(").concat(value < 0 ? 32 : -10, "px)");
          }
        } else {
          if (horizontal) {
            style.transform = "rotate(-90deg)";
          } else if (value < 0 && autoShiftLabels) {
            style.transform = "translateY(".concat(-30, "px)");
          }
        }
        return style;
      })()
    }, item.labelComponent ? item.labelComponent() : /*#__PURE__*/_react.default.createElement("div", {
      style: (() => {
        let style = {
          textAlign: rotateLabel ? 'left' : 'center'
        };
        if (rtl && horizontal) {
          style.transform = "rotate(180deg)";
        }
        style = {
          ...style,
          ...labelTextStyle
        };
        return style;
      })()
      // numberOfLines={xAxisTextNumberOfLines}
    }, label || ''));
  };
  const renderAnimatedLabel = (label, labelTextStyle, value) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: (_props$xAxisLabelsHei2 => {
        let style = {
          width: (item.labelWidth || props.labelWidth || item.barWidth || props.barWidth || 30) + spacing,
          left: spacing / -2,
          position: 'absolute',
          height: (_props$xAxisLabelsHei2 = props.xAxisLabelsHeight) !== null && _props$xAxisLabelsHei2 !== void 0 ? _props$xAxisLabelsHei2 : xAxisTextNumberOfLines * 18,
          bottom: (rotateLabel ? -40 : -6 - xAxisTextNumberOfLines * 18 - xAxisLabelsVerticalShift) - barMarginBottom,
          opacity: appearingOpacity
        };
        if (value < 0) {
          style.transform = "rotate(180deg)";
        }
        if (rotateLabel) {
          if (horizontal) {
            style.transform = "rotate(330deg)";
          } else {
            style.transform = "rotate(60deg)";
          }
        } else {
          if (horizontal) {
            style.transform = "rotate(-90deg)";
          } else if (value < 0) {
            style.transform = "translateY(".concat(autoShiftLabels ? -16.5 * xAxisTextNumberOfLines - 10 : 0, "px)");
          }
        }
        return style;
      })()
    }, item.labelComponent ? item.labelComponent() : /*#__PURE__*/_react.default.createElement("div", {
      style: (() => {
        let style = {
          textAlign: 'center'
        };
        if (rtl && horizontal) {
          style.transform = "rotate(180deg)";
        }
        style = {
          ...style,
          ...labelTextStyle
        };
        return style;
      })()
      // numberOfLines={xAxisTextNumberOfLines}
    }, label || ''));
  };
  let leftSpacing = initialSpacing;
  for (let i = 0; i < index; i++) {
    var _data$i$spacing;
    leftSpacing += ((_data$i$spacing = data[i].spacing) !== null && _data$i$spacing !== void 0 ? _data$i$spacing : propSpacing) + (data[i].barWidth || props.barWidth || 30);
  }
  const static2DWithGradient = item => {
    var _item$topLabelCompone;
    const localGradientColor = item.gradientColor || props.gradientColor || 'white';
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      style: (_focusedBarConfig$gra => {
        const style = {
          ...adjustForGradientBars,
          height: barHeight,
          width: commonPropsFor2Dand3Dbars.barWidth,
          backgroundImage: "linear-gradient(".concat(isFocused ? (_focusedBarConfig$gra = focusedBarConfig === null || focusedBarConfig === void 0 ? void 0 : focusedBarConfig.gradientColor) !== null && _focusedBarConfig$gra !== void 0 ? _focusedBarConfig$gra : localGradientColor : localGradientColor, ",").concat(localFrontColor.toString(), ")")
        };
        if (item.value < 0) {
          style.transform = "rotate(180deg) translateY(".concat(-yTranslate, "px)");
        }
        return style;
      })()
    }, props.cappedBars && item.value ? /*#__PURE__*/_react.default.createElement(_cap.default, {
      capThicknessFromItem: item.capThickness,
      capThicknessFromProps: props.capThickness,
      capColorFromItem: item.capColor,
      capColorFromProps: props.capColor,
      capRadiusFromItem: item.capRadius,
      capRadiusFromProps: props.capRadius
    }) : null), (item.barBackgroundPattern || props.barBackgroundPattern) && /*#__PURE__*/_react.default.createElement(_barBackgroundPattern.default, {
      barBackgroundPatternFromItem: item.barBackgroundPattern,
      barBackgroundPatternFromProps: props.barBackgroundPattern,
      patternIdFromItem: item.patternId,
      patternIdFromProps: props.patternId
    }), (item.topLabelComponent || showValuesAsTopLabel) && /*#__PURE__*/_react.default.createElement("div", {
      style: (() => {
        let style = {
          position: 'absolute',
          ...adjustForGradientBars,
          top: -30,
          height: 30,
          width: commonPropsFor2Dand3Dbars.barWidth,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        };
        if (item.value < 0) {
          style.transform = "translateY(".concat(-barHeight, "px)");
        }
        if (horizontal && !intactTopLabel) {
          style.transform = "rotate(270deg)";
        }
        if (topLabelContainerStyle) {
          style = {
            ...style,
            ...topLabelContainerStyle
          };
        } else {
          style = {
            ...style,
            ...item.topLabelContainerStyle
          };
        }
        return style;
      })()
    }, showValuesAsTopLabel ? /*#__PURE__*/_react.default.createElement("div", null, item.value + yAxisOffset) : (_item$topLabelCompone = item.topLabelComponent) === null || _item$topLabelCompone === void 0 ? void 0 : _item$topLabelCompone.call(item)), localBarInnerComponent ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '100%',
        width: '100%'
      }
    }, localBarInnerComponent(item, index)) : null);
  };
  let barWrapperStyle = {
    // overflow: 'visible',
    marginBottom: 60 + barMarginBottom + xAxisLabelsVerticalShift,
    width: commonPropsFor2Dand3Dbars.barWidth,
    height: barHeight,
    marginRight: spacing,
    position: 'relative'
  };
  if (item.value < 0) {
    barWrapperStyle.transform = "translateY(\n                ".concat(Math.abs(item.value) * (containerHeight || 200) / (maxValue || 200), " rotateZ(180deg)");
  } else if (pointerConfig) {
    barWrapperStyle.transform = "translateY(".concat((containerHeight || 200) - (barHeight - 10 + xAxisLabelsVerticalShift), ")");
  }
  if (side !== 'right') {
    barWrapperStyle.zIndex = data.length - index;
  }
  const pressDisabled = item.disablePress || props.disablePress || pointerConfig && pointerConfig.barTouchable !== true;
  const barContent = () => {
    const isBarBelowXaxisAndInvisible = item.value < 0 && !noOfSectionsBelowXAxis;
    const animated2DWithGradient = (noGradient, noAnimation) => /*#__PURE__*/_react.default.createElement("div", {
      style: adjustBarStyle
    }, /*#__PURE__*/_react.default.createElement(_Animated2DWithGradient.default, _extends({}, commonPropsFor2Dand3Dbars, {
      animationDuration: animationDuration || 800,
      roundedBottom: props.roundedBottom || false,
      roundedTop: props.roundedTop || false,
      noGradient: noGradient,
      noAnimation: noAnimation,
      containerHeight: containerHeight,
      maxValue: maxValue,
      minHeight: minHeight !== null && minHeight !== void 0 ? minHeight : 0,
      barMarginBottom: barMarginBottom,
      cappedBars: props.cappedBars,
      capThickness: props.capThickness,
      capColor: props.capColor,
      capRadius: props.capRadius,
      horizontal: horizontal,
      barBorderWidth: barBorderWidth,
      barBorderColor: barBorderColor,
      commonStyleForBar: commonStyleForBar,
      yTranslate: yTranslate
    })));
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (props.showXAxisIndices || item.showXAxisIndex) && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        zIndex: 2,
        position: 'absolute',
        width: props.xAxisIndicesHeight,
        height: props.xAxisIndicesWidth,
        bottom: barHeight - (containerHeight !== null && containerHeight !== void 0 ? containerHeight : 200) * 1.05 - 31,
        //props.xAxisIndicesHeight / -2,
        left: (commonPropsFor2Dand3Dbars.barWidth - props.xAxisIndicesWidth) / 2,
        backgroundColor: props.xAxisIndicesColor.toString()
      }
    }), isBarBelowXaxisAndInvisible ? null : isThreeD ? /*#__PURE__*/_react.default.createElement(_AnimatedThreeDBar.default, _extends({}, commonPropsFor2Dand3Dbars, {
      sideWidth: item.sideWidth || props.sideWidth || (item.barWidth || props.barWidth || 30) / 2,
      side: side || 'left',
      sideColor: item.sideColor || props.sideColor || '',
      topColor: item.topColor || props.topColor || '',
      horizontal: horizontal,
      isAnimated: isAnimated,
      animationDuration: animationDuration || 800,
      selectedIndex: selectedIndex,
      containerHeight: containerHeight !== null && containerHeight !== void 0 ? containerHeight : 200
    })) : item.showGradient || props.showGradient ? isAnimated ? animated2DWithGradient(false, false) : static2DWithGradient(item) : isAnimated ? animated2DWithGradient(true, false) : animated2DWithGradient(true, true), /*#__PURE__*/_react.default.createElement("div", {
      style: isStaticGradient ? adjustForGradientBars : adjustBarStyle
    }, isAnimated ? renderAnimatedLabel(label, labelTextStyle, item.value) : renderLabel(label, labelTextStyle, item.value)));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, pressDisabled ? /*#__PURE__*/_react.default.createElement("div", {
    // pointerEvents='none'
    style: barWrapperStyle
  }, barContent()) : /*#__PURE__*/_react.default.createElement("div", {
    ref: index === (scrollToIndex !== null && scrollToIndex !== void 0 ? scrollToIndex : data.length - 1) ? scrollToBarRef : null
    // activeOpacity={props.activeOpacity || 0.2}
    ,
    onClick: () => {
      var _props$onPress;
      if (renderTooltip || props.focusBarOnPress) {
        setSelectedIndex(index);
      }
      item.onPress ? item.onPress() : (_props$onPress = props.onPress) === null || _props$onPress === void 0 ? void 0 : _props$onPress.call(props, item, index);
    }
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
    ,
    style: barWrapperStyle
  }, barContent()), renderTooltip && selectedIndex === index && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      bottom: barHeight + 60,
      left: index === data.length - 1 ? leftSpacing - leftShiftForLastIndexTooltip : leftSpacing - ((_ref = (_item$leftShiftForToo = item === null || item === void 0 ? void 0 : item.leftShiftForTooltip) !== null && _item$leftShiftForToo !== void 0 ? _item$leftShiftForToo : leftShiftForTooltip) !== null && _ref !== void 0 ? _ref : 0),
      zIndex: 1000
    }
  }, renderTooltip(item, index)));
};
var _default = exports.default = RenderBars;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieChart = void 0;
var _react = _interopRequireDefault(require("react"));
var _main = require("./main");
var _giftedChartsCore = require("gifted-charts-core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PieChart = props => {
  const {
    radius,
    extraRadiusForFocused,
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
    paddingVertical
  } = (0, _giftedChartsCore.usePieChart)(props);
  const renderInnerCircle = (innerRadius, innerCircleBorderWidth) => {
    if (props.centerLabelComponent || donut && !isDataShifted) {
      let containerStyle = {
        height: innerRadius * 2,
        width: innerRadius * 2,
        borderRadius: innerRadius + innerCircleBorderWidth,
        position: 'absolute',
        // zIndex: 100,
        alignSelf: 'center',
        backgroundColor: innerCircleColor.toString(),
        left: canvasWidth / 2 - innerRadius + shiftInnerCenterX + extraRadiusForFocused + paddingHorizontal / 2 - innerCircleBorderWidth,
        top: canvasHeight / 2 - innerRadius + shiftInnerCenterY + extraRadiusForFocused + paddingVertical / 2 - innerCircleBorderWidth,
        borderWidth: innerCircleBorderWidth,
        borderColor: innerCircleBorderColor.toString(),
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };
      if (isThreeD) {
        containerStyle = {
          ...containerStyle,
          borderTopWidth: innerCircleBorderWidth * 5,
          borderLeftWidth: shiftInnerCenterX ? innerCircleBorderWidth * 2 : innerCircleBorderWidth,
          transform: "rotateX(".concat(tiltAngle, ")")
        };
        if (semiCircle) {
          containerStyle = {
            ...containerStyle,
            borderTopWidth: isThreeD ? innerCircleBorderWidth * 5 : innerCircleBorderWidth,
            borderLeftWidth: 0.5,
            borderLeftColor: innerCircleColor.toString(),
            borderBottomWidth: 0,
            borderRightWidth: 0.5,
            borderRightColor: innerCircleColor.toString()
          };
        }
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        style: containerStyle
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          marginTop: semiCircle ? -0.5 * innerRadius : 0
        }
      }, props.centerLabelComponent ? props.centerLabelComponent() : null));
    }
    return null;
  };
  if (!total) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: (radius + extraRadiusForFocused + paddingVertical / 2) * (props.semiCircle ? 1 : 2),
      width: (radius + extraRadiusForFocused + paddingHorizontal / 2) * 2,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute'
    }
  }, /*#__PURE__*/_react.default.createElement(_main.PieChartMain, _extends({}, props, {
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    extraRadiusForFocused: extraRadiusForFocused
  }))), renderInnerCircle(innerRadius, innerCircleBorderWidth), props.data.length > 1 && props.data[selectedIndex] && (
  // don't forget to add this one so there are no errors when the data is empty / updating
  props.focusOnPress || props.sectionAutoFocus) && selectedIndex !== -1 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: -extraRadiusForFocused,
      left: -extraRadiusForFocused,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_main.PieChartMain, _extends({}, props, {
    data: [{
      value: props.data[selectedIndex].value,
      text: props.data[selectedIndex].text,
      color: props.data[selectedIndex].color || _giftedChartsCore.pieColors[selectedIndex % 9],
      strokeColor: props.data[selectedIndex].strokeColor || undefined,
      strokeWidth: props.data[selectedIndex].strokeWidth || undefined,
      gradientCenterColor: props.data[selectedIndex].gradientCenterColor || undefined,
      shiftTextX: props.data[selectedIndex].shiftTextX || undefined,
      shiftTextY: props.data[selectedIndex].shiftTextY || undefined
    }, {
      value: total - props.data[selectedIndex].value,
      onPress: () => alert('black'),
      peripheral: true,
      strokeWidth: 0
    }],
    radius: radius + extraRadiusForFocused,
    initialAngle: startAngle,
    innerRadius: props.innerRadius || radius / 2.5,
    isBiggerPie: true,
    setSelectedIndex: setSelectedIndex,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    extraRadiusForFocused: extraRadiusForFocused
  }))), renderInnerCircle(innerRadius - inwardExtraLengthForFocused, inwardExtraLengthForFocused ? 0 : innerCircleBorderWidth));
};
exports.PieChart = PieChart;
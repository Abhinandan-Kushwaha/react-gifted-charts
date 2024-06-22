"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieChartMain = void 0;
var _react = _interopRequireDefault(require("react"));
var _giftedChartsCore = require("gifted-charts-core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PieChartMain = props => {
  const {
    isThreeD,
    isBiggerPie,
    data,
    showInnerComponent,
    radius,
    canvasWidth,
    canvasHeight,
    shadowWidth,
    backgroundColor,
    shadowColor,
    semiCircle,
    pi,
    initialAngle,
    shadow,
    donut,
    strokeWidth,
    strokeColor,
    innerRadius,
    showText,
    textColor,
    textSize,
    tiltAngle,
    labelsPosition,
    showTextBackground,
    textBackgroundColor,
    showValuesAsLabels,
    showGradient,
    gradientCenterColor,
    toggleFocusOnPress,
    minShiftX,
    minShiftY,
    total,
    horizAdjustment,
    vertAdjustment,
    cx,
    cy,
    pData,
    mData,
    paddingHorizontal,
    paddingVertical,
    extraRadiusForFocused
  } = (0, _giftedChartsCore.getPieChartMainProps)(props);
  let containerStyle = {
    backgroundColor: backgroundColor.toString(),
    height: semiCircle ? (canvasHeight + paddingVertical) / 2 + extraRadiusForFocused : canvasHeight + paddingVertical + extraRadiusForFocused * 2,
    width: canvasWidth + paddingHorizontal + extraRadiusForFocused * 2,
    overflow: 'hidden',
    pointerEvents: 'none'
  };
  if (isThreeD) {
    containerStyle = {
      ...containerStyle,
      transform: "rotateX(".concat(tiltAngle, ")")
    };
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement("svg", {
    style: {
      pointerEvents: 'none'
    },
    viewBox: "".concat(strokeWidth / -2 + minShiftX - extraRadiusForFocused - paddingHorizontal / 2, " ").concat(strokeWidth / -2 + minShiftY - extraRadiusForFocused - paddingVertical / 2, " ").concat((radius + extraRadiusForFocused + strokeWidth) * 2 + paddingHorizontal + horizAdjustment + (horizAdjustment ? strokeWidth : 0), " ").concat((radius + extraRadiusForFocused + strokeWidth) * 2 + paddingVertical + vertAdjustment + (vertAdjustment ? strokeWidth : 0)),
    height: (radius + extraRadiusForFocused) * 2 + strokeWidth + paddingVertical,
    width: (radius + extraRadiusForFocused) * 2 + strokeWidth + paddingHorizontal
  }, /*#__PURE__*/_react.default.createElement("defs", null, data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("radialGradient", {
      key: index + '',
      id: 'grad' + index,
      cx: "50%",
      cy: "50%",
      rx: "50%",
      ry: "50%",
      fx: "50%",
      fy: "50%",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/_react.default.createElement("stop", {
      offset: "0%",
      stopColor: item.gradientCenterColor || gradientCenterColor,
      stopOpacity: "1"
    }), /*#__PURE__*/_react.default.createElement("stop", {
      offset: "100%",
      stopColor: item.color || _giftedChartsCore.pieColors[index % 9],
      stopOpacity: "1"
    }));
  })), data.length === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("circle", {
    cx: cx,
    cy: cy,
    r: radius,
    fill: showGradient ? "url(#grad".concat(0, ")") : data[0].color || _giftedChartsCore.pieColors[0 % 9],
    onClick: () => {
      var _props$onPress;
      data[0].onPress ? data[0].onPress() : (_props$onPress = props.onPress) === null || _props$onPress === void 0 ? void 0 : _props$onPress.call(props, data[0], 0);
    }
  })) : data.map((item, index) => {
    // console.log('index', index);
    let nextItem;
    if (index === pData.length - 1) nextItem = pData[0];else nextItem = pData[index + 1];
    let sx = cx * (1 + Math.sin(2 * pi * pData[index] + initialAngle)) + (item.shiftX || 0);
    let sy = cy * (1 - Math.cos(2 * pi * pData[index] + initialAngle)) + (item.shiftY || 0);
    let ax = cx * (1 + Math.sin(2 * pi * nextItem + initialAngle)) + (item.shiftX || 0);
    let ay = cy * (1 - Math.cos(2 * pi * nextItem + initialAngle)) + (item.shiftY || 0);
    if (isBiggerPie && index) return null;
    return /*#__PURE__*/_react.default.createElement("path", {
      style: {
        pointerEvents: 'all'
      },
      key: index + 'a',
      d: "M ".concat(cx + (item.shiftX || 0), " ").concat(cy + (item.shiftY || 0), " L ").concat(sx, " ").concat(sy, " A ").concat(radius, " ").concat(radius, " 0 ").concat(semiCircle ? 0 : data[index].value > total / 2 ? 1 : 0, " 1 ").concat(ax, " ").concat(ay, " L ").concat(cx + (item.shiftX || 0), " ").concat(cy + (item.shiftY || 0)),
      stroke: item.strokeColor || strokeColor,
      strokeWidth: props.focusOnPress && props.selectedIndex === index ? 0 : item.strokeWidth === 0 ? 0 : item.strokeWidth || strokeWidth,
      fill: props.selectedIndex === index || item.peripheral ? 'transparent' : showGradient ? "url(#grad".concat(index, ")") : item.color || _giftedChartsCore.pieColors[index % 9],
      onClick: () => {
        if (item.onPress) {
          item.onPress();
        } else if (props.onPress) {
          props.onPress(item, index);
        }
        if (props.focusOnPress) {
          if (props.selectedIndex === index || props.isBiggerPie) {
            if (toggleFocusOnPress) {
              props.setSelectedIndex(-1);
            }
          } else {
            props.setSelectedIndex(index);
          }
        }
      }
    });
  }), (showText || showInnerComponent) && data.map((item, index) => {
    var _item$pieInnerCompone, _ref, _item$shiftTextBackgr, _ref2, _item$shiftTextBackgr2, _localPieInnerCompone;
    const localPieInnerComponent = (_item$pieInnerCompone = item.pieInnerComponent) !== null && _item$pieInnerCompone !== void 0 ? _item$pieInnerCompone : props.pieInnerComponent;
    if (isBiggerPie && index) return null;
    if (!props.data[index].value) return null;
    let mx = cx * (1 + Math.sin(2 * pi * mData[index] + initialAngle));
    let my = cy * (1 - Math.cos(2 * pi * mData[index] + initialAngle));
    let midx = (mx + cx) / 2;
    let midy = (my + cy) / 2;
    let x = midx,
      y = midy;
    const labelPosition = item.labelPosition || labelsPosition;
    if (labelPosition === 'onBorder') {
      x = mx;
      y = my;
    } else if (labelPosition === 'outward') {
      x = (midx + mx) / 2;
      y = (midy + my) / 2;
    } else if (labelPosition === 'inward') {
      x = (midx + cx) / 2;
      y = (midy + cy) / 2;
    }
    x += item.shiftX || 0;
    y += item.shiftY || 0;
    if (data.length === 1) {
      if (donut) {
        y = (radius - innerRadius + (item.textBackgroundRadius || props.textBackgroundRadius || item.textSize || textSize)) / 2;
      } else {
        y = cy;
      }
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: index
    }, showTextBackground ? /*#__PURE__*/_react.default.createElement("circle", {
      style: {
        pointerEvents: 'all'
      },
      cx: x + ((_ref = (_item$shiftTextBackgr = item.shiftTextBackgroundX) !== null && _item$shiftTextBackgr !== void 0 ? _item$shiftTextBackgr : item.shiftTextX) !== null && _ref !== void 0 ? _ref : 0),
      cy: y + ((_ref2 = (_item$shiftTextBackgr2 = item.shiftTextBackgroundY) !== null && _item$shiftTextBackgr2 !== void 0 ? _item$shiftTextBackgr2 : item.shiftTextY) !== null && _ref2 !== void 0 ? _ref2 : 0) - (item.textSize || textSize) / 4,
      r: item.textBackgroundRadius || props.textBackgroundRadius || item.textSize || textSize,
      fill: item.textBackgroundColor || textBackgroundColor,
      onClick: () => {
        var _props$onPress2;
        item.onLabelPress ? item.onLabelPress() : props.onLabelPress ? props.onLabelPress(item, index) : item.onPress ? item.onPress() : (_props$onPress2 = props.onPress) === null || _props$onPress2 === void 0 ? void 0 : _props$onPress2.call(props, item, index);
        if (props.focusOnPress) {
          if (props.selectedIndex === index) {
            if (toggleFocusOnPress) {
              props.setSelectedIndex(-1);
            }
          } else {
            props.setSelectedIndex(index);
          }
        }
      }
    }) : null, /*#__PURE__*/_react.default.createElement("text", {
      style: {
        pointerEvents: 'all'
      },
      fill: item.textColor || textColor || _giftedChartsCore.pieColors[(index + 2) % 9],
      fontSize: item.textSize || textSize,
      fontFamily: item.font || props.font,
      fontWeight: item.fontWeight || props.fontWeight,
      fontStyle: item.fontStyle || props.fontStyle || 'normal',
      x: x + (item.shiftTextX || 0) - (item.textSize || textSize) / 1.8,
      y: y + (item.shiftTextY || 0),
      onClick: () => {
        var _props$onPress3;
        item.onLabelPress ? item.onLabelPress() : props.onLabelPress ? props.onLabelPress(item, index) : item.onPress ? item.onPress() : (_props$onPress3 = props.onPress) === null || _props$onPress3 === void 0 ? void 0 : _props$onPress3.call(props, item, index);
        if (props.focusOnPress) {
          if (props.selectedIndex === index) {
            if (toggleFocusOnPress) {
              props.setSelectedIndex(-1);
            }
          } else {
            props.setSelectedIndex(index);
          }
        }
      }
    }, item.text || (showValuesAsLabels ? item.value + '' : '')), localPieInnerComponent ? /*#__PURE__*/_react.default.createElement("g", {
      x: x,
      y: y
    }, (_localPieInnerCompone = localPieInnerComponent === null || localPieInnerComponent === void 0 ? void 0 : localPieInnerComponent(item, index)) !== null && _localPieInnerCompone !== void 0 ? _localPieInnerCompone : null) : null);
  })), isThreeD && shadow && !semiCircle ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: radius * 2,
      height: radius * 2,
      backgroundColor: shadowColor,
      borderRadius: radius,
      position: 'absolute',
      top: shadowWidth + paddingVertical / 2,
      left: paddingHorizontal / 2,
      zIndex: -1
    }
  }) : null);
};
exports.PieChartMain = PieChartMain;
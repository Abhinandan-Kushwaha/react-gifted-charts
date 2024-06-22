"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieChartPro = void 0;
var _giftedChartsCore = require("gifted-charts-core");
var _pro = require("./pro");
require("./styles.css");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PieChartPro = props => {
  const {
    radius,
    total,
    donut,
    strokeWidth,
    maxStrokeWidth,
    isAnimated,
    animationDuration,
    initial,
    dInitial,
    dFinal,
    getStartCaps,
    getEndCaps,
    getTextCoordinates,
    height,
    heightFactor,
    svgProps
  } = (0, _pro.usePiePro)(props);
  const {
    data,
    curvedStartEdges,
    curvedEndEdges,
    edgesRadius,
    showGradient,
    ring,
    pieInnerComponent,
    strokeDashArray
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: height * heightFactor,
      width: (radius + maxStrokeWidth) * 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute'
    }
  }, pieInnerComponent ? pieInnerComponent() : null), /*#__PURE__*/React.createElement("svg", _extends({}, svgProps, {
    transform: "scale(1,".concat(maxStrokeWidth ? 1 + maxStrokeWidth / (radius * 2) : 1, ")")
  }), total ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("defs", null, data.map((item, index) => {
    return /*#__PURE__*/React.createElement("radialGradient", {
      key: index + '',
      id: 'grad' + index,
      cx: "50%",
      cy: "50%",
      rx: "50%",
      ry: "50%",
      fx: "50%",
      fy: "50%",
      gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: item.gradientCenterColor,
      stopOpacity: "1"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: item.color || _giftedChartsCore.pieColors[index % 9],
      stopOpacity: "1"
    }));
  })), data.map((item, index) => {
    var _item$strokeWidth, _ref, _item$strokeColor, _item$strokeDashArray;
    const borderWidth = (_item$strokeWidth = item.strokeWidth) !== null && _item$strokeWidth !== void 0 ? _item$strokeWidth : strokeWidth;
    const borderColor = (_ref = (_item$strokeColor = item.strokeColor) !== null && _item$strokeColor !== void 0 ? _item$strokeColor : props.strokeColor) !== null && _ref !== void 0 ? _ref : borderWidth ? 'black' : 'undefined';
    const strokeDashArrayLocal = (_item$strokeDashArray = item.strokeDashArray) !== null && _item$strokeDashArray !== void 0 ? _item$strokeDashArray : strokeDashArray;
    return /*#__PURE__*/React.createElement("path", {
      id: "renderPath",
      key: "pie".concat(index),
      d: dFinal[index],
      fill: ring ? 'transparent' : showGradient ? "url(#grad".concat(index, ")") : data[index].color || _giftedChartsCore.pieColors[index % 9],
      strokeWidth: borderWidth,
      stroke: borderColor,
      strokeDasharray: (strokeDashArrayLocal === null || strokeDashArrayLocal === void 0 ? void 0 : strokeDashArrayLocal.length) === 2 ? "".concat(strokeDashArrayLocal[0], " ").concat(strokeDashArrayLocal[1]) : ""
    }, isAnimated ? /*#__PURE__*/React.createElement("animate", {
      dur: animationDuration / 1000,
      attributeName: "d",
      values: "".concat(dInitial[index], ";").concat(dFinal[index])
    }) : null);
  }), donut ? data.map((item, index) => {
    if (curvedStartEdges || edgesRadius || item.isStartEdgeCurved || item.startEdgeRadius) return /*#__PURE__*/React.createElement("path", {
      key: "cap".concat(index),
      d: "".concat(initial, " ").concat(getStartCaps(index, item)),
      fill: showGradient ? "url(#grad".concat(index, ")") : data[index].color || _giftedChartsCore.pieColors[index % 9],
      className: isAnimated ? 'appear' : ''
    });
    return null;
  }) : null, donut ? data.map((item, index) => {
    if (curvedEndEdges || edgesRadius || item.isEndEdgeCurved || item.endEdgeRadius) return /*#__PURE__*/React.createElement("path", {
      key: "cap".concat(index),
      d: "".concat(initial, " ").concat(getEndCaps(index, item)),
      fill: showGradient ? "url(#grad".concat(index, ")") : data[index].color || _giftedChartsCore.pieColors[index % 9],
      className: isAnimated ? 'appear' : ''
    });
    return null;
  }) : null, data.map((item, index) => {
    var _ref2, _item$textSize;
    const {
      x,
      y
    } = getTextCoordinates(index, item.labelPosition);
    return /*#__PURE__*/React.createElement("text", {
      key: "label".concat(index),
      style: {
        pointerEvents: 'all'
      },
      fill: item.textColor || props.textColor || _giftedChartsCore.pieColors[(index + 2) % 9],
      fontSize: item.textSize || props.textSize,
      fontFamily: item.font || props.font,
      fontWeight: item.fontWeight || props.fontWeight,
      fontStyle: item.fontStyle || props.fontStyle || 'normal',
      x: x + (item.shiftTextX || 0) - ((_ref2 = (_item$textSize = item.textSize) !== null && _item$textSize !== void 0 ? _item$textSize : props.textSize) !== null && _ref2 !== void 0 ? _ref2 : 0) / 1.8,
      y: y + (item.shiftTextY || 0),
      onClick: () => {
        var _props$onPress;
        item.onLabelPress ? item.onLabelPress() : props.onLabelPress ? props.onLabelPress(item, index) : item.onPress ? item.onPress() : (_props$onPress = props.onPress) === null || _props$onPress === void 0 ? void 0 : _props$onPress.call(props, item, index);
      },
      className: isAnimated ? 'appear' : ''
    }, item.text || (props.showValuesAsLabels ? item.value + '' : ''));
  })) : null));
};
exports.PieChartPro = PieChartPro;
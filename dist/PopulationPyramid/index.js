"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopulationPyramid = void 0;
var _react = _interopRequireWildcard(require("react"));
var _giftedChartsCore = require("gifted-charts-core");
var _types = require("gifted-charts-core/src/utils/types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PopulationPyramid = props => {
  var _yAxisLineProps$strok, _yAxisLineProps$strok2, _verticalLinesCommonP, _verticalLinesCommonP2, _midAxisLineCommonPro, _ref8, _props$midAxisLeftCol, _ref9, _props$midAxisRightCo;
  const {
    width,
    verticalMarginBetweenBars,
    barsMapToYAxisSections,
    data,
    hideRules,
    yAxisColor,
    xAxisColor,
    xAxisThickness,
    xAxisType,
    xAxisNoOfSections,
    showXAxisIndices,
    showXAxisLabelTexts,
    xAxisLabelShiftX,
    xAxisLabelPrefix,
    xAxisLabelSuffix,
    formatXAxisLabels,
    showVerticalLines,
    showYAxisIndices,
    yAxisIndicesWidth,
    yAxisIndicesHeight,
    yAxisIndicesColor,
    yAxisLabelFontSize,
    yAxisLabelFontStyle,
    yAxisLabelFontWeight,
    yAxisLabelFontFamily,
    yAxisLabelColor,
    yAxisLabelTextMarginRight,
    yAxisLabelTexts,
    showValuesAsBarLabels,
    rulesThickness,
    rulesColor,
    rulesType,
    dashWidth,
    dashGap,
    leftBarLabelWidth,
    leftBarLabelFontSize,
    leftBarLabelColor,
    leftBarLabelFontStyle,
    leftBarLabelFontWeight,
    leftBarLabelFontFamily,
    leftBarLabelPrefix,
    leftBarLabelSuffix,
    rightBarLabelFontSize,
    rightBarLabelColor,
    rightBarLabelFontStyle,
    rightBarLabelFontWeight,
    rightBarLabelFontFamily,
    rightBarLabelPrefix,
    rightBarLabelSuffix,
    formatBarLabels,
    showMidAxis,
    midAxisLabelFontSize,
    midAxisLabelColor,
    midAxisLabelFontStyle,
    midAxisLabelFontWeight,
    midAxisLabelFontFamily,
    leftBarColor,
    rightBarColor,
    leftBarBorderColor,
    rightBarBorderColor,
    leftBarBorderWidth,
    rightBarBorderWidth,
    leftBarBorderRadius,
    rightBarBorderRadius,
    allCornersRounded,
    showSurplus,
    showSurplusLeft,
    showSurplusRight,
    leftSurplusColor,
    leftSurplusBorderColor,
    rightSurplusColor,
    rightSurplusBorderColor,
    leftSurplusBorderWidth,
    rightSurplusBorderWidth,
    yAxisLabelWidth,
    noOfSections,
    stepHeight,
    containerHeightWithXaxisLabels,
    mid,
    barWidthFactor,
    leftXAfterMid,
    rightXAfterMid,
    yAxisLineProps,
    midAxisLineCommonProps,
    xAxisIndicesCommonProps,
    verticalLinesCommonProps,
    xAxisLabelsCommonProps,
    getXLabel
  } = (0, _giftedChartsCore.usePopulationPyramid)({
    ...props,
    screenWidth: 300,
    framework: _types.Framework.reactJS
  });

  /*********************************************************************************************
   ***********************        Type modifications for ReactJS         **********************/

  const yAxisStroke = (_yAxisLineProps$strok = yAxisLineProps.stroke) === null || _yAxisLineProps$strok === void 0 ? void 0 : _yAxisLineProps$strok.toString();
  const yAxisStrokeDashArray = (_yAxisLineProps$strok2 = yAxisLineProps.strokeDasharray) === null || _yAxisLineProps$strok2 === void 0 ? void 0 : _yAxisLineProps$strok2.toString();
  const verticalLinesStroke = (_verticalLinesCommonP = verticalLinesCommonProps.stroke) === null || _verticalLinesCommonP === void 0 ? void 0 : _verticalLinesCommonP.toString();
  const verticalLinesStrokeDashArray = (_verticalLinesCommonP2 = verticalLinesCommonProps.strokeDasharray) === null || _verticalLinesCommonP2 === void 0 ? void 0 : _verticalLinesCommonP2.toString();
  const xAxisIndicesStroke = xAxisIndicesCommonProps.stroke.toString();
  const midAxisStrokeDashArray = (_midAxisLineCommonPro = midAxisLineCommonProps.strokeDasharray) === null || _midAxisLineCommonPro === void 0 ? void 0 : _midAxisLineCommonPro.toString();
  const xAxisLabelStroke = xAxisLabelsCommonProps.stroke.toString();
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: containerHeightWithXaxisLabels,
      width
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    fill: 'none',
    height: containerHeightWithXaxisLabels
  }, /*#__PURE__*/_react.default.createElement("line", _extends({}, yAxisLineProps, {
    stroke: yAxisStroke,
    strokeDasharray: yAxisStrokeDashArray
  })), Array.from(Array(noOfSections)).map((item, index) => {
    var _rulesProps$strokeDas, _yAxisLabelTexts$inde;
    const isLast = index === noOfSections - 1;
    const y = stepHeight * (index + 1);
    const rulesProps = {
      x1: yAxisLabelWidth,
      y1: y,
      x2: width,
      y2: y,
      stroke: (isLast ? xAxisColor : rulesColor).toString(),
      strokeWidth: isLast ? xAxisThickness : rulesThickness
    };
    if (isLast && xAxisType !== _giftedChartsCore.ruleTypes.SOLID || !isLast && rulesType !== _giftedChartsCore.ruleTypes.SOLID) {
      rulesProps.strokeDasharray = [dashWidth, dashGap].toString();
    } else {
      delete rulesProps.strokeDasharray;
    }
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: 'rule' + index
    }, !hideRules || isLast ? /*#__PURE__*/_react.default.createElement("line", _extends({}, rulesProps, {
      strokeDasharray: (_rulesProps$strokeDas = rulesProps.strokeDasharray) === null || _rulesProps$strokeDas === void 0 ? void 0 : _rulesProps$strokeDas.toString()
    })) : null, showYAxisIndices ? /*#__PURE__*/_react.default.createElement("line", {
      x1: yAxisLabelWidth - yAxisIndicesWidth / 2,
      y1: y,
      x2: yAxisLabelWidth + yAxisIndicesWidth / 2,
      y2: y,
      stroke: yAxisIndicesColor.toString(),
      strokeWidth: yAxisIndicesHeight
    }) : null, !barsMapToYAxisSections ? /*#__PURE__*/_react.default.createElement("text", {
      x: yAxisLabelWidth - yAxisLabelTextMarginRight,
      y: stepHeight * (index + 0.5) + yAxisLabelFontSize / 2 - 2,
      stroke: yAxisLabelColor.toString(),
      fontSize: yAxisLabelFontSize,
      fontStyle: yAxisLabelFontStyle,
      fontWeight: yAxisLabelFontWeight,
      fontFamily: yAxisLabelFontFamily,
      textAnchor: "end"
    }, (_yAxisLabelTexts$inde = yAxisLabelTexts[index]) !== null && _yAxisLabelTexts$inde !== void 0 ? _yAxisLabelTexts$inde : '') : null);
  }), Array.from(Array(xAxisNoOfSections)).map((item, index) => {
    const x = leftXAfterMid - leftXAfterMid * index / xAxisNoOfSections;
    const unformattedXLabel = getXLabel(index);
    const xLabel = formatXAxisLabels ? formatXAxisLabels(unformattedXLabel) : unformattedXLabel;
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: 'x-axis' + index
    }, showVerticalLines ? /*#__PURE__*/_react.default.createElement("line", _extends({}, verticalLinesCommonProps, {
      x1: x,
      x2: x,
      stroke: verticalLinesStroke,
      strokeDasharray: verticalLinesStrokeDashArray
    })) : null, showXAxisIndices ? /*#__PURE__*/_react.default.createElement("line", _extends({}, xAxisIndicesCommonProps, {
      x1: x,
      x2: x,
      stroke: xAxisIndicesStroke
    })) : null, showXAxisLabelTexts ? /*#__PURE__*/_react.default.createElement("text", _extends({}, xAxisLabelsCommonProps, {
      x: x + xAxisLabelShiftX,
      stroke: xAxisLabelStroke,
      textAnchor: "middle"
    }), xAxisLabelPrefix + xLabel + xAxisLabelSuffix) : null);
  }), Array.from(Array(xAxisNoOfSections)).map((item, index) => {
    if (!index && !showMidAxis) return null;
    const x = leftXAfterMid + leftXAfterMid * index / xAxisNoOfSections;
    const unformattedXLabel = getXLabel(index);
    const xLabel = formatXAxisLabels ? formatXAxisLabels(unformattedXLabel) : unformattedXLabel;
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: 'x-axis' + index
    }, showVerticalLines ? /*#__PURE__*/_react.default.createElement("line", _extends({}, verticalLinesCommonProps, {
      x1: x,
      x2: x,
      stroke: verticalLinesStroke,
      strokeDasharray: verticalLinesStrokeDashArray
    })) : null, showXAxisIndices ? /*#__PURE__*/_react.default.createElement("line", _extends({}, xAxisIndicesCommonProps, {
      x1: x,
      x2: x,
      stroke: xAxisIndicesStroke
    })) : null, showXAxisLabelTexts ? /*#__PURE__*/_react.default.createElement("text", _extends({}, xAxisLabelsCommonProps, {
      x: x + xAxisLabelShiftX,
      stroke: xAxisLabelStroke,
      textAnchor: "middle"
    }), xAxisLabelPrefix + xLabel + xAxisLabelSuffix) : null);
  }), data.map((item, index) => {
    var _ref, _item$leftBarBorderRa, _ref2, _item$rightBarBorderR, _ref3, _item$leftBarBorderWi, _ref4, _item$rightBarBorderW, _item$leftBarLabel, _item$rightBarLabel, _item$leftBarLabelFon, _ref5, _item$leftBarLabelShi, _ref6, _item$rightBarLabelSh, _ref7, _item$yAxisLabel, _item$leftBarColor, _item$leftBarBorderCo, _item$leftBarColor2, _item$leftBarBorderCo2, _item$leftBarBorderCo3, _item$leftBarLabelCol, _item$leftBarLabelFon2, _item$leftBarLabelFon3, _item$leftBarLabelFon4, _item$rightBarColor, _item$rightBarBorderC, _item$rightBarColor2, _item$rightBarBorderC2, _item$rightBarBorderC3, _item$rightBarLabelCo, _item$rightBarLabelFo, _item$rightBarLabelFo2, _item$rightBarLabelFo3, _item$rightBarLabelFo4, _item$leftSurplusBord, _item$leftSurplusBord2, _item$leftSurplusColo, _item$leftSurplusColo2, _item$rightSurplusBor, _item$rightSurplusBor2, _item$rightSurplusCol, _item$rightSurplusCol2;
    const leftWidth = item.left * barWidthFactor;
    const rightWidth = item.right * barWidthFactor;
    const y = stepHeight * index + verticalMarginBetweenBars;
    const leftSurplusWidth = leftWidth - rightWidth;
    const rightSurplusWidth = rightWidth - leftWidth;
    const leftRadius = (_ref = (_item$leftBarBorderRa = item.leftBarBorderRadius) !== null && _item$leftBarBorderRa !== void 0 ? _item$leftBarBorderRa : item.barBorderRadius) !== null && _ref !== void 0 ? _ref : leftBarBorderRadius;
    const rightRadius = (_ref2 = (_item$rightBarBorderR = item.rightBarBorderRadius) !== null && _item$rightBarBorderR !== void 0 ? _item$rightBarBorderR : item.barBorderRadius) !== null && _ref2 !== void 0 ? _ref2 : rightBarBorderRadius;
    const leftBorderWidth = (_ref3 = (_item$leftBarBorderWi = item.leftBarBorderWidth) !== null && _item$leftBarBorderWi !== void 0 ? _item$leftBarBorderWi : item.barBorderWidth) !== null && _ref3 !== void 0 ? _ref3 : leftBarBorderWidth;
    const rightBorderWidth = (_ref4 = (_item$rightBarBorderW = item.rightBarBorderWidth) !== null && _item$rightBarBorderW !== void 0 ? _item$rightBarBorderW : item.barBorderWidth) !== null && _ref4 !== void 0 ? _ref4 : rightBarBorderWidth;
    const unFormattedLeftBarLabel = (_item$leftBarLabel = item.leftBarLabel) !== null && _item$leftBarLabel !== void 0 ? _item$leftBarLabel : showValuesAsBarLabels ? item.left.toString() : '';
    const leftBarLabel = formatBarLabels ? formatBarLabels(unFormattedLeftBarLabel) : unFormattedLeftBarLabel;
    const unFormattedRightBarLabel = (_item$rightBarLabel = item.rightBarLabel) !== null && _item$rightBarLabel !== void 0 ? _item$rightBarLabel : showValuesAsBarLabels ? item.right.toString() : '';
    const rightBarLabel = formatBarLabels ? formatBarLabels(unFormattedRightBarLabel) : unFormattedRightBarLabel;
    const leftLabelFontSize = (_item$leftBarLabelFon = item.leftBarLabelFontSize) !== null && _item$leftBarLabelFon !== void 0 ? _item$leftBarLabelFon : leftBarLabelFontSize;
    const leftLabelX = leftXAfterMid - leftWidth - leftBarBorderWidth / 2 - yAxisLabelWidth / 2 - leftBarLabelWidth / 2 + 28 - leftBarLabel.length * leftLabelFontSize / 2 + ((_ref5 = (_item$leftBarLabelShi = item.leftBarLabelShift) !== null && _item$leftBarLabelShi !== void 0 ? _item$leftBarLabelShi : props.leftBarLabelShift) !== null && _ref5 !== void 0 ? _ref5 : 0);
    const rightLabelX = rightXAfterMid + rightBarBorderWidth / 2 + rightWidth + 3 + ((_ref6 = (_item$rightBarLabelSh = item.rightBarLabelShift) !== null && _item$rightBarLabelSh !== void 0 ? _item$rightBarLabelSh : props.rightBarLabelShift) !== null && _ref6 !== void 0 ? _ref6 : 0);
    const leftBarCommonProps = {
      x: leftXAfterMid - leftWidth - leftBarBorderWidth / 2,
      y: y,
      width: leftWidth,
      height: stepHeight - verticalMarginBetweenBars * 2,
      rx: leftRadius,
      ry: leftRadius
    };
    const rightBarCommonProps = {
      x: rightXAfterMid + rightBarBorderWidth / 2,
      y: y,
      width: rightWidth,
      height: stepHeight - verticalMarginBetweenBars * 2,
      rx: rightRadius,
      ry: rightRadius
    };
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: 'bars' + index
    }, barsMapToYAxisSections ? /*#__PURE__*/_react.default.createElement("text", {
      x: yAxisLabelWidth - yAxisLabelTextMarginRight,
      y: stepHeight * (index + 0.5) + yAxisLabelFontSize / 2 - 2,
      stroke: yAxisLabelColor.toString(),
      fontSize: yAxisLabelFontSize,
      fontStyle: yAxisLabelFontStyle,
      fontWeight: yAxisLabelFontWeight,
      fontFamily: yAxisLabelFontFamily,
      textAnchor: "end"
    }, (_ref7 = (_item$yAxisLabel = item.yAxisLabel) !== null && _item$yAxisLabel !== void 0 ? _item$yAxisLabel : yAxisLabelTexts[index]) !== null && _ref7 !== void 0 ? _ref7 : '') : null, /*#__PURE__*/_react.default.createElement("rect", _extends({}, leftBarCommonProps, {
      fill: ((_item$leftBarColor = item.leftBarColor) !== null && _item$leftBarColor !== void 0 ? _item$leftBarColor : leftBarColor).toString(),
      stroke: ((_item$leftBarBorderCo = item.leftBarBorderColor) !== null && _item$leftBarBorderCo !== void 0 ? _item$leftBarBorderCo : leftBarBorderColor).toString(),
      strokeWidth: leftBorderWidth
    })), /*#__PURE__*/_react.default.createElement("clipPath", {
      id: 'cp-left' + index
    }, /*#__PURE__*/_react.default.createElement("rect", leftBarCommonProps)), !allCornersRounded && leftWidth >= leftRadius ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
      x: leftXAfterMid - leftRadius,
      y: y,
      width: leftRadius,
      height: stepHeight - verticalMarginBetweenBars * 2,
      fill: ((_item$leftBarColor2 = item.leftBarColor) !== null && _item$leftBarColor2 !== void 0 ? _item$leftBarColor2 : leftBarColor).toString()
    }), leftBorderWidth ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
      x1: leftXAfterMid - leftRadius,
      y1: y,
      x2: leftXAfterMid,
      y2: y,
      stroke: ((_item$leftBarBorderCo2 = item.leftBarBorderColor) !== null && _item$leftBarBorderCo2 !== void 0 ? _item$leftBarBorderCo2 : leftBarBorderColor).toString(),
      strokeWidth: leftBorderWidth
    }), /*#__PURE__*/_react.default.createElement("line", {
      x1: leftXAfterMid - leftRadius,
      y1: y + stepHeight - verticalMarginBetweenBars * 2,
      x2: leftXAfterMid,
      y2: y + stepHeight - verticalMarginBetweenBars * 2,
      stroke: ((_item$leftBarBorderCo3 = item.leftBarBorderColor) !== null && _item$leftBarBorderCo3 !== void 0 ? _item$leftBarBorderCo3 : leftBarBorderColor).toString(),
      strokeWidth: leftBorderWidth
    })) : null) : null, leftBarLabel !== '' ? /*#__PURE__*/_react.default.createElement("text", {
      x: leftLabelX,
      y: stepHeight * (index + 0.5) + yAxisLabelFontSize / 2 - 2,
      stroke: ((_item$leftBarLabelCol = item.leftBarLabelColor) !== null && _item$leftBarLabelCol !== void 0 ? _item$leftBarLabelCol : leftBarLabelColor).toString(),
      fontSize: leftLabelFontSize,
      fontStyle: (_item$leftBarLabelFon2 = item.leftBarLabelFontStyle) !== null && _item$leftBarLabelFon2 !== void 0 ? _item$leftBarLabelFon2 : leftBarLabelFontStyle,
      fontWeight: (_item$leftBarLabelFon3 = item.leftBarLabelFontWeight) !== null && _item$leftBarLabelFon3 !== void 0 ? _item$leftBarLabelFon3 : leftBarLabelFontWeight,
      fontFamily: (_item$leftBarLabelFon4 = item.leftBarLabelFontFamily) !== null && _item$leftBarLabelFon4 !== void 0 ? _item$leftBarLabelFon4 : leftBarLabelFontFamily,
      textAnchor: "start"
    }, leftBarLabelPrefix + leftBarLabel + leftBarLabelSuffix) : null, /*#__PURE__*/_react.default.createElement("rect", _extends({}, rightBarCommonProps, {
      fill: ((_item$rightBarColor = item.rightBarColor) !== null && _item$rightBarColor !== void 0 ? _item$rightBarColor : rightBarColor).toString(),
      stroke: ((_item$rightBarBorderC = item.rightBarBorderColor) !== null && _item$rightBarBorderC !== void 0 ? _item$rightBarBorderC : rightBarBorderColor).toString(),
      strokeWidth: rightBorderWidth
    })), /*#__PURE__*/_react.default.createElement("clipPath", {
      id: 'cp-right' + index
    }, /*#__PURE__*/_react.default.createElement("rect", rightBarCommonProps)), !allCornersRounded && rightWidth >= rightRadius ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
      x: rightXAfterMid,
      y: y,
      width: rightRadius,
      height: stepHeight - verticalMarginBetweenBars * 2,
      fill: ((_item$rightBarColor2 = item.rightBarColor) !== null && _item$rightBarColor2 !== void 0 ? _item$rightBarColor2 : rightBarColor).toString()
    }), rightBorderWidth ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("line", {
      x1: rightXAfterMid,
      y1: y,
      x2: rightXAfterMid + rightRadius,
      y2: y,
      stroke: ((_item$rightBarBorderC2 = item.rightBarBorderColor) !== null && _item$rightBarBorderC2 !== void 0 ? _item$rightBarBorderC2 : rightBarBorderColor).toString(),
      strokeWidth: rightBorderWidth
    }), /*#__PURE__*/_react.default.createElement("line", {
      x1: rightXAfterMid,
      y1: y + stepHeight - verticalMarginBetweenBars * 2,
      x2: rightXAfterMid + rightRadius,
      y2: y + stepHeight - verticalMarginBetweenBars * 2,
      stroke: ((_item$rightBarBorderC3 = item.rightBarBorderColor) !== null && _item$rightBarBorderC3 !== void 0 ? _item$rightBarBorderC3 : rightBarBorderColor).toString(),
      strokeWidth: rightBorderWidth
    })) : null) : null, rightBarLabel !== '' ? /*#__PURE__*/_react.default.createElement("text", {
      x: rightLabelX,
      y: stepHeight * (index + 0.5) + yAxisLabelFontSize / 2 - 2,
      stroke: ((_item$rightBarLabelCo = item.rightBarLabelColor) !== null && _item$rightBarLabelCo !== void 0 ? _item$rightBarLabelCo : rightBarLabelColor).toString(),
      fontSize: (_item$rightBarLabelFo = item.rightBarLabelFontSize) !== null && _item$rightBarLabelFo !== void 0 ? _item$rightBarLabelFo : rightBarLabelFontSize,
      fontStyle: (_item$rightBarLabelFo2 = item.rightBarLabelFontStyle) !== null && _item$rightBarLabelFo2 !== void 0 ? _item$rightBarLabelFo2 : rightBarLabelFontStyle,
      fontWeight: (_item$rightBarLabelFo3 = item.rightBarLabelFontWeight) !== null && _item$rightBarLabelFo3 !== void 0 ? _item$rightBarLabelFo3 : rightBarLabelFontWeight,
      fontFamily: (_item$rightBarLabelFo4 = item.rightBarLabelFontFamily) !== null && _item$rightBarLabelFo4 !== void 0 ? _item$rightBarLabelFo4 : rightBarLabelFontFamily,
      textAnchor: "start"
    }, rightBarLabelPrefix + rightBarLabel + rightBarLabelSuffix) : null, (showSurplus || showSurplusLeft || item.showSurplus || item.showSurplusLeft) && leftSurplusWidth > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
      id: 'l-spls' + index,
      x: leftXAfterMid - leftWidth - leftBarBorderWidth / 2,
      y: y,
      width: leftSurplusWidth,
      height: stepHeight - verticalMarginBetweenBars * 2,
      stroke: ((_item$leftSurplusBord = item.leftSurplusBorderColor) !== null && _item$leftSurplusBord !== void 0 ? _item$leftSurplusBord : leftSurplusBorderColor).toString(),
      strokeWidth: (_item$leftSurplusBord2 = item.leftSurplusBorderWidth) !== null && _item$leftSurplusBord2 !== void 0 ? _item$leftSurplusBord2 : leftSurplusBorderWidth
    }), /*#__PURE__*/_react.default.createElement("use", {
      fill: ((_item$leftSurplusColo = item.leftSurplusColor) !== null && _item$leftSurplusColo !== void 0 ? _item$leftSurplusColo : leftSurplusColor).toString(),
      clipPath: '#cp-left' + index,
      href: '#l-spls' + index
    }), leftSurplusWidth >= leftRadius ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
      id: 'hide-in-left' + index,
      x: leftXAfterMid - leftWidth - leftBarBorderWidth + leftSurplusWidth - leftRadius,
      y: y,
      width: leftRadius,
      height: stepHeight - verticalMarginBetweenBars * 2
    }), /*#__PURE__*/_react.default.createElement("use", {
      fill: ((_item$leftSurplusColo2 = item.leftSurplusColor) !== null && _item$leftSurplusColo2 !== void 0 ? _item$leftSurplusColo2 : leftSurplusColor).toString(),
      clipPath: "url(#cp-left".concat(index, ")"),
      href: '#hide-in-left' + index
    })) : null) : null, (showSurplus || showSurplusRight || item.showSurplus || item.showSurplusRight) && rightSurplusWidth > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
      id: 'r-spls' + index,
      x: rightXAfterMid + rightBarBorderWidth / 2 + rightWidth - rightSurplusWidth,
      y: y,
      width: rightSurplusWidth,
      height: stepHeight - verticalMarginBetweenBars * 2,
      stroke: ((_item$rightSurplusBor = item.rightSurplusBorderColor) !== null && _item$rightSurplusBor !== void 0 ? _item$rightSurplusBor : rightSurplusBorderColor).toString(),
      strokeWidth: (_item$rightSurplusBor2 = item.rightSurplusBorderWidth) !== null && _item$rightSurplusBor2 !== void 0 ? _item$rightSurplusBor2 : rightSurplusBorderWidth
    }), /*#__PURE__*/_react.default.createElement("use", {
      fill: ((_item$rightSurplusCol = item.rightSurplusColor) !== null && _item$rightSurplusCol !== void 0 ? _item$rightSurplusCol : rightSurplusColor).toString(),
      clipPath: '#cp-right' + index,
      href: '#r-spls' + index
    }), rightSurplusWidth >= rightRadius ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", {
      id: 'hide-in-right' + index,
      x: rightXAfterMid + rightBarBorderWidth / 2 + rightWidth - rightSurplusWidth,
      y: y,
      width: rightRadius,
      height: stepHeight - verticalMarginBetweenBars * 2
    }), /*#__PURE__*/_react.default.createElement("use", {
      fill: ((_item$rightSurplusCol2 = item.rightSurplusColor) !== null && _item$rightSurplusCol2 !== void 0 ? _item$rightSurplusCol2 : rightSurplusColor).toString(),
      clipPath: "url(#cp-right".concat(index, ")"),
      href: '#hide-in-right' + index
    })) : null) : null);
  }), showMidAxis ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("line", _extends({}, midAxisLineCommonProps, {
    stroke: ((_ref8 = (_props$midAxisLeftCol = props.midAxisLeftColor) !== null && _props$midAxisLeftCol !== void 0 ? _props$midAxisLeftCol : props.midAxisColor) !== null && _ref8 !== void 0 ? _ref8 : yAxisColor).toString(),
    x1: leftXAfterMid,
    x2: leftXAfterMid,
    strokeDasharray: midAxisStrokeDashArray
  })), /*#__PURE__*/_react.default.createElement("line", _extends({}, midAxisLineCommonProps, {
    stroke: ((_ref9 = (_props$midAxisRightCo = props.midAxisRightColor) !== null && _props$midAxisRightCo !== void 0 ? _props$midAxisRightCo : props.midAxisColor) !== null && _ref9 !== void 0 ? _ref9 : yAxisColor).toString(),
    x1: rightXAfterMid,
    x2: rightXAfterMid,
    strokeDasharray: midAxisStrokeDashArray
  })), data.map((item, index) => {
    var _item$midAxisLabelCol, _item$midAxisLabelFon, _item$midAxisLabelFon2, _item$midAxisLabelFon3, _item$midAxisLabelFon4, _item$midAxisLabel;
    const y = stepHeight * (index + 0.5);
    return /*#__PURE__*/_react.default.createElement("text", {
      key: 'ml' + index,
      x: mid,
      y: y + midAxisLabelFontSize / 2,
      stroke: ((_item$midAxisLabelCol = item.midAxisLabelColor) !== null && _item$midAxisLabelCol !== void 0 ? _item$midAxisLabelCol : midAxisLabelColor).toString(),
      fontSize: (_item$midAxisLabelFon = item.midAxisLabelFontSize) !== null && _item$midAxisLabelFon !== void 0 ? _item$midAxisLabelFon : midAxisLabelFontSize,
      fontStyle: (_item$midAxisLabelFon2 = item.midAxisLabelFontStyle) !== null && _item$midAxisLabelFon2 !== void 0 ? _item$midAxisLabelFon2 : midAxisLabelFontStyle,
      fontWeight: (_item$midAxisLabelFon3 = item.midAxisLabelFontWeight) !== null && _item$midAxisLabelFon3 !== void 0 ? _item$midAxisLabelFon3 : midAxisLabelFontWeight,
      fontFamily: (_item$midAxisLabelFon4 = item.midAxisLabelFontFamily) !== null && _item$midAxisLabelFon4 !== void 0 ? _item$midAxisLabelFon4 : midAxisLabelFontFamily,
      textAnchor: "middle"
    }, (_item$midAxisLabel = item.midAxisLabel) !== null && _item$midAxisLabel !== void 0 ? _item$midAxisLabel : '');
  })) : null));
};
exports.PopulationPyramid = PopulationPyramid;
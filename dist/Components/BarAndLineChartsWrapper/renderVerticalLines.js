"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _giftedChartsCore = require("gifted-charts-core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RenderVerticalLines = props => {
  const {
    verticalLinesAr,
    verticalLinesSpacing,
    spacing,
    initialSpacing,
    verticalLinesZIndex,
    verticalLinesHeight,
    verticalLinesThickness,
    verticalLinesColor,
    verticalLinesStrokeDashArray,
    verticalLinesShift,
    verticalLinesUptoDataPoint,
    xAxisThickness,
    labelsExtraHeight,
    containerHeight,
    data,
    stackData,
    barWidth,
    maxValue,
    chartType,
    containerHeightIncludingBelowXAxis,
    totalWidth,
    xAxisLabelsVerticalShift
  } = props;
  const getHeightOfVerticalLine = index => {
    if (verticalLinesUptoDataPoint) {
      if (index < data.length) {
        return data[index].value * containerHeight / maxValue - xAxisThickness;
      } else {
        return verticalLinesHeight !== null && verticalLinesHeight !== void 0 ? verticalLinesHeight : 0;
      }
    } else {
      return verticalLinesHeight || containerHeightIncludingBelowXAxis - xAxisThickness;
    }
  };
  const extendedContainerHeight = containerHeight + 10 + labelsExtraHeight;
  let totalSpacing = 0;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      height: containerHeightIncludingBelowXAxis,
      bottom: xAxisLabelsVerticalShift + 70,
      //(noOfSectionsBelowXAxis ? 22 : 30), //stepHeight * -0.5 + xAxisThickness,
      width: totalWidth,
      zIndex: verticalLinesZIndex || -1
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    height: containerHeightIncludingBelowXAxis,
    width: totalWidth
  }, verticalLinesAr.map((item, index) => {
    if (verticalLinesSpacing) {
      totalSpacing = verticalLinesSpacing * (index + 1);
    } else {
      totalSpacing += (data[index].barWidth || barWidth || 30) / 2;
      totalSpacing += index ? spacing : 0;
      totalSpacing += index ? (data[index - 1].barWidth || barWidth || 30) / 2 : 0;
    }
    const x = verticalLinesShift + 1 + (chartType === _giftedChartsCore.chartTypes.BAR ? totalSpacing - 1 : verticalLinesSpacing ? verticalLinesSpacing * (index + 1) : index * spacing + (initialSpacing - 2));
    return /*#__PURE__*/_react.default.createElement("line", {
      key: index,
      x1: x,
      y1: containerHeightIncludingBelowXAxis - getHeightOfVerticalLine(index) + 7,
      x2: x,
      y2: containerHeightIncludingBelowXAxis,
      stroke: verticalLinesColor || 'lightgray',
      strokeWidth: verticalLinesThickness || 2,
      strokeDasharray: verticalLinesStrokeDashArray !== null && verticalLinesStrokeDashArray !== void 0 ? verticalLinesStrokeDashArray : ''
    });
  })));
};
var _default = exports.default = RenderVerticalLines;
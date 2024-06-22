"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripAndLabel = void 0;
var _react = _interopRequireDefault(require("react"));
var _giftedChartsCore = require("gifted-charts-core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const StripAndLabel = props => {
  const {
    pointerX,
    pointerLabelWidth,
    pointerRadius,
    pointerWidth,
    pointerYLocal,
    pointerStripUptoDataPoint,
    pointerStripHeight,
    pointerItemLocal,
    showPointerStrip,
    pointerStripWidth,
    containerHeight,
    xAxisThickness,
    pointerStripColor,
    pointerConfig,
    pointerLabelComponent,
    secondaryPointerItem,
    pointerEvents,
    isBarChart
  } = props;
  const {
    top,
    left
  } = (0, _giftedChartsCore.getTopAndLeftForStripAndLabel)(props);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      left: pointerX + (pointerItemLocal[0].pointerShiftX || 0),
      top: pointerYLocal
    }
  }, (isBarChart ? showPointerStrip && !pointerLabelComponent : showPointerStrip) ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      left: (pointerRadius || pointerWidth) - pointerStripWidth / 4,
      top: pointerStripUptoDataPoint ? pointerRadius || pointerStripHeight / 2 : -pointerYLocal + 8,
      width: pointerStripWidth,
      height: pointerStripUptoDataPoint ? containerHeight - pointerYLocal + 5 - xAxisThickness : pointerStripHeight,
      marginTop: pointerStripUptoDataPoint ? 0 : containerHeight - pointerStripHeight
    }
  }, /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("line", {
    stroke: pointerStripColor,
    strokeWidth: pointerStripWidth,
    strokeDasharray: pointerConfig !== null && pointerConfig !== void 0 && pointerConfig.strokeDashArray ? pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.strokeDashArray : '',
    x1: 0,
    y1: 0,
    x2: 0,
    y2: pointerStripUptoDataPoint ? containerHeight - pointerYLocal + 5 - xAxisThickness : pointerStripHeight
  }))) : null, pointerLabelComponent ? /*#__PURE__*/_react.default.createElement("div", {
    // pointerEvents={pointerEvents ?? 'none'}
    style: {
      position: 'absolute',
      left: left,
      top: top,
      marginTop: pointerStripUptoDataPoint ? 0 : containerHeight - pointerStripHeight,
      width: pointerLabelWidth
    }
  }, pointerLabelComponent === null || pointerLabelComponent === void 0 ? void 0 : pointerLabelComponent(pointerItemLocal, secondaryPointerItem)) : null);
};
exports.StripAndLabel = StripAndLabel;
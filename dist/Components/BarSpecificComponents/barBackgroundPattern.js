"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BarBackgroundPattern = props => {
  const {
    barBackgroundPatternFromItem,
    barBackgroundPatternFromProps,
    patternIdFromItem,
    patternIdFromProps
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, barBackgroundPatternFromItem ? barBackgroundPatternFromItem() : barBackgroundPatternFromProps()), /*#__PURE__*/_react.default.createElement("rect", {
    stroke: "transparent",
    x: "1",
    y: "1",
    width: "100%",
    height: "100%",
    fill: "url(#".concat(patternIdFromItem !== null && patternIdFromItem !== void 0 ? patternIdFromItem : patternIdFromProps, ")")
  }));
};
var _default = exports.default = BarBackgroundPattern;
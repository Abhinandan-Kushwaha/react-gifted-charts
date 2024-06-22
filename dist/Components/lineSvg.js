"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _giftedChartsCore = require("gifted-charts-core");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule(props) {
  const {
    thickness,
    width,
    color,
    type,
    dashWidth,
    dashGap
  } = props.config;
  if (type === _giftedChartsCore.ruleTypes.SOLID) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      height: thickness,
      width: width
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "lightgray",
      stroke: color,
      strokeWidth: thickness
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 ".concat(thickness / 2, "h").concat(width)
    })));
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    height: thickness,
    width: width
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "lightgray",
    stroke: color,
    strokeWidth: thickness
  }, /*#__PURE__*/React.createElement("path", {
    strokeDasharray: "".concat(dashWidth, ",").concat(dashGap),
    d: "M0 ".concat(thickness / 2, "h").concat(width)
  })));
}
var _default = exports.default = Rule;
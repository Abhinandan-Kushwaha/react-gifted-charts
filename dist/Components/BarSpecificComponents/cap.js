"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _giftedChartsCore = require("gifted-charts-core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Cap = props => {
  var _ref, _ref2, _ref3, _ref4;
  const {
    capThicknessFromItem,
    capThicknessFromProps,
    capColorFromItem,
    capColorFromProps,
    capRadiusFromItem,
    capRadiusFromProps
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      width: '100%',
      height: (_ref = capThicknessFromItem !== null && capThicknessFromItem !== void 0 ? capThicknessFromItem : capThicknessFromProps) !== null && _ref !== void 0 ? _ref : _giftedChartsCore.BarDefaults.capThickness,
      backgroundColor: (_ref2 = capColorFromItem !== null && capColorFromItem !== void 0 ? capColorFromItem : capColorFromProps) !== null && _ref2 !== void 0 ? _ref2 : _giftedChartsCore.BarDefaults.capColor,
      borderTopLeftRadius: (_ref3 = capRadiusFromItem !== null && capRadiusFromItem !== void 0 ? capRadiusFromItem : capRadiusFromProps) !== null && _ref3 !== void 0 ? _ref3 : _giftedChartsCore.BarDefaults.capRadius,
      borderTopRightRadius: (_ref4 = capRadiusFromItem !== null && capRadiusFromItem !== void 0 ? capRadiusFromItem : capRadiusFromProps) !== null && _ref4 !== void 0 ? _ref4 : _giftedChartsCore.BarDefaults.capRadius
    }
  });
};
var _default = exports.default = Cap;
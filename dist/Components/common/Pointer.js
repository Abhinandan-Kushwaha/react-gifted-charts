"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pointer = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Pointer = props => {
  const {
    pointerX,
    pointerYLocal,
    pointerComponent,
    pointerHeight,
    pointerRadius,
    pointerWidth,
    pointerItemLocal,
    pointerColorLocal
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      left: pointerX + (pointerX.pointerShiftX || 0),
      top: pointerYLocal - 2
    }
  }, pointerComponent ? pointerComponent() : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: pointerHeight || pointerRadius * 2,
      width: pointerWidth || pointerRadius * 2,
      marginTop: (pointerItemLocal === null || pointerItemLocal === void 0 ? void 0 : pointerItemLocal.pointerShiftY) || 0,
      backgroundColor: pointerColorLocal,
      borderRadius: pointerRadius || 0
    }
  }));
};
exports.Pointer = Pointer;
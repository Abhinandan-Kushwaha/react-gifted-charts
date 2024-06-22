"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cap = _interopRequireDefault(require("../Components/BarSpecificComponents/cap"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// if (Platform.OS === 'android') {
//   UIManager.setLayoutAnimationEnabledExperimental &&
//     UIManager.setLayoutAnimationEnabledExperimental(true);
// }

const Animated2DWithGradient = props => {
  var _item$topLabelCompone;
  const {
    barBackgroundPattern,
    patternId,
    barWidth,
    barStyle,
    item,
    index,
    opacity,
    animationDuration,
    noGradient,
    noAnimation,
    containerHeight,
    maxValue,
    barMarginBottom,
    barInnerComponent,
    intactTopLabel,
    showValuesAsTopLabel,
    topLabelContainerStyle,
    topLabelTextStyle,
    commonStyleForBar,
    yTranslate,
    yAxisOffset
  } = props;
  const [height, setHeight] = (0, _react.useState)(noAnimation ? props.height : 0.2);
  // const [initialRender, setInitialRender] = useState(noAnimation ? false : true)

  (0, _react.useEffect)(() => {
    if (!noAnimation) {
      setHeight(props.height);
    }
  }, [props.height]);

  // useEffect(() => {
  //   if (!noAnimation) {
  //     if (initialRender) {
  //       setTimeout(() => layoutAppear(), 20);
  //     } else {
  //       elevate();
  //     }
  //   }
  // }, [props.height]);

  // const elevate = () => {
  //   LayoutAnimation.configureNext({
  //     duration: animationDuration,
  //     update: {type: 'linear', property: 'scaleXY'},
  //   });
  //   setHeight(props.height);
  // };

  // const layoutAppear = () => {
  //   LayoutAnimation.configureNext({
  //     duration: Platform.OS == 'ios' ? animationDuration : 20,
  //     create: {type: 'linear', property: 'opacity'},
  //     update: {type: 'linear', property: 'scaleXY'},
  //   });
  //   setInitialRender(false);
  //   setTimeout(() => elevate(), Platform.OS == 'ios' ? 10 : 100);
  // };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: ((_ref, _item$barWidth) => {
      let style = {
        position: 'absolute',
        bottom: 0,
        width: (_ref = (_item$barWidth = item.barWidth) !== null && _item$barWidth !== void 0 ? _item$barWidth : props.barWidth) !== null && _ref !== void 0 ? _ref : 30,
        overflow: 'hidden',
        transition: "height ".concat(animationDuration / 1000, "s"),
        height: (noAnimation ? Math.max(props.minHeight, Math.abs(height)) : height) - (barMarginBottom || 0)
      };
      if (item.value < 0) {
        style.transform = "rotate(180deg) translateY(".concat(-props.height, "px)");
      }
      if (noGradient) {
        style.backgroundColor = props.frontColor.toString();
      } else {
        var _item$frontColor, _props$frontColor;
        style.backgroundImage = "linear-gradient(".concat(item.gradientColor || props.gradientColor || 'white', ",").concat(((_item$frontColor = item.frontColor) === null || _item$frontColor === void 0 ? void 0 : _item$frontColor.toString()) || ((_props$frontColor = props.frontColor) === null || _props$frontColor === void 0 ? void 0 : _props$frontColor.toString()) || 'black', ")");
      }
      return style;
    })()
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: (() => {
      let style = {
        width: '100%',
        height: (noAnimation ? Math.max(props.minHeight, Math.abs(height)) : height) - (barMarginBottom || 0)
      };
      if (item.barStyle) {
        style = {
          ...style,
          ...item.barStyle
        };
      } else {
        style = {
          ...style,
          ...barStyle
        };
      }
      return style;
    })()
  }, /*#__PURE__*/_react.default.createElement("div", null, props.cappedBars && item.value ? /*#__PURE__*/_react.default.createElement(_cap.default, {
    capThicknessFromItem: item.capThickness,
    capThicknessFromProps: props.capThickness,
    capColorFromItem: item.capColor,
    capColorFromProps: props.capColor,
    capRadiusFromItem: item.capRadius,
    capRadiusFromProps: props.capRadius
  }) : null), (item.barBackgroundPattern || barBackgroundPattern) && /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, item.barBackgroundPattern ? item.barBackgroundPattern() : barBackgroundPattern === null || barBackgroundPattern === void 0 ? void 0 : barBackgroundPattern()), /*#__PURE__*/_react.default.createElement("rect", {
    stroke: "transparent",
    x: "1",
    y: "1",
    width: item.barWidth || props.barWidth || 30,
    height: noAnimation ? Math.abs(height) : height,
    fill: "url(#".concat(item.patternId || patternId, ")")
  })), barInnerComponent ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      width: '100%'
    }
  }, barInnerComponent(item, index)) : null)), item.topLabelComponent || showValuesAsTopLabel ? /*#__PURE__*/_react.default.createElement("div", {
    style: (() => {
      let style = {
        position: 'absolute',
        top: -30 - height,
        height: 30,
        width: item.barWidth || barWidth || 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: opacity
      };
      if (item.value < 0) {
        style.transform = "translateY(".concat(height * 2 + 30, "px)");
      }
      if (props.horizontal && !intactTopLabel) {
        style.transform = "rotate(270deg)";
      }
      if (topLabelContainerStyle) {
        style = {
          ...style,
          ...topLabelContainerStyle
        };
      } else {
        style = {
          ...style,
          ...item.topLabelContainerStyle
        };
      }
      return style;
    })()
  }, showValuesAsTopLabel ? /*#__PURE__*/_react.default.createElement("div", {
    style: topLabelTextStyle
  }, item.value + yAxisOffset) : (_item$topLabelCompone = item.topLabelComponent) === null || _item$topLabelCompone === void 0 ? void 0 : _item$topLabelCompone.call(item)) : null);
};
var _default = exports.default = Animated2DWithGradient;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _giftedChartsCore = require("gifted-charts-core");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TriangleCorner = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      ...triangleStyles.triangleCorner,
      ...props.style,
      borderRightWidth: props.width / 2,
      borderTopWidth: props.width / 2,
      borderTopColor: props.color
    }
  });
};
const triangleStyles = {
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRightColor: 'transparent',
    transform: [{
      rotate: '90deg'
    }]
  }
};
const AnimatedThreeDBar = props => {
  var _item$topLabelCompone, _item$topLabelCompone2;
  const [height, setHeight] = (0, _react.useState)(props.isAnimated ? 0 : props.height);
  const {
    isAnimated,
    animationDuration,
    item,
    index,
    barWidth,
    sideWidth,
    barStyle,
    barBackgroundPattern,
    barInnerComponent,
    patternId,
    intactTopLabel,
    showValuesAsTopLabel,
    topLabelContainerStyle,
    topLabelTextStyle,
    containerHeight
  } = props;
  const {
    showGradient,
    gradientColor,
    frontColor,
    sideColor,
    topColor,
    opacity,
    initialRender,
    setInitialRender
  } = (0, _giftedChartsCore.useAnimatedThreeDBar)(props);

  //   useEffect(() => {
  //     if (isAnimated) {
  //       if (initialRender) {
  //         setTimeout(() => {
  //           layoutAppear();
  //         }, 20);
  //       } else {
  //         elevate();
  //       }
  //     }
  //   }, [props.height]);

  //   const elevate = () => {
  //     LayoutAnimation.configureNext({
  //       duration: animationDuration,
  //       update: {type: 'linear', property: 'scaleY'},
  //     });
  //     setHeight(props.height);
  //   };

  //   const layoutAppear = () => {
  //     LayoutAnimation.configureNext({
  //       duration: Platform.OS == 'ios' ? animationDuration : 20,
  //       create: {type: 'linear', property: 'scaleY'},
  //       // update: { type: 'linear' }
  //     });
  //     setInitialRender(false);
  //     setTimeout(() => elevate(), Platform.OS == 'ios' ? 10 : 100);
  //   };

  const [isAnimating, setIsAnimating] = (0, _react.useState)(isAnimated);
  (0, _react.useEffect)(() => {
    if (isAnimated) {
      setTimeout(() => setHeight(props.height), 20);
      setTimeout(() => setIsAnimating(false), animationDuration - 50);
    }
  }, [props.height]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      ..._styles.styles.container
      // transform:`rotate(180deg) translateY(-200px)`
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      ..._styles.styles.row,
      opacity: opacity,
      position: 'absolute',
      overflow: isAnimating ? 'hidden' : ((_item$topLabelCompone = item.topLabelComponent) !== null && _item$topLabelCompone !== void 0 ? _item$topLabelCompone : showValuesAsTopLabel) ? 'visible' : 'hidden',
      height: height + sideWidth / 2,
      transition: isAnimated ? "height ".concat(animationDuration / 1000, "s") : "",
      bottom: 0,
      transform: "".concat(props.side === 'right' ? 'rotateY(180deg)' : '', " translateY(").concat(containerHeight * 1.05 + 28 - props.height, "px)")
    }
  }, props.height ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: sideWidth / 2
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: sideWidth / -2
    }
  }, /*#__PURE__*/_react.default.createElement(TriangleCorner, {
    color: topColor,
    width: sideWidth,
    style: {
      transform: "rotate(90deg)",
      opacity: opacity
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: sideWidth / -2,
      zIndex: -1
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: barWidth,
      height: barWidth * 0.4,
      // left: barWidth / 2,
      backgroundColor: topColor.toString(),
      opacity: opacity
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: sideWidth / -2,
      left: barWidth
    }
  }, /*#__PURE__*/_react.default.createElement(TriangleCorner, {
    color: topColor,
    width: sideWidth,
    style: {
      transform: "rotate(-90deg)",
      opacity: opacity
    }
  }))) : null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(TriangleCorner, {
    color: height ? sideColor : 'transparent',
    width: sideWidth,
    style: {
      transform: "rotate(-90deg)",
      opacity: opacity
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: sideWidth / 2,
      height: height - sideWidth / 2,
      //animatedSideHeight
      backgroundColor: sideColor.toString(),
      opacity: opacity
    }
  }), /*#__PURE__*/_react.default.createElement(TriangleCorner, {
    color: height ? sideColor : 'transparent',
    width: sideWidth,
    style: {
      transform: "rotate(90deg)",
      opacity: opacity
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: barWidth,
      height: height,
      //animatedHeight
      backgroundColor: frontColor.toString(),
      backgroundImage: showGradient ? "linear-gradient(".concat(gradientColor, ",").concat(frontColor.toString(), ")") : "",
      borderLeftWidth: 0.5,
      borderTopWidth: 0.5,
      borderColor: 'white',
      opacity: opacity,
      marginTop: sideWidth / 2,
      ...(item.barStyle || barStyle)
    }
  }, barBackgroundPattern && /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, barBackgroundPattern()), /*#__PURE__*/_react.default.createElement("rect", {
    stroke: "transparent",
    x: "1",
    y: "1",
    width: barWidth || 30,
    height: height,
    fill: "url(#".concat(patternId, ")")
  })), barInnerComponent ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      width: '100%'
    }
  }, barInnerComponent(item, index)) : null), (item.topLabelComponent || showValuesAsTopLabel) && /*#__PURE__*/_react.default.createElement("div", {
    style: (() => {
      let style = {
        position: 'absolute',
        top: -30,
        height: 30,
        width: barWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: opacity
      };
      if (props.horizontal && !intactTopLabel) {
        style.transform = "rotate(270deg)";
      }
      if (props.side === 'right') {
        style.transform = "rotateY(180deg)";
      }
      if (topLabelContainerStyle) {
        style = {
          ...style,
          ...item.topLabelContainerStyle
        };
      }
      return style;
    })()
  }, showValuesAsTopLabel ? /*#__PURE__*/_react.default.createElement("div", {
    style: topLabelTextStyle
  }, item.value) : (_item$topLabelCompone2 = item.topLabelComponent) === null || _item$topLabelCompone2 === void 0 ? void 0 : _item$topLabelCompone2.call(item))));
};
var _default = exports.default = AnimatedThreeDBar;
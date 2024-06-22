"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _giftedChartsCore = require("gifted-charts-core");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const RenderStackBars = props => {
  var _item$spacing, _stackData$spacing, _stackData, _ref9, _item$leftShiftForToo;
  const {
    barBackgroundPattern,
    patternId,
    item,
    index,
    containerHeight,
    spacing,
    rotateLabel,
    label,
    labelTextStyle,
    xAxisTextNumberOfLines,
    xAxisLabelsVerticalShift,
    renderTooltip,
    leftShiftForTooltip,
    leftShiftForLastIndexTooltip,
    selectedIndex,
    setSelectedIndex,
    activeOpacity,
    stackData,
    animationDuration = _giftedChartsCore.BarDefaults.animationDuration,
    barBorderWidth,
    barBorderColor,
    stackBorderRadius,
    stackBorderTopLeftRadius,
    stackBorderTopRightRadius,
    stackBorderBottomLeftRadius,
    stackBorderBottomRightRadius,
    showValuesAsTopLabel
  } = props;
  const {
    cotainsNegative,
    noAnimation,
    localBarInnerComponent,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    leftSpacing,
    disablePress,
    totalHeight,
    height,
    setHeight,
    getBarHeight,
    getPosition,
    lowestBarPosition,
    getStackBorderRadii
  } = (0, _giftedChartsCore.useRenderStackBars)(props);
  const prevAndCurrentSpacing = ((_item$spacing = item.spacing) !== null && _item$spacing !== void 0 ? _item$spacing : spacing) + ((_stackData$spacing = (_stackData = stackData[index - 1]) === null || _stackData === void 0 ? void 0 : _stackData.spacing) !== null && _stackData$spacing !== void 0 ? _stackData$spacing : spacing);
  const labelWidth = (item.stacks[0].barWidth || props.barWidth || 30) + prevAndCurrentSpacing / 2;
  const renderLabel = (label, labelTextStyle) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: (() => {
        const style = {
          width: labelWidth,
          marginLeft: prevAndCurrentSpacing / -4 + (rotateLabel ? labelWidth / 6 : 0),
          position: 'absolute',
          left: leftSpacing,
          bottom: (rotateLabel ? labelWidth / -2 + 18 : 6) + 40
        };
        if (rotateLabel) {
          if (props.horizontal) {
            style.transform = "rotate(330deg)";
          } else {
            style.transform = "rotate(60deg)";
          }
        } else if (props.horizontal) {
          style.transform = "rotate(-90deg)";
        }
        return style;
      })()
    }, item.labelComponent ? item.labelComponent() : /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: rotateLabel ? 'left' : 'center',
        ...labelTextStyle
      }
      // numberOfLines={xAxisTextNumberOfLines}
    }, label || ''));
  };

  // useEffect(() => {
  //   if (!noAnimation) {
  //     layoutAppear();
  //   }
  // }, [totalHeight]);

  // const elevate = () => {
  //   LayoutAnimation.configureNext({
  //     duration: animationDuration,
  //     update: {type: 'linear', property: 'scaleXY'},
  //   });
  //   setHeight(totalHeight);
  // };

  // const layoutAppear = () => {
  //   LayoutAnimation.configureNext({
  //     duration: Platform.OS == 'ios' ? animationDuration : 20,
  //     create: {type: 'linear', property: 'opacity'},
  //     update: {type: 'linear', property: 'scaleXY'},
  //   });
  //   setTimeout(() => elevate(), Platform.OS == 'ios' ? 10 : 100);
  // };

  const static2DSimple = () => {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _item$topLabelCompone;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      // disabled={disablePress}
      // activeOpacity={activeOpacity}
      onClick: () => {
        setSelectedIndex(index);
        if (item.onPress) {
          item.onPress();
        } else if (props.onPress) {
          props.onPress(item, index);
        }
      }
      // onLongPress={() => {
      //   if (item.onLongPress) {
      //     item.onLongPress();
      //   } else if (props.onLongPress) {
      //     props.onLongPress(item, index);
      //   }
      // }}
      // onPressOut={() => {
      //   if (item.onPressOut) {
      //     item.onPressOut();
      //   } else if (props.onPressOut) {
      //     props.onPressOut(item, index);
      //   }
      // }}
      ,
      style: {
        position: 'relative',
        top: (containerHeight !== null && containerHeight !== void 0 ? containerHeight : 200) * 1.05 - totalHeight + 28,
        width: item.stacks[0].barWidth || props.barWidth || 30,
        height: '100%',
        borderTopLeftRadius: (_ref = (_ref2 = borderTopLeftRadius !== null && borderTopLeftRadius !== void 0 ? borderTopLeftRadius : borderRadius) !== null && _ref2 !== void 0 ? _ref2 : stackBorderTopLeftRadius) !== null && _ref !== void 0 ? _ref : stackBorderRadius,
        borderTopRightRadius: (_ref3 = (_ref4 = borderTopRightRadius !== null && borderTopRightRadius !== void 0 ? borderTopRightRadius : borderRadius) !== null && _ref4 !== void 0 ? _ref4 : stackBorderTopRightRadius) !== null && _ref3 !== void 0 ? _ref3 : stackBorderRadius,
        borderBottomLeftRadius: (_ref5 = (_ref6 = borderBottomLeftRadius !== null && borderBottomLeftRadius !== void 0 ? borderBottomLeftRadius : borderRadius) !== null && _ref6 !== void 0 ? _ref6 : stackBorderBottomLeftRadius) !== null && _ref5 !== void 0 ? _ref5 : stackBorderRadius,
        borderBottomRightRadius: (_ref7 = (_ref8 = borderBottomRightRadius !== null && borderBottomRightRadius !== void 0 ? borderBottomRightRadius : borderRadius) !== null && _ref8 !== void 0 ? _ref8 : stackBorderBottomRightRadius) !== null && _ref7 !== void 0 ? _ref7 : stackBorderRadius,
        overflow: lowestBarPosition ? 'visible' : 'hidden'
      }
    }, item.stacks.map((stackItem, index) => {
      const borderRadii = getStackBorderRadii(item, index);
      const barHeight = getBarHeight(stackItem.value, stackItem.marginBottom);
      return /*#__PURE__*/_react.default.createElement("div", {
        key: index
        // onClick={stackItem.onPress}
        // activeOpacity={activeOpacity}
        // disabled={disablePress || !stackItem.onPress}
        ,
        style: {
          position: 'absolute',
          bottom: getPosition(index) + (stackItem.marginBottom || 0),
          width: '100%',
          height: barHeight,
          backgroundColor: (stackItem.color || item.color || props.color || 'black').toString(),
          backgroundImage: props.showGradient ? "linear-gradient(".concat(stackItem.gradientColor || item.gradientColor || props.gradientColor || 'white', ",").concat((stackItem.color || item.color || props.color || 'black').toString(), ")") : "",
          borderWidth: barBorderWidth !== null && barBorderWidth !== void 0 ? barBorderWidth : 0,
          borderColor: barBorderColor.toString(),
          ...borderRadii
        }
      }, stackItem.innerBarComponent && stackItem.innerBarComponent());
    }), (item.barBackgroundPattern || barBackgroundPattern) && /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, item.barBackgroundPattern ? item.barBackgroundPattern() : barBackgroundPattern === null || barBackgroundPattern === void 0 ? void 0 : barBackgroundPattern()), /*#__PURE__*/_react.default.createElement("rect", {
      stroke: "transparent",
      x: "1",
      y: "1",
      width: "100%",
      height: "100%",
      fill: "url(#".concat(item.patternId || patternId, ")")
    }))), localBarInnerComponent ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '100%',
        width: '100%'
      }
    }, localBarInnerComponent(item, index)) : null, (item.topLabelComponent || showValuesAsTopLabel) && /*#__PURE__*/_react.default.createElement("div", {
      style: (() => {
        const style = {
          position: 'absolute',
          height: 30,
          width: item.barWidth || props.barWidth || 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        };
        if (noAnimation) {
          style.bottom = totalHeight + 70;
        } else {
          style.top = (containerHeight !== null && containerHeight !== void 0 ? containerHeight : 200) - totalHeight + 14;
        }
        if (cotainsNegative) {
          style.transform = "translateY(".concat(totalHeight * 2, "px)");
        }
        if (props.horizontal && !props.intactTopLabel) {
          style.transform = "rotate(270deg)";
        }
        return {
          ...style,
          ...item.topLabelContainerStyle
        };
      })()
    }, showValuesAsTopLabel ? /*#__PURE__*/_react.default.createElement("div", {
      style: item.topLabelTextStyle
    }, item.stacks.reduce((acc, stack) => acc + stack.value, 0)) : (_item$topLabelCompone = item.topLabelComponent) === null || _item$topLabelCompone === void 0 ? void 0 : _item$topLabelCompone.call(item)));
  };
  (0, _react.useEffect)(() => {
    if (!noAnimation) {
      setTimeout(() => setHeight(totalHeight), 20);
    }
  }, []);
  const barWrapper = () => {
    return noAnimation ? static2DSimple() : /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        left: leftSpacing,
        bottom: (containerHeight !== null && containerHeight !== void 0 ? containerHeight : 200) - height + 113,
        height: height,
        transition: "height ".concat(animationDuration / 1000, "s")
        // overflow: 'hidden'
      }
    }, static2DSimple());
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    // pointerEvents={
    //   props.pointerConfig
    //     ? props.pointerConfig.pointerEvents ?? 'none'
    //     : 'auto'
    // }
    style: (() => {
      const style = {
        // overflow: 'hidden',
        // marginBottom: -60 + xAxisLabelsVerticalShift,
        width: item.stacks[0].barWidth || props.barWidth || 30,
        height: totalHeight,
        marginRight: spacing
      };
      if (props.pointerConfig) {
        style.transform = "translateY(".concat((containerHeight || 200) - totalHeight - 10 + xAxisLabelsVerticalShift, "px");
      }
      return style;
    })()
  }, (props.showXAxisIndices || item.showXAxisIndex) && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      zIndex: 2,
      position: 'absolute',
      height: props.xAxisIndicesHeight,
      width: props.xAxisIndicesWidth,
      bottom: props.xAxisIndicesHeight / -2,
      left: ((item.barWidth || props.barWidth || 30) - props.xAxisIndicesWidth) / 2,
      backgroundColor: props.xAxisIndicesColor.toString()
    }
  }), barWrapper(), renderLabel(label || '', labelTextStyle)), renderTooltip && selectedIndex === index && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      bottom: totalHeight + 60,
      left: index === stackData.length - 1 ? leftSpacing - leftShiftForLastIndexTooltip : leftSpacing - ((_ref9 = (_item$leftShiftForToo = item.leftShiftForTooltip) !== null && _item$leftShiftForToo !== void 0 ? _item$leftShiftForToo : leftShiftForTooltip) !== null && _ref9 !== void 0 ? _ref9 : 0),
      zIndex: 1000
    }
  }, renderTooltip(item, index)));
};
var _default = exports.default = RenderStackBars;
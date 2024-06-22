"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BarChart = void 0;
var _react = _interopRequireWildcard(require("react"));
var _RenderBars = _interopRequireDefault(require("./RenderBars"));
var _RenderStackBars = _interopRequireDefault(require("./RenderStackBars"));
var _BarAndLineChartsWrapper = _interopRequireDefault(require("../Components/BarAndLineChartsWrapper"));
var _giftedChartsCore = require("gifted-charts-core");
var _StripAndLabel = require("../Components/common/StripAndLabel");
var _Pointer = require("../Components/common/Pointer");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BarChart = props => {
  var _props$scrollRef, _props$parentWidth;
  // const heightValue = useMemo(() => new Animated.Value(0), []);
  // const opacValue = useMemo(() => new Animated.Value(0), []);
  // const widthValue = useMemo(() => new Animated.Value(0), []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollRef = (_props$scrollRef = props.scrollRef) !== null && _props$scrollRef !== void 0 ? _props$scrollRef : (0, _react.useRef)(null);
  const scrollToBarRef = (0, _react.useRef)(null);
  const remainingScrollViewProps = {
    onScroll: ev => {
      var _props$onScroll;
      return (_props$onScroll = props.onScroll) === null || _props$onScroll === void 0 ? void 0 : _props$onScroll.call(props, ev);
    },
    onTouchStart: evt => {
      if (props.renderTooltip) {
        setSelectedIndex(-1);
      }
    }
  };
  const {
    lineConfig,
    hidePointer1,
    pointerItem,
    pointerY,
    pointerConfig,
    pointerColor,
    pointerX,
    pointerComponent,
    pointerHeight,
    pointerRadius,
    pointerWidth,
    autoAdjustPointerLabelPosition,
    pointerLabelWidth,
    activatePointersOnLongPress,
    yAxisLabelWidth,
    shiftPointerLabelX,
    pointerLabelHeight,
    pointerStripUptoDataPoint,
    pointerStripHeight,
    shiftPointerLabelY,
    showPointerStrip,
    pointerStripWidth,
    containerHeight,
    xAxisThickness,
    pointerStripColor,
    pointerEvents,
    setResponderStartTime,
    setPointerY,
    setPointerItem,
    initialSpacing,
    spacing,
    data,
    barWidth,
    setPointerX,
    setPointerIndex,
    maxValue,
    maxItem,
    responderStartTime,
    setResponderActive,
    activatePointersDelay,
    persistPointer,
    pointerVanishDelay,
    containerHeightIncludingBelowXAxis,
    extendedContainerHeight,
    totalWidth: totalWidthPre,
    endSpacing,
    stripBehindBars,
    noOfSections,
    noOfSectionsBelowXAxis,
    stepHeight,
    xAxisLabelsVerticalShift,
    labelsExtraHeight,
    stripOverPointer,
    pointerLabelComponent,
    setSelectedIndex,
    isAnimated,
    animationDuration,
    side,
    labelWidth,
    isThreeD,
    animatedHeight,
    appearingOpacity,
    autoShiftLabels,
    getPropsCommonForBarAndStack,
    barAndLineChartsWrapperProps,
    yAxisExtraHeightAtTop
  } = (0, _giftedChartsCore.useBarChart)({
    ...props,
    parentWidth: (_props$parentWidth = props.parentWidth) !== null && _props$parentWidth !== void 0 ? _props$parentWidth : window.innerWidth
  });
  (0, _react.useEffect)(() => {
    if (props.scrollToEnd || props.scrollToIndex) if (scrollToBarRef !== null && scrollToBarRef !== void 0 && scrollToBarRef.current) {
      scrollToBarRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);

  // const labelsAppear = useCallback(() => {
  //   opacValue.setValue(0);
  //   Animated.timing(opacValue, {
  //     toValue: 1,
  //     duration: 500,
  //     easing: Easing.ease,
  //     useNativeDriver: false,
  //   }).start();
  // }, [opacValue]);

  // const decreaseWidth = useCallback(() => {
  //   widthValue.setValue(0);
  //   Animated.timing(widthValue, {
  //     toValue: 1,
  //     duration: lineConfig.animationDuration,
  //     easing: Easing.linear,
  //     useNativeDriver: false,
  //   }).start();
  // }, [lineConfig.animationDuration, widthValue]);

  // useEffect(() => {
  //   if (lineConfig.isAnimated) {
  //     setTimeout(() => decreaseWidth(), lineConfig.delay || 0);
  //   }
  //   setTimeout(() => labelsAppear(), animationDuration);
  // }, [decreaseWidth, labelsAppear, animationDuration]);

  const renderPointer = lineNumber => {
    if (lineNumber === 1 && hidePointer1) return;
    const pointerItemLocal = pointerItem;
    const pointerYLocal = pointerY;
    const pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer1Color) || pointerColor;
    return (0, _Pointer.Pointer)({
      pointerX,
      pointerYLocal,
      pointerComponent,
      pointerHeight,
      pointerRadius,
      pointerWidth,
      pointerItemLocal,
      pointerColorLocal
    });
  };
  const renderStripAndLabel = pointerLabelComponent => {
    let pointerItemLocal,
      pointerYLocal = pointerY;
    pointerItemLocal = [pointerItem];
    return (0, _StripAndLabel.StripAndLabel)({
      autoAdjustPointerLabelPosition,
      pointerX,
      pointerLabelWidth,
      activatePointersOnLongPress,
      yAxisLabelWidth,
      pointerRadius,
      pointerWidth,
      shiftPointerLabelX,
      pointerLabelHeight,
      pointerYLocal,
      pointerStripUptoDataPoint,
      pointerStripHeight,
      shiftPointerLabelY,
      pointerItemLocal,
      showPointerStrip,
      pointerStripWidth,
      containerHeight,
      xAxisThickness,
      pointerStripColor,
      pointerConfig,
      pointerLabelComponent,
      scrollX: 0,
      pointerEvents,
      isBarChart: true
    });
  };
  const totalWidth = totalWidthPre - 200;
  const yTranslate = (containerHeight !== null && containerHeight !== void 0 ? containerHeight : 200) + 28 + yAxisExtraHeightAtTop;
  const renderChartContent = () => {
    if (pointerConfig) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: 'absolute',
          height: containerHeightIncludingBelowXAxis,
          bottom: 58,
          paddingLeft: initialSpacing,
          width: totalWidth,
          display: 'flex'
        }
      }, pointerX > 0 && stripBehindBars ? /*#__PURE__*/_react.default.createElement("div", {
        // pointerEvents={pointerEvents ?? 'none'}
        style: {
          position: 'absolute',
          height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
          bottom: xAxisLabelsVerticalShift + labelsExtraHeight,
          width: totalWidth
        }
      }, renderStripAndLabel(null)) : null, renderChart(), pointerX > 0 ? /*#__PURE__*/_react.default.createElement("div", {
        // pointerEvents={pointerEvents ?? 'none'}
        style: {
          position: 'absolute',
          height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
          bottom: xAxisLabelsVerticalShift + labelsExtraHeight,
          width: totalWidth,
          zIndex: 20
        }
      }, !stripOverPointer && !stripBehindBars && renderStripAndLabel(null), renderPointer(1), stripOverPointer && !stripBehindBars && renderStripAndLabel(null), pointerLabelComponent && renderStripAndLabel(pointerLabelComponent) // no matter what, pointerLabelComponent will be rendered at last -> over the chart content
      ) : null);
    } else {
      return renderChart();
    }
  };
  const renderChart = () => {
    if (props.stackData) {
      return props.stackData.map((item, index) => {
        return /*#__PURE__*/_react.default.createElement(_RenderStackBars.default, _extends({
          stackData: props.stackData || [],
          isAnimated: isAnimated,
          animationDuration: animationDuration,
          stackBorderRadius: props.stackBorderRadius,
          stackBorderTopLeftRadius: props.stackBorderTopLeftRadius,
          stackBorderTopRightRadius: props.stackBorderTopRightRadius,
          stackBorderBottomLeftRadius: props.stackBorderBottomLeftRadius,
          stackBorderBottomRightRadius: props.stackBorderBottomRightRadius
          // yTranslate={yTranslate}
        }, getPropsCommonForBarAndStack(item, index)));
      });
    } else {
      return data.map((item, index) => {
        var _props$minHeight;
        return /*#__PURE__*/_react.default.createElement(_RenderBars.default, _extends({
          data: data,
          side: side,
          minHeight: (_props$minHeight = props.minHeight) !== null && _props$minHeight !== void 0 ? _props$minHeight : isAnimated && !isThreeD ? 0.1 : 0,
          sideWidth: props.sideWidth,
          labelWidth: labelWidth,
          isThreeD: isThreeD,
          isAnimated: isAnimated,
          animationDuration: animationDuration,
          animatedHeight: animatedHeight,
          appearingOpacity: appearingOpacity,
          roundedTop: props.roundedTop,
          roundedBottom: props.roundedBottom,
          frontColor: props.frontColor,
          sideColor: props.sideColor,
          topColor: props.topColor,
          cappedBars: props.cappedBars,
          capThickness: props.capThickness,
          capColor: props.capColor,
          capRadius: props.capRadius,
          autoShiftLabels: autoShiftLabels,
          barMarginBottom: props.barMarginBottom,
          barStyle: props.barStyle,
          yTranslate: yTranslate,
          scrollToBarRef: scrollToBarRef,
          scrollToIndex: props.scrollToIndex,
          stepHeight: stepHeight
        }, getPropsCommonForBarAndStack(item, index)));
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_BarAndLineChartsWrapper.default, _extends({}, barAndLineChartsWrapperProps, {
    scrollRef: scrollRef,
    renderChartContent: renderChartContent,
    remainingScrollViewProps: remainingScrollViewProps
  }));
};
exports.BarChart = BarChart;
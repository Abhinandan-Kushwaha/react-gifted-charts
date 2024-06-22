"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _renderHorizSections = require("./renderHorizSections");
var _renderVerticalLines = _interopRequireDefault(require("./renderVerticalLines"));
var _giftedChartsCore = require("gifted-charts-core");
require("./styles.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BarAndLineChartsWrapper = props => {
  const {
    chartType,
    containerHeight,
    noOfSectionsBelowXAxis,
    stepHeight,
    labelsExtraHeight,
    yAxisLabelWidth,
    horizontal,
    scrollRef,
    initialSpacing,
    data,
    barWidth,
    xAxisThickness,
    totalWidth,
    disableScroll,
    showScrollIndicator,
    scrollToEnd,
    scrollToIndex,
    scrollAnimation,
    indicatorColor,
    spacing,
    showLine,
    points2,
    renderChartContent,
    remainingScrollViewProps,
    endSpacing,
    hideAxesAndRules,
    showXAxisIndices,
    xAxisIndicesHeight,
    xAxisIndicesWidth,
    xAxisIndicesColor,
    pointerConfig,
    getPointerProps,
    pointerIndex,
    pointerX,
    pointerY,
    onEndReached,
    onStartReached
  } = props;
  const {
    containerHeightIncludingBelowXAxis,
    xAxisLabelsVerticalShift,
    trimYAxisAtTop,
    yAxisExtraHeight,
    overflowTop,
    xAxisLabelsHeight,
    xAxisTextNumberOfLines,
    actualContainerWidth,
    transformForHorizontalForReactJS,
    horizSectionProps,
    referenceLinesOverChartContent,
    setCanMomentum,
    isCloseToStart,
    isCloseToEnd,
    canMomentum,
    yAxisAtTop,
    yAxisThickness,
    yAxisSide,
    showVerticalLines,
    verticalLinesProps,
    lineInBarChartProps,
    lineInBarChartProps2
  } = (0, _giftedChartsCore.useBarAndLineChartsWrapper)({
    ...props,
    isRTL: false
  });
  (0, _react.useEffect)(() => {
    if (pointerConfig && getPointerProps) {
      getPointerProps({
        pointerIndex,
        pointerX,
        pointerY
      });
    }
  }, [pointerIndex, pointerX, pointerY]);

  /*******************************************************************************************************************************************/
  /*******************************************************************************************************************************************/

  let container = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    height: containerHeightIncludingBelowXAxis + labelsExtraHeight + xAxisLabelsVerticalShift + (trimYAxisAtTop ? 0 : yAxisExtraHeight) + 20 - overflowTop,
    marginTop: trimYAxisAtTop ? containerHeight / 20 : 0,
    marginBottom: (xAxisLabelsHeight !== null && xAxisLabelsHeight !== void 0 ? xAxisLabelsHeight : xAxisTextNumberOfLines * 18) - 20 //This is to not let the Things that should be rendered below the chart overlap with it
  };
  if (horizontal) {
    container = {
      ...container,
      width: actualContainerWidth,
      transform: transformForHorizontalForReactJS
    };
  }

  // return <div>Hello</div>

  return /*#__PURE__*/_react.default.createElement("div", {
    style: container
  }, hideAxesAndRules !== true ? (0, _renderHorizSections.renderHorizSections)({
    ...horizSectionProps,
    onlyReferenceLines: false,
    renderReferenceLines: !referenceLinesOverChartContent,
    chartType
  }) : null, /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: scrollRef,
    style: ((_ref, _data$barWidth, _data) => {
      let style = {
        height: Number(container.height) + 68,
        // added this to disable vertical scroll
        display: 'flex',
        width: '100%',
        overflowX: disableScroll ? 'hidden' : 'scroll',
        marginLeft: horizontal && !yAxisAtTop ? -yAxisThickness - (props.width ? 20 : 0) - ((_ref = (_data$barWidth = (_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.barWidth) !== null && _data$barWidth !== void 0 ? _data$barWidth : barWidth) !== null && _ref !== void 0 ? _ref : 0) / 2 : yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? 0 : yAxisLabelWidth + yAxisThickness,
        paddingLeft: initialSpacing,
        position: 'absolute',
        bottom: (chartType === _giftedChartsCore.chartTypes.LINE_BI_COLOR ? 0 : xAxisThickness) - 40
      };
      if (!!props.width) {
        style.width = props.width;
      }
      if (horizontal) {
        var _props$width;
        style.width = ((_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : totalWidth) + (props.width ? endSpacing : -20);
      }
      return style;
    })(),
    className: showScrollIndicator ? '' : 'hideScrollBar'
    // contentContainerStyle={(() => {
    //   let style = {
    //     height:
    //       containerHeightIncludingBelowXAxis +
    //       yAxisExtraHeight +
    //       labelsExtraHeight +
    //       (50 + xAxisLabelsVerticalShift),
    //     width: Math.max(
    //       props.width ?? 0,
    //       totalWidth - spacing + endSpacing
    //     ),
    //     paddingLeft: initialSpacing,
    //     paddingBottom:
    //       noOfSectionsBelowXAxis * stepHeight + labelsExtraHeight,
    //     alignItems: 'flex-end'
    //   }
    //   if (!props.width) {
    //     style.width = totalWidth
    //   }
    //   return style
    // })()}
    // scrollEnabled={!disableScroll}
    // showsHorizontalScrollIndicator={showScrollIndicator}
    // indicatorStyle={indicatorColor}
    // onContentSizeChange={() => {
    //   if (scrollRef.current && scrollToEnd) {
    //     scrollRef.current.scrollToEnd({ animated: scrollAnimation })
    //   } else if (scrollRef.current && scrollToIndex) {
    //     scrollRef.current.scrollTo({
    //       x:
    //         initialSpacing +
    //         ((barWidth ?? 0) + spacing) * scrollToIndex -
    //         spacing
    //     })
    //   }
    // }}
  }, remainingScrollViewProps), showVerticalLines ? /*#__PURE__*/_react.default.createElement(_renderVerticalLines.default, _extends({}, verticalLinesProps, {
    noOfSectionsBelowXAxis: noOfSectionsBelowXAxis
  })) : null,
  // Only For Line Charts-
  chartType === _giftedChartsCore.chartTypes.LINE && data.map((item, index) => {
    return showXAxisIndices || item.showXAxisIndex ? /*#__PURE__*/_react.default.createElement("div", {
      key: index + '' + item.value,
      style: {
        position: 'absolute',
        height: xAxisIndicesWidth,
        width: xAxisIndicesHeight,
        backgroundColor: xAxisIndicesColor.toString(),
        bottom: 68 - xAxisIndicesHeight / 2,
        left: initialSpacing * 2 + index * spacing - xAxisIndicesHeight
      }
    }) : null;
  }), renderChartContent()), referenceLinesOverChartContent ? (0, _renderHorizSections.renderHorizSections)({
    ...horizSectionProps,
    onlyReferenceLines: true,
    chartType
  }) : null);
};
var _default = exports.default = BarAndLineChartsWrapper;
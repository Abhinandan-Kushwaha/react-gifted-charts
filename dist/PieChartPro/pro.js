"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePiePro = void 0;
var _giftedChartsCore = require("gifted-charts-core");
const usePiePro = props => {
  var _props$endAngle, _props$animationDurat;
  const {
    data,
    isAnimated,
    donut,
    semiCircle,
    radius = 120,
    innerRadius = donut ? radius / 2.5 : 0,
    strokeWidth = 0,
    edgesRadius = 0,
    startAngle = 0,
    ring
  } = props;
  let endAngle = (_props$endAngle = props.endAngle) !== null && _props$endAngle !== void 0 ? _props$endAngle : startAngle + Math.PI * (semiCircle ? 1 : 2);
  const total = data.reduce((acc, item) => acc + (item === null || item === void 0 ? void 0 : item.value), 0);
  const animationDuration = (_props$animationDurat = props.animationDuration) !== null && _props$animationDurat !== void 0 ? _props$animationDurat : _giftedChartsCore.defaultAnimationDuration;
  const maxStrokeWidth = Math.max(...data.map(item => {
    var _item$strokeWidth;
    return (_item$strokeWidth = item.strokeWidth) !== null && _item$strokeWidth !== void 0 ? _item$strokeWidth : 0;
  }), strokeWidth);
  const heightFactor = semiCircle ? 1 : 2;
  const height = radius + maxStrokeWidth;
  const svgProps = {
    height: height * 2,
    width: height * 2,
    viewBox: "".concat(-maxStrokeWidth * 1.5, " ").concat(-maxStrokeWidth - (semiCircle ? height / 2 : 0), " ").concat(height * 2, " ").concat(height * 2)
  };

  //   let endAngleLocal = 0

  const addValues = index => {
    if (index < 0) return 0;
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      var _data$i;
      sum += (_data$i = data[i]) === null || _data$i === void 0 ? void 0 : _data$i.value;
    }
    return sum;
  };
  const labelsPosition = props.labelsPosition ? props.labelsPosition : donut || props.centerLabelComponent ? 'outward' : 'mid';
  const getCoordinates = (index, additionalValue, addInOnlyStart, addInOnlyEnd, totalParam) => {
    var _data$index;
    const addedValue = addValues(index - 1) + (addInOnlyEnd ? 0 : additionalValue !== null && additionalValue !== void 0 ? additionalValue : 0);
    let angle = addedValue / (totalParam !== null && totalParam !== void 0 ? totalParam : total) * endAngle + startAngle;
    const startInnerX = radius + Math.cos(angle) * innerRadius;
    const startInnerY = radius - Math.sin(angle) * innerRadius;
    const startOuterX = radius + Math.cos(angle) * radius;
    const startOuterY = radius - Math.sin(angle) * radius;
    const value = addValues(index - 1) + ((_data$index = data[index]) === null || _data$index === void 0 ? void 0 : _data$index.value) + (addInOnlyStart ? 0 : additionalValue !== null && additionalValue !== void 0 ? additionalValue : 0);
    angle = value / (totalParam !== null && totalParam !== void 0 ? totalParam : total) * endAngle + startAngle;
    const endOuterX = radius + Math.cos(angle) * radius;
    const endOuterY = radius - Math.sin(angle) * radius;
    const endInnerX = radius + Math.cos(angle) * innerRadius;
    const endInnerY = radius - Math.sin(angle) * innerRadius;
    return {
      startInnerX,
      startInnerY,
      startOuterX,
      startOuterY,
      endOuterX,
      endOuterY,
      endInnerX,
      endInnerY
    };
  };
  const getTextCoordinates = (index, labelPos) => {
    var _data$index2;
    const value = addValues(index - 1) + ((_data$index2 = data[index]) === null || _data$index2 === void 0 ? void 0 : _data$index2.value) / 2;
    const angle = value / total * endAngle + startAngle;
    const labelPosition = labelPos || labelsPosition;
    let x = radius + Math.cos(angle) * radius * (labelPosition === 'inward' ? 0.25 : labelPosition === 'mid' ? 0.5 : labelPosition === 'outward' ? 0.75 : 1);
    let y = radius - Math.sin(angle) * radius * (labelPosition === 'inward' ? 0.25 : labelPosition === 'mid' ? 0.5 : labelPosition === 'outward' ? 0.75 : 1);
    return {
      x,
      y
    };
  };
  var initial = '';
  const getInitial = item => {
    if (item.isStartEdgeCurved || item.startEdgeRadius) {
      const {
        startInnerX,
        startInnerY,
        startOuterX,
        startOuterY
      } = getCoordinates(0, (radius - innerRadius) / (radius / 20));
      return "M".concat(startInnerX, ",").concat(startInnerY, " L").concat(startOuterX, ",").concat(startOuterY, " ");
    }
    return ring ? "M".concat(radius * 2, ",").concat(radius) : "M".concat(radius + innerRadius, ",").concat(radius, " h").concat(radius - innerRadius, " ");
  };
  const getPath = (index, totalParam) => {
    var _data$index3, _props$strokeWidth;
    const {
      endOuterX,
      endOuterY
    } = getCoordinates(index, 0, false, false, totalParam);
    const isLargeArc = semiCircle ? 0 : ((_data$index3 = data[index]) === null || _data$index3 === void 0 ? void 0 : _data$index3.value) / (totalParam !== null && totalParam !== void 0 ? totalParam : total) > 0.5 ? 1 : 0;
    const arc = "A".concat(radius + ((_props$strokeWidth = props.strokeWidth) !== null && _props$strokeWidth !== void 0 ? _props$strokeWidth : 0) / 2, ",").concat(radius, " 0 ").concat(isLargeArc, " 0 ");
    let path = "".concat(arc, " ").concat(endOuterX, ", ").concat(endOuterY, " ");
    if (!ring) {
      path += "L".concat(radius, ",").concat(radius, " ");
    }
    initial = ring ? "M".concat(endOuterX, ",").concat(endOuterY, " ") : "M".concat(radius, ",").concat(radius, " L").concat(endOuterX, ",").concat(endOuterY);
    return path;
  };
  const getDonutPath = (index, item, totalParam) => {
    var _data$index4, _props$strokeWidth2;
    const additionalForStart = item.isStartEdgeCurved || item.startEdgeRadius ? (radius - innerRadius) / (radius / 20) : 0;
    const additionalForEnd = item.isEndEdgeCurved || item.endEdgeRadius ? (radius - innerRadius) / (radius / -20) : 0;
    const cropAtEnd = !!(index === data.length - 1 && (item.isEndEdgeCurved || item.endEdgeRadius));
    const {
      startInnerX,
      startInnerY,
      endOuterX,
      endOuterY,
      endInnerX,
      endInnerY
    } = getCoordinates(index, cropAtEnd ? additionalForEnd : additionalForStart, !cropAtEnd, cropAtEnd, totalParam);
    const isLargeArc = semiCircle ? 0 : ((_data$index4 = data[index]) === null || _data$index4 === void 0 ? void 0 : _data$index4.value) / (totalParam !== null && totalParam !== void 0 ? totalParam : total) > 0.5 ? 1 : 0;
    const innerArc = "A".concat(innerRadius, ",").concat(innerRadius, " 0 ").concat(isLargeArc, " 1 ");
    const outerArc = "A".concat(radius + ((_props$strokeWidth2 = props.strokeWidth) !== null && _props$strokeWidth2 !== void 0 ? _props$strokeWidth2 : 0) / 2, ",").concat(radius, " 0 ").concat(isLargeArc, " 0 ");
    const path = "".concat(outerArc, " ").concat(endOuterX, ", ").concat(endOuterY, "\n        L").concat(endInnerX, ",").concat(endInnerY, " M").concat(endInnerX, ",").concat(endInnerY, " ").concat(innerArc, " ").concat(startInnerX, ",").concat(startInnerY);
    initial = "M".concat(endInnerX, ",").concat(endInnerY, " L").concat(endOuterX, ",").concat(endOuterY, " ");
    return path;
  };
  const getStartCaps = (index, item) => {
    var _ref, _item$startEdgeRadius;
    const edgeRadius = (_ref = (_item$startEdgeRadius = item.startEdgeRadius) !== null && _item$startEdgeRadius !== void 0 ? _item$startEdgeRadius : edgesRadius) !== null && _ref !== void 0 ? _ref : 1;
    const additional = (item.isStartEdgeCurved || item.startEdgeRadius ? (radius - innerRadius) / (radius / 20) : 0) + strokeWidth / 2;
    const {
      startInnerX,
      startInnerY,
      startOuterX,
      startOuterY
    } = getCoordinates(index, additional);
    const path = "M".concat(startInnerX, ",").concat(startInnerY, " A").concat(edgeRadius, ",").concat(edgeRadius, " 0 0 0 ").concat(startOuterX, ",").concat(startOuterY);
    return path;
  };
  const getEndCaps = (index, item) => {
    var _ref2, _item$endEdgeRadius;
    const edgeRadius = (_ref2 = (_item$endEdgeRadius = item.endEdgeRadius) !== null && _item$endEdgeRadius !== void 0 ? _item$endEdgeRadius : edgesRadius) !== null && _ref2 !== void 0 ? _ref2 : 1;
    const additional = (item.isEndEdgeCurved || item.endEdgeRadius ? (radius - innerRadius) / (radius / 20) : 0) - strokeWidth / 2;
    const {
      endInnerX,
      endInnerY,
      endOuterX,
      endOuterY
    } = getCoordinates(index, -additional);
    const path = "M".concat(endInnerX, ",").concat(endInnerY, " A").concat(edgeRadius, ",").concat(edgeRadius, " 0 0 1 ").concat(endOuterX, ",").concat(endOuterY);
    return path;
  };
  const dInitial = data.map((item, index) => "".concat(initial || getInitial(item), " ").concat(donut ? getDonutPath(index, item, total * 101) : getPath(index, total * 101)));
  initial = '';
  const dFinal = data.map((item, index) => "".concat(initial || getInitial(item), " ").concat(donut ? getDonutPath(index, item) : getPath(index)));
  return {
    radius,
    total,
    donut,
    strokeWidth,
    maxStrokeWidth,
    isAnimated,
    animationDuration,
    initial,
    dInitial,
    dFinal,
    getStartCaps,
    getEndCaps,
    getTextCoordinates,
    labelsPosition,
    heightFactor,
    height,
    svgProps
  };
};
exports.usePiePro = usePiePro;
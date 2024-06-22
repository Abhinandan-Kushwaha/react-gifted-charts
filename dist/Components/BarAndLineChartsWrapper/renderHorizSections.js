"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderHorizSections = void 0;
var _react = _interopRequireDefault(require("react"));
var _lineSvg = _interopRequireDefault(require("../lineSvg"));
var _styles = require("../../LineChart/styles");
var _giftedChartsCore = require("gifted-charts-core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const renderHorizSections = props => {
  var _secondaryYAxisConfig5;
  const {
    width,
    noOfSectionsBelowXAxis,
    totalWidth,
    endSpacing,
    yAxisSide,
    horizontalRulesStyle,
    noOfSections,
    stepHeight,
    yAxisLabelWidth,
    yAxisLabelContainerStyle,
    yAxisThickness,
    yAxisColor,
    xAxisThickness,
    xAxisColor,
    xAxisLength,
    xAxisType,
    dashWidth,
    dashGap,
    backgroundColor,
    hideRules,
    rulesLength,
    rulesType,
    rulesThickness,
    rulesColor,
    rulesConfigArray,
    spacing,
    showYAxisIndices,
    yAxisIndicesHeight,
    yAxisIndicesWidth,
    yAxisIndicesColor,
    hideOrigin,
    hideYAxisText,
    yAxisTextNumberOfLines,
    yAxisTextStyle,
    rotateYAxisTexts,
    rtl,
    containerHeight,
    maxValue,
    yAxisOffset,
    horizontal,
    yAxisAtTop,
    secondaryYAxis,
    onlyReferenceLines,
    renderReferenceLines,
    chartType
  } = props;
  const {
    secondaryYAxisConfig,
    horizSections,
    yAxisExtraHeightAtTop,
    secondaryHorizSections,
    showReferenceLine1,
    referenceLine1Config,
    referenceLine1Position,
    showReferenceLine2,
    referenceLine2Config,
    referenceLine2Position,
    showReferenceLine3,
    referenceLine3Config,
    referenceLine3Position,
    horizSectionsBelow,
    secondaryHorizSectionsBelow,
    getLabelTexts,
    getLabelTextsForSecondaryYAxis
  } = (0, _giftedChartsCore.getHorizSectionVals)(props);
  const horizSectionsLeft = (chartType === _giftedChartsCore.chartTypes.BAR ? yAxisLabelWidth : yAxisLabelWidth + 21 - Math.min(Math.max(spacing, 21), 56)) - Math.max((width ? 14 : 19) - endSpacing, 0);
  const renderAxesAndRules = index => {
    var _rulesConfigArray$inv, _rulesConfigArray$inv2, _rulesConfigArray$inv3, _rulesConfigArray$inv4, _ref, _rulesConfigArray$inv5, _rulesConfigArray$inv6, _rulesConfigArray$inv7, _rulesConfigArray$inv8, _rulesConfigArray$inv9, _rulesConfigArray$inv10, _rulesConfigArray$inv11, _rulesConfigArray$inv12;
    const invertedIndex = horizSections.length - index - 1;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: (() => {
        let style = {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        };
        if (index === noOfSections) {
          style = {
            ...style,
            ..._styles.styles.lastLeftPart
          };
        } else if (!index) {
          style = {
            ...style,
            justifyContent: 'flex-start'
          };
        } else {
          style = {
            ...style,
            ..._styles.styles.leftPart
          };
        }
        style = {
          ...style,
          borderColor: yAxisColor,
          backgroundColor: backgroundColor,
          width: (props.width || totalWidth - spacing) + endSpacing,
          height: stepHeight,
          marginLeft: yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? 0 : yAxisLabelWidth
          // marginTop: stepHeight / 2
        };
        if (!index || !invertedIndex) {
          style.height = stepHeight / 2;
        }
        if (yAxisSide === _giftedChartsCore.yAxisSides.RIGHT) {
          style.borderRightWidth = yAxisThickness;
          style.borderRightStyle = 'solid';
        } else {
          style.borderLeftWidth = yAxisThickness;
          style.borderLeftStyle = 'solid';
        }
        return style;
      })()
    }, index === noOfSections ? /*#__PURE__*/_react.default.createElement(_lineSvg.default, {
      config: {
        thickness: xAxisThickness,
        color: xAxisColor,
        width: xAxisLength || (props.width || totalWidth - spacing) + endSpacing,
        dashWidth: dashWidth,
        dashGap: dashGap,
        type: xAxisType
      }
    }) : /*#__PURE__*/_react.default.createElement(_lineSvg.default, {
      config: {
        thickness: hideRules ? 0 : (_rulesConfigArray$inv = (_rulesConfigArray$inv2 = rulesConfigArray[invertedIndex]) === null || _rulesConfigArray$inv2 === void 0 ? void 0 : _rulesConfigArray$inv2.rulesThickness) !== null && _rulesConfigArray$inv !== void 0 ? _rulesConfigArray$inv : rulesThickness,
        color: (_rulesConfigArray$inv3 = (_rulesConfigArray$inv4 = rulesConfigArray[invertedIndex]) === null || _rulesConfigArray$inv4 === void 0 ? void 0 : _rulesConfigArray$inv4.rulesColor) !== null && _rulesConfigArray$inv3 !== void 0 ? _rulesConfigArray$inv3 : rulesColor,
        width: (_ref = (_rulesConfigArray$inv5 = (_rulesConfigArray$inv6 = rulesConfigArray[invertedIndex]) === null || _rulesConfigArray$inv6 === void 0 ? void 0 : _rulesConfigArray$inv6.rulesLength) !== null && _rulesConfigArray$inv5 !== void 0 ? _rulesConfigArray$inv5 : rulesLength) !== null && _ref !== void 0 ? _ref : (props.width || totalWidth - spacing) + endSpacing,
        dashWidth: (_rulesConfigArray$inv7 = (_rulesConfigArray$inv8 = rulesConfigArray[invertedIndex]) === null || _rulesConfigArray$inv8 === void 0 ? void 0 : _rulesConfigArray$inv8.dashWidth) !== null && _rulesConfigArray$inv7 !== void 0 ? _rulesConfigArray$inv7 : dashWidth,
        dashGap: (_rulesConfigArray$inv9 = (_rulesConfigArray$inv10 = rulesConfigArray[invertedIndex]) === null || _rulesConfigArray$inv10 === void 0 ? void 0 : _rulesConfigArray$inv10.dashGap) !== null && _rulesConfigArray$inv9 !== void 0 ? _rulesConfigArray$inv9 : dashGap,
        type: (_rulesConfigArray$inv11 = (_rulesConfigArray$inv12 = rulesConfigArray[invertedIndex]) === null || _rulesConfigArray$inv12 === void 0 ? void 0 : _rulesConfigArray$inv12.rulesType) !== null && _rulesConfigArray$inv11 !== void 0 ? _rulesConfigArray$inv11 : rulesType
      }
    }), showYAxisIndices && index !== noOfSections ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        height: yAxisIndicesHeight,
        width: yAxisIndicesWidth,
        left: yAxisIndicesWidth / -2 + (yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? (width !== null && width !== void 0 ? width : totalWidth) + endSpacing : 0),
        marginTop: -yAxisIndicesHeight / 2,
        // added
        backgroundColor: yAxisIndicesColor
      }
    }) : null);
  };
  const renderExtraHeightOfYAxisAtTop = () => /*#__PURE__*/_react.default.createElement("div", {
    style: (() => {
      let style = {
        ..._styles.styles.horizBar,
        width: (width !== null && width !== void 0 ? width : totalWidth) + endSpacing + yAxisLabelWidth
        // top: stepHeight / 2
      };
      if (horizontal && !yAxisAtTop) {
        style.transform = "rotateY(180deg)";
      }
      if (yAxisSide == _giftedChartsCore.yAxisSides.RIGHT) {
        style.marginLeft = -yAxisLabelWidth;
      }
      style = {
        ...style,
        ...horizontalRulesStyle
      };
      return style;
    })()
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      ..._styles.styles.leftLabel,
      height: yAxisExtraHeightAtTop,
      width: yAxisLabelWidth,
      ...yAxisLabelContainerStyle
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: (() => {
      let style = {
        ..._styles.styles.leftPart,
        borderColor: yAxisColor,
        backgroundColor: backgroundColor,
        width: (props.width || totalWidth - spacing) + endSpacing
      };
      if (yAxisSide === _giftedChartsCore.yAxisSides.RIGHT) {
        style.borderRightWidth = yAxisThickness;
        style.borderRightStyle = 'solid';
        style.marginRight = -2;
      } else {
        style.borderLeftWidth = yAxisThickness;
        style.borderLeftStyle = 'solid';
      }
      return style;
    })()
  }));
  const renderSecondaryYaxisLabels = (horizSections, isBelow) => horizSections.map((sectionItems, index) => {
    var _secondaryYAxisConfig, _secondaryYAxisConfig2, _secondaryYAxisConfig3, _secondaryYAxisConfig4;
    let label = getLabelTextsForSecondaryYAxis(sectionItems.value, index);
    if (secondaryYAxisConfig.hideOrigin && index === secondaryHorizSections.length - 1) {
      label = '';
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      style: {
        ..._styles.styles.horizBar,
        ..._styles.styles.leftLabel,
        position: 'absolute',
        zIndex: 1,
        bottom: ((_secondaryYAxisConfig = secondaryYAxisConfig.stepHeight) !== null && _secondaryYAxisConfig !== void 0 ? _secondaryYAxisConfig : 0) * ((isBelow ? 0 : noOfSectionsBelowXAxis) + index - (noOfSectionsBelowXAxis ? 0 : 0.5)) + 30,
        width: secondaryYAxisConfig.yAxisLabelWidth,
        height: (_secondaryYAxisConfig2 = secondaryYAxisConfig.stepHeight) !== null && _secondaryYAxisConfig2 !== void 0 ? _secondaryYAxisConfig2 : 0,
        ...yAxisLabelContainerStyle
      }
    }, secondaryYAxisConfig.showYAxisIndices && index !== 0 ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: secondaryYAxisConfig.yAxisIndicesHeight,
        width: secondaryYAxisConfig.yAxisIndicesWidth,
        position: 'absolute',
        left: ((_secondaryYAxisConfig3 = secondaryYAxisConfig.yAxisIndicesWidth) !== null && _secondaryYAxisConfig3 !== void 0 ? _secondaryYAxisConfig3 : 0) / -2,
        backgroundColor: (_secondaryYAxisConfig4 = secondaryYAxisConfig.yAxisIndicesColor) === null || _secondaryYAxisConfig4 === void 0 ? void 0 : _secondaryYAxisConfig4.toString()
      }
    }) : null, /*#__PURE__*/_react.default.createElement("div", {
      // numberOfLines={secondaryYAxisConfig.yAxisTextNumberOfLines}
      // ellipsizeMode={'clip'}
      style: secondaryYAxisConfig.yAxisTextStyle
    }, label));
  });
  const referenceLines = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showReferenceLine1 ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        zIndex: referenceLine1Config.zIndex,
        bottom: (referenceLine1Position - (yAxisOffset !== null && yAxisOffset !== void 0 ? yAxisOffset : 0)) * containerHeight / maxValue,
        left: yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? 0 : yAxisLabelWidth + yAxisThickness
      }
    }, /*#__PURE__*/_react.default.createElement(_lineSvg.default, {
      config: referenceLine1Config
    }), referenceLine1Config.labelText ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        ...referenceLine1Config.labelTextStyle
      }
    }, referenceLine1Config.labelText) : null) : null, showReferenceLine2 ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        zIndex: referenceLine2Config.zIndex,
        bottom: (referenceLine2Position - (yAxisOffset !== null && yAxisOffset !== void 0 ? yAxisOffset : 0)) * containerHeight / maxValue,
        left: yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? 0 : yAxisLabelWidth + yAxisThickness
      }
    }, /*#__PURE__*/_react.default.createElement(_lineSvg.default, {
      config: referenceLine2Config
    }), referenceLine2Config.labelText ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        ...referenceLine2Config.labelTextStyle
      }
    }, referenceLine2Config.labelText) : null) : null, showReferenceLine3 ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        zIndex: referenceLine3Config.zIndex,
        bottom: (referenceLine3Position - (yAxisOffset !== null && yAxisOffset !== void 0 ? yAxisOffset : 0)) * containerHeight / maxValue,
        left: yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? 0 : yAxisLabelWidth + yAxisThickness
      }
    }, /*#__PURE__*/_react.default.createElement(_lineSvg.default, {
      config: referenceLine3Config
    }), referenceLine3Config.labelText ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        ...referenceLine3Config.labelTextStyle
      }
    }, referenceLine3Config.labelText) : null) : null);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, onlyReferenceLines ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      backgroundColor: 'green'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: (width !== null && width !== void 0 ? width : totalWidth) + endSpacing
    }
  }, referenceLines())) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      // marginTop: stepHeight / -2,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative',
      width: (width !== null && width !== void 0 ? width : totalWidth) + endSpacing
    }
  }, yAxisExtraHeightAtTop ? renderExtraHeightOfYAxisAtTop() : null, horizSections.map((sectionItems, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      style: (() => {
        let style = {
          ..._styles.styles.horizBar,
          width: (width !== null && width !== void 0 ? width : totalWidth) + endSpacing
        };
        if (horizontal && !yAxisAtTop) {
          style.transform = "rotateY(180deg)";
        }
        style = {
          ...style,
          ...horizontalRulesStyle
        };
        return style;
      })()
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        ..._styles.styles.leftLabel,
        ...yAxisLabelContainerStyle
      }
    }), renderAxesAndRules(index));
  }), /***********************************************************************************************/
  /**************************      Render the y axis labels separately      **********************/
  /***********************************************************************************************/

  !hideYAxisText && horizSections.map((sectionItems, index) => {
    let label = getLabelTexts(sectionItems.value, index);
    if (hideOrigin && index === horizSections.length - 1) {
      label = '';
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      style: (() => {
        let style = {
          ..._styles.styles.horizBar,
          ..._styles.styles.leftLabel,
          position: 'absolute',
          zIndex: 1,
          top: stepHeight * index + yAxisExtraHeightAtTop - stepHeight / 2,
          width: yAxisLabelWidth,
          height: index === noOfSections ? stepHeight / 2 : stepHeight
        };
        if (yAxisSide === _giftedChartsCore.yAxisSides.RIGHT) {
          style.left = (width !== null && width !== void 0 ? width : totalWidth) + (chartType === _giftedChartsCore.chartTypes.BAR ? endSpacing : 20 - spacing);
        }
        if (horizontal && !yAxisAtTop) {
          style.transform = "translateX(".concat((width !== null && width !== void 0 ? width : totalWidth) - 30 + endSpacing, ")");
        }
        style = {
          ...style,
          ...yAxisLabelContainerStyle
        };
        return style;
      })()
    }, /*#__PURE__*/_react.default.createElement("div", {
      // numberOfLines={yAxisTextNumberOfLines}
      // ellipsizeMode={'clip'}
      style: (_yAxisTextStyle => {
        const style = (_yAxisTextStyle = {
          ...yAxisTextStyle
        }) !== null && _yAxisTextStyle !== void 0 ? _yAxisTextStyle : {};
        if (horizontal) {
          style.transform = "rotate(".concat(rotateYAxisTexts !== null && rotateYAxisTexts !== void 0 ? rotateYAxisTexts : rtl ? 90 : -90, "deg)");
        }
        if (index === noOfSections) {
          style.marginBottom = stepHeight / -2;
        }
        return style;
      })()
    }, label));
  })
  /***********************************************************************************************/
  /***********************************************************************************************/, horizSectionsBelow.map((sectionItems, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      style: (() => {
        const style = {
          ..._styles.styles.horizBar,
          width: width ? width + 15 : totalWidth
        };
        // if (index === 0) {
        //   style.marginTop = stepHeight / 2
        // }
        return style;
      })()
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: (() => {
        const style = {
          ..._styles.styles.leftLabel,
          borderRightWidth: yAxisThickness,
          borderRightStyle: 'solid',
          borderColor: yAxisColor,
          marginLeft: yAxisThickness - 1,
          height: stepHeight,
          width: yAxisLabelWidth,
          transform: "translateX(".concat(yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? (width !== null && width !== void 0 ? width : totalWidth) + endSpacing : horizSectionsLeft, "px)")
        };
        return style;
      })()
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        ..._styles.styles.leftLabel,
        // width: yAxisLabelWidth,
        transform: "translateX(".concat(yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? 0 : horizSectionsLeft, "px)"),
        display: 'flex',
        alignItems: 'flex-end',
        ...yAxisLabelContainerStyle
      }
    }, hideRules ? null : /*#__PURE__*/_react.default.createElement(_lineSvg.default, {
      config: {
        thickness: rulesThickness,
        color: rulesColor,
        width: rulesLength || (props.width || totalWidth - spacing) + endSpacing,
        dashWidth: dashWidth,
        dashGap: dashGap,
        type: rulesType
      }
    }), showYAxisIndices && index !== noOfSections ? /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        height: yAxisIndicesHeight,
        width: yAxisIndicesWidth,
        left: yAxisIndicesWidth / -2 + (yAxisSide === _giftedChartsCore.yAxisSides.RIGHT ? (width !== null && width !== void 0 ? width : totalWidth) + endSpacing : 0),
        marginTop: -yAxisIndicesHeight - 3,
        // added
        backgroundColor: yAxisIndicesColor
      }
    }) : null));
  }), /***********************************************************************************************/
  /*************************      Render the y axis labels below origin      *********************/
  /***********************************************************************************************/

  !hideYAxisText && horizSectionsBelow.map((sectionItems, index) => {
    let label = getLabelTexts(horizSectionsBelow[horizSectionsBelow.length - 1 - index].value, index);
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      style: (() => {
        let style = {
          ..._styles.styles.horizBar,
          ..._styles.styles.leftLabel,
          position: 'absolute',
          zIndex: 1,
          bottom: stepHeight * (index - 0.5),
          width: yAxisLabelWidth,
          height: index === noOfSections ? stepHeight / 2 : stepHeight
        };
        if (yAxisSide === _giftedChartsCore.yAxisSides.RIGHT) {
          style.left = (width !== null && width !== void 0 ? width : totalWidth) + endSpacing;
        }
        style = {
          ...style,
          ...yAxisLabelContainerStyle
        };
        return style;
      })()
    }, /*#__PURE__*/_react.default.createElement("div", {
      // numberOfLines={yAxisTextNumberOfLines}
      // ellipsizeMode={'clip'}
      style: (_yAxisTextStyle2 => {
        const style = (_yAxisTextStyle2 = {
          ...yAxisTextStyle
        }) !== null && _yAxisTextStyle2 !== void 0 ? _yAxisTextStyle2 : {};
        if (index === noOfSections) {
          style.marginBottom = stepHeight / -2;
        }
        return style;
      })()
    }, label));
  })
  /***********************************************************************************************/
  /***********************************************************************************************/, renderReferenceLines ? referenceLines() : null), /***********************************************************************************************/
  /*************************      Render the secondary Y Axis                *********************/
  /***********************************************************************************************/
  secondaryYAxis ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: secondaryYAxisConfig.yAxisLabelWidth,
      marginLeft: width ? yAxisLabelWidth : yAxisLabelWidth - spacing,
      borderColor: (_secondaryYAxisConfig5 = secondaryYAxisConfig.yAxisColor) === null || _secondaryYAxisConfig5 === void 0 ? void 0 : _secondaryYAxisConfig5.toString(),
      borderLeftWidth: secondaryYAxisConfig.yAxisThickness,
      borderLeftStyle: 'solid',
      height: containerHeight + yAxisExtraHeightAtTop,
      bottom: stepHeight / -2
    }
  }, !secondaryYAxisConfig.hideYAxisText ? renderSecondaryYaxisLabels(secondaryHorizSections, false) : null, noOfSectionsBelowXAxis && !secondaryYAxisConfig.hideYAxisText ? renderSecondaryYaxisLabels(secondaryHorizSectionsBelow, true) : null) : null));
};
exports.renderHorizSections = renderHorizSections;
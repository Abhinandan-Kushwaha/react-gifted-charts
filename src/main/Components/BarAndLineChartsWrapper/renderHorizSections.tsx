import React from 'react'
import Rule from '../lineSvg'
import { styles } from '../../LineChart/styles'
import {
  getHorizSectionVals,
  yAxisSides,
  HorizSectionsType,
  horizSectionPropTypes,
  chartTypes
} from 'gifted-charts-core'

interface IhorizSectionPropTypes extends horizSectionPropTypes {
  chartType: chartTypes
}

export const renderHorizSections = (props: IhorizSectionPropTypes) => {
  const {
    width,
    noOfSectionsBelowXAxis,
    totalWidth,
    endSpacing,
    yAxisSide,
    horizontalRulesStyle,
    noOfSections,
    sectionColors,
    stepHeight,
    negativeStepHeight,
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
    chartType,
    secondaryXAxis
  } = props

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
  } = getHorizSectionVals(props)

  const secondaryYAxisExtraHeightAtBottom = 10

  const horizSectionsLeft =
    (chartType === chartTypes.BAR
      ? yAxisLabelWidth
      : yAxisLabelWidth + 21 - Math.min(Math.max(spacing, 21), 56)) -
    Math.max((width ? 14 : 19) - endSpacing, 0)

  const renderAxesAndRules = (index: number) => {
    const invertedIndex = horizSections.length - index - 1
    return (
      <div
        style={(() => {
          let style: React.CSSProperties = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }
          if (index === noOfSections) {
            style = { ...style, ...styles.lastLeftPart }
          } else if (!index) {
            style = { ...style, justifyContent: 'flex-start' }
          } else {
            style = { ...style, ...styles.leftPart }
          }
          style = {
            ...style,
            borderColor: yAxisColor,
            backgroundColor:
              (sectionColors?.[invertedIndex] as string) ?? backgroundColor,
            width: (props.width || totalWidth - spacing) + endSpacing,
            height: stepHeight,
            marginLeft: yAxisSide === yAxisSides.RIGHT ? 0 : yAxisLabelWidth
            // marginTop: stepHeight / 2
          }
          if (!index || !invertedIndex) {
            style.height = stepHeight / 2
          }
          if (yAxisSide === yAxisSides.RIGHT) {
            style.borderRightWidth = yAxisThickness
            style.borderRightStyle = 'solid'
          } else {
            style.borderLeftWidth = yAxisThickness
            style.borderLeftStyle = 'solid'
          }

          return style
        })()}
      >
        {index === noOfSections ? (
          <Rule
            config={{
              thickness: xAxisThickness,
              color: xAxisColor,
              width:
                xAxisLength ||
                (props.width || totalWidth - spacing) + endSpacing,
              dashWidth: dashWidth,
              dashGap: dashGap,
              type: xAxisType
            }}
          />
        ) : (
          <Rule
            config={{
              thickness: hideRules
                ? 0
                : rulesConfigArray[invertedIndex]?.rulesThickness ??
                  rulesThickness,
              color: rulesConfigArray[invertedIndex]?.rulesColor ?? rulesColor,
              width:
                rulesConfigArray[invertedIndex]?.rulesLength ??
                rulesLength ??
                (props.width || totalWidth - spacing) + endSpacing,
              dashWidth:
                rulesConfigArray[invertedIndex]?.dashWidth ?? dashWidth,
              dashGap: rulesConfigArray[invertedIndex]?.dashGap ?? dashGap,
              type: rulesConfigArray[invertedIndex]?.rulesType ?? rulesType
            }}
          />
        )}
        {showYAxisIndices && index !== noOfSections ? (
          <div
            style={{
              position: 'absolute',
              height: yAxisIndicesHeight,
              width: yAxisIndicesWidth,
              left:
                yAxisIndicesWidth / -2 +
                (yAxisSide === yAxisSides.RIGHT
                  ? (width ?? totalWidth) + endSpacing
                  : 0),
              marginTop: -yAxisIndicesHeight / 2, // added
              backgroundColor: yAxisIndicesColor
            }}
          />
        ) : null}
      </div>
    )
  }

  const renderExtraHeightOfYAxisAtTop = () => (
    <div
      style={(() => {
        let style: React.CSSProperties = {
          ...styles.horizBar,
          width: (width ?? totalWidth) + endSpacing + yAxisLabelWidth
          // top: stepHeight / 2
        }
        if (horizontal && !yAxisAtTop) {
          style.transform = `rotateY(180deg)`
        }
        if (yAxisSide == yAxisSides.RIGHT) {
          style.marginLeft = -yAxisLabelWidth
        }
        style = { ...style, ...horizontalRulesStyle }
        return style
      })()}
    >
      <div
        style={{
          ...styles.leftLabel,
          height: yAxisExtraHeightAtTop,
          width: yAxisLabelWidth,
          ...yAxisLabelContainerStyle
        }}
      />
      <div
        style={(() => {
          let style: React.CSSProperties = {
            ...styles.leftPart,
            borderLeftColor: yAxisColor,
            borderRightColor: yAxisColor,
            borderTopColor: (secondaryXAxis?.color ?? xAxisColor) as string,
            borderTopWidth: secondaryXAxis
              ? secondaryXAxis.thickness ?? xAxisThickness
              : 0,
            backgroundColor: backgroundColor,
            width: (props.width || totalWidth - spacing) + endSpacing
          }
          if (yAxisSide === yAxisSides.RIGHT) {
            style.borderRightWidth = yAxisThickness
            style.borderRightStyle = 'solid'
            style.marginRight = -2
          } else {
            style.borderLeftWidth = yAxisThickness
            style.borderLeftStyle = 'solid'
          }
          return style
        })()}
      />
    </div>
  )

  const renderSecondaryYaxisLabels = (
    horizSections: HorizSectionsType,
    isBelow: boolean
  ) =>
    horizSections.map((sectionItems, index) => {
      let label = getLabelTextsForSecondaryYAxis(sectionItems.value, index)
      if (
        secondaryYAxisConfig.hideOrigin &&
        index === secondaryHorizSections.length - 1
      ) {
        label = ''
      }
      return (
        <div
          key={index}
          style={{
            ...styles.horizBar,
            ...styles.leftLabel,
            position: 'absolute',
            zIndex: 1,
            bottom:
              (index - 0.5) *
                (isBelow
                  ? secondaryYAxisConfig.negativeStepHeight ??
                    secondaryYAxisConfig.stepHeight ??
                    0
                  : secondaryYAxisConfig.stepHeight ?? 0) +
              (isBelow ? secondaryYAxisExtraHeightAtBottom : 0) +
              30,
            width: secondaryYAxisConfig.yAxisLabelWidth,
            height: isBelow
              ? secondaryYAxisConfig.negativeStepHeight ??
                secondaryYAxisConfig.stepHeight ??
                0
              : secondaryYAxisConfig.stepHeight ?? 0,
            ...(secondaryYAxisConfig.yAxisLabelContainerStyle ??
              yAxisLabelContainerStyle)
          }}
        >
          {secondaryYAxisConfig.showYAxisIndices && (index !== 0 || isBelow) ? (
            <div
              style={{
                height: secondaryYAxisConfig.yAxisIndicesHeight,
                width: secondaryYAxisConfig.yAxisIndicesWidth,
                position: 'absolute',
                left: (secondaryYAxisConfig.yAxisIndicesWidth ?? 0) / -2,
                backgroundColor:
                  secondaryYAxisConfig.yAxisIndicesColor?.toString()
              }}
            />
          ) : null}
          <div
            // numberOfLines={secondaryYAxisConfig.yAxisTextNumberOfLines}
            // ellipsizeMode={'clip'}
            style={{
              textAlign: 'left',
              width:
                secondaryYAxisConfig.yAxisLabelContainerStyle?.width ??
                secondaryYAxisConfig.yAxisLabelWidth,
              marginLeft: 10,
              ...secondaryYAxisConfig.yAxisTextStyle
            }}
          >
            {label}
          </div>
        </div>
      )
    })

  const referenceLines = () => {
    return (
      <>
        {showReferenceLine1 ? (
          <div
            style={{
              position: 'absolute',
              zIndex: referenceLine1Config.zIndex,
              bottom:
                ((referenceLine1Position - (yAxisOffset ?? 0)) *
                  containerHeight) /
                maxValue,
              left:
                yAxisSide === yAxisSides.RIGHT
                  ? 0
                  : yAxisLabelWidth + yAxisThickness
            }}
          >
            <Rule config={referenceLine1Config} />
            {referenceLine1Config.labelText ? (
              <div
                style={{
                  position: 'absolute',
                  ...referenceLine1Config.labelTextStyle
                }}
              >
                {referenceLine1Config.labelText}
              </div>
            ) : null}
          </div>
        ) : null}
        {showReferenceLine2 ? (
          <div
            style={{
              position: 'absolute',
              zIndex: referenceLine2Config.zIndex,
              bottom:
                ((referenceLine2Position - (yAxisOffset ?? 0)) *
                  containerHeight) /
                maxValue,
              left:
                yAxisSide === yAxisSides.RIGHT
                  ? 0
                  : yAxisLabelWidth + yAxisThickness
            }}
          >
            <Rule config={referenceLine2Config} />
            {referenceLine2Config.labelText ? (
              <div
                style={{
                  position: 'absolute',
                  ...referenceLine2Config.labelTextStyle
                }}
              >
                {referenceLine2Config.labelText}
              </div>
            ) : null}
          </div>
        ) : null}
        {showReferenceLine3 ? (
          <div
            style={{
              position: 'absolute',
              zIndex: referenceLine3Config.zIndex,
              bottom:
                ((referenceLine3Position - (yAxisOffset ?? 0)) *
                  containerHeight) /
                maxValue,
              left:
                yAxisSide === yAxisSides.RIGHT
                  ? 0
                  : yAxisLabelWidth + yAxisThickness
            }}
          >
            <Rule config={referenceLine3Config} />
            {referenceLine3Config.labelText ? (
              <div
                style={{
                  position: 'absolute',
                  ...referenceLine3Config.labelTextStyle
                }}
              >
                {referenceLine3Config.labelText}
              </div>
            ) : null}
          </div>
        ) : null}
      </>
    )
  }

  const leftShiftForRIghtYaxis =
    (width ? width + 20 : totalWidth) +
    yAxisLabelWidth / 2 +
    endSpacing -
    (chartType === chartTypes.BAR ? 40 : 60)

  return (
    <>
      {onlyReferenceLines ? (
        <div
          style={{
            display: 'flex',
            backgroundColor: 'green'
          }}
        >
          <div style={{ width: (width ?? totalWidth) + endSpacing }}>
            {referenceLines()}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            // marginTop: stepHeight / -2,
            pointerEvents: 'none'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: (width ?? totalWidth) + endSpacing
            }}
          >
            {yAxisExtraHeightAtTop ? renderExtraHeightOfYAxisAtTop() : null}
            {horizSections.map((sectionItems, index) => {
              return (
                <div
                  key={index}
                  style={(() => {
                    let style: React.CSSProperties = {
                      ...styles.horizBar,
                      width: (width ?? totalWidth) + endSpacing
                    }

                    if (horizontal && !yAxisAtTop) {
                      style.transform = `rotateY(180deg)`
                    }
                    style = { ...style, ...horizontalRulesStyle }
                    return style
                  })()}
                >
                  <div
                    style={{
                      ...styles.leftLabel,
                      ...yAxisLabelContainerStyle
                    }}
                  />
                  {renderAxesAndRules(index)}
                </div>
              )
            })}

            {
              /***********************************************************************************************/
              /**************************      Render the y axis labels separately      **********************/
              /***********************************************************************************************/

              !hideYAxisText &&
                horizSections.map((sectionItems, index) => {
                  let label = getLabelTexts(sectionItems.value, index)
                  if (hideOrigin && index === horizSections.length - 1) {
                    label = ''
                  }
                  return (
                    <div
                      key={index}
                      style={(() => {
                        let style: React.CSSProperties = {
                          ...styles.horizBar,
                          ...styles.leftLabel,
                          position: 'absolute',
                          zIndex: 1,
                          top:
                            negativeStepHeight * index +
                            yAxisExtraHeightAtTop -
                            negativeStepHeight / 2,
                          width: yAxisLabelWidth,
                          height:
                            index === noOfSections
                              ? negativeStepHeight / 2
                              : negativeStepHeight
                        }
                        if (yAxisSide === yAxisSides.RIGHT) {
                          style.left = leftShiftForRIghtYaxis
                        }
                        if (horizontal && !yAxisAtTop) {
                          style.transform = `translateX(${
                            (width ?? totalWidth) - 30 + endSpacing
                          }px)`
                        }
                        style = { ...style, ...yAxisLabelContainerStyle }
                        return style
                      })()}
                    >
                      <div
                        // numberOfLines={yAxisTextNumberOfLines}
                        // ellipsizeMode={'clip'}
                        style={(() => {
                          const style: React.CSSProperties =
                            { ...yAxisTextStyle } ?? {}
                          if (horizontal) {
                            style.transform = `rotate(${
                              rotateYAxisTexts ?? (rtl ? 90 : -90)
                            }deg)`
                          }
                          if (index === noOfSections) {
                            style.marginBottom = negativeStepHeight / -2
                          }
                          return style
                        })()}
                      >
                        {label}
                      </div>
                    </div>
                  )
                })
              /***********************************************************************************************/
              /***********************************************************************************************/
            }

            {horizSectionsBelow.map((sectionItems, index) => {
              return (
                <div
                  key={index}
                  style={(() => {
                    const style: React.CSSProperties = {
                      ...styles.horizBar,
                      width: width ? width + 15 : totalWidth
                    }
                    // if (index === 0) {
                    //   style.marginTop = negativeStepHeight / 2
                    // }
                    return style
                  })()}
                >
                  <div
                    style={(() => {
                      const style: React.CSSProperties = {
                        ...styles.leftLabel,
                        borderRightWidth: yAxisThickness,
                        borderRightStyle: 'solid',
                        borderColor: yAxisColor,
                        marginLeft: yAxisThickness - 1,
                        height: negativeStepHeight,
                        width: yAxisLabelWidth,
                        transform: `translateX(${
                          yAxisSide === yAxisSides.RIGHT
                            ? (width ?? totalWidth) + endSpacing
                            : horizSectionsLeft
                        }px)`
                      }
                      return style
                    })()}
                  />
                  <div
                    style={{
                      ...styles.leftLabel,
                      // width: yAxisLabelWidth,
                      transform: `translateX(${
                        yAxisSide === yAxisSides.RIGHT ? 0 : horizSectionsLeft
                      }px)`,
                      display: 'flex',
                      alignItems: 'flex-end',
                      ...yAxisLabelContainerStyle
                    }}
                  >
                    {hideRules ? null : (
                      <Rule
                        config={{
                          thickness: rulesThickness,
                          color: rulesColor,
                          width:
                            rulesLength ||
                            (props.width || totalWidth - spacing) + endSpacing,
                          dashWidth: dashWidth,
                          dashGap: dashGap,
                          type: rulesType
                        }}
                      />
                    )}
                    {showYAxisIndices && index !== noOfSections ? (
                      <div
                        style={{
                          position: 'absolute',
                          height: yAxisIndicesHeight,
                          width: yAxisIndicesWidth,
                          left:
                            yAxisIndicesWidth / -2 +
                            (yAxisSide === yAxisSides.RIGHT
                              ? (width ?? totalWidth) + endSpacing
                              : 0),
                          marginTop: -yAxisIndicesHeight - 3, // added
                          backgroundColor: yAxisIndicesColor
                        }}
                      />
                    ) : null}
                  </div>
                </div>
              )
            })}

            {
              /***********************************************************************************************/
              /*************************      Render the y axis labels below origin      *********************/
              /***********************************************************************************************/

              !hideYAxisText &&
                horizSectionsBelow.map((sectionItems, index) => {
                  let label = getLabelTexts(
                    horizSectionsBelow[horizSectionsBelow.length - 1 - index]
                      .value,
                    index
                  )
                  return (
                    <div
                      key={index}
                      style={(() => {
                        let style: React.CSSProperties = {
                          ...styles.horizBar,
                          ...styles.leftLabel,

                          position: 'absolute',
                          zIndex: 1,
                          bottom: negativeStepHeight * (index - 0.5),
                          width: yAxisLabelWidth,
                          height:
                            index === noOfSections
                              ? negativeStepHeight / 2
                              : negativeStepHeight
                        }
                        if (yAxisSide === yAxisSides.RIGHT) {
                          style.left = (width ?? totalWidth) + endSpacing
                        }
                        style = { ...style, ...yAxisLabelContainerStyle }
                        return style
                      })()}
                    >
                      <div
                        // numberOfLines={yAxisTextNumberOfLines}
                        // ellipsizeMode={'clip'}
                        style={(() => {
                          const style: React.CSSProperties =
                            { ...yAxisTextStyle } ?? {}
                          if (index === noOfSections) {
                            style.marginBottom = negativeStepHeight / -2
                          }
                          return style
                        })()}
                      >
                        {label}
                      </div>
                    </div>
                  )
                })
              /***********************************************************************************************/
              /***********************************************************************************************/
            }

            {/***********************************************************************************************/
            /*************************      Render the reference lines separately      *********************/
            /***********************************************************************************************/}

            {renderReferenceLines ? referenceLines() : null}
          </div>
          {
            /***********************************************************************************************/
            /*************************      Render the secondary Y Axis                *********************/
            /***********************************************************************************************/
            secondaryYAxis ? (
              <div
                style={{
                  width: secondaryYAxisConfig.yAxisLabelWidth,
                  marginLeft: width
                    ? yAxisLabelWidth
                    : yAxisLabelWidth - spacing,
                  borderColor: secondaryYAxisConfig.yAxisColor?.toString(),
                  borderLeftWidth: secondaryYAxisConfig.yAxisThickness,
                  borderLeftStyle: 'solid',
                  height: containerHeight + yAxisExtraHeightAtTop,
                  bottom: stepHeight / -2
                }}
              >
                {!secondaryYAxisConfig.hideYAxisText
                  ? renderSecondaryYaxisLabels(secondaryHorizSections, false)
                  : null}
              </div>
            ) : null
          }
          {
            /***********************************************************************************************/
            /*************************      Render the secondary Y Axis below origin   *********************/
            /***********************************************************************************************/

            secondaryYAxisConfig.noOfSectionsBelowXAxis ? (
              <div
                style={{
                  width:
                    secondaryYAxisConfig.yAxisLabelWidth ?? yAxisLabelWidth,
                  left:
                    (width ? yAxisLabelWidth : yAxisLabelWidth - spacing) -
                    (secondaryYAxisConfig.yAxisLabelWidth ?? yAxisLabelWidth),
                  borderColor: secondaryYAxisConfig.yAxisColor?.toString(),
                  borderLeftWidth: secondaryYAxisConfig.yAxisThickness,
                  height:
                    (secondaryYAxisConfig.negativeStepHeight ??
                      secondaryYAxisConfig.stepHeight ??
                      stepHeight) *
                      secondaryHorizSectionsBelow.length +
                    secondaryYAxisExtraHeightAtBottom,
                  bottom:
                    -containerHeight - stepHeight / 2 - yAxisExtraHeightAtTop
                }}
              >
                {!secondaryYAxisConfig.hideYAxisText
                  ? renderSecondaryYaxisLabels(
                      secondaryHorizSectionsBelow,
                      true
                    )
                  : null}
              </div>
            ) : null
          }
        </div>
      )}
    </>
  )
}

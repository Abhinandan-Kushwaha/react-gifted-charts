import { Fragment } from 'react'
import {
  PopulationPyramidPropsTypeReactJS,
  RulesPropsReactJS,
  ruleTypes,
  usePopulationPyramid
} from 'gifted-charts-core'
import { Framework } from 'gifted-charts-core/src/utils/types'

export const PopulationPyramid = (props: PopulationPyramidPropsTypeReactJS) => {
  const {
    width,
    verticalMarginBetweenBars,
    barsMapToYAxisSections,
    data,
    hideRules,
    yAxisColor,
    xAxisColor,
    xAxisThickness,
    xAxisType,
    xAxisNoOfSections,
    showXAxisIndices,
    showXAxisLabelTexts,
    xAxisLabelShiftX,
    xAxisLabelPrefix,
    xAxisLabelSuffix,
    formatXAxisLabels,
    showVerticalLines,
    showYAxisIndices,
    yAxisIndicesWidth,
    yAxisIndicesHeight,
    yAxisIndicesColor,
    yAxisLabelFontSize,
    yAxisLabelFontStyle,
    yAxisLabelFontWeight,
    yAxisLabelFontFamily,
    yAxisLabelColor,
    yAxisLabelTextMarginRight,
    yAxisLabelTexts,
    showValuesAsBarLabels,
    rulesThickness,
    rulesColor,
    rulesType,
    dashWidth,
    dashGap,
    leftBarLabelWidth,
    leftBarLabelFontSize,
    leftBarLabelColor,
    leftBarLabelFontStyle,
    leftBarLabelFontWeight,
    leftBarLabelFontFamily,
    leftBarLabelPrefix,
    leftBarLabelSuffix,
    rightBarLabelFontSize,
    rightBarLabelColor,
    rightBarLabelFontStyle,
    rightBarLabelFontWeight,
    rightBarLabelFontFamily,
    rightBarLabelPrefix,
    rightBarLabelSuffix,
    formatBarLabels,
    showMidAxis,
    midAxisLabelFontSize,
    midAxisLabelColor,
    midAxisLabelFontStyle,
    midAxisLabelFontWeight,
    midAxisLabelFontFamily,
    leftBarColor,
    rightBarColor,
    leftBarBorderColor,
    rightBarBorderColor,
    leftBarBorderWidth,
    rightBarBorderWidth,
    leftBarBorderRadius,
    rightBarBorderRadius,
    allCornersRounded,
    showSurplus,
    showSurplusLeft,
    showSurplusRight,
    leftSurplusColor,
    leftSurplusBorderColor,
    rightSurplusColor,
    rightSurplusBorderColor,
    leftSurplusBorderWidth,
    rightSurplusBorderWidth,
    yAxisLabelWidth,
    noOfSections,
    stepHeight,
    containerHeightWithXaxisLabels,
    mid,
    barWidthFactor,
    leftXAfterMid,
    rightXAfterMid,
    yAxisLineProps,
    midAxisLineCommonProps,
    xAxisIndicesCommonProps,
    verticalLinesCommonProps,
    xAxisLabelsCommonProps,
    getXLabel
  } = usePopulationPyramid({
    ...props,
    screenWidth: 300,
    framework: Framework.reactJS
  })

  /*********************************************************************************************
   ***********************        Type modifications for ReactJS         **********************/

  const yAxisStroke = yAxisLineProps.stroke?.toString()
  const yAxisStrokeDashArray = yAxisLineProps.strokeDasharray?.toString()
  const verticalLinesStroke = verticalLinesCommonProps.stroke?.toString()
  const verticalLinesStrokeDashArray =
    verticalLinesCommonProps.strokeDasharray?.toString()
  const xAxisIndicesStroke = xAxisIndicesCommonProps.stroke.toString()
  const midAxisStrokeDashArray =
    midAxisLineCommonProps.strokeDasharray?.toString()
  const xAxisLabelStroke = xAxisLabelsCommonProps.stroke.toString()

  return (
    <div style={{ height: containerHeightWithXaxisLabels, width }}>
      <svg fill={'none'} height={containerHeightWithXaxisLabels}>
        {/**************        Y-Axis         ************/}
        <line
          {...yAxisLineProps}
          stroke={yAxisStroke}
          strokeDasharray={yAxisStrokeDashArray}
        />

        {/************        Rules, X-axis and Y-Axis labels         ***********/}
        {Array.from(Array(noOfSections)).map((item, index) => {
          const isLast = index === noOfSections - 1
          const y = stepHeight * (index + 1)
          const rulesProps: RulesPropsReactJS = {
            x1: yAxisLabelWidth,
            y1: y,
            x2: width,
            y2: y,
            stroke: (isLast ? xAxisColor : rulesColor).toString(),
            strokeWidth: isLast ? xAxisThickness : rulesThickness
          }
          if (
            (isLast && xAxisType !== ruleTypes.SOLID) ||
            (!isLast && rulesType !== ruleTypes.SOLID)
          ) {
            rulesProps.strokeDasharray = [dashWidth, dashGap].toString()
          } else {
            delete rulesProps.strokeDasharray
          }
          return (
            <Fragment key={'rule' + index}>
              {!hideRules || isLast ? (
                <line
                  {...rulesProps}
                  strokeDasharray={rulesProps.strokeDasharray?.toString()}
                />
              ) : null}
              {showYAxisIndices ? (
                <line
                  x1={yAxisLabelWidth - yAxisIndicesWidth / 2}
                  y1={y}
                  x2={yAxisLabelWidth + yAxisIndicesWidth / 2}
                  y2={y}
                  stroke={yAxisIndicesColor.toString()}
                  strokeWidth={yAxisIndicesHeight}
                />
              ) : null}
              {/**************     Y-Axis Labels      ************/}
              {!barsMapToYAxisSections ? (
                <text
                  x={yAxisLabelWidth - yAxisLabelTextMarginRight}
                  y={stepHeight * (index + 0.5) + yAxisLabelFontSize / 2 - 2}
                  stroke={yAxisLabelColor.toString()}
                  fontSize={yAxisLabelFontSize}
                  fontStyle={yAxisLabelFontStyle}
                  fontWeight={yAxisLabelFontWeight}
                  fontFamily={yAxisLabelFontFamily}
                  textAnchor='end'
                >
                  {yAxisLabelTexts[index] ?? ''}
                </text>
              ) : null}
            </Fragment>
          )
        })}

        {/**************     X-Axis Labels Left     ************/}
        {Array.from(Array(xAxisNoOfSections)).map((item, index) => {
          const x = leftXAfterMid - (leftXAfterMid * index) / xAxisNoOfSections
          const unformattedXLabel = getXLabel(index)
          const xLabel = formatXAxisLabels
            ? formatXAxisLabels(unformattedXLabel)
            : unformattedXLabel
          return (
            <Fragment key={'x-axis' + index}>
              {showVerticalLines ? (
                <line
                  {...verticalLinesCommonProps}
                  x1={x}
                  x2={x}
                  stroke={verticalLinesStroke}
                  strokeDasharray={verticalLinesStrokeDashArray}
                />
              ) : null}
              {showXAxisIndices ? (
                <line
                  {...xAxisIndicesCommonProps}
                  x1={x}
                  x2={x}
                  stroke={xAxisIndicesStroke}
                />
              ) : null}
              {showXAxisLabelTexts ? (
                <text
                  {...xAxisLabelsCommonProps}
                  x={x + xAxisLabelShiftX}
                  stroke={xAxisLabelStroke}
                  textAnchor='middle'
                >
                  {xAxisLabelPrefix + xLabel + xAxisLabelSuffix}
                </text>
              ) : null}
            </Fragment>
          )
        })}

        {/**************     X-Axis Labels Right     ************/}
        {Array.from(Array(xAxisNoOfSections)).map((item, index) => {
          if (!index && !showMidAxis) return null
          const x = leftXAfterMid + (leftXAfterMid * index) / xAxisNoOfSections
          const unformattedXLabel = getXLabel(index)
          const xLabel = formatXAxisLabels
            ? formatXAxisLabels(unformattedXLabel)
            : unformattedXLabel
          return (
            <Fragment key={'x-axis' + index}>
              {showVerticalLines ? (
                <line
                  {...verticalLinesCommonProps}
                  x1={x}
                  x2={x}
                  stroke={verticalLinesStroke}
                  strokeDasharray={verticalLinesStrokeDashArray}
                />
              ) : null}
              {showXAxisIndices ? (
                <line
                  {...xAxisIndicesCommonProps}
                  x1={x}
                  x2={x}
                  stroke={xAxisIndicesStroke}
                />
              ) : null}
              {showXAxisLabelTexts ? (
                <text
                  {...xAxisLabelsCommonProps}
                  x={x + xAxisLabelShiftX}
                  stroke={xAxisLabelStroke}
                  textAnchor='middle'
                >
                  {xAxisLabelPrefix + xLabel + xAxisLabelSuffix}
                </text>
              ) : null}
            </Fragment>
          )
        })}

        {/**************        Bars          ************/}
        {data.map((item, index) => {
          const leftWidth = item.left * barWidthFactor
          const rightWidth = item.right * barWidthFactor
          const y = stepHeight * index + verticalMarginBetweenBars

          const leftSurplusWidth = leftWidth - rightWidth
          const rightSurplusWidth = rightWidth - leftWidth
          const leftRadius =
            item.leftBarBorderRadius ??
            item.barBorderRadius ??
            leftBarBorderRadius
          const rightRadius =
            item.rightBarBorderRadius ??
            item.barBorderRadius ??
            rightBarBorderRadius

          const leftBorderWidth =
            item.leftBarBorderWidth ?? item.barBorderWidth ?? leftBarBorderWidth
          const rightBorderWidth =
            item.rightBarBorderWidth ??
            item.barBorderWidth ??
            rightBarBorderWidth

          const unFormattedLeftBarLabel =
            item.leftBarLabel ??
            (showValuesAsBarLabels ? item.left.toString() : '')
          const leftBarLabel = formatBarLabels
            ? formatBarLabels(unFormattedLeftBarLabel)
            : unFormattedLeftBarLabel

          const unFormattedRightBarLabel =
            item.rightBarLabel ??
            (showValuesAsBarLabels ? item.right.toString() : '')
          const rightBarLabel = formatBarLabels
            ? formatBarLabels(unFormattedRightBarLabel)
            : unFormattedRightBarLabel

          const leftLabelFontSize =
            item.leftBarLabelFontSize ?? leftBarLabelFontSize

          const leftLabelX =
            leftXAfterMid -
            leftWidth -
            leftBarBorderWidth / 2 -
            yAxisLabelWidth / 2 -
            leftBarLabelWidth / 2 +
            28 -
            (leftBarLabel.length * leftLabelFontSize) / 2 +
            (item.leftBarLabelShift ?? props.leftBarLabelShift ?? 0)

          const rightLabelX =
            rightXAfterMid +
            rightBarBorderWidth / 2 +
            rightWidth +
            3 +
            (item.rightBarLabelShift ?? props.rightBarLabelShift ?? 0)

          const leftBarCommonProps = {
            x: leftXAfterMid - leftWidth - leftBarBorderWidth / 2,
            y: y,
            width: leftWidth,
            height: stepHeight - verticalMarginBetweenBars * 2,
            rx: leftRadius,
            ry: leftRadius
          }
          const rightBarCommonProps = {
            x: rightXAfterMid + rightBarBorderWidth / 2,
            y: y,
            width: rightWidth,
            height: stepHeight - verticalMarginBetweenBars * 2,
            rx: rightRadius,
            ry: rightRadius
          }
          return (
            <Fragment key={'bars' + index}>
              {/**************     Y-Axis Labels      ************/}
              {barsMapToYAxisSections ? (
                <text
                  x={yAxisLabelWidth - yAxisLabelTextMarginRight}
                  y={stepHeight * (index + 0.5) + yAxisLabelFontSize / 2 - 2}
                  stroke={yAxisLabelColor.toString()}
                  fontSize={yAxisLabelFontSize}
                  fontStyle={yAxisLabelFontStyle}
                  fontWeight={yAxisLabelFontWeight}
                  fontFamily={yAxisLabelFontFamily}
                  textAnchor='end'
                >
                  {item.yAxisLabel ?? yAxisLabelTexts[index] ?? ''}
                </text>
              ) : null}

              {/**************     Left Bars      ************/}
              <rect
                {...leftBarCommonProps}
                fill={(item.leftBarColor ?? leftBarColor).toString()}
                stroke={(
                  item.leftBarBorderColor ?? leftBarBorderColor
                ).toString()}
                strokeWidth={leftBorderWidth}
              />
              <clipPath id={'cp-left' + index}>
                <rect {...leftBarCommonProps} />
              </clipPath>
              {/*********   Hide inner border-radius ********/}
              {!allCornersRounded && leftWidth >= leftRadius ? (
                <>
                  <rect
                    x={leftXAfterMid - leftRadius}
                    y={y}
                    width={leftRadius}
                    height={stepHeight - verticalMarginBetweenBars * 2}
                    fill={(item.leftBarColor ?? leftBarColor).toString()}
                  />
                  {/*********   work-around for border ********/}
                  {leftBorderWidth ? (
                    <>
                      <line
                        x1={leftXAfterMid - leftRadius}
                        y1={y}
                        x2={leftXAfterMid}
                        y2={y}
                        stroke={(
                          item.leftBarBorderColor ?? leftBarBorderColor
                        ).toString()}
                        strokeWidth={leftBorderWidth}
                      />
                      <line
                        x1={leftXAfterMid - leftRadius}
                        y1={y + stepHeight - verticalMarginBetweenBars * 2}
                        x2={leftXAfterMid}
                        y2={y + stepHeight - verticalMarginBetweenBars * 2}
                        stroke={(
                          item.leftBarBorderColor ?? leftBarBorderColor
                        ).toString()}
                        strokeWidth={leftBorderWidth}
                      />
                    </>
                  ) : null}
                </>
              ) : null}

              {/**************     Left Bar Labels      ************/}
              {leftBarLabel !== '' ? (
                <text
                  x={leftLabelX}
                  y={stepHeight * (index + 0.5) + yAxisLabelFontSize / 2 - 2}
                  stroke={(
                    item.leftBarLabelColor ?? leftBarLabelColor
                  ).toString()}
                  fontSize={leftLabelFontSize}
                  fontStyle={
                    item.leftBarLabelFontStyle ?? leftBarLabelFontStyle
                  }
                  fontWeight={
                    item.leftBarLabelFontWeight ?? leftBarLabelFontWeight
                  }
                  fontFamily={
                    item.leftBarLabelFontFamily ?? leftBarLabelFontFamily
                  }
                  textAnchor='start'
                >
                  {leftBarLabelPrefix + leftBarLabel + leftBarLabelSuffix}
                </text>
              ) : null}

              {/**************     Right Bars      ************/}
              <rect
                {...rightBarCommonProps}
                fill={(item.rightBarColor ?? rightBarColor).toString()}
                stroke={(
                  item.rightBarBorderColor ?? rightBarBorderColor
                ).toString()}
                strokeWidth={rightBorderWidth}
              />
              <clipPath id={'cp-right' + index}>
                <rect {...rightBarCommonProps} />
              </clipPath>
              {/*********   Hide inner border-radius ********/}
              {!allCornersRounded && rightWidth >= rightRadius ? (
                <>
                  <rect
                    x={rightXAfterMid}
                    y={y}
                    width={rightRadius}
                    height={stepHeight - verticalMarginBetweenBars * 2}
                    fill={(item.rightBarColor ?? rightBarColor).toString()}
                  />
                  {/*********   work-around for border ********/}
                  {rightBorderWidth ? (
                    <>
                      <line
                        x1={rightXAfterMid}
                        y1={y}
                        x2={rightXAfterMid + rightRadius}
                        y2={y}
                        stroke={(
                          item.rightBarBorderColor ?? rightBarBorderColor
                        ).toString()}
                        strokeWidth={rightBorderWidth}
                      />
                      <line
                        x1={rightXAfterMid}
                        y1={y + stepHeight - verticalMarginBetweenBars * 2}
                        x2={rightXAfterMid + rightRadius}
                        y2={y + stepHeight - verticalMarginBetweenBars * 2}
                        stroke={(
                          item.rightBarBorderColor ?? rightBarBorderColor
                        ).toString()}
                        strokeWidth={rightBorderWidth}
                      />
                    </>
                  ) : null}
                </>
              ) : null}

              {/**************     Right Bar Labels      ************/}
              {rightBarLabel !== '' ? (
                <text
                  x={rightLabelX}
                  y={stepHeight * (index + 0.5) + yAxisLabelFontSize / 2 - 2}
                  stroke={(
                    item.rightBarLabelColor ?? rightBarLabelColor
                  ).toString()}
                  fontSize={item.rightBarLabelFontSize ?? rightBarLabelFontSize}
                  fontStyle={
                    item.rightBarLabelFontStyle ?? rightBarLabelFontStyle
                  }
                  fontWeight={
                    item.rightBarLabelFontWeight ?? rightBarLabelFontWeight
                  }
                  fontFamily={
                    item.rightBarLabelFontFamily ?? rightBarLabelFontFamily
                  }
                  textAnchor='start'
                >
                  {rightBarLabelPrefix + rightBarLabel + rightBarLabelSuffix}
                </text>
              ) : null}

              {/**************     Left Surplus      ************/}
              {(showSurplus ||
                showSurplusLeft ||
                item.showSurplus ||
                item.showSurplusLeft) &&
              leftSurplusWidth > 0 ? (
                <>
                  <rect
                    id={'l-spls' + index}
                    x={leftXAfterMid - leftWidth - leftBarBorderWidth / 2}
                    y={y}
                    width={leftSurplusWidth}
                    height={stepHeight - verticalMarginBetweenBars * 2}
                    stroke={(
                      item.leftSurplusBorderColor ?? leftSurplusBorderColor
                    ).toString()}
                    strokeWidth={
                      item.leftSurplusBorderWidth ?? leftSurplusBorderWidth
                    }
                  />
                  <use
                    fill={(
                      item.leftSurplusColor ?? leftSurplusColor
                    ).toString()}
                    clipPath={'#cp-left' + index}
                    href={'#l-spls' + index}
                  />
                  {/*********      remove inner curve     ********/}
                  {leftSurplusWidth >= leftRadius ? (
                    <>
                      <rect
                        id={'hide-in-left' + index}
                        x={
                          leftXAfterMid -
                          leftWidth -
                          leftBarBorderWidth +
                          leftSurplusWidth -
                          leftRadius
                        }
                        y={y}
                        width={leftRadius}
                        height={stepHeight - verticalMarginBetweenBars * 2}
                      />
                      <use
                        fill={(
                          item.leftSurplusColor ?? leftSurplusColor
                        ).toString()}
                        clipPath={`url(#cp-left${index})`}
                        href={'#hide-in-left' + index}
                      />
                    </>
                  ) : null}
                </>
              ) : null}
              {/**************     Right Surplus      ************/}
              {(showSurplus ||
                showSurplusRight ||
                item.showSurplus ||
                item.showSurplusRight) &&
              rightSurplusWidth > 0 ? (
                <>
                  <rect
                    id={'r-spls' + index}
                    x={
                      rightXAfterMid +
                      rightBarBorderWidth / 2 +
                      rightWidth -
                      rightSurplusWidth
                    }
                    y={y}
                    width={rightSurplusWidth}
                    height={stepHeight - verticalMarginBetweenBars * 2}
                    stroke={(
                      item.rightSurplusBorderColor ?? rightSurplusBorderColor
                    ).toString()}
                    strokeWidth={
                      item.rightSurplusBorderWidth ?? rightSurplusBorderWidth
                    }
                  />
                  <use
                    fill={(
                      item.rightSurplusColor ?? rightSurplusColor
                    ).toString()}
                    clipPath={'#cp-right' + index}
                    href={'#r-spls' + index}
                  />
                  {/*********       remove inner curve     ********/}
                  {rightSurplusWidth >= rightRadius ? (
                    <>
                      <rect
                        id={'hide-in-right' + index}
                        x={
                          rightXAfterMid +
                          rightBarBorderWidth / 2 +
                          rightWidth -
                          rightSurplusWidth
                        }
                        y={y}
                        width={rightRadius}
                        height={stepHeight - verticalMarginBetweenBars * 2}
                      />
                      <use
                        fill={(
                          item.rightSurplusColor ?? rightSurplusColor
                        ).toString()}
                        clipPath={`url(#cp-right${index})`}
                        href={'#hide-in-right' + index}
                      />
                    </>
                  ) : null}
                </>
              ) : null}
            </Fragment>
          )
        })}

        {/**************     Mid Axis      ************/}
        {showMidAxis ? (
          <>
            <line
              {...midAxisLineCommonProps}
              stroke={(
                props.midAxisLeftColor ??
                props.midAxisColor ??
                yAxisColor
              ).toString()}
              x1={leftXAfterMid}
              x2={leftXAfterMid}
              strokeDasharray={midAxisStrokeDashArray}
            />

            <line
              {...midAxisLineCommonProps}
              stroke={(
                props.midAxisRightColor ??
                props.midAxisColor ??
                yAxisColor
              ).toString()}
              x1={rightXAfterMid}
              x2={rightXAfterMid}
              strokeDasharray={midAxisStrokeDashArray}
            />

            {data.map((item, index) => {
              const y = stepHeight * (index + 0.5)
              return (
                <text
                  key={'ml' + index}
                  x={mid}
                  y={y + midAxisLabelFontSize / 2}
                  stroke={(
                    item.midAxisLabelColor ?? midAxisLabelColor
                  ).toString()}
                  fontSize={item.midAxisLabelFontSize ?? midAxisLabelFontSize}
                  fontStyle={
                    item.midAxisLabelFontStyle ?? midAxisLabelFontStyle
                  }
                  fontWeight={
                    item.midAxisLabelFontWeight ?? midAxisLabelFontWeight
                  }
                  fontFamily={
                    item.midAxisLabelFontFamily ?? midAxisLabelFontFamily
                  }
                  textAnchor='middle'
                >
                  {item.midAxisLabel ?? ''}
                </text>
              )
            })}
          </>
        ) : null}
      </svg>
    </div>
  )
}

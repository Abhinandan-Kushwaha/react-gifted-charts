import React, { Fragment } from 'react'

import { RadarChartProps, useRadarChart } from 'gifted-charts-core'

export const RadarChart = (props: RadarChartProps) => {
  const {
    data,
    dataSet,
    center,
    radius,
    chartSize,
    polarToCartesian,
    labels,
    labelConfigArray,
    labelsPositionOffset,
    dataLabelsConfigArray,
    maxValue,
    dataLabels,
    dataLabelsArray,
    gridSections,
    gridFill,
    fontSize,
    stroke,
    textAnchor,
    alignmentBaseline,
    fontWeight,
    fontFamily,
    dataLabelsPositionOffset,
    polygonStroke,
    polygonStrokeWidth,
    polygonStrokeDashArray: polygonStrokeArray,
    polygonFill,
    polygonGradientColor,
    polygonShowGradient,
    polygonOpacity,
    polygonGradientOpacity,
    asterLinesStroke,
    asterLinesStrokeWidth,
    asterLinesStrokeDashArray: asterLineStrokeArray,
    polygonPoints,
    polygonPointsArray,
    polygonConfigArray,
    angleStep,
    circular,
    hideGrid,
    hideAsterLines,
    getGridLevelProps
  } = useRadarChart(props)

  const polygonStrokeDashArray = polygonStrokeArray.join(',')
  const asterLinesStrokeDashArray = asterLineStrokeArray.join(',')

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
      <svg height={chartSize} width={chartSize}>
        {polygonConfigArray?.length ? (
          polygonConfigArray.map((polygonConfigItem, index) => {
            const { fill, gradientColor, opacity, gradientOpacity } =
              polygonConfigItem
            return (
              <defs>
                <radialGradient
                  key={`polygon-${index}`}
                  id={`polygon-${index}`}
                  cx={center}
                  cy={center}
                  rx={radius}
                  ry={radius}
                  fx='50%'
                  fy='50%'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop
                    offset='0%'
                    stopColor={gradientColor}
                    stopOpacity={gradientOpacity}
                  />
                  <stop offset='100%' stopColor={fill} stopOpacity={opacity} />
                </radialGradient>
              </defs>
            )
          })
        ) : polygonShowGradient ? (
          <defs>
            <radialGradient
              key={'polygon'}
              id={'polygon'}
              cx={center}
              cy={center}
              rx={radius}
              ry={radius}
              fx='50%'
              fy='50%'
              gradientUnits='userSpaceOnUse'
            >
              <stop
                offset='0%'
                stopColor={polygonGradientColor}
                stopOpacity={polygonGradientOpacity}
              />
              <stop
                offset='100%'
                stopColor={polygonFill}
                stopOpacity={polygonOpacity}
              />
            </radialGradient>
          </defs>
        ) : null}

        {hideGrid
          ? null
          : gridSections.map((l, ind) => {
              const {
                level,
                gridGradientColorLocal,
                gridFillColorLocal,
                gridOpacityLocal,
                gridGradientOpacityLocal,
                gridStrokeLocal,
                gridStrokeWidthLocal,
                gridShowGradientLocal,
                gridStrokeDashArrayLocal: gridStrokeDasharray,
                levelPolygonPoints,
                r
              } = getGridLevelProps(l, ind)

              const gridStrokeDashArrayLocal = gridStrokeDasharray.join(',')

              return (
                <Fragment key={`fragment-${level}`}>
                  <defs>
                    <radialGradient
                      key={level + ''}
                      id={'grad' + level}
                      cx={center}
                      cy={center}
                      rx={r}
                      ry={r}
                      fx='50%'
                      fy='50%'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop
                        offset={`${100 - 100 / level}%`}
                        stopColor={gridGradientColorLocal}
                        stopOpacity={gridGradientOpacityLocal}
                      />
                      <stop
                        offset='100%'
                        stopColor={gridFillColorLocal}
                        stopOpacity={gridOpacityLocal}
                      />
                    </radialGradient>
                  </defs>
                  {circular ? (
                    <circle
                      key={`grid-${level}`}
                      cx={center}
                      cy={center}
                      r={r}
                      stroke={gridStrokeLocal}
                      strokeWidth={gridStrokeWidthLocal}
                      strokeDasharray={gridStrokeDashArrayLocal}
                      fill={
                        gridShowGradientLocal ? `url(#grad${level})` : gridFill
                      }
                    />
                  ) : (
                    <polygon
                      key={`grid-${level}`}
                      points={levelPolygonPoints}
                      stroke={gridStrokeLocal}
                      strokeWidth={gridStrokeWidthLocal}
                      strokeDasharray={gridStrokeDashArrayLocal}
                      fill={
                        gridShowGradientLocal ? `url(#grad${level})` : gridFill
                      }
                    />
                  )}
                </Fragment>
              )
            })}

        {/* Draw the data polygon */}
        {dataSet ? (
          polygonConfigArray?.map((item, index) => {
            const polygonPoints = polygonPointsArray[index]
            const {
              stroke,
              strokeWidth,
              strokeDashArray,
              fill,
              showGradient,
              opacity
            } = item

            return (
              <polygon
                key={`polygon-${index}`}
                points={polygonPoints}
                fill={showGradient ? 'url(#polygon)' : fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDashArray}
                opacity={opacity}
              />
            )
          })
        ) : (
          <polygon
            points={polygonPoints}
            fill={polygonShowGradient ? 'url(#polygon)' : polygonFill}
            stroke={polygonStroke}
            strokeWidth={polygonStrokeWidth}
            strokeDasharray={polygonStrokeDashArray}
            opacity={polygonOpacity}
          />
        )}

        {dataSet?.length && dataLabelsArray?.length ? (
          dataLabelsArray?.map((labels, index) => {
            const dataItem = dataSet[index]
            return labels?.map((label, labelIndex) => {
              const { x, y } = polarToCartesian(
                labelIndex * angleStep,
                dataItem[labelIndex] + dataLabelsPositionOffset
              )
              const {
                fontSize: dataLabelsFontSize,
                stroke: dataLabelsColor,
                textAnchor: dataLabelsTextAnchor,
                alignmentBaseline: dataLabelsAlignmentBaseline,
                fontWeight: dataLabelsFontWeight,
                fontFamily: dataLabelsFontFamily
              } = dataLabelsConfigArray?.[labelIndex] ?? {}
              return (
                <text
                  key={`data-label-${index}-${labelIndex}`}
                  x={x}
                  y={y}
                  fontSize={dataLabelsFontSize}
                  fill={dataLabelsColor}
                  fontWeight={dataLabelsFontWeight}
                  fontFamily={dataLabelsFontFamily}
                  textAnchor={dataLabelsTextAnchor ?? 'middle'}
                  alignmentBaseline={dataLabelsAlignmentBaseline ?? 'middle'}
                >
                  {label}
                </text>
              )
            })
          })
        ) : dataLabels?.length ? (
          <text>
            {dataLabels.map((label, index) => {
              const { x, y } = polarToCartesian(
                index * angleStep,
                data[index] + dataLabelsPositionOffset
              )
              const {
                fontSize: dataLabelsFontSize,
                stroke: dataLabelsColor,
                textAnchor: dataLabelsTextAnchor,
                alignmentBaseline: dataLabelsAlignmentBaseline,
                fontWeight: dataLabelsFontWeight,
                fontFamily: dataLabelsFontFamily
              } = dataLabelsConfigArray?.[index] ?? {}
              return (
                <text
                  key={`data-label-${index}`}
                  x={x}
                  y={y}
                  fontSize={dataLabelsFontSize}
                  fill={dataLabelsColor}
                  fontWeight={dataLabelsFontWeight}
                  fontFamily={dataLabelsFontFamily}
                  textAnchor={dataLabelsTextAnchor ?? 'middle'}
                  alignmentBaseline={dataLabelsAlignmentBaseline ?? 'middle'}
                >
                  {label}
                </text>
              )
            })}
          </text>
        ) : null}

        {/* Draw lines from center to the points (axes) */}
        {hideAsterLines
          ? null
          : labels.map((_, index) => {
              const angle = index * angleStep
              const { x, y } = polarToCartesian(angle, maxValue)
              return (
                <line
                  key={`axis-${index}`}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke={asterLinesStroke}
                  strokeWidth={asterLinesStrokeWidth}
                  strokeDasharray={asterLinesStrokeDashArray}
                />
              )
            })}

        {/* Draw category labels */}
        {labels.map((category, index) => {
          const angle = index * angleStep
          const { x, y } = polarToCartesian(
            angle,
            maxValue + labelsPositionOffset
          ) // Offset for label position
          const fontSizeLocal = labelConfigArray?.[index]?.fontSize ?? fontSize
          const fontWeightLocal =
            labelConfigArray?.[index]?.fontWeight ?? fontWeight
          const fontFamilyLocal =
            labelConfigArray?.[index]?.fontFamily ?? fontFamily
          const colorLocal = labelConfigArray?.[index]?.stroke ?? stroke
          const textAnchorLocal =
            labelConfigArray?.[index]?.textAnchor ?? textAnchor
          const alignmentBaselineLocal: any =
            labelConfigArray?.[index]?.alignmentBaseline ?? alignmentBaseline
          return (
            <text
              key={`label-${index}`}
              x={x}
              y={y}
              fontSize={fontSizeLocal}
              fontWeight={fontWeightLocal}
              fontFamily={fontFamilyLocal}
              fill={colorLocal}
              textAnchor={textAnchorLocal ?? 'middle'}
              alignmentBaseline={alignmentBaselineLocal ?? 'middle'}
            >
              {category}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

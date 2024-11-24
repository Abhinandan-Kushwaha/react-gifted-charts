import { PieChartPropsType, pieColors } from 'gifted-charts-core'
import { usePiePro } from './pro'
import './styles.css'

export const PieChartPro = (props: PieChartPropsType) => {
  const {
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
    height,
    heightFactor,
    svgProps
  } = usePiePro(props)

  const {
    data,
    curvedStartEdges,
    curvedEndEdges,
    edgesRadius,
    showGradient,
    ring,
    centerLabelComponent,
    strokeDashArray
  } = props

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * heightFactor,
        width: (radius + maxStrokeWidth) * 2
      }}
    >
      <div style={{ position: 'absolute' }}>
        {centerLabelComponent ? centerLabelComponent() : null}
      </div>
      <svg
        {...svgProps}
        transform={`scale(1,${
          maxStrokeWidth ? 1 + maxStrokeWidth / (radius * 2) : 1
        })`}
      >
        {total ? (
          <>
            <defs>
              {data.map((item, index) => {
                return (
                  <radialGradient
                    key={index + ''}
                    id={'grad' + index}
                    cx='50%'
                    cy='50%'
                    rx='50%'
                    ry='50%'
                    fx='50%'
                    fy='50%'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop
                      offset='0%'
                      stopColor={item.gradientCenterColor}
                      stopOpacity='1'
                    />
                    <stop
                      offset='100%'
                      stopColor={item.color || pieColors[index % 9]}
                      stopOpacity='1'
                    />
                  </radialGradient>
                )
              })}
            </defs>
            {data.map((item, index) => {
              const borderWidth = item.strokeWidth ?? strokeWidth
              const borderColor =
                item.strokeColor ??
                props.strokeColor ??
                (borderWidth ? 'black' : 'undefined')
              const strokeDashArrayLocal =
                item.strokeDashArray ?? strokeDashArray
              return (
                <path
                  id='renderPath'
                  key={`pie${index}`}
                  d={dFinal[index]}
                  fill={
                    ring
                      ? 'none'
                      : showGradient
                      ? `url(#grad${index})`
                      : data[index].color || pieColors[index % 9]
                  }
                  strokeWidth={borderWidth}
                  stroke={borderColor}
                  strokeDasharray={
                    strokeDashArrayLocal?.length === 2
                      ? `${strokeDashArrayLocal[0]} ${strokeDashArrayLocal[1]}`
                      : ``
                  }
                >
                  {isAnimated ? (
                    <animate
                      dur={animationDuration / 1000}
                      attributeName='d'
                      values={`${dInitial[index]};${dFinal[index]}`}
                    />
                  ) : null}
                </path>
              )
            })}

            {donut
              ? data.map((item, index) => {
                  if (
                    curvedStartEdges ||
                    edgesRadius ||
                    item.isStartEdgeCurved ||
                    item.startEdgeRadius
                  )
                    return (
                      <path
                        key={`cap${index}`}
                        d={`${initial} ${getStartCaps(index, item)}`}
                        fill={
                          showGradient
                            ? `url(#grad${index})`
                            : data[index].color || pieColors[index % 9]
                        }
                        className={isAnimated ? 'appear' : ''}
                      />
                    )
                  return null
                })
              : null}

            {donut
              ? data.map((item, index) => {
                  if (
                    curvedEndEdges ||
                    edgesRadius ||
                    item.isEndEdgeCurved ||
                    item.endEdgeRadius
                  )
                    return (
                      <path
                        key={`cap${index}`}
                        d={`${initial} ${getEndCaps(index, item)}`}
                        fill={
                          showGradient
                            ? `url(#grad${index})`
                            : data[index].color || pieColors[index % 9]
                        }
                        className={isAnimated ? 'appear' : ''}
                      />
                    )
                  return null
                })
              : null}

            {data.map((item, index) => {
              const { x, y } = getTextCoordinates(index, item.labelPosition)

              return (
                <text
                  key={`label${index}`}
                  style={{ pointerEvents: 'all' }}
                  fill={
                    item.textColor ||
                    props.textColor ||
                    pieColors[(index + 2) % 9]
                  }
                  fontSize={item.textSize || props.textSize}
                  fontFamily={item.font || props.font}
                  fontWeight={item.fontWeight || props.fontWeight}
                  fontStyle={item.fontStyle || props.fontStyle || 'normal'}
                  x={
                    x +
                    (item.shiftTextX || 0) -
                    (item.textSize ?? props.textSize ?? 0) / 1.8
                  }
                  y={y + (item.shiftTextY || 0)}
                  onClick={() => {
                    item.onLabelPress
                      ? item.onLabelPress()
                      : props.onLabelPress
                      ? props.onLabelPress(item, index)
                      : item.onPress
                      ? item.onPress()
                      : props.onPress?.(item, index)
                  }}
                  className={isAnimated ? 'appear' : ''}
                >
                  {item.text ||
                    (props.showValuesAsLabels ? item.value + '' : '')}
                </text>
              )
            })}
          </>
        ) : null}
      </svg>
    </div>
  )
}

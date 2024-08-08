import React, { useState, useEffect, useRef } from 'react'

interface TooltipProps {
  barHeight: number
  barWidth: number
  item: any
  index: number
  isLast: boolean
  leftSpacing: number
  leftShiftForLastIndexTooltip: number
  leftShiftForTooltip: number
  renderTooltip?: Function
  autoCenterTooltip?: boolean
  horizontal?: boolean
}

const Tooltip = (props: TooltipProps) => {
  const divRef = useRef(null)
  const {
    barHeight,
    barWidth,
    item,
    index,
    isLast,
    leftSpacing,
    leftShiftForLastIndexTooltip,
    leftShiftForTooltip,
    renderTooltip,
    autoCenterTooltip,
    horizontal
  } = props

  //   const [width, setWidth] = useState(0);

  const [leftShiftTooltipForCentering, setLeftShiftTooltipForCentering] =
    useState(0)

  useEffect(() => {
    const divElement = divRef.current
    let resizeObserver: ResizeObserver

    if (autoCenterTooltip) {
      resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const width = entry.contentRect.width
          const shift = (width - barWidth) / 2
          if (shift > 0) setLeftShiftTooltipForCentering(shift)
        }
      })

      if (divElement) {
        resizeObserver.observe(divElement)
      }
    }

    return () => {
      if (divElement) {
        resizeObserver?.unobserve(divElement)
      }
    }
  }, [])

  return (
    <div
      ref={divRef}
      style={{
        position: 'absolute',
        bottom: barHeight + 60,
        left:
          leftSpacing -
          (isLast ? leftShiftForLastIndexTooltip : leftShiftForTooltip) -
          leftShiftTooltipForCentering,
        zIndex: 1000,
        transform: `rotate(${horizontal ? -90 : 0}deg)`
      }}
    >
      {renderTooltip?.(item, index)}
    </div>
  )
}

export default Tooltip

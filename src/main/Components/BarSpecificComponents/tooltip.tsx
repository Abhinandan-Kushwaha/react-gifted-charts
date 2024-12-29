import { TooltipProps } from 'gifted-charts-core'
import { useState, useEffect, useRef } from 'react'

const Tooltip = (props: TooltipProps) => {
  const divRef = useRef(null)
  const {
    barWidth,
    item,
    index,
    isLast,
    leftSpacing,
    leftShiftForLastIndexTooltip,
    leftShiftForTooltip,
    renderTooltip,
    autoCenterTooltip,
    horizontal,
    bottom
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
          setLeftShiftTooltipForCentering((width - barWidth) / 2)
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
        bottom: bottom - 28,
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

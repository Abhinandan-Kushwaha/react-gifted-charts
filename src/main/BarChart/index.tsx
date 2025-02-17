import React, { useEffect, useRef } from 'react'
import RenderBars from './RenderBars'
import RenderStackBars from './RenderStackBars'
import BarAndLineChartsWrapper from '../Components/BarAndLineChartsWrapper'
import { useBarChart } from 'gifted-charts-core'
import { StripAndLabel } from '../Components/common/StripAndLabel'
import { Pointer } from '../Components/common/Pointer'
import { BarChartPropsTypeForWeb } from 'gifted-charts-core/dist/BarChart/types'

export const BarChart = (props: BarChartPropsTypeForWeb) => {
  // const heightValue = useMemo(() => new Animated.Value(0), []);
  // const opacValue = useMemo(() => new Animated.Value(0), []);
  // const widthValue = useMemo(() => new Animated.Value(0), []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollRef = props.scrollRef ?? useRef(null)
  const scrollToBarRef = useRef<null | HTMLDivElement>(null)
  const remainingScrollViewProps = {
    onScroll: (ev: any) => props.onScroll?.(ev),
    onTouchStart: (evt: any) => {
      if (props.renderTooltip) {
        setSelectedIndex(-1)
      }
    }
  }

  const {
    hidePointer1,
    pointerItem,
    pointerY,
    pointerConfig,
    pointerColor,
    pointerX,
    setPointerX,
    setPointerY,
    setPointerIndex,
    setPointerItem,
    maxValue,
    persistPointer,
    pointerVanishDelay,
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
    initialSpacing,
    data,
    containerHeightIncludingBelowXAxis,
    extendedContainerHeight,
    totalWidth,
    stripBehindBars,
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
    autoShiftLabelsForNegativeStacks,
    selectedStackIndex,
    setSelectedStackIndex,
    barWidth,
    spacing
  } = useBarChart({
    ...props,
    parentWidth: props.parentWidth ?? window.innerWidth
  })

  const { stackData } = barAndLineChartsWrapperProps

  useEffect(() => {
    if (props.scrollToEnd || props.scrollToIndex)
      if (scrollToBarRef?.current) {
        scrollToBarRef.current.scrollIntoView({
          behavior: 'smooth'
        })
      }
  }, [])

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

  const renderPointer = (lineNumber: number) => {
    if (lineNumber === 1 && hidePointer1) return

    const pointerItemLocal = pointerItem
    const pointerYLocal = pointerY
    const pointerColorLocal = pointerConfig?.pointer1Color || pointerColor

    return Pointer({
      pointerX,
      pointerYLocal,
      pointerComponent,
      pointerHeight,
      pointerRadius,
      pointerWidth,
      pointerItemLocal,
      pointerColorLocal
    })
  }

  const renderStripAndLabel = (pointerLabelComponent: any) => {
    let pointerItemLocal,
      pointerYLocal = pointerY

    pointerItemLocal = [pointerItem]
    return StripAndLabel({
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
    })
  }

  // const totalWidth = totalWidthPre - 200

  const yTranslate = (containerHeight ?? 200) * 1.05 + 28 //yAxisExtraHeightAtTop

  const contentContainerStyle: React.CSSProperties = {
    position: 'absolute',
    height: containerHeightIncludingBelowXAxis,
    bottom: 68 + labelsExtraHeight,
    paddingLeft: initialSpacing,
    width: totalWidth - initialSpacing - 40,
    display: 'flex'
  }

  const divRef = useRef<HTMLDivElement>(null)
  const divOffsetX = divRef.current?.getBoundingClientRect().x ?? 0

  const activatePointer = (x: number) => {
    let factor = (x - initialSpacing - barWidth / 2) / (spacing + barWidth)
    factor = Math.round(factor)
    factor = Math.min(factor, data.length - 1)
    factor = Math.max(factor, 0)
    let z =
      initialSpacing +
      (spacing + barWidth) * factor -
      (pointerRadius || pointerWidth / 2) +
      barWidth / 2
    setPointerX(z)
    setPointerIndex(factor)

    let item, y
    item = (stackData ?? data)[factor]
    let stackSum = 0
    if ('stacks' in item) {
      stackSum = item.stacks.reduce(
        (acc: number, stack: any) => acc + (stack.value ?? 0),
        0
      )
    }
    y =
      containerHeight -
      ((stackSum ?? item.value) * containerHeight) / maxValue -
      (pointerRadius || pointerHeight / 2) +
      10
    setPointerY(y)
    setPointerItem(item)
    pointerConfig?.onResponderGrant?.()
  }

  const renderChartContent = () => {
    return (
      <div ref={divRef}>
        {pointerConfig ? (
          <div
            onMouseMove={(evt) => {
              const x = (evt.clientX ?? 0) - divOffsetX
              activatePointer(x)
            }}
            onMouseLeave={() => {
              if (!persistPointer)
                setTimeout(() => setPointerX(0), pointerVanishDelay)
            }}
            style={contentContainerStyle}
          >
            {pointerX > 0 && stripBehindBars ? (
              <div
                // pointerEvents={pointerEvents ?? 'none'}
                style={{
                  position: 'absolute',
                  left: 0,
                  // backgroundColor: 'rgba(0,0,0,0.2)',
                  height:
                    extendedContainerHeight +
                    noOfSectionsBelowXAxis * stepHeight,
                  bottom: xAxisLabelsVerticalShift + labelsExtraHeight,
                  width: totalWidth,
                  pointerEvents: 'none'
                }}
              >
                {renderStripAndLabel(null)}
              </div>
            ) : null}
            {renderChart()}
            {pointerX > 0 ? (
              <div
                // pointerEvents={pointerEvents ?? 'none'}
                style={{
                  position: 'absolute',
                  left: 0,
                  height:
                    extendedContainerHeight +
                    noOfSectionsBelowXAxis * stepHeight,
                  bottom: xAxisLabelsVerticalShift + labelsExtraHeight,
                  width: totalWidth,
                  zIndex: 20,
                  pointerEvents: 'none'
                }}
              >
                {!stripOverPointer &&
                  !stripBehindBars &&
                  renderStripAndLabel(null)}
                {renderPointer(1)}
                {stripOverPointer &&
                  !stripBehindBars &&
                  renderStripAndLabel(null)}
                {
                  pointerLabelComponent &&
                    renderStripAndLabel(pointerLabelComponent) // no matter what, pointerLabelComponent will be rendered at last -> over the chart content
                }
              </div>
            ) : null}
          </div>
        ) : (
          <div style={contentContainerStyle}>{renderChart()}</div>
        )}
      </div>
    )
  }

  const renderChart = () => {
    if (stackData) {
      return stackData.map((item, index) => {
        return (
          <RenderStackBars
            key={index + ''}
            stackData={props.stackData || []}
            isAnimated={isAnimated}
            animationDuration={animationDuration}
            stackBorderRadius={props.stackBorderRadius}
            stackBorderTopLeftRadius={props.stackBorderTopLeftRadius}
            stackBorderTopRightRadius={props.stackBorderTopRightRadius}
            stackBorderBottomLeftRadius={props.stackBorderBottomLeftRadius}
            stackBorderBottomRightRadius={props.stackBorderBottomRightRadius}
            autoShiftLabelsForNegativeStacks={autoShiftLabelsForNegativeStacks}
            selectedStackIndex={selectedStackIndex}
            setSelectedStackIndex={setSelectedStackIndex}
            // yTranslate={yTranslate}
            {...getPropsCommonForBarAndStack(item, index)}
          />
        )
      })
    } else {
      return data.map((item, index) => (
        <RenderBars
          key={index + ''}
          data={data}
          side={side}
          minHeight={props.minHeight ?? (isAnimated && !isThreeD ? 0.1 : 0)}
          sideWidth={props.sideWidth}
          labelWidth={labelWidth}
          isThreeD={isThreeD}
          isAnimated={isAnimated}
          animationDuration={animationDuration}
          animatedHeight={animatedHeight}
          appearingOpacity={appearingOpacity}
          roundedTop={props.roundedTop}
          roundedBottom={props.roundedBottom}
          frontColor={props.frontColor}
          sideColor={props.sideColor}
          topColor={props.topColor}
          cappedBars={props.cappedBars}
          capThickness={props.capThickness}
          capColor={props.capColor}
          capRadius={props.capRadius}
          autoShiftLabels={autoShiftLabels}
          // barMarginBottom={props.barMarginBottom}
          barStyle={props.barStyle}
          yTranslate={yTranslate}
          scrollToBarRef={scrollToBarRef}
          scrollToIndex={props.scrollToIndex}
          {...getPropsCommonForBarAndStack(item, index)}
        />
      ))
    }
  }

  return (
    <BarAndLineChartsWrapper
      {...barAndLineChartsWrapperProps}
      scrollRef={scrollRef}
      renderChartContent={renderChartContent}
      remainingScrollViewProps={remainingScrollViewProps}
    />
  )
}

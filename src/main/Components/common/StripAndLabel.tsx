import React from 'react';
import {getTopAndLeftForStripAndLabel} from 'gifted-charts-core';

export const StripAndLabel = (props:any) => {
  const {
    pointerX,
    pointerLabelWidth,
    pointerRadius,
    pointerWidth,
    pointerYLocal,
    pointerStripUptoDataPoint,
    pointerStripHeight,
    pointerItemLocal,
    showPointerStrip,
    pointerStripWidth,
    containerHeight,
    xAxisThickness,
    pointerStripColor,
    pointerConfig,
    pointerLabelComponent,
    secondaryPointerItem,
    pointerEvents,
    isBarChart,
  } = props;

  const {top, left} = getTopAndLeftForStripAndLabel(props);

  return (
    <div
      style={{
        position: 'absolute',
        left: pointerX + (pointerItemLocal[0].pointerShiftX || 0),
        top: pointerYLocal,
      }}>
      {(
        isBarChart
          ? showPointerStrip && !pointerLabelComponent
          : showPointerStrip
      ) ? (
        <div
          style={{
            position: 'absolute',
            left: (pointerRadius || pointerWidth) - pointerStripWidth / 4,
            top: pointerStripUptoDataPoint
              ? pointerRadius || pointerStripHeight / 2
              : -pointerYLocal + 8,
            width: pointerStripWidth,
            height: pointerStripUptoDataPoint
              ? containerHeight - pointerYLocal + 5 - xAxisThickness
              : pointerStripHeight,
            marginTop: pointerStripUptoDataPoint
              ? 0
              : containerHeight - pointerStripHeight,
          }}>
          <svg>
            <line
              stroke={pointerStripColor}
              strokeWidth={pointerStripWidth}
              strokeDasharray={
                pointerConfig?.strokeDashArray
                  ? pointerConfig?.strokeDashArray
                  : ''
              }
              x1={0}
              y1={0}
              x2={0}
              y2={
                pointerStripUptoDataPoint
                  ? containerHeight - pointerYLocal + 5 - xAxisThickness
                  : pointerStripHeight
              }
            />
          </svg>
        </div>
      ) : null}

      {pointerLabelComponent ? (
        <div
          // pointerEvents={pointerEvents ?? 'none'}
          style={{
              position: 'absolute',
              left: left,
              top: top,
              marginTop: pointerStripUptoDataPoint
                ? 0
                : containerHeight - pointerStripHeight,
              width: pointerLabelWidth,
            }}>
          {pointerLabelComponent?.(pointerItemLocal, secondaryPointerItem)}
        </div>
      ) : null}
    </div>
  );
};

import React from 'react';

export const Pointer = (props:any) => {
  const {
    pointerX,
    pointerYLocal,
    pointerComponent,
    pointerHeight,
    pointerRadius,
    pointerWidth,
    pointerItemLocal,
    pointerColorLocal,
    pointerShiftX,
    isBarChart = false
  } = props;
  return (
    <div
      style={{
        position: 'absolute',
        left: pointerX + (pointerShiftX || 0) - (isBarChart ? 0 : 18),
        top: pointerYLocal - (isBarChart ? 2 : 20),
      }}>
      {pointerComponent ? (
        pointerComponent()
      ) : (
        <div
          style={{
            height: pointerHeight || pointerRadius * 2,
            width: pointerWidth || pointerRadius * 2,
            marginTop: pointerItemLocal?.pointerShiftY || 0,
            backgroundColor: pointerColorLocal,
            borderRadius: pointerRadius || 0,
          }}
        />
      )}
    </div>
  );
};

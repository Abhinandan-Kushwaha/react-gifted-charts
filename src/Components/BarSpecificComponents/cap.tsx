import React from 'react';
import {BarDefaults} from 'gifted-charts-core';

const Cap = (props:any) => {
  const {
    capThicknessFromItem,
    capThicknessFromProps,
    capColorFromItem,
    capColorFromProps,
    capRadiusFromItem,
    capRadiusFromProps,
  } = props;
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height:
          capThicknessFromItem ??
          capThicknessFromProps ??
          BarDefaults.capThickness,
        backgroundColor:
          capColorFromItem ?? capColorFromProps ?? BarDefaults.capColor,
        borderTopLeftRadius:
          capRadiusFromItem ?? capRadiusFromProps ?? BarDefaults.capRadius,
        borderTopRightRadius:
          capRadiusFromItem ?? capRadiusFromProps ?? BarDefaults.capRadius,
      }}
    />
  );
};

export default Cap;

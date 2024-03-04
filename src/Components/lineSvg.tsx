import * as React from 'react';
import { ruleTypes } from 'gifted-charts-core';

type ruleProps = {
  thickness: number;
  width: number;
  color: string | any;
  type: String;
  dashWidth: number;
  dashGap: number;
};

type configType = {
  config: ruleProps;
};

function Rule(props: configType) {
  const {thickness, width, color, type, dashWidth, dashGap} = props.config;
  if (type === ruleTypes.SOLID) {
    return (
      <svg height={thickness} width={width} {...props}>
        <g fill="lightgray" stroke={color} strokeWidth={thickness}>
          <path d={`M0 ${thickness / 2}h${width}`} />
        </g>
      </svg>
    );
  }
  return (
    <svg height={thickness} width={width} {...props}>
      <g fill="lightgray" stroke={color} strokeWidth={thickness}>
        <path
          strokeDasharray={`${dashWidth},${dashGap}`}
          d={`M0 ${thickness / 2}h${width}`}
        />
      </g>
    </svg>
  );
}

export default Rule;

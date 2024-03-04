import React from 'react';

const BarBackgroundPattern = (props:any) => {
  const {
    barBackgroundPatternFromItem,
    barBackgroundPatternFromProps,
    patternIdFromItem,
    patternIdFromProps,
  } = props;
  return (
    <svg>
        <defs>
            {barBackgroundPatternFromItem
            ? barBackgroundPatternFromItem()
            : barBackgroundPatternFromProps()}
        </defs>
        <rect
            stroke="transparent"
            x="1"
            y="1"
            width="100%"
            height="100%"
            fill={`url(#${patternIdFromItem ?? patternIdFromProps})`}
        />
        </svg>
  );
};

export default BarBackgroundPattern;

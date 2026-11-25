## 🎉 0.0.13

### 🐛 Bug fixes

1. Fixed the issue- "barBorderRadius / roundedTop not supported on BarChart". See https://github.com/Abhinandan-Kushwaha/react-gifted-charts/issues/23
2. Fixed the issue- "Area Chart runtime error on mouseover". See https://github.com/Abhinandan-Kushwaha/react-gifted-charts/issues/26
3. Fixed the issue- "Pointer appears in Line/Area charts even without `pointerConfig`"
4. Fixed positioning of pointerStrip and pointer in Line, Area and Bar charts.

### 🔨 Refactor

1. Updated the dependencies.
2. Fixed types. See https://github.com/Abhinandan-Kushwaha/react-gifted-charts/issues/25

---
---
---

## 🎉 0.0.12

### 🐛 Bug fixes

1. Fixed the position of X-axis labels and top labels in Bar charts.
2. Fixed the issue- "tooltip in Donut charts getting cropped". See https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts/issues/983

---
---
---

## 🎉 0.0.11

### ✨ Features added-

1. **Highlight**: Added the feature to highlight a particular Bar, Bar-section (in stacked Bar chart) or Line in Bar charts using the below props-

- highlightEnabled
- highlightedBarIndex
- lowlightOpacity
- stackHighlightEnabled
- highlightedStackIndex 

2. Added **pointer** support to Line, Area, Bar and Stacked Bar charts using the `pointerConfig` prop. See https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts/blob/HEAD/docs/LineChart/LineChartProps.md#pointerconfig

<img src='https://raw.githubusercontent.com/Abhinandan-Kushwaha/react-native-gifted-charts/02f8727e4edb952a576caf40a066122eac55f35c/demos/scrollLine.gif' alt='pointer'>

---
---
---

## 🎉 0.0.10

### ✨ Features added-

#### 1. Added the below props to render tooltips in Line/Area charts-

- renderTooltip
- renderTooltip1
- renderTooltip2
- renderTooltip3
- renderTooltip4
- renderTooltip5
- renderTooltipSecondary

Tooltip is rendered on hover. The above props receive a callback function with item and index as parameters.
Tooltips are implemented similar to focusedDataPointLabelComponent. So the props like `focusedDataPointShape`, `focusedDataPointColor` etc will be applied to the currently hovered data point.

In case of multi-line charts using `dataSet`, you can add the renderTolltip property inside the objects of the dataSet array.

---

#### 2. For Bar and Stacked Bar charts, `renderTooltip` is now called on hover as well as click.
Earlier it was called only on click. This behaviour can be controlled using the `renderTooltipConditions` prop whose default value is `['onClick', 'onHover']`

---
---
---
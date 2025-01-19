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
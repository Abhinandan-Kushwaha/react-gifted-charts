# react-gifted-charts

ReactJS counterpart of [react-native-gifted-charts](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts)

## Installation 

```sh
npm i react-gifted-charts @react-spring/web
```

**Note:** If you are facing issues related to `react-refresh`, add below code to your package.json-
```js
  "overrides": {
    "react-refresh": "0.11.0"
  },
```

![Gifted charts](https://raw.githubusercontent.com/Abhinandan-Kushwaha/react-native-gifted-charts/db0b1034ed869c87db66998efb8588da76c7439a/docs/dev/gifted-charts-architecture.drawio.svg)


## Docs

[Documentation and gallery](https://gifted-charts.web.app/)

## Usage

The simplest usage of various types of charts can be done as below-

```js
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-gifted-charts";

// ...
const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

<BarChart data = {data} />
<LineChart data = {data} />
<PieChart data = {data} />
<PopulationPyramid data = {[{left:10,right:12}, {left:9,right:8}]} />

// For Horizontal Bar chart, just add the prop horizontal to the <BarChart/> component

<BarChart data = {data} horizontal />

// For Area chart, just add the prop areaChart to the <LineChart/> component

<LineChart data = {data} areaChart />

// For Donut chart, just add the prop donut to the <PieChart/> component

<PieChart data = {data} donut />
```

### Tests

Screenshot tests are written in the [react-gifted-charts-test](https://github.com/Abhinandan-Kushwaha/react-gifted-charts-test) repo. <br />
See the [test reports here](https://abhinandan-kushwaha.github.io/react-gifted-charts-test/ss-test/test.html)

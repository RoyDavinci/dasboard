import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Preparing the chart data
const chartData = [
	{
		label: "Jan",
		value: "3000",
		color: "#97c0fe",
	},
	{
		label: "Feb",
		value: "8000",
		color: "#97c0fe",
	},
	{
		label: "Mar",
		value: "6000",
		color: "#97c0fe",
	},
	{
		label: "Apr",
		value: "2000",
		color: "#97c0fe",
	},
	{
		label: "May",
		value: "7000",
		color: "#357ae2",
	},
	{
		label: "Jun",
		value: " 6000",
		color: "#e2e8fe",
	},
	{
		label: "July",
		value: "4000",
		color: "#e2e8fe",
	},
	{
		label: "Aug",
		value: "6000",
		color: "#e2e8fe",
	},
	{
		label: "Sep",
		value: "4000",
		color: "#e2e8fe",
	},
	{
		label: "Oct",
		value: "6000",
		color: "#e2e8fe",
	},
	{
		label: "Nov",
		value: "4000",
		color: "#e2e8fe",
	},
	{
		label: "Dec",
		value: "7000",
		color: "#e2e8fe",
	},
];

// Create a JSON object to store the chart configurations
const chartConfigs = {
	type: "column2d", // The chart type
	width: "650", // Width of the chart
	height: "250", // Height of the chart
	dataFormat: "json", // Data type
	dataSource: {
		// Chart Configuration
		chart: {
			captionFont: "Arial",
			captionFontSize: "20",
			captionFontBold: "1",
			captionOnTop: "1",
			captionAlignment: "left",
			numberPrefix: "$",
			useRoundEdges: "2",
			theme: "fusion",
		},
		// Chart Data - from step 2
		data: chartData,
	},
};

const Chart = () => {
	return <ReactFC {...chartConfigs}></ReactFC>;
};

export default Chart;

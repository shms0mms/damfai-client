"use client";
"use strict";
exports.__esModule = true;
var recharts_1 = require("recharts");
var chart_1 = require("@/components/ui/chart");
var data = [
    { month: "January", pages_per_week: 186 },
    { month: "February", pages_per_week: 305 },
    { month: "March", pages_per_week: 237 },
    { month: "April", pages_per_week: 73 },
    { month: "May", pages_per_week: 209 },
    { month: "June", pages_per_week: 214 }
];
var chartConfig = {
    pages_per_week: {
        label: "pages_per_week",
        color: "#2563eb"
    },
    pages: {
        label: "pages",
        color: "#60a5fa"
    }
}, satisfies, ChartConfig;
function PagesPerWeekGraph() {
    return (React.createElement(chart_1.ChartContainer, { config: chartConfig },
        React.createElement(recharts_1.BarChart, { accessibilityLayer: true, data: data },
            React.createElement(recharts_1.CartesianGrid, { vertical: false }),
            React.createElement(recharts_1.XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: function (value) { return value.slice(0, 3); } }),
            React.createElement(chart_1.ChartTooltip, { content: React.createElement(chart_1.ChartTooltipContent, null) }),
            React.createElement(chart_1.ChartLegend, { content: React.createElement(chart_1.ChartLegendContent, null) }),
            React.createElement(recharts_1.Bar, { dataKey: "pages_per_week", fill: "var(--color-pages_per_week)", radius: 4 }),
            React.createElement(recharts_1.Bar, { dataKey: "pages", fill: "var(--color-pages)", radius: 4 }))));
}
exports["default"] = PagesPerWeekGraph;

"use client";
"use strict";
exports.__esModule = true;
var recharts_1 = require("recharts");
var chart_1 = require("../ui/chart");
var data = [
    { month: "Jan", books_per_months: 3 },
    { month: "Feb", books_per_months: 2 },
    { month: "Mar", books_per_months: 4 },
    { month: "Apr", books_per_months: 3 },
    { month: "May", books_per_months: 5 },
    { month: "Jun", books_per_months: 4 }
];
var chartConfig = {
    books_per_months: {
        label: "books_per_months",
        color: "#2563eb"
    }
}, satisfies, ChartConfig;
var BooksPerMonthsGraph = function () {
    return (React.createElement(chart_1.ChartContainer, { config: chartConfig, className: "" },
        React.createElement(recharts_1.BarChart, { accessibilityLayer: true, data: data },
            React.createElement(recharts_1.XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: function (value) { return value.slice(0, 3); } }),
            React.createElement(chart_1.ChartTooltip, { content: React.createElement(chart_1.ChartTooltipContent, null) }),
            React.createElement(chart_1.ChartLegend, { content: React.createElement(chart_1.ChartLegendContent, null) }),
            React.createElement(recharts_1.Bar, { dataKey: "books_per_months", fill: "var(--color-books_per_months)", radius: 4 }))));
};
exports["default"] = BooksPerMonthsGraph;

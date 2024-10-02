"use client";
"use strict";
exports.__esModule = true;
var recharts_1 = require("recharts");
var chart_1 = require("../ui/chart");
var data = [
    { name: "Январь", books_per_year: 5 },
    { name: "Февраль", books_per_year: 3 },
    { name: "Март", books_per_year: 7 },
    { name: "Апрель", books_per_year: 4 },
    { name: "Май", books_per_year: 6 },
    { name: "Июнь", books_per_year: 2 }
];
var COLORS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40"
];
var chartConfig = {
    data: {}
}, satisfies, ChartConfig;
function BooksPerYearGraph() {
    var total = data.reduce(function (sum, entry) { return sum + entry.books_per_year; }, 0);
    return (React.createElement(chart_1.ChartContainer, { config: chartConfig },
        React.createElement(recharts_1.PieChart, { className: "min-h-[330px]" },
            React.createElement(recharts_1.Pie, { data: data, cx: "50%", cy: "50%", labelLine: false, outerRadius: 150, fill: "#8884d8", dataKey: "books_per_year", label: function (_a) {
                    var name = _a.name, percent = _a.percent;
                    return name + " " + (percent * 100).toFixed(0) + "%";
                } }, data.map(function (entry, index) { return (React.createElement(recharts_1.Cell, { key: "cell-" + index, fill: COLORS[index % COLORS.length] })); })),
            React.createElement(chart_1.ChartTooltip, { formatter: function (books_per_year, name) { return [
                    books_per_year + " \u043A\u043D\u0438\u0433 (" + ((+books_per_year / total) * 100).toFixed(1) + "%)",
                    name
                ]; }, content: React.createElement(chart_1.ChartTooltipContent, null) }))));
}
exports["default"] = BooksPerYearGraph;

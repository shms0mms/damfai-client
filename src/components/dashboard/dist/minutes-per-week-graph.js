"use client";
"use strict";
exports.__esModule = true;
var recharts_1 = require("recharts");
var data = [
    {
        month: "Апрель",
        minutes_per_week: 1213
    },
    {
        month: "Май",
        minutes_per_week: 3242
    },
    {
        month: "Июнь",
        minutes_per_week: 333
    },
    {
        month: "Июль",
        minutes_per_week: 2332
    },
    {
        month: "Август",
        minutes_per_week: 3325
    },
    {
        month: "Сентябрь",
        minutes_per_week: 2352
    }
];
function MinutesPerWeekGraph() {
    return (React.createElement("div", { className: "h-[400px] w-full" },
        React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
            React.createElement(recharts_1.LineChart, { data: data, margin: {
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                } },
                React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                React.createElement(recharts_1.XAxis, { dataKey: "month", tick: { fill: "hsl(var(--foreground))" } }),
                React.createElement(recharts_1.YAxis, { tick: { fill: "hsl(var(--foreground))" } }),
                React.createElement(recharts_1.Tooltip, { contentStyle: {
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px"
                    }, labelStyle: { color: "hsl(var(--foreground))" } }),
                React.createElement(recharts_1.Line, { type: "monotone", dataKey: "minutes_per_week", stroke: "hsl(var(--primary))", activeDot: { r: 8 } })))));
}
exports["default"] = MinutesPerWeekGraph;

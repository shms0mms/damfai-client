"use strict";
exports.__esModule = true;
var skeleton_1 = require("../ui/skeleton");
function StatisticsItem(_a) {
    var count = _a.count, title = _a.title, isLoading = _a.isLoading;
    return (React.createElement("div", { className: "space-y-2" },
        React.createElement("p", { className: "text-sm font-medium text-muted-foreground" }, title),
        React.createElement("div", { className: "text-3xl font-bold" }, isLoading ? React.createElement(skeleton_1.Skeleton, { className: "h-[20px] w-[100px]" }) : count)));
}
exports["default"] = StatisticsItem;

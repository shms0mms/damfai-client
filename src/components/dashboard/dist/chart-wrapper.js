"use strict";
exports.__esModule = true;
var card_1 = require("../ui/card");
var utils_1 = require("@/lib/utils");
function ChartWrapper(_a) {
    var title = _a.title, subtitle = _a.subtitle, children = _a.children, className = _a.className;
    return (React.createElement(card_1.Card, { className: utils_1.cn("col-span-2 max-xl:col-span-2", className) },
        React.createElement(card_1.CardHeader, null,
            React.createElement(card_1.CardTitle, null, title),
            React.createElement(card_1.CardDescription, null, subtitle)),
        React.createElement(card_1.CardContent, { className: "min-h-[340px] max-md:min-h-[200px]" }, children)));
}
exports["default"] = ChartWrapper;

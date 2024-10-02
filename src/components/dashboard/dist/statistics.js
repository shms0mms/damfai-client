"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var useStatistics_1 = require("@/hooks/useStatistics");
var statistics_item_1 = require("@/components/dashboard/statistics-item");
var card_1 = require("../ui/card");
function Statistics() {
    var _a = useStatistics_1.useStatistics(), statistics = _a.statistics, isLoading = _a.isLoading;
    return (React.createElement(React.Fragment, null,
        React.createElement(card_1.Card, { className: "col-span-2" },
            React.createElement(card_1.CardHeader, null,
                React.createElement(card_1.CardTitle, null, "\u0427\u0442\u0435\u043D\u0438\u0435 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"),
                React.createElement(card_1.CardDescription, null, "\u041A\u0440\u0430\u0442\u043A\u0438\u0439 \u043E\u0431\u0437\u043E\u0440 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438 \u0447\u0442\u0435\u043D\u0438\u044F")),
            React.createElement(card_1.CardContent, { className: "mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:gap-8" }, statistics.map(function (item) { return (React.createElement(statistics_item_1["default"], __assign({ isLoading: isLoading, key: item.title }, item))); })))));
}
exports["default"] = Statistics;

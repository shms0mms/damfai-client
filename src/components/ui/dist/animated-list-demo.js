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
exports.AnimatedListDemo = void 0;
var animated_list_1 = require("@/components/ui/animated-list");
var utils_1 = require("@/lib/utils");
var notifications = [
    {
        name: "Доброе утро!",
        description: "Самое время чтобы дочитать недочитанное.",
        time: "15m ago",
        icon: "☀️",
        color: "#00FFFF"
    },
    {
        name: "Вы обязаны прочитать эту книгу!",
        description: "Вышел новый хит...",
        time: "10m ago",
        icon: "🎯",
        color: "#efc62c"
    },
    {
        name: "Напоминание.",
        description: "Сегодня вы должны прочитать хотябы 20 страниц.",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71"
    },
    {
        name: "Взгляните на вашу статистику!",
        description: "В последнее время вы хорошо читали книги...",
        time: "2m ago",
        icon: "🗞️",
        color: "#1E86FF"
    }
];
notifications = Array.from({ length: 10 }, function () { return notifications; }).flat();
var Notification = function (_a) {
    var name = _a.name, description = _a.description, icon = _a.icon, color = _a.color, time = _a.time;
    return (React.createElement("figure", { className: utils_1.cn("relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4", 
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]", 
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]", 
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]") },
        React.createElement("div", { className: "flex flex-row items-center gap-3" },
            React.createElement("div", { className: "flex size-10 items-center justify-center rounded-2xl", style: {
                    backgroundColor: color
                } },
                React.createElement("span", { className: "text-lg" }, icon)),
            React.createElement("div", { className: "flex flex-col overflow-hidden" },
                React.createElement("figcaption", { className: "flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white" },
                    React.createElement("span", { className: "text-sm sm:text-lg" }, name),
                    React.createElement("span", { className: "mx-1" }, "\u00B7"),
                    React.createElement("span", { className: "text-xs text-gray-500" }, time)),
                React.createElement("p", { className: "text-sm font-normal dark:text-white/60" }, description)))));
};
function AnimatedListDemo(_a) {
    var className = _a.className;
    return (React.createElement("div", { className: utils_1.cn("relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border bg-background p-6 md:shadow-xl", className) },
        React.createElement(animated_list_1.AnimatedList, null, notifications.map(function (item, idx) { return (React.createElement(Notification, __assign({}, item, { key: idx }))); }))));
}
exports.AnimatedListDemo = AnimatedListDemo;

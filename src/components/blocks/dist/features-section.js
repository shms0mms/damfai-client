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
exports.FeaturesSection = void 0;
var icons_react_1 = require("@tabler/icons-react");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
function FeaturesSection() {
    var features = [
        {
            title: "Просто и интуитивно",
            description: "Наше приложение довольно простое и интуитивное в использовании. Вы можете легко начать использовать его и не потерять время на настройку и конфигурацию.",
            icon: react_1["default"].createElement(icons_react_1.IconEaseInOut, null)
        },
        {
            title: "Ищите уже существующие книги",
            description: "Найдите свою книгу, не волнуясь о добавлении своей.",
            icon: react_1["default"].createElement(icons_react_1.IconRouteAltLeft, null)
        },
        {
            title: "Удобное использование",
            description: "Наш сервис специально постарался для графического интерфейса и теперь вы можете читать книги в любое время.",
            icon: react_1["default"].createElement(lucide_react_1.Heart, null)
        },
        {
            title: "Статистика",
            icon: react_1["default"].createElement(lucide_react_1.ChartNoAxesColumn, null),
            description: "Статистика поможет вам отследить свою успеваемость и продуктивность."
        },
        {
            title: "Профиль",
            icon: react_1["default"].createElement(lucide_react_1.User, null),
            description: "Способность просмотра книг в любое время и сохранение их в закладках для быстрого доступа."
        },
        {
            title: "Рекомендации",
            icon: react_1["default"].createElement(lucide_react_1.Library, null),
            description: "Получайте рекомендации по книгам и подборкам для чтения."
        },
        {
            title: "Чаппи",
            icon: react_1["default"].createElement(react_1["default"].Fragment, null),
            description: "Чаппи поможет обрезать текст, подготовить вопросы и прочее."
        },
        {
            title: "Закладки",
            icon: react_1["default"].createElement(lucide_react_1.Album, null),
            description: "Сохраняйте свои книги в закладках для быстрого доступа в любое время."
        }
    ];
    return (react_1["default"].createElement("div", { className: "bg-grid-black/[0.02] relative z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" }, features.map(function (feature, index) { return (react_1["default"].createElement(Feature, __assign({ key: feature.title }, feature, { index: index }))); })));
}
exports.FeaturesSection = FeaturesSection;
var Feature = function (_a) {
    var title = _a.title, description = _a.description, icon = _a.icon, index = _a.index;
    return (react_1["default"].createElement("div", { className: utils_1.cn("group/feature relative flex flex-col py-10 backdrop-blur-sm dark:border-neutral-800 lg:border-r", (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l", index < 4 && "dark:border-neutral-800 lg:border-b") },
        index < 4 && (react_1["default"].createElement("div", { className: "pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" })),
        index >= 4 && (react_1["default"].createElement("div", { className: "pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" })),
        react_1["default"].createElement("div", { className: "relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400" }, icon),
        react_1["default"].createElement("div", { className: "relative z-10 mb-2 px-10 text-lg font-bold" },
            react_1["default"].createElement("div", { className: "absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" }),
            react_1["default"].createElement("span", { className: "inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100" }, title)),
        react_1["default"].createElement("p", { className: "relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300" }, description)));
};

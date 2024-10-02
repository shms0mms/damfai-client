"use client";
"use strict";
exports.__esModule = true;
exports.BooksLayout = void 0;
var react_1 = require("react");
var layout_grid_1 = require("../ui/layout-grid");
function BooksLayout() {
    return (react_1["default"].createElement("div", { className: "h-[130vh] w-full py-20" },
        react_1["default"].createElement(layout_grid_1.LayoutGrid, { cards: cards })));
}
exports.BooksLayout = BooksLayout;
var SkeletonOne = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "text-xl font-bold text-white md:text-4xl" }, "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447 \u041F\u0443\u0448\u043A\u0438\u043D"),
        react_1["default"].createElement("p", { className: "text-base font-normal text-white" }),
        react_1["default"].createElement("p", { className: "my-4 max-w-lg text-base font-normal text-neutral-200" }, "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447 \u041F\u0443\u0448\u043A\u0438\u043D \u2013 \u0432\u044B\u0434\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u043F\u043E\u044D\u0442, \u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C \u0438 \u0434\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433, \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430. \u0420\u043E\u0434\u0438\u043B\u0441\u044F \u0432 1799 \u0433\u043E\u0434\u0443, \u0443\u0447\u0438\u043B\u0441\u044F \u0432 \u0426\u0430\u0440\u0441\u043A\u043E\u0441\u0435\u043B\u044C\u0441\u043A\u043E\u043C \u043B\u0438\u0446\u0435\u0435. \u0418\u0437\u0432\u0435\u0441\u0442\u0435\u043D \u0442\u0430\u043A\u0438\u043C\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F\u043C\u0438, \u043A\u0430\u043A \u00AB\u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u041E\u043D\u0435\u0433\u0438\u043D\u00BB, \u00AB\u0420\u0443\u0441\u043B\u0430\u043D \u0438 \u041B\u044E\u0434\u043C\u0438\u043B\u0430\u00BB, \u00AB\u041A\u0430\u043F\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F \u0434\u043E\u0447\u043A\u0430\u00BB, \u00AB\u041F\u0438\u043A\u043E\u0432\u0430\u044F \u0434\u0430\u043C\u0430\u00BB \u0438 \u043C\u043D\u043E\u0433\u0438\u043C\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438. \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043B \u0434\u0435\u043A\u0430\u0431\u0440\u0438\u0441\u0442\u043E\u0432 \u0438 \u043F\u043E\u0433\u0438\u0431 \u043D\u0430 \u0434\u0443\u044D\u043B\u0438 \u0432 1837 \u0433\u043E\u0434\u0443.")));
};
var SkeletonTwo = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "text-xl font-bold text-white md:text-4xl" }, "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447 \u041C\u0430\u044F\u043A\u043E\u0432\u0441\u043A\u0438\u0439"),
        react_1["default"].createElement("p", { className: "text-base font-normal text-white" }),
        react_1["default"].createElement("p", { className: "my-4 max-w-lg text-base font-normal text-neutral-200" }, "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447 \u041C\u0430\u044F\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u2013 \u0432\u044B\u0434\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u043F\u043E\u044D\u0442, \u0434\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433 \u0438 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A, \u043E\u0434\u0438\u043D \u0438\u0437 \u044F\u0440\u043A\u0438\u0445 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u0444\u0443\u0442\u0443\u0440\u0438\u0437\u043C\u0430. \u0420\u043E\u0434\u0438\u043B\u0441\u044F \u0432 1893 \u0433\u043E\u0434\u0443 \u0432 \u0441\u0435\u043B\u0435 \u0411\u0430\u0433\u0434\u0430\u0442\u0438 (\u043D\u044B\u043D\u0435 \u0433\u043E\u0440\u043E\u0434 \u0411\u0430\u0433\u0434\u0430\u0442\u0438 \u0432 \u0413\u0440\u0443\u0437\u0438\u0438). \u0421 \u044E\u043D\u043E\u0441\u0442\u0438 \u0443\u0432\u043B\u0435\u043A\u0430\u043B\u0441\u044F \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u0439 \u0438 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E\u043C. \u0412 1911 \u0433\u043E\u0434\u0443 \u043F\u0440\u0438\u0435\u0445\u0430\u043B \u0432 \u041C\u043E\u0441\u043A\u0432\u0443, \u0433\u0434\u0435 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u043B\u0441\u044F \u043A \u0433\u0440\u0443\u043F\u043F\u0435 \u0444\u0443\u0442\u0443\u0440\u0438\u0441\u0442\u043E\u0432. \u0412 \u0441\u0432\u043E\u0438\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F\u0445 \u041C\u0430\u044F\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043B \u0441 \u0444\u043E\u0440\u043C\u043E\u0439, \u044F\u0437\u044B\u043A\u043E\u043C \u0438 \u0442\u0435\u043C\u0430\u043C\u0438, \u0441\u0442\u0440\u0435\u043C\u044F\u0441\u044C \u0432\u044B\u0440\u0430\u0437\u0438\u0442\u044C \u0434\u0443\u0445 \u043D\u043E\u0432\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u0421\u0440\u0435\u0434\u0438 \u0435\u0433\u043E \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u2013 \u043F\u043E\u044D\u043C\u044B \u00AB\u041E\u0431\u043B\u0430\u043A\u043E \u0432 \u0448\u0442\u0430\u043D\u0430\u0445\u00BB, \u00AB\u0424\u043B\u0435\u0439\u0442\u0430-\u043F\u043E\u0437\u0432\u043E\u043D\u043E\u0447\u043D\u0438\u043A\u00BB, \u00AB\u041F\u0440\u043E \u044D\u0442\u043E\u00BB, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u044C\u0435\u0441\u044B \u00AB\u041A\u043B\u043E\u043F\u00BB \u0438 \u00AB\u0411\u0430\u043D\u044F\u00BB. \u041C\u0430\u044F\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u0442\u0430\u043A\u0436\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0437\u0430\u043D\u0438\u043C\u0430\u043B\u0441\u044F \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C \u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0439. \u0422\u0440\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0448\u0435\u043B \u0438\u0437 \u0436\u0438\u0437\u043D\u0438 \u0432 1930 \u0433\u043E\u0434\u0443, \u043F\u043E\u043A\u043E\u043D\u0447\u0438\u0432 \u0441 \u0441\u043E\u0431\u043E\u0439.")));
};
var SkeletonThree = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "text-xl font-bold text-white md:text-4xl" }, "\u0424\u0451\u0434\u043E\u0440 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447 \u0414\u043E\u0441\u0442\u043E\u0435\u0432\u0441\u043A\u0438\u0439"),
        react_1["default"].createElement("p", { className: "text-base font-normal text-white" }),
        react_1["default"].createElement("p", { className: "my-4 max-w-lg text-base font-normal text-neutral-200" }, "\u0424\u0451\u0434\u043E\u0440 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447 \u0414\u043E\u0441\u0442\u043E\u0435\u0432\u0441\u043A\u0438\u0439 \u2013 \u0432\u044B\u0434\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C, \u0444\u0438\u043B\u043E\u0441\u043E\u0444 \u0438 \u043C\u044B\u0441\u043B\u0438\u0442\u0435\u043B\u044C. \u0420\u043E\u0434\u0438\u043B\u0441\u044F \u0432 1821 \u0433\u043E\u0434\u0443 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435. \u0421 \u0434\u0435\u0442\u0441\u0442\u0432\u0430 \u0443\u0432\u043B\u0435\u043A\u0430\u043B\u0441\u044F \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u0439 \u0438 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u0435\u0439. \u0412 1849 \u0433\u043E\u0434\u0443 \u0431\u044B\u043B \u0430\u0440\u0435\u0441\u0442\u043E\u0432\u0430\u043D \u0438 \u043F\u0440\u0438\u0433\u043E\u0432\u043E\u0440\u0435\u043D \u043A \u0441\u043C\u0435\u0440\u0442\u043D\u043E\u0439 \u043A\u0430\u0437\u043D\u0438 \u0437\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0435\u0432\u043E\u043B\u044E\u0446\u0438\u043E\u043D\u043D\u043E\u043C \u043A\u0440\u0443\u0436\u043A\u0435 \u041F\u0435\u0442\u0440\u0430\u0448\u0435\u0432\u0441\u043A\u043E\u0433\u043E, \u043E\u0434\u043D\u0430\u043A\u043E \u0432 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043A\u0430\u0437\u043D\u044C \u0431\u044B\u043B\u0430 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u0421\u0438\u0431\u0438\u0440\u044C. \u042D\u0442\u043E\u0442 \u043E\u043F\u044B\u0442 \u0441\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u0432\u043B\u0438\u044F\u043B \u043D\u0430 \u0435\u0433\u043E \u043C\u0438\u0440\u043E\u0432\u043E\u0437\u0437\u0440\u0435\u043D\u0438\u0435 \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u043E.")));
};
var SkeletonFour = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "text-xl font-bold text-white md:text-4xl" }, "\u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u041E\u043D\u0435\u0433\u0438\u043D"),
        react_1["default"].createElement("p", { className: "text-base font-normal text-white" }),
        react_1["default"].createElement("p", { className: "my-4 max-w-lg text-base font-normal text-neutral-200" }, "\u0420\u043E\u043C\u0430\u043D \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447\u0430 \u041F\u0443\u0448\u043A\u0438\u043D\u0430 \u00AB\u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u041E\u043D\u0435\u0433\u0438\u043D\u00BB \u2013 \u044D\u0442\u043E \u043E\u0434\u043D\u043E \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044B, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0441\u0442\u0430\u043B\u043E \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u043E\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044B. \u042D\u0442\u043E \u0440\u043E\u043C\u0430\u043D \u0432 \u0441\u0442\u0438\u0445\u0430\u0445, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0439 \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 XIX \u0432\u0435\u043A\u0430.")));
};
var SkeletonFive = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "text-xl font-bold text-white md:text-4xl" }, "\u0413\u0435\u0440\u043E\u0439 \u043D\u0430\u0448\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438"),
        react_1["default"].createElement("p", { className: "text-base font-normal text-white" }),
        react_1["default"].createElement("p", { className: "my-4 max-w-lg text-base font-normal text-neutral-200" }, "\u0420\u043E\u043C\u0430\u043D \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u042E\u0440\u044C\u0435\u0432\u0438\u0447\u0430 \u041B\u0435\u0440\u043C\u043E\u043D\u0442\u043E\u0432\u0430 \u00AB\u0413\u0435\u0440\u043E\u0439 \u043D\u0430\u0448\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438\u00BB \u2013 \u044D\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0430\u0432\u0442\u043E\u0440 \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u043C\u0438\u0440 \u0438 \u0434\u0443\u0448\u0435\u0432\u043D\u044B\u0435 \u0442\u0435\u0440\u0437\u0430\u043D\u0438\u044F \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0433\u0435\u0440\u043E\u044F \u041F\u0435\u0447\u043E\u0440\u0438\u043D\u0430. \u0420\u043E\u043C\u0430\u043D \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0447\u0430\u0441\u0442\u0435\u0439, \u043A\u0430\u0436\u0434\u0430\u044F \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0434\u043D\u0435\u0432\u043D\u0438\u043A\u043E\u0432\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u0438\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u0430 \u0441\u0430\u043C\u043E\u0433\u043E \u041F\u0435\u0447\u043E\u0440\u0438\u043D\u0430.")));
};
var SkeletonSix = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "text-xl font-bold text-white md:text-4xl" }, "\u0418\u0434\u0438\u043E\u0442"),
        react_1["default"].createElement("p", { className: "text-base font-normal text-white" }),
        react_1["default"].createElement("p", { className: "my-4 max-w-lg text-base font-normal text-neutral-200" }, "\u0420\u043E\u043C\u0430\u043D \u0424\u0451\u0434\u043E\u0440\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447\u0430 \u0414\u043E\u0441\u0442\u043E\u0435\u0432\u0441\u043A\u043E\u0433\u043E \u00AB\u0418\u0434\u0438\u043E\u0442\u00BB \u2013 \u044D\u0442\u043E \u0433\u043B\u0443\u0431\u043E\u043A\u043E\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0445 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043E\u0432 \u0438 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439. \u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0433\u0435\u0440\u043E\u0439 \u0440\u043E\u043C\u0430\u043D\u0430 \u2013 \u043A\u043D\u044F\u0437\u044C \u041B\u0435\u0432 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0438\u0447 \u041C\u044B\u0448\u043A\u0438\u043D, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u0420\u043E\u0441\u0441\u0438\u044E \u043F\u043E\u0441\u043B\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0432 \u0448\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043A\u043E\u0439 \u043A\u043B\u0438\u043D\u0438\u043A\u0435. \u041E\u043D \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0437\u0430\u043F\u0443\u0442\u0430\u043D\u043D\u044B\u0445 \u0438\u043D\u0442\u0440\u0438\u0433, \u0441\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u044F\u0441\u044C \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0442\u0438\u043F\u0430\u043C\u0438 \u043B\u044E\u0434\u0435\u0439: \u043E\u0442 \u0431\u043B\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0445 \u0438 \u0447\u0435\u0441\u0442\u043D\u044B\u0445 \u0434\u043E \u0436\u0430\u0434\u043D\u044B\u0445 \u0438 \u043A\u043E\u0440\u044B\u0441\u0442\u043D\u044B\u0445.")));
};
var cards = [
    {
        id: 1,
        content: react_1["default"].createElement(SkeletonOne, null),
        className: "md:col-span-1",
        thumbnail: "https://avatars.mds.yandex.net/get-entity_search/2005770/960612418/S600xU_2x"
    },
    {
        id: 2,
        content: react_1["default"].createElement(SkeletonTwo, null),
        className: "col-span-1",
        thumbnail: "https://avatars.mds.yandex.net/get-entity_search/5578840/978824533/S600xU_2x"
    },
    {
        id: 3,
        content: react_1["default"].createElement(SkeletonThree, null),
        className: "col-span-1",
        thumbnail: "https://avatars.mds.yandex.net/get-entity_search/5396253/952755728/S600xU_2x"
    },
    {
        id: 4,
        content: react_1["default"].createElement(SkeletonFour, null),
        className: "md:col-span-1",
        thumbnail: "https://avatars.mds.yandex.net/get-entity_search/2037212/483113443/S600xU_2x"
    },
    {
        id: 5,
        content: react_1["default"].createElement(SkeletonFive, null),
        className: "md:col-span-1",
        thumbnail: "https://avatars.mds.yandex.net/i?id=18c7b5e3d4d5d4e85442738d9a2830c5a0848ab9-4572087-images-thumbs&n=13"
    },
    {
        id: 6,
        content: react_1["default"].createElement(SkeletonSix, null),
        className: "md:col-span-1",
        thumbnail: "https://avatars.mds.yandex.net/i?id=25daba300ba14e2ea068505448065bd9_l-5234557-images-thumbs&n=13"
    }
];

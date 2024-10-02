"use client";
"use strict";
exports.__esModule = true;
exports.LayoutGrid = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
exports.LayoutGrid = function (_a) {
    var cards = _a.cards;
    var _b = react_1.useState(null), selected = _b[0], setSelected = _b[1];
    var _c = react_1.useState(null), lastSelected = _c[0], setLastSelected = _c[1];
    var handleClick = function (card) {
        setLastSelected(selected);
        setSelected(card);
    };
    var handleOutsideClick = function () {
        setLastSelected(selected);
        setSelected(null);
    };
    return (react_1["default"].createElement("div", { className: "relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-4 p-10 max-md:p-2 md:grid-cols-3" },
        cards.map(function (card, i) { return (react_1["default"].createElement("div", { key: i, className: utils_1.cn(card.className, "") },
            react_1["default"].createElement(framer_motion_1.motion.div, { onClick: function () { return handleClick(card); }, className: utils_1.cn(card.className, "relative overflow-hidden", (selected === null || selected === void 0 ? void 0 : selected.id) === card.id
                    ? "absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2"
                    : (lastSelected === null || lastSelected === void 0 ? void 0 : lastSelected.id) === card.id
                        ? "z-40 h-full w-full rounded-xl bg-white"
                        : "h-full w-full rounded-xl bg-white"), layoutId: "card-" + card.id },
                (selected === null || selected === void 0 ? void 0 : selected.id) === card.id && react_1["default"].createElement(SelectedCard, { selected: selected }),
                react_1["default"].createElement(ImageComponent, { card: card })))); }),
        react_1["default"].createElement(framer_motion_1.motion.div, { onClick: handleOutsideClick, className: utils_1.cn("absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0", (selected === null || selected === void 0 ? void 0 : selected.id) ? "pointer-events-auto" : "pointer-events-none"), animate: { opacity: (selected === null || selected === void 0 ? void 0 : selected.id) ? 0.3 : 0 } })));
};
var ImageComponent = function (_a) {
    var card = _a.card;
    return (react_1["default"].createElement(framer_motion_1.motion.img, { layoutId: "image-" + card.id + "-image", src: card.thumbnail, height: "500", width: "500", className: utils_1.cn("absolute inset-0 h-full w-full object-cover object-top transition duration-200"), alt: "thumbnail" }));
};
var SelectedCard = function (_a) {
    var selected = _a.selected;
    return (react_1["default"].createElement("div", { className: "relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl" },
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                opacity: 0
            }, animate: {
                opacity: 0.6
            }, className: "absolute inset-0 z-10 h-full w-full bg-black opacity-60" }),
        react_1["default"].createElement(framer_motion_1.motion.div, { layoutId: "content-" + (selected === null || selected === void 0 ? void 0 : selected.id), initial: {
                opacity: 0,
                y: 100
            }, animate: {
                opacity: 1,
                y: 0
            }, exit: {
                opacity: 0,
                y: 100
            }, transition: {
                duration: 0.3,
                ease: "easeInOut"
            }, className: "relative z-[70] px-8 pb-4" }, selected === null || selected === void 0 ? void 0 : selected.content)));
};

"use strict";
exports.__esModule = true;
exports.Spotlight = void 0;
var utils_1 = require("@/lib/utils");
exports.Spotlight = function (_a) {
    var className = _a.className, fill = _a.fill;
    return (React.createElement("svg", { className: utils_1.cn("pointer-events-none absolute z-[2] h-[169%] w-[138%] animate-spotlight opacity-0 lg:w-[84%]", className), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 3787 2842", fill: "none" },
        React.createElement("g", { filter: "url(#filter)" },
            React.createElement("ellipse", { cx: "1924.71", cy: "273.501", rx: "1924.71", ry: "273.501", transform: "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)", fill: fill !== null && fill !== void 0 ? fill : "white", fillOpacity: "0.21" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter", x: "0.860352", y: "0.838989", width: "3785.16", height: "2840.26", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feBlend", { mode: "normal", "in": "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React.createElement("feGaussianBlur", { stdDeviation: "151", result: "effect1_foregroundBlur_1065_8" })))));
};

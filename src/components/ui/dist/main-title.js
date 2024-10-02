"use strict";
exports.__esModule = true;
exports.MainTitle = void 0;
var utils_1 = require("@/lib/utils");
exports.MainTitle = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("h1", { className: utils_1.cn("mb-16 text-4xl font-bold md:mb-24 md:text-5xl lg:text-6xl", className) }, children));
};

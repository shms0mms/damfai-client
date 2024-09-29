"use client";
"use strict";
exports.__esModule = true;
exports.TextGenerateEffect = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
exports.TextGenerateEffect = function (_a) {
    var words = _a.words, className = _a.className, _b = _a.filter, filter = _b === void 0 ? true : _b, _c = _a.duration, duration = _c === void 0 ? 0.5 : _c;
    var _d = framer_motion_1.useAnimate(), scope = _d[0], animate = _d[1];
    var wordsArray = words.split(" ");
    react_1.useEffect(function () {
        void animate("span", {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none"
        }, {
            duration: duration ? duration : 1,
            delay: framer_motion_1.stagger(0.2)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope.current]);
    var renderWords = function () {
        return (React.createElement(framer_motion_1.motion.div, { ref: scope }, wordsArray.map(function (word, idx) {
            return (React.createElement(framer_motion_1.motion.span, { key: word + idx, className: "text-black opacity-0 dark:text-white", style: {
                    filter: filter ? "blur(10px)" : "none"
                } },
                word,
                " "));
        })));
    };
    return (React.createElement("div", { className: utils_1.cn("text-2xl font-bold", className) },
        React.createElement("div", { className: "mt-4" },
            React.createElement("div", { className: "leading-snug tracking-wide text-foreground" }, renderWords()))));
};

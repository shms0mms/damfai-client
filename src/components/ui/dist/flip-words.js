"use client";
"use strict";
exports.__esModule = true;
exports.FlipWords = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
exports.FlipWords = function (_a) {
    var words = _a.words, _b = _a.duration, duration = _b === void 0 ? 3000 : _b, className = _a.className;
    var _c = react_1.useState(words[0]), currentWord = _c[0], setCurrentWord = _c[1];
    var _d = react_1.useState(false), isAnimating = _d[0], setIsAnimating = _d[1];
    // thanks for the fix Julian - https://github.com/Julian-AT
    var startAnimation = react_1.useCallback(function () {
        var word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);
    react_1.useEffect(function () {
        if (!isAnimating)
            setTimeout(function () {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);
    return (react_1["default"].createElement(framer_motion_1.AnimatePresence, { onExitComplete: function () {
            setIsAnimating(false);
        } },
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                opacity: 0,
                y: 10
            }, animate: {
                opacity: 1,
                y: 0
            }, transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }, exit: {
                opacity: 0,
                y: -40,
                x: 40,
                filter: "blur(8px)",
                scale: 2,
                position: "absolute"
            }, className: utils_1.cn("relative z-10 inline-block px-2 text-left text-neutral-900 dark:text-neutral-100", className), key: currentWord }, currentWord.split(" ").map(function (word, wordIndex) { return (react_1["default"].createElement(framer_motion_1.motion.span, { key: word + wordIndex, initial: { opacity: 0, y: 10, filter: "blur(8px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: {
                delay: wordIndex * 0.3,
                duration: 0.3
            }, className: "inline-block whitespace-nowrap" },
            word.split("").map(function (letter, letterIndex) { return (react_1["default"].createElement(framer_motion_1.motion.span, { key: word + letterIndex, initial: { opacity: 0, y: 10, filter: "blur(8px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: {
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2
                }, className: "inline-block" }, letter)); }),
            react_1["default"].createElement("span", { className: "inline-block" }, "\u00A0"))); }))));
};

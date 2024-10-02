"use client";
"use strict";
exports.__esModule = true;
exports.TypingAnimation = void 0;
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
function TypingAnimation(_a) {
    var text = _a.text, _b = _a.duration, duration = _b === void 0 ? 200 : _b, className = _a.className;
    var _c = react_1.useState(""), displayedText = _c[0], setDisplayedText = _c[1];
    var _d = react_1.useState(0), i = _d[0], setI = _d[1];
    react_1.useEffect(function () {
        var typingEffect = setInterval(function () {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                setI(i + 1);
            }
            else {
                clearInterval(typingEffect);
            }
        }, duration);
        return function () {
            clearInterval(typingEffect);
        };
    }, [duration, i]);
    return (React.createElement("h1", { className: utils_1.cn("font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm", className) }, displayedText ? displayedText : text));
}
exports.TypingAnimation = TypingAnimation;

"use client";
"use strict";
exports.__esModule = true;
exports.VelocityScroll = exports.wrap = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
exports.wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
function VelocityScroll(_a) {
    var text = _a.text, _b = _a.default_velocity, default_velocity = _b === void 0 ? 5 : _b, className = _a.className;
    function ParallaxText(_a) {
        var children = _a.children, _b = _a.baseVelocity, baseVelocity = _b === void 0 ? 100 : _b, className = _a.className;
        var baseX = framer_motion_1.useMotionValue(0);
        var scrollY = framer_motion_1.useScroll().scrollY;
        var scrollVelocity = framer_motion_1.useVelocity(scrollY);
        var smoothVelocity = framer_motion_1.useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400
        });
        var velocityFactor = framer_motion_1.useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false
        });
        var _c = react_1.useState(1), repetitions = _c[0], setRepetitions = _c[1];
        var containerRef = react_1.useRef(null);
        var textRef = react_1.useRef(null);
        react_1.useEffect(function () {
            var calculateRepetitions = function () {
                if (containerRef.current && textRef.current) {
                    var containerWidth = containerRef.current.offsetWidth;
                    var textWidth = textRef.current.offsetWidth;
                    var newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
                    setRepetitions(newRepetitions);
                }
            };
            calculateRepetitions();
            window.addEventListener("resize", calculateRepetitions);
            return function () { return window.removeEventListener("resize", calculateRepetitions); };
        }, [children]);
        var x = framer_motion_1.useTransform(baseX, function (v) { return exports.wrap(-100 / repetitions, 0, v) + "%"; });
        var directionFactor = react_1["default"].useRef(1);
        framer_motion_1.useAnimationFrame(function (t, delta) {
            var moveBy = directionFactor.current * baseVelocity * (delta / 1000);
            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            }
            else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        });
        return (react_1["default"].createElement("div", { className: "w-full overflow-hidden whitespace-nowrap", ref: containerRef },
            react_1["default"].createElement(framer_motion_1.motion.div, { className: utils_1.cn("inline-block", className), style: { x: x } }, Array.from({ length: repetitions }).map(function (_, i) { return (react_1["default"].createElement("span", { key: i, ref: i === 0 ? textRef : null },
                children,
                " ")); }))));
    }
    return (react_1["default"].createElement("section", { className: "relative w-full" },
        react_1["default"].createElement(ParallaxText, { baseVelocity: default_velocity, className: className }, text),
        react_1["default"].createElement(ParallaxText, { baseVelocity: -default_velocity, className: className }, text)));
}
exports.VelocityScroll = VelocityScroll;

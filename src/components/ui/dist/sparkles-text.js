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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var SparklesText = function (_a) {
    var text = _a.text, _b = _a.colors, colors = _b === void 0 ? { first: "#9E7AFF", second: "#FE8BBB" } : _b, className = _a.className, _c = _a.sparklesCount, sparklesCount = _c === void 0 ? 10 : _c, props = __rest(_a, ["text", "colors", "className", "sparklesCount"]);
    var _d = react_1.useState([]), sparkles = _d[0], setSparkles = _d[1];
    react_1.useEffect(function () {
        var generateStar = function () {
            var starX = Math.random() * 100 + "%";
            var starY = Math.random() * 100 + "%";
            var color = Math.random() > 0.5 ? colors.first : colors.second;
            var delay = Math.random() * 2;
            var scale = Math.random() * 1 + 0.3;
            var lifespan = Math.random() * 10 + 5;
            var id = starX + "-" + starY + "-" + Date.now();
            return { id: id, x: starX, y: starY, color: color, delay: delay, scale: scale, lifespan: lifespan };
        };
        var initializeStars = function () {
            var newSparkles = Array.from({ length: sparklesCount }, generateStar);
            setSparkles(newSparkles);
        };
        var updateStars = function () {
            setSparkles(function (currentSparkles) {
                return currentSparkles.map(function (star) {
                    if (star.lifespan <= 0) {
                        return generateStar();
                    }
                    else {
                        return __assign(__assign({}, star), { lifespan: star.lifespan - 0.1 });
                    }
                });
            });
        };
        initializeStars();
        var interval = setInterval(updateStars, 100);
        return function () { return clearInterval(interval); };
    }, [colors.first, colors.second]);
    return (React.createElement("div", __assign({ className: utils_1.cn("text-6xl font-bold", className) }, props, { style: {
            "--sparkles-first-color": "" + colors.first,
            "--sparkles-second-color": "" + colors.second
        } }),
        React.createElement("span", { className: "relative inline-block" },
            sparkles.map(function (sparkle) { return (React.createElement(Sparkle, __assign({ key: sparkle.id }, sparkle))); }),
            React.createElement("strong", null, text))));
};
var Sparkle = function (_a) {
    var id = _a.id, x = _a.x, y = _a.y, color = _a.color, delay = _a.delay, scale = _a.scale;
    return (React.createElement(framer_motion_1.motion.svg, { key: id, className: "pointer-events-none absolute z-20", initial: { opacity: 0, left: x, top: y }, animate: {
            opacity: [0, 1, 0],
            scale: [0, scale, 0],
            rotate: [75, 120, 150]
        }, transition: { duration: 0.8, repeat: Infinity, delay: delay }, width: "21", height: "21", viewBox: "0 0 21 21" },
        React.createElement("path", { d: "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z", fill: color })));
};
exports["default"] = SparklesText;

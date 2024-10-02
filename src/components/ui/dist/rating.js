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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Rating = void 0;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var ratingVariants = {
    "default": {
        star: "text-foreground",
        emptyStar: "text-muted-foreground"
    },
    destructive: {
        star: "text-red-500",
        emptyStar: "text-red-200"
    },
    yellow: {
        star: "text-yellow-500",
        emptyStar: "text-yellow-200"
    }
};
exports.Rating = function (_a) {
    var initialRating = _a.rating, _b = _a.totalStars, totalStars = _b === void 0 ? 5 : _b, _c = _a.size, size = _c === void 0 ? 20 : _c, _d = _a.fill, fill = _d === void 0 ? true : _d, _e = _a.Icon, Icon = _e === void 0 ? react_1["default"].createElement(lucide_react_1.Star, null) : _e, _f = _a.variant, variant = _f === void 0 ? "default" : _f, onRatingChange = _a.onRatingChange, _g = _a.showText, showText = _g === void 0 ? true : _g, // Default to true if disabled prop is not provided
    _h = _a.disabled, // Default to true if disabled prop is not provided
    disabled = _h === void 0 ? false : _h, // Default to false if disabled prop is not provided
    props = __rest(_a, ["rating", "totalStars", "size", "fill", "Icon", "variant", "onRatingChange", "showText", "disabled"]);
    var _j = react_1.useState(null), hoverRating = _j[0], setHoverRating = _j[1];
    var _k = react_1.useState(initialRating), currentRating = _k[0], setCurrentRating = _k[1];
    var _l = react_1.useState(false), isHovering = _l[0], setIsHovering = _l[1];
    var handleMouseEnter = function (event) {
        if (!disabled) {
            setIsHovering(true);
            var starIndex = parseInt(event.currentTarget.dataset.starIndex || "0");
            setHoverRating(starIndex);
        }
    };
    var handleMouseLeave = function () {
        setIsHovering(false);
        setHoverRating(null);
    };
    var handleClick = function (event) {
        if (!disabled) {
            var starIndex = parseInt(event.currentTarget.dataset.starIndex || "0");
            setCurrentRating(starIndex);
            setHoverRating(null);
            if (onRatingChange) {
                onRatingChange(starIndex);
            }
        }
    };
    var displayRating = disabled
        ? initialRating
        : (hoverRating !== null && hoverRating !== void 0 ? hoverRating : currentRating);
    var fullStars = Math.floor(displayRating);
    var partialStar = displayRating % 1 > 0 ? (react_1["default"].createElement(PartialStar, { fillPercentage: displayRating % 1, size: size, className: utils_1.cn(ratingVariants[variant].star), Icon: Icon })) : null;
    return (react_1["default"].createElement("div", __assign({ className: utils_1.cn("flex w-fit flex-col gap-2", {
            "pointer-events-none": disabled
        }), onMouseLeave: handleMouseLeave }, props),
        react_1["default"].createElement("div", { className: "flex items-center", onMouseEnter: handleMouseEnter },
            __spreadArrays(Array(fullStars)).map(function (_, i) {
                return react_1["default"].cloneElement(Icon, {
                    key: i,
                    size: size,
                    className: utils_1.cn(fill ? "fill-current stroke-1" : "fill-transparent", ratingVariants[variant].star),
                    onClick: handleClick,
                    onMouseEnter: handleMouseEnter,
                    "data-star-index": i + 1
                });
            }),
            partialStar,
            __spreadArrays(Array(Math.max(0, totalStars - fullStars - (partialStar ? 1 : 0)))).map(function (_, i) {
                return react_1["default"].cloneElement(Icon, {
                    key: i + fullStars + 1,
                    size: size,
                    className: utils_1.cn("stroke-1", ratingVariants[variant].emptyStar),
                    onClick: handleClick,
                    onMouseEnter: handleMouseEnter,
                    "data-star-index": i + fullStars + 1
                });
            })),
        showText && (react_1["default"].createElement("span", { className: "text-xs font-semibold text-muted-foreground" },
            "Current Rating: ", "" + currentRating))));
};
var PartialStar = function (_a) {
    var fillPercentage = _a.fillPercentage, size = _a.size, className = _a.className, Icon = _a.Icon;
    return (react_1["default"].createElement("div", { style: { position: "relative", display: "inline-block" } },
        react_1["default"].cloneElement(Icon, {
            size: size,
            className: utils_1.cn("fill-transparent", className)
        }),
        react_1["default"].createElement("div", { style: {
                position: "absolute",
                top: 0,
                overflow: "hidden",
                width: fillPercentage * 100 + "%"
            } }, react_1["default"].cloneElement(Icon, {
            size: size,
            className: utils_1.cn("fill-current", className)
        }))));
};

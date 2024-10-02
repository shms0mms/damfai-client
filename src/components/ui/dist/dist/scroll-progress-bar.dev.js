"use client";
"use strict";

exports.__esModule = true;

var react_1 = require("react");

var framer_motion_1 = require("framer-motion");

var utils_1 = require("@/lib/utils");

function ScrollProgressBar(_a) {
  var _b = _a.type,
      type = _b === void 0 ? "circle" : _b,
      _c = _a.position,
      position = _c === void 0 ? "bottom-right" : _c,
      _d = _a.color,
      color = _d === void 0 ? "hsl(var(--primary))" : _d,
      _e = _a.strokeSize,
      strokeSize = _e === void 0 ? 2 : _e,
      _f = _a.showPercentage,
      showPercentage = _f === void 0 ? false : _f;
  var scrollYProgress = framer_motion_1.useScroll().scrollYProgress;
  var scrollPercentage = framer_motion_1.useTransform(scrollYProgress, [0, 1], [0, 100]);

  var _g = react_1["default"].useState(0),
      percentage = _g[0],
      setPercentage = _g[1];

  framer_motion_1.useMotionValueEvent(scrollPercentage, "change", function (latest) {
    setPercentage(Math.round(latest));
  });

  if (type === "bar") {
    return react_1["default"].createElement("div", {
      className: "fixed start-0 end-0 top-0 pointer-events-none",
      style: {
        height: strokeSize + 2 + "px"
      }
    }, react_1["default"].createElement("span", {
      className: "bg-primary h-full w-full block",
      style: {
        backgroundColor: color,
        width: percentage + "%"
      }
    }));
  }

  return react_1["default"].createElement("div", {
    className: utils_1.cn("fixed flex items-center justify-center", {
      "top-0 end-0": position === "top-right",
      "bottom-0 end-0": position === "bottom-right",
      "top-0 start-0": position === "top-left",
      "bottom-0 start-0": position === "bottom-left"
    })
  }, percentage > 0 && react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("svg", {
    width: "100",
    height: "100",
    viewBox: "0 0 100 100"
  }, react_1["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    r: "30",
    fill: "none",
    strokeWidth: strokeSize
  }), react_1["default"].createElement(framer_motion_1.motion.circle, {
    cx: "50",
    cy: "50",
    r: "30",
    pathLength: "1",
    stroke: color,
    fill: "none",
    strokeDashoffset: "0",
    strokeWidth: strokeSize,
    style: {
      pathLength: scrollYProgress
    }
  })), showPercentage && react_1["default"].createElement("span", {
    className: "text-sm absolute ml-2"
  }, percentage, "%")));
}

exports["default"] = ScrollProgressBar;
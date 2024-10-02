"use client";
"use strict";

exports.__esModule = true;

var react_1 = require("react");

var framer_motion_1 = require("framer-motion");

var utils_1 = require("@/lib/utils");

var TextGradientScrollContext = react_1.createContext({});

function useGradientScroll() {
  var context = react_1.useContext(TextGradientScrollContext);
  return context;
}

function TextGradientScroll(_a) {
  var text = _a.text,
      className = _a.className,
      _b = _a.type,
      type = _b === void 0 ? "letter" : _b,
      _c = _a.textOpacity,
      textOpacity = _c === void 0 ? "soft" : _c;
  var ref = react_1.useRef(null);
  var scrollYProgress = framer_motion_1.useScroll({
    target: ref,
    offset: ["start center", "end center"]
  }).scrollYProgress;
  var words = text.split(" ");
  return react_1["default"].createElement(TextGradientScrollContext.Provider, {
    value: {
      textOpacity: textOpacity,
      type: type
    }
  }, react_1["default"].createElement("p", {
    ref: ref,
    className: utils_1.cn("relative flex m-0 flex-wrap", className)
  }, words.map(function (word, i) {
    var start = i / words.length;
    var end = start + 1 / words.length;
    return type === "word" ? react_1["default"].createElement(Word, {
      key: i,
      progress: scrollYProgress,
      range: [start, end]
    }, word) : react_1["default"].createElement(Letter, {
      key: i,
      progress: scrollYProgress,
      range: [start, end]
    }, word);
  })));
}

exports["default"] = TextGradientScroll;

var Word = function Word(_a) {
  var children = _a.children,
      progress = _a.progress,
      range = _a.range;
  var opacity = framer_motion_1.useTransform(progress, range, [0, 1]);
  return react_1["default"].createElement("span", {
    className: "relative me-2 mt-2"
  }, react_1["default"].createElement("span", {
    style: {
      position: "absolute",
      opacity: 0.1
    }
  }, children), react_1["default"].createElement(framer_motion_1.motion.span, {
    style: {
      transition: "all .5s",
      opacity: opacity
    }
  }, children));
};

var Letter = function Letter(_a) {
  var children = _a.children,
      progress = _a.progress,
      range = _a.range;

  if (typeof children === "string") {
    var amount = range[1] - range[0];
    var step_1 = amount / children.length;
    return react_1["default"].createElement("span", {
      className: "relative me-2 mt-2"
    }, children.split("").map(function (_char, i) {
      var start = range[0] + i * step_1;
      var end = range[0] + (i + 1) * step_1;
      return react_1["default"].createElement(Char, {
        key: "c_" + i,
        progress: progress,
        range: [start, end]
      }, _char);
    }));
  }
};

var Char = function Char(_a) {
  var children = _a.children,
      progress = _a.progress,
      range = _a.range;
  var opacity = framer_motion_1.useTransform(progress, range, [0, 1]);
  var textOpacity = useGradientScroll().textOpacity;
  return react_1["default"].createElement("span", null, react_1["default"].createElement("span", {
    className: utils_1.cn("absolute", {
      "opacity-0": textOpacity == "none",
      "opacity-10": textOpacity == "soft",
      "opacity-30": textOpacity == "medium"
    })
  }, children), react_1["default"].createElement(framer_motion_1.motion.span, {
    style: {
      transition: "all .5s",
      opacity: opacity
    }
  }, children));
};
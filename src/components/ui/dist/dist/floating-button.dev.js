"use client";
"use strict";

exports.__esModule = true;
exports.FloatingButtonItem = exports.FloatingButton = void 0;

var react_1 = require("react");

var framer_motion_1 = require("framer-motion");

var usehooks_ts_1 = require("usehooks-ts");

var list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1
    }
  }
};
var item = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 5
  }
};
var btn = {
  visible: {
    rotate: "45deg"
  },
  hidden: {
    rotate: 0
  }
};

function FloatingButton(_a) {
  var className = _a.className,
      children = _a.children,
      triggerContent = _a.triggerContent;
  var ref = react_1.useRef(null);

  var _b = react_1.useState(false),
      isOpen = _b[0],
      setIsOpen = _b[1];

  usehooks_ts_1.useOnClickOutside(ref, function () {
    return setIsOpen(false);
  });
  return React.createElement("div", {
    className: "flex flex-col items-center relative"
  }, React.createElement(framer_motion_1.AnimatePresence, null, React.createElement(framer_motion_1.motion.ul, {
    className: "flex flex-col items-center absolute bottom-14 gap-2",
    initial: "hidden",
    animate: isOpen ? "visible" : "hidden",
    variants: list
  }, children), React.createElement(framer_motion_1.motion.div, {
    variants: btn,
    animate: isOpen ? "visible" : "hidden",
    ref: ref,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, triggerContent)));
}

exports.FloatingButton = FloatingButton;

function FloatingButtonItem(_a) {
  var children = _a.children;
  return React.createElement(framer_motion_1.motion.li, {
    variants: item
  }, children);
}

exports.FloatingButtonItem = FloatingButtonItem;
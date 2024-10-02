"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

exports.__esModule = true;
exports.PaginationPrevious = exports.PaginationNext = exports.PaginationLink = exports.PaginationItem = exports.PaginationEllipsis = exports.PaginationContent = exports.Pagination = void 0;

var react_icons_1 = require("@radix-ui/react-icons");

var React = require("react");

var button_1 = require("@/components/ui/button");

var utils_1 = require("@/lib/utils");

var Pagination = function Pagination(_a) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("nav", __assign({
    role: "navigation",
    "aria-label": "pagination",
    className: utils_1.cn("mx-auto flex w-full justify-center", className)
  }, props));
};

exports.Pagination = Pagination;
Pagination.displayName = "Pagination";
var PaginationContent = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("ul", __assign({
    ref: ref,
    className: utils_1.cn("flex flex-row items-center gap-1", className)
  }, props));
});
exports.PaginationContent = PaginationContent;
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("li", __assign({
    ref: ref,
    className: utils_1.cn("", className)
  }, props));
});
exports.PaginationItem = PaginationItem;
PaginationItem.displayName = "PaginationItem";

var PaginationLink = function PaginationLink(_a) {
  var className = _a.className,
      isActive = _a.isActive,
      _b = _a.size,
      size = _b === void 0 ? "icon" : _b,
      props = __rest(_a, ["className", "isActive", "size"]);

  return React.createElement("a", __assign({
    "aria-current": isActive ? "page" : undefined,
    className: utils_1.cn(button_1.buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size: size
    }), className)
  }, props));
};

exports.PaginationLink = PaginationLink;
PaginationLink.displayName = "PaginationLink";

var PaginationPrevious = function PaginationPrevious(_a) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement(PaginationLink, __assign({
    "aria-label": "Go to previous page",
    size: "default",
    className: utils_1.cn("gap-1 pl-2.5", className)
  }, props), React.createElement(react_icons_1.ChevronLeftIcon, {
    className: "h-4 w-4"
  }), React.createElement("span", null, "Previous"));
};

exports.PaginationPrevious = PaginationPrevious;
PaginationPrevious.displayName = "PaginationPrevious";

var PaginationNext = function PaginationNext(_a) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement(PaginationLink, __assign({
    "aria-label": "Go to next page",
    size: "default",
    className: utils_1.cn("gap-1 pr-2.5", className)
  }, props), React.createElement("span", null, "Next"), React.createElement(react_icons_1.ChevronRightIcon, {
    className: "h-4 w-4"
  }));
};

exports.PaginationNext = PaginationNext;
PaginationNext.displayName = "PaginationNext";

var PaginationEllipsis = function PaginationEllipsis(_a) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("span", __assign({
    "aria-hidden": true,
    className: utils_1.cn("flex h-9 w-9 items-center justify-center", className)
  }, props), React.createElement(react_icons_1.DotsHorizontalIcon, {
    className: "h-4 w-4"
  }), React.createElement("span", {
    className: "sr-only"
  }, "More pages"));
};

exports.PaginationEllipsis = PaginationEllipsis;
PaginationEllipsis.displayName = "PaginationEllipsis";
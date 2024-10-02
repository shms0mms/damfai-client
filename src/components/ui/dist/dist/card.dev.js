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
exports.CardContent = exports.CardDescription = exports.CardTitle = exports.CardFooter = exports.CardHeader = exports.Card = void 0;

var React = require("react");

var utils_1 = require("@/lib/utils");

var Card = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("div", __assign({
    ref: ref,
    className: utils_1.cn("rounded-xl border bg-card text-card-foreground shadow", className)
  }, props));
});
exports.Card = Card;
Card.displayName = "Card";
var CardHeader = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("div", __assign({
    ref: ref,
    className: utils_1.cn("flex flex-col space-y-1.5 p-6", className)
  }, props));
});
exports.CardHeader = CardHeader;
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("h3", __assign({
    ref: ref,
    className: utils_1.cn("font-semibold leading-none tracking-tight", className)
  }, props));
});
exports.CardTitle = CardTitle;
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("p", __assign({
    ref: ref,
    className: utils_1.cn("text-sm text-muted-foreground", className)
  }, props));
});
exports.CardDescription = CardDescription;
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("div", __assign({
    ref: ref,
    className: utils_1.cn("p-6 pt-0", className)
  }, props));
});
exports.CardContent = CardContent;
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return React.createElement("div", __assign({
    ref: ref,
    className: utils_1.cn("flex items-center p-6 pt-0", className)
  }, props));
});
exports.CardFooter = CardFooter;
CardFooter.displayName = "CardFooter";
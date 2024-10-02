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
exports.buttonVariants = exports.Button = void 0;

var React = require("react");

var react_slot_1 = require("@radix-ui/react-slot");

var class_variance_authority_1 = require("class-variance-authority");

var utils_1 = require("@/lib/utils");

var buttonVariants = class_variance_authority_1.cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      "default": "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      "default": "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
exports.buttonVariants = buttonVariants;
var Button = React.forwardRef(function (_a, ref) {
  var className = _a.className,
      variant = _a.variant,
      size = _a.size,
      _b = _a.asChild,
      asChild = _b === void 0 ? false : _b,
      props = __rest(_a, ["className", "variant", "size", "asChild"]);

  var Comp = asChild ? react_slot_1.Slot : "button";
  return React.createElement(Comp, __assign({
    className: utils_1.cn(buttonVariants({
      variant: variant,
      size: size,
      className: className
    })),
    ref: ref
  }, props));
});
exports.Button = Button;
Button.displayName = "Button";
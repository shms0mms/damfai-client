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
exports.DrawerDescription = exports.DrawerTitle = exports.DrawerFooter = exports.DrawerHeader = exports.DrawerContent = exports.DrawerClose = exports.DrawerTrigger = exports.DrawerOverlay = exports.DrawerPortal = exports.Drawer = void 0;
var React = require("react");
var vaul_1 = require("vaul");
var utils_1 = require("@/lib/utils");
var Drawer = function (_a) {
    var _b = _a.shouldScaleBackground, shouldScaleBackground = _b === void 0 ? true : _b, props = __rest(_a, ["shouldScaleBackground"]);
    return (React.createElement(vaul_1.Drawer.Root, __assign({ shouldScaleBackground: shouldScaleBackground }, props)));
};
exports.Drawer = Drawer;
Drawer.displayName = "Drawer";
var DrawerTrigger = vaul_1.Drawer.Trigger;
exports.DrawerTrigger = DrawerTrigger;
var DrawerPortal = vaul_1.Drawer.Portal;
exports.DrawerPortal = DrawerPortal;
var DrawerClose = vaul_1.Drawer.Close;
exports.DrawerClose = DrawerClose;
var DrawerOverlay = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Overlay, __assign({ ref: ref, className: utils_1.cn("fixed inset-0 z-50 bg-black/80", className) }, props)));
});
exports.DrawerOverlay = DrawerOverlay;
DrawerOverlay.displayName = vaul_1.Drawer.Overlay.displayName;
var DrawerContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement(DrawerPortal, null,
        React.createElement(DrawerOverlay, null),
        React.createElement(vaul_1.Drawer.Content, __assign({ ref: ref, className: utils_1.cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className) }, props),
            React.createElement("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
            children)));
});
exports.DrawerContent = DrawerContent;
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ className: utils_1.cn("grid gap-1.5 p-4 text-center sm:text-left", className) }, props)));
};
exports.DrawerHeader = DrawerHeader;
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ className: utils_1.cn("mt-auto flex flex-col gap-2 p-4", className) }, props)));
};
exports.DrawerFooter = DrawerFooter;
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Title, __assign({ ref: ref, className: utils_1.cn("text-lg font-semibold leading-none tracking-tight", className) }, props)));
});
exports.DrawerTitle = DrawerTitle;
DrawerTitle.displayName = vaul_1.Drawer.Title.displayName;
var DrawerDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Description, __assign({ ref: ref, className: utils_1.cn("text-sm text-muted-foreground", className) }, props)));
});
exports.DrawerDescription = DrawerDescription;
DrawerDescription.displayName = vaul_1.Drawer.Description.displayName;

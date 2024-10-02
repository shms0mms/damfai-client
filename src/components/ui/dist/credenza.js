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
exports.CredenzaTrigger = exports.CredenzaTitle = exports.CredenzaHeader = exports.CredenzaFooter = exports.CredenzaDescription = exports.CredenzaContent = exports.CredenzaClose = exports.CredenzaBody = exports.Credenza = void 0;
var usehooks_ts_1 = require("usehooks-ts");
var dialog_1 = require("@/components/ui/dialog");
var drawer_1 = require("@/components/ui/drawer");
var utils_1 = require("@/lib/utils");
var desktop = "(min-width: 768px)";
var Credenza = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var isDesktop = usehooks_ts_1.useMediaQuery(desktop);
    var Credenza = isDesktop ? dialog_1.Dialog : drawer_1.Drawer;
    return React.createElement(Credenza, __assign({}, props), children);
};
exports.Credenza = Credenza;
var CredenzaTrigger = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var isDesktop = usehooks_ts_1.useMediaQuery(desktop);
    var CredenzaTrigger = isDesktop ? dialog_1.DialogTrigger : drawer_1.DrawerTrigger;
    return (React.createElement(CredenzaTrigger, __assign({ className: className }, props), children));
};
exports.CredenzaTrigger = CredenzaTrigger;
var CredenzaClose = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var isDesktop = usehooks_ts_1.useMediaQuery(desktop);
    var CredenzaClose = isDesktop ? dialog_1.DialogClose : drawer_1.DrawerClose;
    return (React.createElement(CredenzaClose, __assign({ className: className }, props), children));
};
exports.CredenzaClose = CredenzaClose;
var CredenzaContent = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var isDesktop = usehooks_ts_1.useMediaQuery(desktop);
    var CredenzaContent = isDesktop ? dialog_1.DialogContent : drawer_1.DrawerContent;
    return (React.createElement(CredenzaContent, __assign({ className: className }, props), children));
};
exports.CredenzaContent = CredenzaContent;
var CredenzaDescription = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var isDesktop = usehooks_ts_1.useMediaQuery(desktop);
    var CredenzaDescription = isDesktop ? dialog_1.DialogDescription : drawer_1.DrawerDescription;
    return (React.createElement(CredenzaDescription, __assign({ className: className }, props), children));
};
exports.CredenzaDescription = CredenzaDescription;
var CredenzaHeader = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var isDesktop = usehooks_ts_1.useMediaQuery(desktop);
    var CredenzaHeader = isDesktop ? dialog_1.DialogHeader : drawer_1.DrawerHeader;
    return (React.createElement(CredenzaHeader, __assign({ className: className }, props), children));
};
exports.CredenzaHeader = CredenzaHeader;
var CredenzaTitle = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var isDesktop = usehooks_ts_1.useMediaQuery(desktop);
    var CredenzaTitle = isDesktop ? dialog_1.DialogTitle : drawer_1.DrawerTitle;
    return (React.createElement(CredenzaTitle, __assign({ className: className }, props), children));
};
exports.CredenzaTitle = CredenzaTitle;
var CredenzaBody = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: utils_1.cn("px-4 md:px-0", className) }, props), children));
};
exports.CredenzaBody = CredenzaBody;
var CredenzaFooter = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var isDesktop = usehooks_ts_1.useMediaQuery(desktop);
    var CredenzaFooter = isDesktop ? dialog_1.DialogFooter : drawer_1.DrawerFooter;
    return (React.createElement(CredenzaFooter, __assign({ className: className }, props), children));
};
exports.CredenzaFooter = CredenzaFooter;

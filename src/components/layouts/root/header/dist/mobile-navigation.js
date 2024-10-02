"use client";
"use strict";
exports.__esModule = true;
exports.MobileNavigation = void 0;
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var logo_1 = require("@/components/ui/logo");
var sheet_1 = require("@/components/ui/sheet");
var main_nav_1 = require("@/lib/main-nav");
var utils_1 = require("@/lib/utils");
exports.MobileNavigation = function () {
    var pathname = navigation_1.usePathname();
    var items = main_nav_1.getMainNav(pathname);
    return (React.createElement(sheet_1.Sheet, null,
        React.createElement(sheet_1.SheetTrigger, { className: "md:hidden" },
            React.createElement(lucide_react_1.Menu, null)),
        React.createElement(sheet_1.SheetContent, { side: "left", className: "flex flex-col gap-4" },
            React.createElement(sheet_1.SheetHeader, null,
                React.createElement(sheet_1.SheetTitle, { className: "flex items-center gap-1" },
                    React.createElement(logo_1["default"], null))),
            React.createElement("nav", null,
                React.createElement("ul", { className: "flex flex-col gap-1" }, items.map(function (item) { return (React.createElement("li", { key: item.title },
                    React.createElement("a", { href: item.href, className: utils_1.cn("relative flex items-center gap-2 text-lg font-medium text-foreground/50 transition-colors duration-200 before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:scale-x-0 before:bg-foreground before:transition-transform before:content-[''] active:before:scale-x-100", {
                            "text-foreground": item.active
                        }) },
                        item.icon,
                        item.title))); }))))));
};

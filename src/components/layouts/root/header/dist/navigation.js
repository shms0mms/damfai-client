"use client";
"use strict";
exports.__esModule = true;
exports.Navigation = void 0;
var navigation_1 = require("next/navigation");
var main_nav_1 = require("@/lib/main-nav");
var utils_1 = require("@/lib/utils");
exports.Navigation = function () {
    var pathname = navigation_1.usePathname();
    var items = main_nav_1.getMainNav(pathname);
    return (React.createElement("nav", { className: "hidden md:block" },
        React.createElement("ul", { className: "flex items-center gap-6 lg:gap-10" }, items.map(function (item) { return (React.createElement("li", { key: item.title },
            React.createElement("a", { key: item.href, href: item.href, className: utils_1.cn("relative text-sm font-medium text-foreground/75 transition-colors duration-200 before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:scale-x-0 before:bg-foreground before:transition-transform before:content-[''] hover:text-foreground hover:before:scale-x-100", {
                    "text-foreground": item.active
                }) }, item.title))); }))));
};

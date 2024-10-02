"use client";
"use strict";
exports.__esModule = true;
exports.ThemeToggle = void 0;
var react_icons_1 = require("@radix-ui/react-icons");
var next_themes_1 = require("next-themes");
var button_1 = require("@/components/ui/button");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var utils_1 = require("@/lib/utils");
function ThemeToggle(_a) {
    var _b = _a.iconSize, iconSize = _b === void 0 ? 16 : _b, _c = _a.expanded, expanded = _c === void 0 ? false : _c;
    var setTheme = next_themes_1.useTheme().setTheme;
    return (React.createElement(dropdown_menu_1.DropdownMenu, null,
        React.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
            React.createElement(button_1.Button, { variant: "outline", size: expanded ? "default" : "icon", className: utils_1.cn({
                    "flex h-auto w-full items-center justify-start gap-3 rounded-sm border-0 px-2 py-1.5": expanded
                }) },
                React.createElement(react_icons_1.SunIcon, { width: iconSize, height: iconSize, className: utils_1.cn("rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0", {
                        "text-muted-foreground": expanded
                    }) }),
                React.createElement(react_icons_1.MoonIcon, { width: iconSize, height: iconSize, className: utils_1.cn("absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100", {
                        "text-muted-foreground": expanded
                    }) }),
                expanded ? "Сменить тему" : null,
                React.createElement("span", { className: "sr-only" }, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443"))),
        React.createElement(dropdown_menu_1.DropdownMenuContent, { align: expanded ? "start" : "end", className: "w-[215px]" },
            React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return setTheme("light"); } }, "\u0421\u0432\u0435\u0442\u043B\u0430\u044F"),
            React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return setTheme("dark"); } }, "\u0422\u0435\u043C\u043D\u0430\u044F"))));
}
exports.ThemeToggle = ThemeToggle;

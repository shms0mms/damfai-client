"use client";
"use strict";
exports.__esModule = true;
exports.UserNav = void 0;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_1 = require("react");
var auth_1 = require("@/utils/auth");
var route_config_1 = require("@/config/route.config");
var auth_2 = require("@/providers/auth");
var theme_toggle_1 = require("@/components/theme-toggle");
var avatar_1 = require("@/components/ui/avatar");
var button_1 = require("@/components/ui/button");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var skeleton_1 = require("@/components/ui/skeleton");
var tooltip_1 = require("@/components/ui/tooltip");
var utils_1 = require("@/lib/utils");
exports.UserNav = function () {
    var _a, _b;
    var _c = react_1.useContext(auth_2.AuthContext), user = _c.user, isLoading = _c.isLoading;
    return !isLoading && user ? (React.createElement(dropdown_menu_1.DropdownMenu, null,
        React.createElement(tooltip_1.TooltipProvider, { disableHoverableContent: true },
            React.createElement(tooltip_1.Tooltip, { delayDuration: 100 },
                React.createElement(tooltip_1.TooltipTrigger, { asChild: true },
                    React.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
                        React.createElement(button_1.Button, { variant: "outline", className: utils_1.cn("relative h-8 w-8 rounded-full") },
                            React.createElement(avatar_1.Avatar, { className: "h-8 w-8" },
                                React.createElement(avatar_1.AvatarFallback, null, (_b = (_a = user === null || user === void 0 ? void 0 : user.name) === null || _a === void 0 ? void 0 : _a.slice(0, 2)) === null || _b === void 0 ? void 0 : _b.toUpperCase())),
                            React.createElement("span", { className: "sr-only" }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0430\u0448\u0435 \u043C\u0435\u043D\u044E")))),
                React.createElement(tooltip_1.TooltipContent, { side: "bottom" }, "\u0412\u044B"))),
        React.createElement(dropdown_menu_1.DropdownMenuContent, { className: "font-comfortaa w-56", align: "end", forceMount: true },
            React.createElement(dropdown_menu_1.DropdownMenuLabel, { className: "font-normal" },
                React.createElement("div", { className: "flex flex-col space-y-1" },
                    React.createElement("p", { className: "text-sm font-medium leading-none" }, user.name),
                    React.createElement("p", { className: "text-xs leading-none text-muted-foreground" }, user.email))),
            React.createElement(dropdown_menu_1.DropdownMenuSeparator, null),
            React.createElement(dropdown_menu_1.DropdownMenuGroup, null,
                React.createElement(dropdown_menu_1.DropdownMenuItem, { className: "hover:cursor-pointer", asChild: true },
                    React.createElement(link_1["default"], { href: route_config_1.ROUTES.DASHBOARD, className: "flex items-center" },
                        React.createElement(lucide_react_1.UserIcon, { className: "mr-3 h-4 w-4 text-muted-foreground" }),
                        "\u041F\u0440\u043E\u0444\u0438\u043B\u044C")),
                React.createElement(dropdown_menu_1.DropdownMenuItem, { asChild: true },
                    React.createElement(theme_toggle_1.ThemeToggle, { expanded: true }))),
            React.createElement(dropdown_menu_1.DropdownMenuSeparator, null),
            React.createElement(dropdown_menu_1.DropdownMenuGroup, null,
                React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: auth_1.logout, className: "hover:cursor-pointer" },
                    React.createElement(lucide_react_1.LogOut, { className: "mr-3 h-4 w-4 text-muted-foreground" }),
                    "\u0412\u044B\u0439\u0442\u0438"))))) : (React.createElement(skeleton_1.Skeleton, { className: "h-8 w-8 rounded-full bg-primary/10" }));
};

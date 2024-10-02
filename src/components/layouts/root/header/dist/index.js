"use client";
"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var auth_1 = require("@/providers/auth");
var logo_1 = require("@/components/ui/logo");
var theme_switcher_1 = require("@/components/ui/theme-switcher");
var login_button_1 = require("./login-button");
var mobile_navigation_1 = require("./mobile-navigation");
var navigation_1 = require("./navigation");
var user_nav_1 = require("./user-nav");
exports.Header = function () {
    var user = react_1.useContext(auth_1.AuthContext).user;
    return (React.createElement("header", { className: "font-comfortaa sticky top-0 z-50 w-full bg-muted backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-muted/25 dark:shadow-secondary" },
        React.createElement("div", { className: "flex min-h-14 items-center justify-between gap-4 px-4 sm:mx-8 md:gap-8" },
            React.createElement("div", { className: "flex items-center gap-14" },
                React.createElement("div", { className: "flex items-center gap-x-4 max-md:hidden" },
                    React.createElement(logo_1["default"], null)),
                React.createElement(mobile_navigation_1.MobileNavigation, null),
                React.createElement(navigation_1.Navigation, null)),
            React.createElement("div", { className: "flex w-full max-w-fit justify-end md:max-w-[250px]" }, (user === null || user === void 0 ? void 0 : user.id) ? (React.createElement(user_nav_1.UserNav, null)) : (React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement(login_button_1.LoginButton, null),
                " ",
                React.createElement(theme_switcher_1["default"], null)))))));
};

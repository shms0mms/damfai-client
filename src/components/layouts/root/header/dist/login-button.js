"use client";
"use strict";
exports.__esModule = true;
exports.LoginButton = void 0;
var link_1 = require("next/link");
var route_config_1 = require("@/config/route.config");
var button_1 = require("@/components/ui/button");
exports.LoginButton = function () {
    return (React.createElement(button_1.Button, { asChild: true, className: "gap-2" },
        React.createElement(link_1["default"], { href: route_config_1.ROUTES.SIGN_IN }, "\u0412\u043E\u0439\u0442\u0438")));
};

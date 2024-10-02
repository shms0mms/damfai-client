"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var route_config_1 = require("@/config/route.config");
var site_config_1 = require("@/config/site.config");
function Logo() {
    var size = 130;
    return (React.createElement(React.Fragment, null,
        React.createElement(link_1["default"], { href: route_config_1.ROUTES.HOME, className: "" },
            React.createElement("img", { src: "/logo-white.png", alt: site_config_1.siteConfig.name, width: size, height: size, className: "hidden dark:block" }),
            " ",
            React.createElement("img", { src: "/logo-black.png", alt: site_config_1.siteConfig.name, width: size, height: size, className: "dark:hidden" }))));
}
exports["default"] = Logo;

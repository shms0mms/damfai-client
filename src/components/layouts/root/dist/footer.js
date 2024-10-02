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
exports.__esModule = true;
exports.Footer = void 0;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var usehooks_ts_1 = require("usehooks-ts");
var media_config_1 = require("@/config/media.config");
var route_config_1 = require("@/config/route.config");
var site_config_1 = require("@/config/site.config");
var accordion_1 = require("@/components/ui/accordion");
var theme_switcher_1 = require("../ui/theme-switcher");
var NavItemLinks = function (_a) {
    var items = _a.items;
    return (React.createElement("ul", { className: "flex flex-col gap-2" }, items.map(function (i, pk) { return (React.createElement("li", { key: pk },
        " ",
        React.createElement(link_1["default"], { target: "_blank", className: "flex items-center gap-2 text-muted-foreground/60 transition-colors hover:text-foreground", href: i.href },
            i.children,
            (i === null || i === void 0 ? void 0 : i.linked) && React.createElement(lucide_react_1.ExternalLink, { size: 14 })))); })));
};
var NavItemTrigger = function (_a) {
    var title = _a.title;
    return React.createElement("h2", null, title);
};
var NavItemWrapper = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: "flex flex-col gap-3" }, children);
};
var NavItem = function (_a) {
    var title = _a.title, items = _a.items;
    return (React.createElement(NavItemWrapper, null,
        React.createElement(NavItemTrigger, { title: title }),
        React.createElement(NavItemLinks, { items: items })));
};
exports.Footer = function () {
    var navItems = [
        {
            title: "Продукты",
            items: [
                {
                    children: "Model GigaChat",
                    href: route_config_1.ROUTES.GIGA_CHAT,
                    linked: true
                },
                {
                    children: "GigaChain",
                    href: route_config_1.ROUTES.GIGA_CHAIN,
                    linked: true
                },
                {
                    children: "v0",
                    href: route_config_1.ROUTES.V0,
                    linked: true
                },
                {
                    children: "Figma",
                    href: route_config_1.ROUTES.FIGMA,
                    linked: true
                }
            ]
        },
        {
            title: "Ресурсы",
            items: [
                {
                    children: "GitHub",
                    href: route_config_1.ROUTES.GITHUB
                },
                {
                    href: route_config_1.ROUTES.NEXT_JS,
                    children: "Next.js"
                },
                {
                    href: route_config_1.ROUTES.FAST_API,
                    children: "FastAPI"
                }
            ]
        },
        {
            title: "Ссылки",
            items: [
                {
                    children: "Главная",
                    href: route_config_1.ROUTES.HOME
                },
                {
                    href: route_config_1.ROUTES.DASHBOARD,
                    children: "Личный кабинет"
                },
                {
                    href: route_config_1.ROUTES.SIGN_IN,
                    children: "Войти"
                }
            ]
        },
        {
            title: "Контакты",
            items: [
                {
                    children: "Fesyse",
                    href: route_config_1.ROUTES.CONTACTS.FESYSE
                },
                {
                    href: route_config_1.ROUTES.CONTACTS.OLEG,
                    children: "Олег"
                },
                {
                    href: route_config_1.ROUTES.CONTACTS.DAMBEK,
                    children: "Dambek"
                },
                {
                    href: route_config_1.ROUTES.CONTACTS.MMS,
                    children: "mms"
                }
            ]
        }
    ];
    var isResponsive = usehooks_ts_1.useMediaQuery(media_config_1.MEDIA.md);
    return (React.createElement("footer", { className: "py-20 md:px-8" },
        React.createElement("div", { className: "container py-4" },
            React.createElement("div", { className: "flex flex-col items-end justify-between gap-4" },
                React.createElement("nav", { className: "w-full" }, isResponsive ? (React.createElement(accordion_1.Accordion, { type: "multiple" }, navItems.map(function (i) { return (React.createElement(accordion_1.AccordionItem, { value: i.title, key: i.title },
                    React.createElement(accordion_1.AccordionTrigger, null,
                        React.createElement(NavItemTrigger, { title: i.title })),
                    React.createElement(accordion_1.AccordionContent, null,
                        React.createElement(NavItemLinks, { items: i.items })))); }))) : (React.createElement("div", { className: "grid w-full grid-cols-8 gap-5" }, navItems.map(function (i) { return (React.createElement(NavItem, __assign({ key: i.title }, i))); })))),
                React.createElement("p", { className: "flex items-center gap-2 text-balance text-right text-sm leading-loose text-muted-foreground md:text-left" },
                    "Built by ",
                    site_config_1.siteConfig.author,
                    ".",
                    React.createElement(theme_switcher_1["default"], null))))));
};

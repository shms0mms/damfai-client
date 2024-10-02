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
exports.BentoDemo = void 0;
var react_icons_1 = require("@radix-ui/react-icons");
var lucide_react_1 = require("lucide-react");
var route_config_1 = require("@/config/route.config");
var bento_grid_1 = require("@/components/ui/bento-grid");
var calendar_1 = require("@/components/ui/calendar");
var marquee_1 = require("@/components/ui/marquee");
var animated_beam_demo_1 = require("../ui/animated-beam-demo");
var animated_list_demo_1 = require("../ui/animated-list-demo");
var utils_1 = require("@/lib/utils");
var files = [
    {
        name: "bitcoin.pdf",
        body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto."
    },
    {
        name: "finances.xlsx",
        body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data."
    },
    {
        name: "logo.svg",
        body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation."
    },
    {
        name: "keys.gpg",
        body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages."
    },
    {
        name: "seed.txt",
        body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain."
    }
];
var features = [
    {
        Icon: react_icons_1.FileTextIcon,
        name: "Большой список книг",
        description: "На нашем сайте вы можете найти книги каждого жанра на свой вкус.",
        href: route_config_1.ROUTES.BOOKS,
        cta: "Подробнее",
        className: "col-span-3 lg:col-span-1",
        background: (React.createElement(marquee_1["default"], { pauseOnHover: true, className: "absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]" }, files.map(function (f, idx) { return (React.createElement("figure", { key: idx, className: utils_1.cn("relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4", "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]", "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]", "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none") },
            React.createElement("div", { className: "flex flex-row items-center gap-2" },
                React.createElement("div", { className: "flex flex-col" },
                    React.createElement("figcaption", { className: "text-sm font-medium dark:text-white" }, f.name))),
            React.createElement("blockquote", { className: "mt-2 text-xs" }, f.body))); })))
    },
    {
        Icon: lucide_react_1.BellIcon,
        name: "Уведомления",
        description: "Получайте уведомления о прочтении книги.",
        href: route_config_1.ROUTES.DASHBOARD,
        cta: "Подробнее",
        className: "col-span-3 lg:col-span-2",
        background: (React.createElement(animated_list_demo_1.AnimatedListDemo, { className: "absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" }))
    },
    {
        Icon: lucide_react_1.Share2Icon,
        name: "Интеграции",
        description: "Вы можете читать книги вдвоём (в разработке).",
        href: route_config_1.ROUTES.DASHBOARD,
        cta: "Подробнее",
        className: "col-span-3 lg:col-span-2",
        background: React.createElement(animated_beam_demo_1.AnimatedBeamDemo, null)
    },
    {
        Icon: react_icons_1.CalendarIcon,
        name: "Каледнарь",
        description: "Используйте календарь чтобы поставить цель чтения книги.",
        className: "col-span-3 lg:col-span-1",
        href: route_config_1.ROUTES.DASHBOARD,
        cta: "Подробнее",
        background: (React.createElement(calendar_1.Calendar, { mode: "single", selected: new Date(2022, 4, 11, 0, 0, 0), className: "absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" }))
    }
];
function BentoDemo() {
    return (React.createElement(bento_grid_1.BentoGrid, null, features.map(function (feature, idx) { return (React.createElement(bento_grid_1.BentoCard, __assign({ key: idx }, feature))); })));
}
exports.BentoDemo = BentoDemo;

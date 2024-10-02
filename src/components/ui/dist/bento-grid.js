"use strict";
exports.__esModule = true;
exports.BentoGrid = exports.BentoCard = void 0;
var react_icons_1 = require("@radix-ui/react-icons");
var utils_1 = require("@/lib/utils");
var button_1 = require("@/components/ui/button");
var BentoGrid = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { className: utils_1.cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className) }, children));
};
exports.BentoGrid = BentoGrid;
var BentoCard = function (_a) {
    var name = _a.name, className = _a.className, background = _a.background, Icon = _a.Icon, description = _a.description, href = _a.href, cta = _a.cta;
    return (React.createElement("div", { key: name, className: utils_1.cn("group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl", 
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]", 
        // dark styles
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]", className) },
        React.createElement("div", null, background),
        React.createElement("div", { className: "pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10" },
            React.createElement(Icon, { className: "h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" }),
            React.createElement("h3", { className: "text-xl font-semibold text-neutral-700 dark:text-neutral-300" }, name),
            React.createElement("p", { className: "max-w-lg text-neutral-400" }, description)),
        React.createElement("div", { className: utils_1.cn("pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100") },
            React.createElement(button_1.Button, { variant: "ghost", asChild: true, size: "sm", className: "pointer-events-auto" },
                React.createElement("a", { href: href },
                    cta,
                    React.createElement(react_icons_1.ArrowRightIcon, { className: "ml-2 h-4 w-4" })))),
        React.createElement("div", { className: "pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" })));
};
exports.BentoCard = BentoCard;

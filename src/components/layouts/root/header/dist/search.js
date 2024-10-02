"use strict";
exports.__esModule = true;
exports.Search = void 0;
var lucide_react_1 = require("lucide-react");
var input_1 = require("@/components/ui/input");
exports.Search = function () {
    return (React.createElement("div", { className: "relative w-full max-w-[500px] overflow-hidden rounded-xl before:absolute before:-top-12 before:left-0 before:z-50 before:h-16 before:w-16 before:rounded-full before:bg-black/75 before:blur-[80px] before:content-[''] after:absolute after:-bottom-32 after:right-10 after:z-50 after:h-24 after:w-24 after:rounded-full after:bg-black/75 after:blur-[100px] after:content-[''] dark:before:bg-white dark:after:bg-white max-md:max-w-full" },
        React.createElement(input_1.Input, { placeholder: "\u041A\u043D\u0438\u0433\u0430...", className: "relative w-full rounded-xl bg-background/50 transition-transform" }),
        React.createElement("button", { className: "absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 text-sm font-medium text-foreground/75 shadow-sm" },
            React.createElement(lucide_react_1.SearchIcon, { className: "transition-colors duration-200 hover:text-foreground/75", size: 18 }))));
};

"use client";
"use strict";
exports.__esModule = true;
exports.CTAWithGithub = void 0;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var oss_chips_1 = require("../ui/oss-chips");
var oss_lights_1 = require("../ui/oss-lights");
var shiny_lights_1 = require("../ui/shiny-lights");
exports.CTAWithGithub = function () {
    return (React.createElement("div", { className: "relative mx-auto flex flex-col items-center justify-center overflow-hidden py-20 text-gray-400 md:px-8" },
        React.createElement(shiny_lights_1.HeroMainboardStuff, { className: "absolute top-[-100px] block brightness-50 invert dark:hidden" }),
        React.createElement("div", { className: "relative flex flex-col items-center justify-center gap-6" },
            React.createElement("div", { className: "absolute left-1/2 top-[-100px] -translate-x-1/2" },
                React.createElement(oss_lights_1.OssLight, null))),
        React.createElement("div", { className: "relative flex items-center justify-center" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, amount: 0.5 }, transition: { duration: 1, ease: "easeInOut" } },
                React.createElement(image_1["default"], { alt: "Github logo", src: "/github.svg", className: "mt-24 hidden dark:block", width: 640, height: 520 }),
                React.createElement("div", { className: "absolute left-[-50px] top-[150px] -z-50 lg:left-[150px] lg:top-[400px] lg:h-[400px] lg:w-[1000px]" },
                    React.createElement(oss_chips_1.OssChip, { className: "flex" }))))));
};

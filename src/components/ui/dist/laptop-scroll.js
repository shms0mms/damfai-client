"use client";
"use strict";
exports.__esModule = true;
exports.OptionKey = exports.SpeakerGrid = exports.Row = exports.KBtn = exports.Keypad = exports.Trackpad = exports.Lid = exports.LaptopScroll = void 0;
var icons_react_1 = require("@tabler/icons-react");
var icons_react_2 = require("@tabler/icons-react");
var icons_react_3 = require("@tabler/icons-react");
var icons_react_4 = require("@tabler/icons-react");
var icons_react_5 = require("@tabler/icons-react");
var icons_react_6 = require("@tabler/icons-react");
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
exports.LaptopScroll = function (_a) {
    var src = _a.src, showGradient = _a.showGradient, title = _a.title, badge = _a.badge;
    var ref = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        target: ref,
        offset: ["start start", "end start"]
    }).scrollYProgress;
    var _b = react_1.useState(false), isMobile = _b[0], setIsMobile = _b[1];
    react_1.useEffect(function () {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);
    var scaleX = framer_motion_1.useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
    var scaleY = framer_motion_1.useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5]);
    var translate = framer_motion_1.useTransform(scrollYProgress, [0, 1], [0, 1500]);
    var rotate = framer_motion_1.useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    var textTransform = framer_motion_1.useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    var textOpacity = framer_motion_1.useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    return (react_1["default"].createElement("div", { ref: ref, className: "flex min-h-[120vh] flex-shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-80" },
        react_1["default"].createElement(framer_motion_1.motion.h2, { style: {
                translateY: textTransform,
                opacity: textOpacity
            }, className: "text-center text-3xl font-bold text-neutral-800 dark:text-white" }, title || react_1["default"].createElement("span", null)),
        react_1["default"].createElement(exports.Lid, { src: src, scaleX: scaleX, scaleY: scaleY, rotate: rotate, translate: translate }),
        react_1["default"].createElement("div", { className: "relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]" },
            react_1["default"].createElement("div", { className: "relative h-10 w-full" },
                react_1["default"].createElement("div", { className: "absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" })),
            react_1["default"].createElement("div", { className: "relative flex" },
                react_1["default"].createElement("div", { className: "mx-auto h-full w-[10%] overflow-hidden" },
                    react_1["default"].createElement(exports.SpeakerGrid, null)),
                react_1["default"].createElement("div", { className: "mx-auto h-full w-[80%]" },
                    react_1["default"].createElement(exports.Keypad, null)),
                react_1["default"].createElement("div", { className: "mx-auto h-full w-[10%] overflow-hidden" },
                    react_1["default"].createElement(exports.SpeakerGrid, null))),
            react_1["default"].createElement(exports.Trackpad, null),
            react_1["default"].createElement("div", { className: "absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" }),
            showGradient && (react_1["default"].createElement("div", { className: "absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" })),
            badge && react_1["default"].createElement("div", { className: "absolute bottom-4 left-4" }, badge))));
};
exports.Lid = function (_a) {
    var scaleX = _a.scaleX, scaleY = _a.scaleY, rotate = _a.rotate, translate = _a.translate, src = _a.src;
    return (react_1["default"].createElement("div", { className: "relative [perspective:800px]" },
        react_1["default"].createElement("div", { style: {
                transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                transformOrigin: "bottom",
                transformStyle: "preserve-3d"
            }, className: "relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2" },
            react_1["default"].createElement("div", { style: {
                    boxShadow: "0px 2px 0px 2px var(--neutral-900) inset"
                }, className: "absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]" },
                react_1["default"].createElement("span", { className: "text-white" },
                    react_1["default"].createElement(AceternityLogo, null)))),
        react_1["default"].createElement(framer_motion_1.motion.div, { style: {
                scaleX: scaleX,
                scaleY: scaleY,
                rotateX: rotate,
                translateY: translate,
                transformStyle: "preserve-3d",
                transformOrigin: "top"
            }, className: "absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2" },
            react_1["default"].createElement("div", { className: "absolute inset-0 rounded-lg bg-[#272729]" }),
            react_1["default"].createElement(image_1["default"], { src: src, alt: "aceternity logo", fill: true, className: "absolute inset-0 h-full w-full rounded-lg object-cover object-left-top" }))));
};
exports.Trackpad = function () {
    return (react_1["default"].createElement("div", { className: "mx-auto my-1 h-32 w-[40%] rounded-xl", style: {
            boxShadow: "0px 0px 1px 1px #00000020 inset"
        } }));
};
exports.Keypad = function () {
    return (react_1["default"].createElement("div", { className: "mx-1 h-full rounded-md bg-[#050505] p-1" },
        react_1["default"].createElement(exports.Row, null,
            react_1["default"].createElement(exports.KBtn, { className: "w-10 items-end justify-start pb-[2px] pl-[4px]", childrenClassName: "items-start" }, "esc"),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconBrightnessDown, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F1")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconBrightnessUp, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F2")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconTable, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F3")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_2.IconSearch, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F4")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconMicrophone, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F5")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconMoon, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F6")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconPlayerTrackPrev, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F7")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconPlayerSkipForward, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F8")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconPlayerTrackNext, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F8")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconVolume3, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F10")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconVolume2, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F11")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement(icons_react_1.IconVolume, { className: "h-[6px] w-[6px]" }),
                react_1["default"].createElement("span", { className: "mt-1 inline-block" }, "F12")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("div", { className: "h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px" },
                    react_1["default"].createElement("div", { className: "h-full w-full rounded-full bg-black" })))),
        react_1["default"].createElement(exports.Row, null,
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "~"),
                react_1["default"].createElement("span", { className: "mt-1 block" }, "`")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "!"),
                react_1["default"].createElement("span", { className: "block" }, "1")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "@"),
                react_1["default"].createElement("span", { className: "block" }, "2")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "#"),
                react_1["default"].createElement("span", { className: "block" }, "3")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "$"),
                react_1["default"].createElement("span", { className: "block" }, "4")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "%"),
                react_1["default"].createElement("span", { className: "block" }, "5")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "^"),
                react_1["default"].createElement("span", { className: "block" }, "6")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "&"),
                react_1["default"].createElement("span", { className: "block" }, "7")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "*"),
                react_1["default"].createElement("span", { className: "block" }, "8")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "("),
                react_1["default"].createElement("span", { className: "block" }, "9")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, ")"),
                react_1["default"].createElement("span", { className: "block" }, "0")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "\u2014"),
                react_1["default"].createElement("span", { className: "block" }, "_")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "+"),
                react_1["default"].createElement("span", { className: "block" }, " = ")),
            react_1["default"].createElement(exports.KBtn, { className: "w-10 items-end justify-end pb-[2px] pr-[4px]", childrenClassName: "items-end" }, "delete")),
        react_1["default"].createElement(exports.Row, null,
            react_1["default"].createElement(exports.KBtn, { className: "w-10 items-end justify-start pb-[2px] pl-[4px]", childrenClassName: "items-start" }, "tab"),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "Q")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "W")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "E")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "R")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "T")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "Y")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "U")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "I")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "O")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "P")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "{"),
                react_1["default"].createElement("span", { className: "block" }, "[")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "}"),
                react_1["default"].createElement("span", { className: "block" }, "]")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "|"),
                react_1["default"].createElement("span", { className: "block" }, "\\"))),
        react_1["default"].createElement(exports.Row, null,
            react_1["default"].createElement(exports.KBtn, { className: "w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]", childrenClassName: "items-start" }, "caps lock"),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "A")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "S")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "D")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "F")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "G")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "H")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "J")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "K")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "L")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, ":"),
                react_1["default"].createElement("span", { className: "block" }, ";")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "\""),
                react_1["default"].createElement("span", { className: "block" }, "'")),
            react_1["default"].createElement(exports.KBtn, { className: "w-[2.85rem] items-end justify-end pb-[2px] pr-[4px]", childrenClassName: "items-end" }, "return")),
        react_1["default"].createElement(exports.Row, null,
            react_1["default"].createElement(exports.KBtn, { className: "w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]", childrenClassName: "items-start" }, "shift"),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "Z")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "X")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "C")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "V")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "B")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "N")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "M")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "<"),
                react_1["default"].createElement("span", { className: "block" }, ",")),
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, ">"),
                react_1["default"].createElement("span", { className: "block" }, ".")),
            " ",
            react_1["default"].createElement(exports.KBtn, null,
                react_1["default"].createElement("span", { className: "block" }, "?"),
                react_1["default"].createElement("span", { className: "block" }, "/")),
            react_1["default"].createElement(exports.KBtn, { className: "w-[3.65rem] items-end justify-end pb-[2px] pr-[4px]", childrenClassName: "items-end" }, "shift")),
        react_1["default"].createElement(exports.Row, null,
            react_1["default"].createElement(exports.KBtn, { className: "", childrenClassName: "h-full justify-between py-[4px]" },
                react_1["default"].createElement("div", { className: "flex w-full justify-end pr-1" },
                    react_1["default"].createElement("span", { className: "block" }, "fn")),
                react_1["default"].createElement("div", { className: "flex w-full justify-start pl-1" },
                    react_1["default"].createElement(icons_react_3.IconWorld, { className: "h-[6px] w-[6px]" }))),
            react_1["default"].createElement(exports.KBtn, { className: "", childrenClassName: "h-full justify-between py-[4px]" },
                react_1["default"].createElement("div", { className: "flex w-full justify-end pr-1" },
                    react_1["default"].createElement(icons_react_1.IconChevronUp, { className: "h-[6px] w-[6px]" })),
                react_1["default"].createElement("div", { className: "flex w-full justify-start pl-1" },
                    react_1["default"].createElement("span", { className: "block" }, "control"))),
            react_1["default"].createElement(exports.KBtn, { className: "", childrenClassName: "h-full justify-between py-[4px]" },
                react_1["default"].createElement("div", { className: "flex w-full justify-end pr-1" },
                    react_1["default"].createElement(exports.OptionKey, { className: "h-[6px] w-[6px]" })),
                react_1["default"].createElement("div", { className: "flex w-full justify-start pl-1" },
                    react_1["default"].createElement("span", { className: "block" }, "option"))),
            react_1["default"].createElement(exports.KBtn, { className: "w-8", childrenClassName: "h-full justify-between py-[4px]" },
                react_1["default"].createElement("div", { className: "flex w-full justify-end pr-1" },
                    react_1["default"].createElement(icons_react_4.IconCommand, { className: "h-[6px] w-[6px]" })),
                react_1["default"].createElement("div", { className: "flex w-full justify-start pl-1" },
                    react_1["default"].createElement("span", { className: "block" }, "command"))),
            react_1["default"].createElement(exports.KBtn, { className: "w-[8.2rem]" }),
            react_1["default"].createElement(exports.KBtn, { className: "w-8", childrenClassName: "h-full justify-between py-[4px]" },
                react_1["default"].createElement("div", { className: "flex w-full justify-start pl-1" },
                    react_1["default"].createElement(icons_react_4.IconCommand, { className: "h-[6px] w-[6px]" })),
                react_1["default"].createElement("div", { className: "flex w-full justify-start pl-1" },
                    react_1["default"].createElement("span", { className: "block" }, "command"))),
            react_1["default"].createElement(exports.KBtn, { className: "", childrenClassName: "h-full justify-between py-[4px]" },
                react_1["default"].createElement("div", { className: "flex w-full justify-start pl-1" },
                    react_1["default"].createElement(exports.OptionKey, { className: "h-[6px] w-[6px]" })),
                react_1["default"].createElement("div", { className: "flex w-full justify-start pl-1" },
                    react_1["default"].createElement("span", { className: "block" }, "option"))),
            react_1["default"].createElement("div", { className: "mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]" },
                react_1["default"].createElement(exports.KBtn, { className: "h-3 w-6" },
                    react_1["default"].createElement(icons_react_1.IconCaretUpFilled, { className: "h-[6px] w-[6px]" })),
                react_1["default"].createElement("div", { className: "flex" },
                    react_1["default"].createElement(exports.KBtn, { className: "h-3 w-6" },
                        react_1["default"].createElement(icons_react_5.IconCaretLeftFilled, { className: "h-[6px] w-[6px]" })),
                    react_1["default"].createElement(exports.KBtn, { className: "h-3 w-6" },
                        react_1["default"].createElement(icons_react_6.IconCaretDownFilled, { className: "h-[6px] w-[6px]" })),
                    react_1["default"].createElement(exports.KBtn, { className: "h-3 w-6" },
                        react_1["default"].createElement(icons_react_1.IconCaretRightFilled, { className: "h-[6px] w-[6px]" })))))));
};
exports.KBtn = function (_a) {
    var className = _a.className, children = _a.children, childrenClassName = _a.childrenClassName, _b = _a.backlit, backlit = _b === void 0 ? true : _b;
    return (react_1["default"].createElement("div", { className: utils_1.cn("rounded-[4px] p-[0.5px]", backlit && "bg-white/[0.2] shadow-xl shadow-white") },
        react_1["default"].createElement("div", { className: utils_1.cn("flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]", className), style: {
                boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
            } },
            react_1["default"].createElement("div", { className: utils_1.cn("flex w-full flex-col items-center justify-center text-[5px] text-neutral-200", childrenClassName, backlit && "text-white") }, children))));
};
exports.Row = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "mb-[2px] flex w-full flex-shrink-0 gap-[2px]" }, children));
};
exports.SpeakerGrid = function () {
    return (react_1["default"].createElement("div", { className: "mt-2 flex h-40 gap-[2px] px-[0.5px]", style: {
            backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
            backgroundSize: "3px 3px"
        } }));
};
exports.OptionKey = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement("svg", { fill: "none", version: "1.1", id: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", className: className },
        react_1["default"].createElement("rect", { stroke: "currentColor", strokeWidth: 2, x: "18", y: "5", width: "10", height: "2" }),
        react_1["default"].createElement("polygon", { stroke: "currentColor", strokeWidth: 2, points: "10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 " }),
        react_1["default"].createElement("rect", { id: "_Transparent_Rectangle_", className: "st0", width: "32", height: "32", stroke: "none" })));
};
var AceternityLogo = function () {
    return (react_1["default"].createElement("svg", { width: "66", height: "65", viewBox: "0 0 66 65", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "h-3 w-3 text-white" },
        react_1["default"].createElement("path", { d: "M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696", stroke: "currentColor", strokeWidth: "15", strokeMiterlimit: "3.86874", strokeLinecap: "round" })));
};

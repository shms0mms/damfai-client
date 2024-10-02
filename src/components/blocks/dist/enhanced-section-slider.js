"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
function EnhancedSectionSlider(_a) {
    var sections = _a.sections;
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var _c = react_1.useState(0), direction = _c[0], setDirection = _c[1];
    react_1.useEffect(function () {
        var handleKeyDown = function (event) {
            if (event.key === "ArrowDown") {
                goToNextSection();
            }
            else if (event.key === "ArrowUp") {
                goToPreviousSection();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return function () { return window.removeEventListener("keydown", handleKeyDown); };
    }, []);
    var goToNextSection = function () {
        if (currentIndex < sections.length - 1) {
            setDirection(1);
            setCurrentIndex(function (prevIndex) { return prevIndex + 1; });
        }
    };
    var goToPreviousSection = function () {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(function (prevIndex) { return prevIndex - 1; });
        }
    };
    var variants = {
        enter: function (direction) { return ({
            y: direction > 0 ? "100%" : "-100%",
            opacity: 0
        }); },
        center: {
            y: 0,
            opacity: 1
        },
        exit: function (direction) { return ({
            y: direction < 0 ? "100%" : "-100%",
            opacity: 0
        }); }
    };
    return (react_1["default"].createElement("div", { className: "relative h-screen w-full overflow-hidden" },
        react_1["default"].createElement(framer_motion_1.AnimatePresence, { initial: false, custom: direction },
            react_1["default"].createElement(framer_motion_1.motion.div, { key: currentIndex, custom: direction, variants: variants, initial: "enter", animate: "center", exit: "exit", transition: {
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.6 }
                }, className: "absolute inset-0 flex items-center justify-center", style: { background: sections[currentIndex].background } },
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { delay: 0.2, duration: 1 }, className: "w-full p-8" }, sections[currentIndex].content))),
        react_1["default"].createElement("div", { className: "absolute inset-y-0 left-0 flex items-center p-4" },
            react_1["default"].createElement(button_1.Button, { variant: "outline", size: "icon", onClick: goToPreviousSection, disabled: currentIndex === 0, className: "rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20", "aria-label": "Previous section" },
                react_1["default"].createElement(lucide_react_1.ChevronUp, { className: "h-6 w-6" }))),
        react_1["default"].createElement("div", { className: "absolute inset-y-0 right-0 flex items-center p-4" },
            react_1["default"].createElement(button_1.Button, { variant: "outline", size: "icon", onClick: goToNextSection, disabled: currentIndex === sections.length - 1, className: "rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20", "aria-label": "Next section" },
                react_1["default"].createElement(lucide_react_1.ChevronDown, { className: "h-6 w-6" }))),
        react_1["default"].createElement("div", { className: "absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2" })));
}
exports["default"] = EnhancedSectionSlider;

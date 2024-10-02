"use client";
"use strict";
exports.__esModule = true;
exports.Modal = void 0;
var navigation_1 = require("next/navigation");
var credenza_1 = require("@/components/ui/credenza");
exports.Modal = function (_a) {
    var children = _a.children, title = _a.title, description = _a.description, classNames = _a.classNames;
    var router = navigation_1.useRouter();
    var handleOpenChange = function () { return router.back(); };
    return (React.createElement(credenza_1.Credenza, { open: true, onOpenChange: handleOpenChange },
        React.createElement(credenza_1.CredenzaContent, { className: classNames === null || classNames === void 0 ? void 0 : classNames.content },
            React.createElement(credenza_1.CredenzaHeader, { className: classNames === null || classNames === void 0 ? void 0 : classNames.header },
                React.createElement(credenza_1.CredenzaTitle, { className: classNames === null || classNames === void 0 ? void 0 : classNames.title }, title),
                description ? (React.createElement(credenza_1.CredenzaDescription, { className: classNames === null || classNames === void 0 ? void 0 : classNames.description }, description)) : null),
            children)));
};

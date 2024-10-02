"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var auth_1 = require("@/providers/auth");
var avatar_1 = require("@/components/ui/avatar");
var card_1 = require("@/components/ui/card");
var skeleton_1 = require("@/components/ui/skeleton");
var edit_1 = require("./edit");
function Profile() {
    var _a, _b;
    var _c = react_1.useContext(auth_1.AuthContext), user = _c.user, isLoading = _c.isLoading;
    return (React.createElement(card_1.Card, { className: "col-span-1 max-xl:col-span-2" },
        React.createElement(card_1.CardHeader, null,
            React.createElement(card_1.CardTitle, null, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C")),
        React.createElement(card_1.CardContent, { className: "flex flex-col items-center space-y-4" },
            React.createElement(avatar_1.Avatar, { className: "h-24 w-24" },
                React.createElement(avatar_1.AvatarImage, { alt: "Icon of profile" }),
                React.createElement(avatar_1.AvatarFallback, null,
                    React.createElement(lucide_react_1.User, { className: "h-12 w-12" }))),
            React.createElement("div", { className: "flex flex-col items-center gap-2 text-center" },
                React.createElement("h2", { className: "text-xl font-bold" }, (user === null || user === void 0 ? void 0 : user.name) ? (user === null || user === void 0 ? void 0 : user.name) : (React.createElement(skeleton_1.Skeleton, { className: "h-[20px] w-[100px]" }))),
                React.createElement("div", { className: "text-sm text-muted-foreground" }, (user === null || user === void 0 ? void 0 : user.email) ? user.email
                    : isLoading && React.createElement(skeleton_1.Skeleton, { className: "h-[20px] w-[200px]" })),
                React.createElement("div", { className: "text-sm text-muted-foreground" },
                    "\u041D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441:",
                    " ",
                    (user === null || user === void 0 ? void 0 : user.created_at) ? (_b = (_a = new Date(user === null || user === void 0 ? void 0 : user.created_at)) === null || _a === void 0 ? void 0 : _a.toLocaleDateString) === null || _b === void 0 ? void 0 : _b.call(_a) : isLoading && React.createElement(skeleton_1.Skeleton, { className: "h-[20px] w-[200px]" })),
                React.createElement("div", { className: "text-sm text-muted-foreground" },
                    "\u041B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440:",
                    " ",
                    (user === null || user === void 0 ? void 0 : user.ganre) ? (user.ganre) : isLoading ? (React.createElement(skeleton_1.Skeleton, { className: "h-[20px] w-[100px]" })) : ("Отсутствует")),
                React.createElement(edit_1["default"], null)))));
}
exports["default"] = Profile;

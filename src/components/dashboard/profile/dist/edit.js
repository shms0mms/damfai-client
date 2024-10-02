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
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("zod");
var options_config_1 = require("@/config/options.config");
var auth_1 = require("@/providers/auth");
var button_1 = require("@/components/ui/button");
var dialog_1 = require("@/components/ui/dialog");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var formSchema = zod_1.z.object({
    name: zod_1.z.string({
        message: options_config_1.OPTIONS.required
    }),
    surname: zod_1.z.string({
        message: options_config_1.OPTIONS.required
    }),
    email: zod_1.z.string({ message: options_config_1.OPTIONS.required }).email({
        message: options_config_1.OPTIONS.email.message
    }),
    password: zod_1.z
        .string({
        message: options_config_1.OPTIONS.required
    })
        .min(options_config_1.OPTIONS.password.value, {
        message: options_config_1.OPTIONS.password.message
    })
});
function EditProfile() {
    var user = react_1.useContext(auth_1.AuthContext).user;
    var form = react_hook_form_1.useForm();
    var onSubmit = function (data) { };
    return (React.createElement(dialog_1.Dialog, null,
        React.createElement(dialog_1.DialogTrigger, { asChild: true },
            React.createElement(button_1.Button, { type: "button" }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
        React.createElement(dialog_1.DialogContent, { className: "sm:max-w-[425px]" },
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, null, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
                React.createElement(dialog_1.DialogDescription, null, "\u0412\u043D\u0435\u0441\u0438\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C \u0437\u0434\u0435\u0441\u044C. \u041A\u043E\u0433\u0434\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0435, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C.")),
            React.createElement(form_1.Form, __assign({}, form),
                React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "grid gap-4 py-4" },
                    React.createElement(form_1.FormField, { control: form.control, name: "email", defaultValue: user === null || user === void 0 ? void 0 : user.email, render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, null,
                                React.createElement(form_1.FormLabel, null, "\u041F\u043E\u0447\u0442\u0430"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(input_1.Input, __assign({ placeholder: "m@example.com" }, field))),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement(form_1.FormField, { control: form.control, name: "name", defaultValue: user === null || user === void 0 ? void 0 : user.name, render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, null,
                                React.createElement(form_1.FormLabel, null, "\u0418\u043C\u044F"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(input_1.Input, __assign({ placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F" }, field))),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement(form_1.FormField, { control: form.control, name: "surname", defaultValue: user === null || user === void 0 ? void 0 : user.name, render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, null,
                                React.createElement(form_1.FormLabel, null, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(input_1.Input, __assign({ placeholder: "\u0412\u0430\u0448\u0430 \u0444\u0430\u043C\u0438\u043B\u0438\u044F" }, field))),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement(form_1.FormField, { control: form.control, name: "password", render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, null,
                                React.createElement(form_1.FormLabel, null, "\u041F\u0430\u0440\u043E\u043B\u044C"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(input_1.Input, __assign({ placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }, field))),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement(button_1.Button, { type: "submit", className: "ml-auto" }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))))));
}
exports["default"] = EditProfile;

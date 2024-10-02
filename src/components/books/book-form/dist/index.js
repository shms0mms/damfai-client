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
exports.BookForm = void 0;
var zod_1 = require("@hookform/resolvers/zod");
var date_fns_1 = require("date-fns");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("zod");
var button_1 = require("@/components/ui/button");
var calendar_1 = require("@/components/ui/calendar");
var form_1 = require("@/components/ui/form");
var utils_1 = require("@/lib/utils");
var formSchema = zod_2.z.object({
    dates: zod_2.z.object({ from: zod_2.z.date(), to: zod_2.z.date() })
});
exports.BookForm = function (_a) {
    var book = _a.book, className = _a.className;
    var form = react_hook_form_1.useForm({
        defaultValues: {
            dates: {
                from: new Date(),
                to: date_fns_1.add(new Date(), {
                    days: 7
                })
            }
        },
        resolver: zod_1.zodResolver(formSchema)
    });
    var onSubmit = function (data) {
        console.log(data);
    };
    return (React.createElement(form_1.Form, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: utils_1.cn("flex flex-col gap-8", className) },
            React.createElement(form_1.FormField, { control: form.control, name: "dates", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, null,
                        React.createElement(form_1.FormLabel, null, "\u0421\u0440\u043E\u043A\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F \u043A\u043D\u0438\u0433\u0438"),
                        React.createElement(calendar_1.Calendar, { mode: "range", selected: field.value, onSelect: field.onChange, className: "w-auto", initialFocus: true, classNames: {
                                head_cell: "text-muted-foreground rounded-md w-7 lg:w-10 font-normal text-[0.8rem]",
                                head_row: "flex lg:gap-2",
                                nav_button: utils_1.cn(button_1.buttonVariants({ variant: "outline" }), "h-8 w-8 lg:h-10 lg:w-10 bg-transparent p-0 opacity-50 hover:opacity-100"),
                                day: utils_1.cn(button_1.buttonVariants({ variant: "ghost" }), "h-7 w-7 lg:h-10 lg:w-10 p-0 font-normal aria-selected:opacity-100")
                            } }),
                        React.createElement(form_1.FormDescription, null, "\u0421\u0440\u043E\u043A\u0438 \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u044D\u0442\u0443 \u043A\u043D\u0438\u0433\u0443, \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u0412\u0430\u043C \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C \u043E\u0431 \u044D\u0442\u043E\u043C"),
                        React.createElement(form_1.FormMessage, null)));
                } }),
            React.createElement(button_1.Button, { className: "mt-full w-full" }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0447\u0438\u0442\u0430\u0442\u044C \u043A\u043D\u0438\u0433\u0443"))));
};

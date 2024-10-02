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
exports.BooksFilters = void 0;
var react_query_1 = require("@tanstack/react-query");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var useFiltersFromParams_1 = require("@/hooks/useFiltersFromParams");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var input_1 = require("@/components/ui/input");
var label_1 = require("@/components/ui/label");
var select_1 = require("@/components/ui/select");
var sheet_1 = require("@/components/ui/sheet");
var skeleton_1 = require("@/components/ui/skeleton");
var slider_1 = require("@/components/ui/slider");
var books_filters_1 = require("@/lib/books-filters");
function BooksFiltersComponent() {
    var _a = react_query_1.useQuery({
        initialData: undefined,
        queryKey: ["book-filters"],
        queryFn: books_filters_1.getBooksFilter
    }), booksFilters = _a.data, isLoading = _a.isLoading;
    var defaultFilters = useFiltersFromParams_1.useFiltersFromParams();
    var _b = react_1.useState(defaultFilters), filters = _b[0], setFilters = _b[1];
    var router = navigation_1.useRouter();
    var onSubmit = function () {
        var processedFilters = structuredClone(filters);
        for (var _i = 0, _a = Object.entries(processedFilters); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (Array.isArray(value)) {
                processedFilters[key + "__gte"] = value[0].toString();
                processedFilters[key + "__lte"] = value[1].toString();
                delete processedFilters[key];
            }
            else {
                processedFilters[key] = processedFilters[key].toString();
            }
        }
        var filtersAsMatrix = Object.entries(processedFilters).map(function (_a) {
            var key = _a[0], value = _a[1];
            return [key, value.toString()];
        });
        router.push("/catalog?" + new URLSearchParams(filtersAsMatrix).toString());
    };
    var handleFilterChange = function (key, value) { return setFilters(function (prev) {
        var _a;
        return (__assign(__assign({}, prev), (_a = {}, _a[key] = value, _a)));
    }); };
    var renderFilter = function (filter) {
        var _a;
        switch (filter.type) {
            case "string":
                return (React.createElement("div", { key: filter.id, className: "space-y-2" },
                    React.createElement(label_1.Label, { htmlFor: filter.id }, filter.label),
                    React.createElement(input_1.Input, { id: filter.id, value: (_a = filters[filter.id]) !== null && _a !== void 0 ? _a : "", onChange: function (e) { return handleFilterChange(filter.id, e.target.value); } })));
            case "number-range":
                return (React.createElement("div", { key: filter.label, className: "mb-4 space-y-2" },
                    React.createElement(label_1.Label, null, filter.label),
                    React.createElement(slider_1.Slider, { min: filter.minValue, max: filter.maxValue, step: 0.1, value: filters[filter.id], 
                        // @ts-expect-error adsfg
                        onValueChange: function (value) { return handleFilterChange(filter.id, value); }, minStepsBetweenThumbs: 0.1 })));
            case "enum":
                return (React.createElement("div", { key: filter.label, className: "space-y-2" },
                    React.createElement(label_1.Label, null, filter.label),
                    React.createElement(select_1.Select, { value: filters[filter.id], onValueChange: function (value) { return handleFilterChange(filter.id, value); } },
                        React.createElement(select_1.SelectTrigger, null,
                            React.createElement(select_1.SelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0430\u043D\u0440" })),
                        React.createElement(select_1.SelectContent, null, filter.options.map(function (option) { return (React.createElement(select_1.SelectItem, { key: option, value: option }, option)); })))));
        }
    };
    var filterContent = (React.createElement("div", null,
        React.createElement("div", { className: "flex flex-col gap-4" },
            booksFilters && !isLoading
                ? booksFilters.map(renderFilter)
                : new Array(4).fill(null).map(function (_, i) { return (React.createElement("div", { className: "flex flex-col gap-[0.725rem]", key: i },
                    React.createElement(skeleton_1.Skeleton, { className: "h-4 w-14" }),
                    React.createElement(skeleton_1.Skeleton, { className: "h-[2.3rem] w-full" }))); }),
            React.createElement(button_1.Button, { onClick: onSubmit, className: "mt-4 w-full" }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"))));
    return (React.createElement(React.Fragment, null,
        React.createElement(card_1.Card, { className: "sticky top-20 hidden lg:block" },
            React.createElement(card_1.CardHeader, { className: "p-1.5" },
                React.createElement(card_1.CardTitle, null, "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043D\u0438\u0433"),
                React.createElement(card_1.CardDescription, null, "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043A\u043D\u0438\u0433\u0443 \u043F\u043E \u0432\u0430\u0448\u0438\u043C \u0432\u043A\u0443\u0441\u0430\u043C, \u0438\u043C\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u043D\u0438\u0436\u0435")),
            React.createElement(card_1.CardContent, { className: "p-1.5" }, filterContent)),
        React.createElement("div", { className: "lg:hidden" },
            React.createElement(sheet_1.Sheet, null,
                React.createElement(sheet_1.SheetTrigger, { asChild: true },
                    React.createElement(button_1.Button, { variant: "outline" }, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B")),
                React.createElement(sheet_1.SheetContent, { side: "left" },
                    React.createElement(sheet_1.SheetHeader, { className: "mb-4" },
                        React.createElement(sheet_1.SheetTitle, null, "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043A\u043D\u0438\u0433"),
                        React.createElement(sheet_1.SheetDescription, null, "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043A\u043D\u0438\u0433\u0443 \u043F\u043E \u0432\u0430\u0448\u0438\u043C \u0432\u043A\u0443\u0441\u0430\u043C, \u0438\u043C\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u043D\u0438\u0436\u0435")),
                    filterContent)))));
}
exports.BooksFilters = BooksFiltersComponent;

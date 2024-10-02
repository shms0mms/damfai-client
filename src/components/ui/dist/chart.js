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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.ChartStyle = exports.ChartLegendContent = exports.ChartLegend = exports.ChartTooltipContent = exports.ChartTooltip = exports.ChartContainer = void 0;
var React = require("react");
var RechartsPrimitive = require("recharts");
var utils_1 = require("@/lib/utils");
// Format: { THEME_NAME: CSS_SELECTOR }
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React.createContext(null);
function useChart() {
    var context = React.useContext(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
var ChartContainer = React.forwardRef(function (_a, ref) {
    var id = _a.id, className = _a.className, children = _a.children, config = _a.config, props = __rest(_a, ["id", "className", "children", "config"]);
    var uniqueId = React.useId();
    var chartId = "chart-" + (id || uniqueId.replace(/:/g, ""));
    return (React.createElement(ChartContext.Provider, { value: { config: config } },
        React.createElement("div", __assign({ "data-chart": chartId, ref: ref, className: utils_1.cn("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className) }, props),
            React.createElement(ChartStyle, { id: chartId, config: config }),
            React.createElement(RechartsPrimitive.ResponsiveContainer, null, children))));
});
exports.ChartContainer = ChartContainer;
ChartContainer.displayName = "Chart";
var ChartStyle = function (_a) {
    var id = _a.id, config = _a.config;
    var colorConfig = Object.entries(config).filter(function (_a) {
        var _ = _a[0], config = _a[1];
        return config.theme || config.color;
    });
    if (!colorConfig.length) {
        return null;
    }
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES)
                .map(function (_a) {
                var theme = _a[0], prefix = _a[1];
                return "\n" + prefix + " [data-chart=" + id + "] {\n" + colorConfig
                    .map(function (_a) {
                    var _b;
                    var key = _a[0], itemConfig = _a[1];
                    var color = ((_b = itemConfig.theme) === null || _b === void 0 ? void 0 : _b[theme]) ||
                        itemConfig.color;
                    return color ? "  --color-" + key + ": " + color + ";" : null;
                })
                    .join("\n") + "\n}\n";
            })
                .join("\n")
        } }));
};
exports.ChartStyle = ChartStyle;
var ChartTooltip = RechartsPrimitive.Tooltip;
exports.ChartTooltip = ChartTooltip;
var ChartTooltipContent = React.forwardRef(function (_a, ref) {
    var active = _a.active, payload = _a.payload, className = _a.className, _b = _a.indicator, indicator = _b === void 0 ? "dot" : _b, _c = _a.hideLabel, hideLabel = _c === void 0 ? false : _c, _d = _a.hideIndicator, hideIndicator = _d === void 0 ? false : _d, label = _a.label, labelFormatter = _a.labelFormatter, labelClassName = _a.labelClassName, formatter = _a.formatter, color = _a.color, nameKey = _a.nameKey, labelKey = _a.labelKey;
    var config = useChart().config;
    var tooltipLabel = React.useMemo(function () {
        var _a;
        if (hideLabel || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
            return null;
        }
        var item = payload[0];
        var key = "" + (labelKey || item.dataKey || item.name || "value");
        var itemConfig = getPayloadConfigFromPayload(config, item, key);
        var value = !labelKey && typeof label === "string"
            ? ((_a = config[label]) === null || _a === void 0 ? void 0 : _a.label) || label
            : itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label;
        if (labelFormatter) {
            return (React.createElement("div", { className: utils_1.cn("font-medium", labelClassName) }, labelFormatter(value, payload)));
        }
        if (!value) {
            return null;
        }
        return React.createElement("div", { className: utils_1.cn("font-medium", labelClassName) }, value);
    }, [
        label,
        labelFormatter,
        payload,
        hideLabel,
        labelClassName,
        config,
        labelKey
    ]);
    if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
        return null;
    }
    var nestLabel = payload.length === 1 && indicator !== "dot";
    return (React.createElement("div", { ref: ref, className: utils_1.cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className) },
        !nestLabel ? tooltipLabel : null,
        React.createElement("div", { className: "grid gap-1.5" }, payload.map(function (item, index) {
            var key = "" + (nameKey || item.name || item.dataKey || "value");
            var itemConfig = getPayloadConfigFromPayload(config, item, key);
            var indicatorColor = color || item.payload.fill || item.color;
            return (React.createElement("div", { key: item.dataKey, className: utils_1.cn("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center") }, formatter && (item === null || item === void 0 ? void 0 : item.value) !== undefined && item.name ? (formatter(item.value, item.name, item, index, item.payload)) : (React.createElement(React.Fragment, null,
                (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) ? (React.createElement(itemConfig.icon, null)) : (!hideIndicator && (React.createElement("div", { className: utils_1.cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                    }), style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                    } }))),
                React.createElement("div", { className: utils_1.cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center") },
                    React.createElement("div", { className: "grid gap-1.5" },
                        nestLabel ? tooltipLabel : null,
                        React.createElement("span", { className: "text-muted-foreground" }, (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label) || item.name)),
                    item.value && (React.createElement("span", { className: "font-mono font-medium tabular-nums text-foreground" }, item.value.toLocaleString())))))));
        }))));
});
exports.ChartTooltipContent = ChartTooltipContent;
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive.Legend;
exports.ChartLegend = ChartLegend;
var ChartLegendContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.hideIcon, hideIcon = _b === void 0 ? false : _b, payload = _a.payload, _c = _a.verticalAlign, verticalAlign = _c === void 0 ? "bottom" : _c, nameKey = _a.nameKey;
    var config = useChart().config;
    if (!(payload === null || payload === void 0 ? void 0 : payload.length)) {
        return null;
    }
    return (React.createElement("div", { ref: ref, className: utils_1.cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className) }, payload.map(function (item) {
        var key = "" + (nameKey || item.dataKey || "value");
        var itemConfig = getPayloadConfigFromPayload(config, item, key);
        return (React.createElement("div", { key: item.value, className: utils_1.cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground") },
            (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) && !hideIcon ? (React.createElement(itemConfig.icon, null)) : (React.createElement("div", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: {
                    backgroundColor: item.color
                } })), itemConfig === null || itemConfig === void 0 ? void 0 :
            itemConfig.label));
    })));
});
exports.ChartLegendContent = ChartLegendContent;
ChartLegendContent.displayName = "ChartLegend";
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== "object" || payload === null) {
        return undefined;
    }
    var payloadPayload = "payload" in payload &&
        typeof payload.payload === "object" &&
        payload.payload !== null
        ? payload.payload
        : undefined;
    var configLabelKey = key;
    if (key in payload &&
        typeof payload[key] === "string") {
        configLabelKey = payload[key];
    }
    else if (payloadPayload &&
        key in payloadPayload &&
        typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config
        ? config[configLabelKey]
        : config[key];
}

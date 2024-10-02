"use client";
"use strict";
exports.__esModule = true;
exports.ReactQueryProvider = void 0;
var react_query_1 = require("@tanstack/react-query");
var queryClient = new react_query_1.QueryClient();
exports.ReactQueryProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(react_query_1.QueryClientProvider, { client: queryClient }, children));
};

"use strict";
exports.__esModule = true;
exports.Books = void 0;
var link_1 = require("next/link");
var direction_aware_hover_1 = require("../ui/direction-aware-hover");
var env_1 = require("@/env");
exports.Books = function (_a) {
    var books = _a.books;
    return (React.createElement("ul", { className: "lg:gap- grid min-h-[72.5vh] grid-cols-1 gap-2 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 2xl:grid-cols-4" }, books.map(function (book) { return (React.createElement("li", { key: book.id },
        React.createElement(link_1["default"], { href: "/books/" + book.id },
            React.createElement(direction_aware_hover_1.DirectionAwareHover, { className: "relative w-auto max-sm:h-[30rem] min-[700px]:h-[30rem] md:h-96 md:w-auto xl:h-[36rem]", imageClassName: "scale-[1.15]", imageUrl: env_1.env.NEXT_PUBLIC_SERVER_URL + "/books/img/" + book.id },
                React.createElement("h4", { className: "text-lg font-semibold" }, book.title),
                React.createElement("p", { className: "max-w-[calc(14rem-20px)] overflow-hidden truncate text-muted md:max-w-[calc(15rem-20px)] lg:max-w-[calc(16rem-20px)]" }, book.desc))))); })));
};

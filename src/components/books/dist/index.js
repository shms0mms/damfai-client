"use strict";
exports.__esModule = true;
exports.BookList = void 0;
var link_1 = require("next/link");
var carousel_1 = require("../ui/carousel");
var rating_1 = require("../ui/rating");
var separator_1 = require("../ui/separator");
var env_1 = require("@/env");
var utils_1 = require("@/lib/utils");
function BookList(_a) {
    var books = _a.books;
    var bookGanres = Array.from(new Set(books.map(function (book) { return book.ganres; }).flat()));
    var ganreAndBook = {};
    bookGanres.forEach(function (ganre) {
        ganreAndBook[ganre] = books.filter(function (book) { return book.ganres.includes(ganre); });
    });
    return (React.createElement("div", { className: "flex min-h-[80vh] flex-col justify-between sm:container" },
        React.createElement("ul", { className: "flex flex-col gap-4" }, Object.keys(ganreAndBook).map(function (ganre) {
            var books = ganreAndBook[ganre];
            return (React.createElement("li", { className: "w-full", key: ganre },
                React.createElement("h2", { className: "mb-2 text-3xl font-semibold" }, ganre),
                React.createElement(separator_1.Separator, null),
                React.createElement(carousel_1.Carousel, null,
                    React.createElement(carousel_1.CarouselContent, { className: "mx-4 py-2" }, books.map(function (book, i) { return (React.createElement(carousel_1.CarouselItem, { className: utils_1.cn("basis-[16rem] md:basis-[20rem]", {
                            "max-sm:pl-0": i === 0
                        }), key: book.id },
                        React.createElement(link_1["default"], { className: "flex flex-col gap-2 rounded-lg p-6 shadow-md", href: "/books/" + book.id },
                            React.createElement("img", { className: "overflow-hidden rounded-md", src: env_1.env.NEXT_PUBLIC_SERVER_URL + "/books/img/" + book.id, alt: book.title }),
                            React.createElement("div", { className: "flex justify-between" },
                                React.createElement("h3", { className: "mb-4 text-lg font-semibold sm:text-xl" }, book.title),
                                React.createElement("span", { className: "text-foreground/75" },
                                    book.chapters,
                                    " \u0441\u0442\u0440\u0430\u043D\u0438\u0446(\u0430)")),
                            React.createElement("div", { className: "flex justify-between" },
                                React.createElement("p", { className: "text-gray-600" },
                                    "\u0410\u0432\u0442\u043E\u0440: ",
                                    book.author),
                                React.createElement(rating_1.Rating, { rating: 4.5, showText: false, disabled: true, size: 18 })),
                            React.createElement("p", { className: "max-w-[calc(20rem-1.5rem)] overflow-hidden truncate text-sm text-gray-500" }, book.desc)))); })),
                    React.createElement(carousel_1.CarouselNext, { className: "hidden sm:inline-flex" }),
                    React.createElement(carousel_1.CarouselPrevious, { className: "hidden sm:inline-flex" }))));
        }))));
}
exports.BookList = BookList;

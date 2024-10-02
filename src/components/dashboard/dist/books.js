"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var card_1 = require("@/components/ui/card");
var progress_1 = require("@/components/ui/progress");
var tabs_1 = require("@/components/ui/tabs");
var books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", progress: 75 },
    { id: 2, title: "1984", author: "George Orwell", progress: 30 },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", progress: 100 },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        progress: 50
    }
];
var bookmarks = [
    { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger", page: 42 },
    {
        id: 2,
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        page: 156
    },
    { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", page: 89 }
];
function Books() {
    return (React.createElement(card_1.Card, { className: "max-xl:col-span-2" },
        React.createElement(tabs_1.Tabs, { defaultValue: "current", className: "w-full" },
            React.createElement(card_1.CardHeader, null,
                React.createElement("div", { className: "flex items-center justify-between gap-2 max-md:flex-col max-md:items-start" },
                    React.createElement(card_1.CardTitle, null, "\u041A\u043D\u0438\u0433\u0438"),
                    React.createElement(tabs_1.TabsList, null,
                        React.createElement(tabs_1.TabsTrigger, { value: "current" }, "\u0422\u0435\u043A\u0443\u0449\u0438\u0435"),
                        React.createElement(tabs_1.TabsTrigger, { value: "bookmarks" }, "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438"),
                        React.createElement(tabs_1.TabsTrigger, { value: "favourite" }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")))),
            React.createElement(card_1.CardContent, null,
                React.createElement(tabs_1.TabsContent, { value: "current" },
                    React.createElement("div", { className: "space-y-4" }, books.map(function (book) { return (React.createElement("div", { key: book.id, className: "flex items-center space-x-4 max-md:flex-col max-md:items-start" },
                        React.createElement("div", { className: "flex flex-1 items-center gap-2" },
                            React.createElement(lucide_react_1.BookOpen, { className: "h-6 w-6 shrink-0 text-blue-500" }),
                            React.createElement("div", null,
                                React.createElement("h3", { className: "truncate text-sm font-medium" }, book.title),
                                React.createElement("p", { className: "text-sm text-muted-foreground" }, book.author))),
                        React.createElement("div", { className: "flex items-center space-x-2" },
                            React.createElement(progress_1.Progress, { value: book.progress, className: "w-24" }),
                            React.createElement("span", { className: "whitespace-nowrap text-sm text-muted-foreground" },
                                book.progress,
                                "%")))); }))),
                React.createElement(tabs_1.TabsContent, { value: "bookmarks" },
                    React.createElement("div", { className: "space-y-4" }, bookmarks.map(function (bookmark) { return (React.createElement("div", { key: bookmark.id, className: "flex items-center space-x-4" },
                        React.createElement(lucide_react_1.Star, { className: "h-6 w-6 shrink-0 text-yellow-500" }),
                        React.createElement("div", { className: "min-w-0 flex-1" },
                            React.createElement("h3", { className: "truncate text-sm font-medium" }, bookmark.title),
                            React.createElement("p", { className: "text-sm text-muted-foreground" }, bookmark.author)),
                        React.createElement("div", { className: "flex items-center space-x-2" },
                            React.createElement("span", { className: "whitespace-nowrap text-sm text-muted-foreground" },
                                "Page ",
                                bookmark.page),
                            React.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4 text-muted-foreground" })))); }))),
                React.createElement(tabs_1.TabsContent, { value: "favourite" },
                    React.createElement("div", { className: "space-y-4" }, bookmarks.map(function (bookmark) { return (React.createElement("div", { key: bookmark.id, className: "flex items-center space-x-4" },
                        React.createElement(lucide_react_1.Heart, { className: "h-6 w-6 shrink-0 text-red-500" }),
                        React.createElement("div", { className: "min-w-0 flex-1" },
                            React.createElement("h3", { className: "truncate text-sm font-medium" }, bookmark.title),
                            React.createElement("p", { className: "text-sm text-muted-foreground" }, bookmark.author)),
                        React.createElement("div", { className: "flex items-center space-x-2" },
                            React.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4 text-muted-foreground" })))); })))))));
}
exports["default"] = Books;

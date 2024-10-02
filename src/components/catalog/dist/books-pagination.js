"use strict";
exports.__esModule = true;
exports.BooksPagination = void 0;
var pagination_1 = require("@/components/ui/pagination");
function BooksPagination(_a) {
    var pagination = _a.pagination, searchParams = _a.searchParams;
    var searchParamsAsString = new URLSearchParams(searchParams).toString();
    var renderPageNumbers = function () {
        var pageNumbers = [];
        var maxVisiblePages = 5;
        if (pagination.pages <= maxVisiblePages) {
            for (var i = 1; i <= pagination.pages; i++) {
                pageNumbers.push(React.createElement(pagination_1.PaginationItem, { key: i },
                    React.createElement(pagination_1.PaginationLink, { href: "/", isActive: pagination.page === i }, i)));
            }
        }
        else {
            var startPage = Math.max(1, pagination.page - 2);
            var endPage = Math.min(pagination.pages, startPage + maxVisiblePages - 1);
            if (startPage > 1) {
                pageNumbers.push(React.createElement(pagination_1.PaginationItem, { key: 1 },
                    React.createElement(pagination_1.PaginationLink, { href: "/books?page=" + pagination.page + "&" + searchParamsAsString }, "1")));
                if (startPage > 2) {
                    pageNumbers.push(React.createElement(pagination_1.PaginationEllipsis, { key: "ellipsis-start" }));
                }
            }
            for (var i = startPage; i <= endPage; i++) {
                pageNumbers.push(React.createElement(pagination_1.PaginationItem, { key: i },
                    React.createElement(pagination_1.PaginationLink, { href: "?page=" + i + "&" + searchParamsAsString, isActive: pagination.page === i }, i)));
            }
            if (endPage < pagination.pages) {
                if (endPage < pagination.pages - 1) {
                    pageNumbers.push(React.createElement(pagination_1.PaginationEllipsis, { key: "ellipsis-end" }));
                }
                pageNumbers.push(React.createElement(pagination_1.PaginationItem, { key: pagination.pages },
                    React.createElement(pagination_1.PaginationLink, { href: "?page=" + pagination.pages + "&" + searchParamsAsString }, pagination.pages)));
            }
        }
        return pageNumbers;
    };
    return (React.createElement(pagination_1.Pagination, null,
        React.createElement(pagination_1.PaginationContent, null,
            React.createElement(pagination_1.PaginationItem, null,
                React.createElement(pagination_1.PaginationPrevious, { href: "?page=" + (pagination.page > 0 ? pagination.page : 1) + "&" + searchParamsAsString, "aria-disabled": pagination.page === 1, tabIndex: pagination.page === 1 ? -1 : 0 })),
            renderPageNumbers(),
            React.createElement(pagination_1.PaginationItem, null,
                React.createElement(pagination_1.PaginationNext, { href: "?page=" + (pagination.page < pagination.pages ? pagination.page : pagination.pages) + "&" + searchParamsAsString, "aria-disabled": pagination.page === pagination.pages, tabIndex: pagination.page === pagination.pages ? -1 : 0 })))));
}
exports.BooksPagination = BooksPagination;

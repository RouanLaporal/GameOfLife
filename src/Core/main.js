"use strict";
exports.__esModule = true;
exports.Games = void 0;
var Games = /** @class */ (function () {
    function Games(board) {
        this.board = board;
    }
    Games.prototype.step = function () {
        var _this = this;
        this.board = this.board.map(function (row, cellY) {
            return row.map(function (cell, cellX) {
                var _a, _b;
                var number_of_neigbours = 0;
                for (var y = cellY - 1; y <= cellY + 1; y++) {
                    for (var x = cellX - 1; x <= cellX + 1; x++) {
                        if (y === cellY && x === cellX)
                            continue;
                        number_of_neigbours += (((_b = (_a = _this.board) === null || _a === void 0 ? void 0 : _a[y]) === null || _b === void 0 ? void 0 : _b[x]) || 0);
                    }
                }
                if (cell && [2, 3].includes(number_of_neigbours))
                    return 1;
                if (!cell && number_of_neigbours === 3)
                    return 1;
                return 0;
            });
        });
    };
    return Games;
}());
exports.Games = Games;

#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var clear = require('clear');
var chalk = require('chalk');
var main_1 = require("./main");
function printBoard(board) {
    var boardString = '';
    for (var _i = 0, board_1 = board; _i < board_1.length; _i++) {
        var row = board_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var cell = row_1[_a];
            boardString += (cell === 0) ? '   ' : chalk.bgWhite('   ');
        }
        boardString += '\n';
    }
    console.log(boardString);
}
clear();
var game = new main_1.Games([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
setInterval(function () {
    clear();
    printBoard(game.board);
    game.step();
}, 250);

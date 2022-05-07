#!/usr/bin/env node
import fetch from 'node-fetch';
const clear = require('clear')

const chalk = require('chalk');
import { Games } from './main'

function printBoard(board: Array<Array<number>>) {
  let boardString = ''
  for (let row of board) {
    for (let cell of row) {
      boardString += (cell === 0) ? '   ' : chalk.bgWhite('   ')
    }
    boardString += '\n'
  }
  console.log(boardString)
}
 
clear()
const game = new Games([
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
])


setInterval(() => {
  clear()
  printBoard(game.board)
  game.step()
}, 250)
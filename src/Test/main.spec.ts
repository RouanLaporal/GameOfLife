import * as matchers from "jest-extended";
import { Games } from '../Core/main';
expect.extend(matchers);

it("should correctly output the intial cell configuration", function () {
  const startingboard = [
    [0,0,0,1,0],
    [0,0,0,1,0],
    [1,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,1,0]
  ]
  expect(new Games(startingboard).board).toBe(startingboard)
});

it("Rule 1: one live with fewer than two lives neighbours dies, as if by underpopulation", function(){
  const startingboard = [
    [1,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
  ]

  const next_step_board = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
  ]
  const game = new Games(startingboard)
  game.step()

  expect(game.board).toEqual(next_step_board)
});

test('Rule 2: Any live cell with two or three live neighbours lives on to the next generation(2)', function(){
  const startingboard = [
    [1,1,1],
    [0,0,0]
  ]

  const next_step_board = [
    [0,1,0],
    [0,1,0]
  ]
  
  const game = new Games(startingboard)

  game.step()

  expect(game.board).toEqual(next_step_board)
});

test('Rule 2: Any live cell with two or three live neighbours lives on to the next generation(3)', function(){
  const startingboard = [
    [1,1,1],
    [0,1,0]
  ]

  const next_step_board = [
    [1,1,1],
    [1,1,1]
  ]
  
  const game = new Games(startingboard)

  game.step()

  expect(game.board).toEqual(next_step_board)
})

test('Rule 3: Any live cell with more than three live neighbours dies, as if by overpopulation', function(){
  const starting_board = [
    [1,0,1],
    [1,1,1],
    [0,0,0]
  ]

  const next_step_board = [
    [1,0,1],
    [1,0,1],
    [0,1,0],
  ]

  const game = new Games(starting_board)

  game.step()

  expect(game.board).toEqual(next_step_board)
})

test('Rule 4: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', function(){
  const starting_board = [
    [1,0,1],
    [0,0,0],
    [0,0,1],
  ]

  const next_step_board = [
    [0,0,0],
    [0,1,0],
    [0,0,0],
  ]

  const game = new Games(starting_board)

  game.step()

  expect(game.board).toEqual(next_step_board)
})

test('when there is a glider on the board, it moves', () => {
  const startingBoard = [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [1,0,1,0,0],
    [0,1,1,0,0],
    [0,0,0,0,0],
  ]

  const firstStepBoard = [
    [0,0,0,0,0],
    [0,1,0,0,0],
    [0,0,1,1,0],
    [0,1,1,0,0],
    [0,0,0,0,0],
  ]

  const secondStepBoard = [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
  ]

  const thirdStepBoard = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,0,1,0],
    [0,0,1,1,0],
    [0,0,1,0,0],
  ]

  const fourthStepBoard = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,1,0,1,0],
    [0,0,1,1,0],
  ]

  const game = new Games(startingBoard)

  game.step()
  expect(game.board).toEqual(firstStepBoard)

  game.step()
  expect(game.board).toEqual(secondStepBoard)

  game.step()
  expect(game.board).toEqual(thirdStepBoard)

  game.step()
  expect(game.board).toEqual(fourthStepBoard)
})
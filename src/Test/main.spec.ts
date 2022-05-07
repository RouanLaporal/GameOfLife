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
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]

  const next_step_board = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
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
    [0,0,0]
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
    [0,1,0]
  ]
  
  const game = new Games(startingboard)

  game.step()

  expect(game.board).toEqual(next_step_board)
})
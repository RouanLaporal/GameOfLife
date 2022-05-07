import * as matchers from "jest-extended";
import * as main from '../Core/main';
expect.extend(matchers);

it("That's a test!", function () {
  let game_set = main.setMatrix()
  expect(game_set).toEqual([
    {x:0, y:0}
  ])
  });
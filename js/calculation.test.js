import { cubicVolume } from "./calculations.js";

const cases =[
  [1,2,3,6],[11,-12,13,0],[21,22,23,10626],[31,-32,33,0]
];

test.each(cases)("returns correct volume", (val1,val2,val3,result) => {
  expect(cubicVolume(val1,val2,val3)).toBe(result);
});
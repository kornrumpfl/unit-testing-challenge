import { greet } from "./greeting.js";

const cases =[
  ["luiz","Howdy luiz!"],["Martin","Howdy Coach!"],["Marc","Howdy Coach!"],["Ernst","Howdy Coach!"],["Dalia","Howdy Boss!"]
];

test.each(cases)("returns correct greeting", (name,exmessage) => {
  expect(greet(name)).toEqual(exmessage);
});
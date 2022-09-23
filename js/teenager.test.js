import { checkTeenagerStatus } from "./teenager.js";

const cases =[
  [11,false],[12,true],[20,true],[21,false]
];

test.each(cases)("returns correct teenager status", (age,messagestatus) => {
  expect(checkTeenagerStatus(age)).toBe(messagestatus);
});

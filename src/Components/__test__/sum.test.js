import checkSum from "../Utils/sum";

test("check the sum function", () => {
  expect(checkSum(3, 2)).toBe(5);
});

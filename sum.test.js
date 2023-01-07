const myTesting = require("./sum");

test("return the num"
, () => {
expect(myTesting(10)).toBe(10);
});
test("return 0 if no number"
, () => {
expect(myTesting()).toBe(0);
});
test("return the num+numb2"
, () => {
expect(myTesting(10, 20)).toBe(30);
});
test("return the num+numb2+num3"
, () => {
expect(myTesting(10, 20, 50)).toBe(80);
});
test("return the num+numb2+num3+numb4"
, () => {
expect(myTesting(10, 20, 50, 100)).toBe(180);
});

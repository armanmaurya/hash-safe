import { helloWorld } from "../src/";

test("returns Hello, World!", () => {
  expect(helloWorld()).toBe("Hello, World!");
});

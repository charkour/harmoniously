import { trivialConstraints } from "@harmoniously/shared";
import { harmony } from "../src/harmony";
describe("dumb test", () => {
  it("passes", () => {
    const res = harmony(trivialConstraints, undefined, false);
    console.log(res);
    expect(2).toEqual(2);
  });
});

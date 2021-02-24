import { userConstraints } from "../../../shared";
import { harmony } from "../src/harmony";
describe("dumb test", () => {
  it("passes", () => {
    const res = harmony(userConstraints, undefined, false);
    console.log(res);
    expect(2).toEqual(2);
  });
});

import { maxItemAssociation } from "./src/index";

describe("maxItemAssociation", () => {
  it("Initial requirements", () => {
    const data = [
      ["a", "b"],
      ["a", "c"],
      ["d", "e"]
    ];
    const result = ["a", "b", "c"];
    expect(maxItemAssociation(data)).toStrictEqual(result);
  });
});

import { describe, expect, it } from "vitest";
import { addLocationsToCommits } from "./addLocationstoCommits";

describe("addLocationsToCommits", () => {
  it("should run", () => {
    expect(addLocationsToCommits([])).toEqual([]);
  });
});

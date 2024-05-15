import { describe, expect, it } from "vitest";
import { addLocationsToCommits } from "./addLocationstoCommits";

describe("addLocationsToCommits", () => {
  // Test case 1
  it("should handle a linear commit history", () => {
    const commits = [
      { hash: "A", parents: [] },
      { hash: "B", parents: ["A"] },
      { hash: "C", parents: ["B"] },
    ];

    const expected = [
      { hash: "A", parents: [], row: 0, column: 0 },
      { hash: "B", parents: ["A"], row: 0, column: 1 },
      { hash: "C", parents: ["B"], row: 0, column: 2 },
    ];

    const result = addLocationsToCommits(commits);

    expect(result).toEqual(expected);
  });

  // Test case 2
  it("should handle a two-branch commit", () => {
    const commits = [
      { hash: "A", parents: [] },
      { hash: "B", parents: ["A"] },
      { hash: "C", parents: ["B"] },
      { hash: "E", parents: ["A"] },
      { hash: "F", parents: ["E"] },
    ];

    const expected = [
      { hash: "A", parents: [], row: 0, column: 0 },
      { hash: "B", parents: ["A"], row: 0, column: 1 },
      { hash: "C", parents: ["B"], row: 0, column: 2 },
      { hash: "E", parents: ["A"], row: 1, column: 1 },
      { hash: "F", parents: ["E"], row: 1, column: 2 },
    ];

    const result = addLocationsToCommits(commits);

    expect(result).toEqual(expected);
  });

  // Test case 3
  it("should handle a Merge commit", () => {
    const commits = [
      { hash: "A", parents: [] },
      { hash: "B", parents: ["A"] },
      { hash: "C", parents: ["B"] },
      { hash: "E", parents: ["A"] },
      { hash: "F", parents: ["E"] },
      { hash: "G", parents: ["C", "F"] },
    ];

    const expected = [
      { hash: "A", parents: [], row: 0, column: 0 },
      { hash: "B", parents: ["A"], row: 0, column: 1 },
      { hash: "C", parents: ["B"], row: 0, column: 2 },
      { hash: "E", parents: ["A"], row: 1, column: 1 },
      { hash: "F", parents: ["E"], row: 1, column: 2 },
      { hash: "G", parents: ["C", "F"], row: 0, column: 3 },
    ];

    const result = addLocationsToCommits(commits);

    expect(result).toEqual(expected);
  });
});

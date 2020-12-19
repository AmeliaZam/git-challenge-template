// Attach a row+column to each commit in a sensible way so the history can be understood.
// NOTE: the sample implementation just puts them next to each other in a 4-column grid
// your task is to come up with a data structure to represent the real solution.
export function layoutCommits(commits) {
  const COLS = 4;
  return commits.map((commit, index) => ({
    ...commit,
    row: Math.floor(index / COLS),
    column: index % COLS,
  }));
}

// Attach a row+column to each commit in a sensible way so the history can be understood.
// NOTE: the initial implelementation just puts them next to each other in a 4-column grid.
export function layoutCommits(commits) {
  const COLS = 4;
  return commits.map((commit, index) => ({
    ...commit,
    row: Math.floor(index / COLS),
    column: COLS - (index % COLS),
  }));
}

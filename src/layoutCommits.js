export function layoutCommits(commits) {
  const COLS = 4;
  return commits.map((commit, index) => ({
    ...commit,
    row: Math.floor(index / COLS),
    column: COLS - (index % COLS),
  }));
}

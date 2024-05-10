type CommitHash = string;
export type Commit = {
  hash: CommitHash;
  parents: CommitHash[];
};
export type CommitWithLocation = Commit & {
  row: number;
  column: number;
};

// Attach a row+column to each commit in a sensible way so the history can be understood.
// NOTE: the sample implementation just puts them in a straight line
// your task is to come up with an algorithm to produce the real solution.
export function addLocationsToCommits(commits: Commit[]): CommitWithLocation[] {
  const commitsWithLocation: CommitWithLocation[] = [];
  let currentRow = 0;

  // Map to store the column index for each commit
  const commitColumns: Map<CommitHash, number> = new Map();

  for (const commit of commits) {
    let column = 0;

    // If commit has parents, determine its column based on its latest parent
    if (commit.parents.length > 0) {
      for (const parentHash of commit.parents) {
        // Find the column index of the parent commit
        const parentColumn = commitColumns.get(parentHash) || 0;
        // Update the column index of the current commit if it has multiple parents
        column = Math.max(column, parentColumn + 1);
      }
    }

    // Check if this commit's column conflicts with other commits in the same row
    while (
      commitsWithLocation.some(
        (c) => c.row === currentRow && c.column === column
      )
    )
      currentRow++; // Move to the next row if there's a conflict

    // Update the column index for this commit
    commitColumns.set(commit.hash, column);

    // move to the row of first parent
    if (commit.parents.length > 1) {
      const parentCommit = commitsWithLocation.find(
        (c) => c.hash === commit.parents[0]
      );
      if (parentCommit) currentRow = parentCommit.row;
    }

    // Add the commit with its row and column to the result
    commitsWithLocation.push({ ...commit, row: currentRow, column });
  }

  return commitsWithLocation;
}

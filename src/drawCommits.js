// This is a simple function to draw a set of commits in plaintext, just for example/debugging purposes
export function drawCommits(commits) {
  const rows = Math.max(...Object.values(commits).map((c) => c.row));
  const columns = Math.max(...Object.values(commits).map((c) => c.column));

  let output = '';
  for (let i = 0; i <= rows; i++) {
    for (let j = columns; j >= 0; j--) {
      const commit = Object.values(commits).find((c) => c.row === i && c.column === j);

      if (commit) {
        output += `${commit.hash.substring(0, 3)}`;
      } else {
        output += `   `;
      }

      if (j > 0) {
        output += ' - ';
      }
    }
    output += '\n';
  }
  return output;
}

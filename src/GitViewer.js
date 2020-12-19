import { layoutCommits } from './layoutCommits';
import { drawCommits } from './drawCommits';

// Example implementation uses the `layoutCommits` algorithm to place the commits,
// then does a simple plaintext drawing of them in a pre, using a supplied
// drawCommits function.
// Step 1 -- Replace `layoutCommits` with a real implementation
// Step 2 -- Replace drawCommit using a web based drawing technique of your choice
export const GitViewer = ({ commits }) => <pre>{drawCommits(layoutCommits(commits))}</pre>;

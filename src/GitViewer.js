import { layoutCommits } from './layoutCommits';
import { drawCommits } from './drawCommits';

// Initial implementation uses the `layoutCommits` algorithm to place the commits,
// then does a simple plaintext drawing of them in a pre, using a supplied
// drawCommits function.
// Step 1 -- make `layoutCommits` work
// Step 2 -- draw the commit using web technologies
export const GitViewer = ({ commits }) => <pre>{drawCommits(layoutCommits(commits))}</pre>;

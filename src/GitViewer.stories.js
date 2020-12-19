import { GitViewer } from './GitViewer';

// Set up a wrapper for every Story using Storybook's decorators
const Meta = {
  title: 'GitViewer',
  decorators: [
    (storyContents, { args: { example } }) => (
      <div>
        <p>Your solution:</p>
        {storyContents()}
        <p>Example solution:</p>
        <pre>{example}</pre>
      </div>
    ),
  ],
};
export default Meta;

// Wires up the GitViewer component as a base template, with stories for each
// step to follow.
const Template = ({ commits }) => <GitViewer commits={commits} />;

export const SingleCommit = Template.bind({});
SingleCommit.args = {
  commits: [
    {
      hash: 'cb5bcf33c713dc9839c6525cd2faf831d6ca0d42',
      time: 1600393600644,
      message: 'Fix Broken Links',
      committer: 'Tom Coleman',
      parents: [],
    },
  ],
  example: 'cb5',
};

export const SingleBranch = Template.bind({});
SingleBranch.args = {
  commits: [
    {
      hash: 'cb5bcf33c713dc9839c6525cd2faf831d6ca0d42',
      time: 1600393500244,
      message: 'Fix Broken Links',
      committer: 'Tom Coleman',
      parents: [],
    },
    {
      hash: '9a45d07070a677bc77dc374f574d6dbbf244cc9c',
      time: 1600393550344,
      message: 'Add proxy for blog',
      committer: 'Zoltan Olah',
      parents: ['cb5bcf33c713dc9839c6525cd2faf831d6ca0d42'],
    },
    {
      hash: '61dc4fda925659ce01989a443d92f2a169ba1a24',
      time: 1600393570444,
      message: "Don't cache on full object",
      committer: 'Kyle Suss',
      parents: ['9a45d07070a677bc77dc374f574d6dbbf244cc9c'],
    },
    {
      hash: 'ea36cff4df4152ed98afb5bb7c9493e9f40fa10e',
      time: 1600393600644,
      message: 'Add text field to slack messages',
      committer: 'Tom Coleman',
      parents: ['61dc4fda925659ce01989a443d92f2a169ba1a24'],
    },
  ],
  branches: [
    {
      name: 'main',
      commit: 'ea36cff4df4152ed98afb5bb7c9493e9f40fa10e',
    },
  ],
  example: 'cb5 - 9a4 - 61d - ea3',
};

export const MultipleBranches = Template.bind({});
MultipleBranches.args = {
  commits: [
    {
      hash: 'cb5bcf33c713dc9839c6525cd2faf831d6ca0d42',
      time: 1600393500244,
      message: 'Fix Broken Links',
      committer: 'Tom Coleman',
      parents: [],
    },
    {
      hash: '9a45d07070a677bc77dc374f574d6dbbf244cc9c',
      time: 1600393550344,
      message: 'Add proxy for blog',
      committer: 'Zoltan Olah',
      parents: ['cb5bcf33c713dc9839c6525cd2faf831d6ca0d42'],
    },
    {
      hash: '61dc4fda925659ce01989a443d92f2a169ba1a24',
      time: 1600393570444,
      message: "Don't cache on full object",
      committer: 'Kyle Suss',
      parents: ['9a45d07070a677bc77dc374f574d6dbbf244cc9c'],
    },
    {
      hash: '6600cd4104f1a566388147fd0cdf1b043231841a',
      time: 1600393550644,
      message: 'Grammar and punctuation',
      committer: 'Dominic Nguyen',
      parents: ['cb5bcf33c713dc9839c6525cd2faf831d6ca0d42'],
    },
    {
      hash: 'fc12a066a03d7fd83020ea675e524cff4536e661',
      time: 1600393570644,
      message: 'More spelling',
      committer: 'Dominic Nguyen',
      parents: ['6600cd4104f1a566388147fd0cdf1b043231841a'],
    },
  ],
  branches: [
    {
      name: 'main',
      commit: '61dc4fda925659ce01989a443d92f2a169ba1a24',
    },
    {
      name: 'feature',
      commit: 'fc12a066a03d7fd83020ea675e524cff4536e661',
    },
  ],
  example: `cb5 - 660 - fc1\n    - 9a4 - 61d`,
};

export const MergeCommit = Template.bind({});
MergeCommit.args = {
  commits: [
    ...MultipleBranches.args.commits,
    {
      hash: '6c6d329c9eee9015e63123c909364b81519080a1',
      time: 1600393580644,
      message: 'Merge branch feature',
      committer: 'Tom Coleman',
      parents: [
        '61dc4fda925659ce01989a443d92f2a169ba1a24',
        'fc12a066a03d7fd83020ea675e524cff4536e661',
      ],
    },
  ],
  branches: [
    {
      name: 'main',
      commit: '6c6d329c9eee9015e63123c909364b81519080a1',
    },
    {
      name: 'feature',
      commit: 'fc12a066a03d7fd83020ea675e524cff4536e661',
    },
  ],
  example: `cb5 - 9a4 - 61d - 6c6\n    - 660 - fc1 -`,
};


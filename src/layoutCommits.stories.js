import { layoutCommits } from './layoutCommits';
import { drawCommits } from './drawCommits';

const Meta = {
  title: 'Layout Commits',
  decorators: [(story) => <pre>{drawCommits(story())}</pre>],
};
export default Meta;

const Template = ({ commits }) => layoutCommits(commits);

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
};

export const Merge = Template.bind({});
Merge.args = {
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
};

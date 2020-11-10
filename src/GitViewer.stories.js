import { GitViewer } from './GitViewer';
const Meta = {
  title: 'GitViewer',
  decorators: [
    (story, { args: { example } }) => (
      <div>
        <p>Your solution:</p>
        {story()}
        <p>Example solution:</p>
        <pre>{example}</pre>
      </div>
    ),
  ],
};
export default Meta;

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
  example: `cb5 - 9a4 - 61d - 6c6\n    - 660 - fc1 -`,
};

export const MultipleFeatures = Template.bind({});
MultipleFeatures.args = {
  commits: [
    ...MultipleBranches.args.commits,
    {
      hash: '90edde28002c1f1c0d8f20b5da3f8da0143f4426',
      time: 1600393560644,
      message: 'Fix downgrade message when downgrading immediately after upgrading.',
      committer: 'Gert Hengeveld',
      parents: ['9a45d07070a677bc77dc374f574d6dbbf244cc9c'],
    },
    {
      hash: 'fb0926c2d865a5805662b1fe1c6dc8eccfb824de',
      time: 1600393570644,
      message: 'Typo',
      committer: 'Gert Hengeveld',
      parents: ['90edde28002c1f1c0d8f20b5da3f8da0143f4426'],
    },
    {
      hash: '6c6d329c9eee9015e63123c909364b81519080a1',
      time: 1600393575644,
      message: 'Merge branch feature-2',
      committer: 'Tom Coleman',
      parents: [
        '61dc4fda925659ce01989a443d92f2a169ba1a24',
        'fb0926c2d865a5805662b1fe1c6dc8eccfb824de',
      ],
    },
    {
      hash: '82fd6b82b6cae3fdda4f838576470512ccc630e1',
      time: 1600393570644,
      message: 'QA changes',
      committer: 'Gert Hengeveld',
      parents: ['fc12a066a03d7fd83020ea675e524cff4536e661'],
    },
    {
      hash: 'ac0338dc2e593cdd4dbd4aa32979b102e0299887',
      time: 1600393570744,
      message: 're-QA changes',
      committer: 'Gert Hengeveld',
      parents: ['82fd6b82b6cae3fdda4f838576470512ccc630e1'],
    },

    {
      hash: '56bbdaef5513c9dc70a90b878e3fa93902181b53',
      time: 1600393580644,
      message: 'Merge branch feature',
      committer: 'Tom Coleman',
      parents: [
        '6c6d329c9eee9015e63123c909364b81519080a1',
        'ac0338dc2e593cdd4dbd4aa32979b102e0299887',
      ],
    },
  ],
  branches: [
    {
      name: 'main',
      commit: '56bbdaef5513c9dc70a90b878e3fa93902181b53',
    },
    {
      name: 'feature',
      commit: 'fc12a066a03d7fd83020ea675e524cff4536e661',
    },
    {
      name: 'feature-2',
      commit: 'fb0926c2d865a5805662b1fe1c6dc8eccfb824de',
    },
  ],
  example: `cb5 - 9a4 -     - 61d - 6c6 - 56b\n    -     - 90e - fb0 -     -    \n    - 660 - fc1 - 82f - ac0 -  `,
};

export const SubFeature = Template.bind({});
SubFeature.args = {
  commits: [
    ...MultipleBranches.args.commits,
    {
      hash: 'bcf106d64fb75e17bea97e8d429342ba43307a8a',
      time: 1600393560644,
      message: 'Added Stories.',
      committer: 'Tom Coleman',
      parents: ['fc12a066a03d7fd83020ea675e524cff4536e661'],
    },
    {
      hash: '90edde28002c1f1c0d8f20b5da3f8da0143f4426',
      time: 1600393561644,
      message: 'Fix downgrade message when downgrading immediately after upgrading.',
      committer: 'Gert Hengeveld',
      parents: ['6600cd4104f1a566388147fd0cdf1b043231841a'],
    },
    {
      hash: 'fb0926c2d865a5805662b1fe1c6dc8eccfb824de',
      time: 1600393570644,
      message: 'Typo',
      committer: 'Gert Hengeveld',
      parents: ['90edde28002c1f1c0d8f20b5da3f8da0143f4426'],
    },
    {
      hash: '6c6d329c9eee9015e63123c909364b81519080a1',
      time: 1600393575644,
      message: 'Merge branch feature-2',
      committer: 'Tom Coleman',
      parents: [
        'bcf106d64fb75e17bea97e8d429342ba43307a8a',
        'fb0926c2d865a5805662b1fe1c6dc8eccfb824de',
      ],
    },
    {
      hash: '56bbdaef5513c9dc70a90b878e3fa93902181b53',
      time: 1600393580644,
      message: 'Merge branch feature',
      committer: 'Tom Coleman',
      parents: [
        '61dc4fda925659ce01989a443d92f2a169ba1a24',
        '6c6d329c9eee9015e63123c909364b81519080a1',
      ],
    },
  ],
  branches: [
    {
      name: 'main',
      commit: '56bbdaef5513c9dc70a90b878e3fa93902181b53',
    },
    {
      name: 'feature',
      commit: '6c6d329c9eee9015e63123c909364b81519080a1',
    },
    {
      name: 'feature-2',
      commit: 'fb0926c2d865a5805662b1fe1c6dc8eccfb824de',
    },
  ],
  example: `cb5 -     -     - 9a4 - 61d - 56b\n    - 660 - fc1 - bcf - 6c6 -    \n    -     - 90e - fb0 -     -`,
};

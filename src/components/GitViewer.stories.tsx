import { GitViewer } from "./GitViewer";

export default {
  title: "GitViewer",
  component: GitViewer,
};

export const SingleCommit = {
  args: {
    commits: [
      {
        hash: "A",
        parents: [],
      },
    ],
  },

  parameters: {
    design: {
      type: "image",
      url: "/SingleCommit.png",
    },
  },
};

export const SingleBranch = {
  args: {
    commits: [
      {
        hash: "A",
        parents: [],
      },
      {
        hash: "B",
        parents: ["A"],
      },
      {
        hash: "C",
        parents: ["B"],
      },
      {
        hash: "D",
        parents: ["C"],
      },
    ],
  },

  parameters: {
    design: {
      type: "image",
      url: "/SingleBranch.png",
    },
  },
};

export const TwoBranches = {
  args: {
    commits: [
      {
        hash: "A",
        parents: [],
      },
      {
        hash: "B",
        parents: ["A"],
      },
      {
        hash: "C",
        parents: ["B"],
      },
      {
        hash: "E",
        parents: ["A"],
      },
      {
        hash: "F",
        parents: ["E"],
      },
    ],
  },

  parameters: {
    design: {
      type: "image",
      url: "/TwoBranches.png",
    },
  },
};

export const Merge = {
  args: {
    commits: [
      ...TwoBranches.args.commits,
      {
        hash: "G",
        parents: ["C", "F"],
      },
    ],
  },

  parameters: {
    design: {
      type: "image",
      url: "/Merge.png",
    },
  },
};

export const ThreeBranches = {
  args: {
    commits: [
      ...TwoBranches.args.commits,
      {
        hash: "G",
        parents: ["A"],
      },
      {
        hash: "H",
        parents: ["G"],
      },
    ],
  },

  parameters: {
    design: {
      type: "image",
      url: "/ThreeBranches.png",
    },
  },
};

export const SubFeature = {
  args: {
    commits: [
      ...TwoBranches.args.commits,
      {
        hash: "M",
        parents: ["F"],
      },
      {
        hash: "H",
        parents: ["E"],
      },
      {
        hash: "I",
        parents: ["H"],
      },
      {
        hash: "G",
        parents: ["M", "I"],
      },
      {
        hash: "L",
        parents: ["C", "G"],
      },
    ],
  },

  parameters: {
    design: {
      type: "image",
      url: "/SubFeature.png",
    },
  },
};

export const MultipleFeatures = {
  args: {
    commits: [
      ...TwoBranches.args.commits,
      {
        hash: "H",
        parents: ["B"],
      },
      {
        hash: "I",
        parents: ["H"],
      },
      {
        hash: "G",
        parents: ["C", "I"],
      },
      {
        hash: "J",
        parents: ["F"],
      },
      {
        hash: "K",
        parents: ["J"],
      },

      {
        hash: "L",
        parents: ["G", "K"],
      },
    ],
  },

  parameters: {
    design: {
      type: "image",
      url: "/MultipleFeatures.png",
    },
  },
};

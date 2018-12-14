import React from "react";
import { Message, Tab } from "semantic-ui-react";

const messageList = [
  `# Upload files:
   curl -XPUT -u 'bms-arti-587-deployer:0h802mzpxqg55b1c`
];

export const options = [
  { key: "m", text: "bms-server-docker", value: "docker" },
  { key: "ma", text: "bms-server-maven", value: "maven" },
  { key: "yu", text: "bms-server-yum", value: "yum" },
  { key: "ge", text: "bms-server-geodns", value: "geodns" },
  { key: "de", text: "bms-server-debian", value: "debian" }
];

export const repos = [
  { key: "mr", text: "MAVEN", value: "maven" },
  { key: "y", text: "YUM", value: "yum" },
  { key: "d", text: "DOCKER", value: "docker" },
  { key: "n", text: "NPM", value: "npm" },
  { key: "p", text: "PYPI", value: "pypi" },
  { key: "de", text: "DEBIAN", value: "debian" },
  { key: "r", text: "RUBYGEMS", value: "rubygems" },
  { key: "g", text: "GENERIC", value: "generic" }
];

export const repoState = [
  {
    type: "maven",
    hControls: [
      {
        input: "Input",
        inputValue: "bmx-server-release",
        select: "Select",
        selectValue: "MAVEN RELEASE"
      },
      {
        input: "Input",
        inputValue: "bmx-server-snapshot",
        select: "Select",
        selectValue: "Maven SNAPSHOT"
      },
      {
        input: "Input",
        inputValue: "bmx-server-thirdparty",
        select: "Select",
        selectValue: "MAVEN THIRD-PARTY"
      }
    ],
    vControls: [
      {
        input: "Input",
        inputValue: "bmx-server-group",
        select: "Select",
        selectValue: "MAVEN"
      }
    ]
  },
  {
    type: "yum",
    hControls: [
      {
        input: "Input",
        inputValue: "bmx-server",
        select: "Select",
        selectValue: "YUM"
      }
    ],
    vControls: []
  },
  {
    type: "docker",
    hControls: [
      {
        input: "Input",
        inputValue: "bmx-server",
        select: "Select",
        selectValue: "DOCKER"
      }
    ],
    vControls: [
      {
        input: "Input",
        inputValue: "bmx-server-group",
        select: "Select",
        selectValue: "DOCKER"
      }
    ]
  },
  {
    type: "npm",
    hControls: [
      {
        input: "Input",
        inputValue: "bmx-server",
        select: "Select",
        selectValue: "NPM"
      }
    ],
    vControls: [
      {
        input: "Input",
        inputValue: "bmx-server-group",
        select: "Select",
        selectValue: "NPM"
      }
    ]
  },
  {
    type: "pypi",
    hControls: [
      {
        input: "Input",
        inputValue: "bmx-server",
        select: "Select",
        selectValue: []
      }
    ],
    vControls: [
      {
        input: "Input",
        inputValue: "bmx-server-group",
        select: "Select",
        selectValue: "PYPI"
      }
    ]
  },
  {
    type: "debian",
    hControls: [
      {
        input: "Input",
        inputValue: "bmx-server",
        select: "Select",
        selectValue: "DEBIAN"
      }
    ],
    vControls: []
  },
  {
    type: "rubygems",
    hControls: [
      {
        input: "Input",
        inputValue: "bmx-server",
        select: "Select",
        selectValue: "RUBYGEMS"
      }
    ],
    vControls: [
      {
        input: "Input",
        inputValue: "bmx-server-group",
        select: "Select",
        selectValue: "RUBYGEMS"
      }
    ]
  },
  {
    type: "generic",
    hControls: [
      {
        input: "Input",
        inputValue: "bmx-server",
        select: "Select",
        selectValue: "GENERIC"
      }
    ],
    vControls: [
      {
        input: "Input",
        inputValue: "bmx-server-group",
        select: "Select",
        selectValue: "GENERIC"
      }
    ]
  }
];

export const templateTab = [
  {
    menuItem: "MAVEN",
    render: () => (
      <Tab.Pane>
        <Message header="MAVEN" positive list={messageList} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "YUM",
    render: () => (
      <Tab.Pane>
        <Message header="YUM" list={messageList} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "DOCKER",
    render: () => (
      <Tab.Pane>
        <Message header="DOCKER" list={messageList} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "NPM",
    render: () => (
      <Tab.Pane>
        <Message header="NPM" list={messageList} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "PYPI",
    render: () => (
      <Tab.Pane>
        <Message header="PYPI" list={messageList} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "DEBIAN",
    render: () => (
      <Tab.Pane>
        <Message header="DEBIAN" list={messageList} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "GENERIC CDN",
    render: () => (
      <Tab.Pane>
        <Message header="GENERIC CDN" list={messageList} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "CONAN",
    render: () => (
      <Tab.Pane>
        <Message header="CONAN" list={messageList} />
      </Tab.Pane>
    )
  }
];

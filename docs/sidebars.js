/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    "overview",
    "getting-started",
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Prompts",
          items: [{ type: "autogenerated", dirName: "modules/prompts" }],
        },
        {
          type: "category",
          label: "LLMs",
          items: [{ type: "autogenerated", dirName: "modules/llms" }],
        },
        {
          type: "category",
          label: "Document Loaders",
          items: [
            { type: "autogenerated", dirName: "modules/document_loaders" },
          ],
        },
        {
          type: "category",
          label: "Indexes",
          items: [{ type: "autogenerated", dirName: "modules/indexes" }],
        },
        {
          type: "category",
          label: "Chains",
          items: [{ type: "autogenerated", dirName: "modules/chains" }],
        },
        {
          type: "category",
          label: "Agents",
          items: [{ type: "autogenerated", dirName: "modules/agents" }],
        },
        {
          type: "category",
          label: "Memory",
          items: [{ type: "autogenerated", dirName: "modules/memory" }],
        },
      ],
    },
    "deployment",
    {
      type: "category",
      label: "Ecosystem",
      items: [{ type: "autogenerated", dirName: "ecosystem" }],
    },
    {
      type: "category",
      label: "Reference Docs",
      items: [{ type: "autogenerated", dirName: "api" }],
    },
  ],
};

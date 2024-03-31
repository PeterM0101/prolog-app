import type { StorybookConfig } from "@storybook/nextjs";
// import path from "path";

const config: StorybookConfig = {
  stories: [
    "../**/*.mdx",
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    "@storybook/addon-styling"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public", { from: "../public/fonts", to: "/public/fonts" }],
  // webpackFinal: async (config) => {
  //   if (config.resolve && config.resolve.alias) {
  //     config.resolve.alias = config.resolve.alias || {};
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       "@/config": path.resolve(__dirname, "/config"),
  //     };
  // Cast the alias property to an index signature type.
  // const alias = config.resolve.alias as { [index: string]: string };
  // alias["next/router"] = require.resolve("../__mocks__/next/router.tsx");
  // }
  //   return config;
  // },

};
export default config;

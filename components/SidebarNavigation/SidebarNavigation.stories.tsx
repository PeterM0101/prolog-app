// import React from "react";
// import { Meta, StoryFn } from "@storybook/react";
// import { SidebarNavigation } from "../SidebarNavigation";
//
// export default {
//   title: "UI/SidebarNavigation",
//   component: SidebarNavigation,
//   parameters: {
//     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
//     layout: "fullscreen",
//   },
// } as Meta<typeof SidebarNavigation>;
//
// const Template: StoryFn<typeof SidebarNavigation> = () => <SidebarNavigation/>;
//
// export const Default = Template.bind({});
// Default.args = {};

import type { Meta, StoryObj } from "@storybook/react";
import { SidebarNavigation } from "../SidebarNavigation";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
`;

const meta: Meta<typeof SidebarNavigation> = {
  component: SidebarNavigation,
};

export default meta;
type Story = StoryObj<typeof SidebarNavigation>;

// export const Primary: Story = {
//   render: () => <SidebarNavigation/>,
// };
type Params = { route: string };

export const Primary: Story = {
  parameters: {
    nextjs: {
      // router: {
      //   pathname: "dashboard/issues",
      nextjs: {
        router: {
          basePath: "/profile",
        },
      }
      // },
    },
  },
  decorators: [
    (Story) => {
      // <div style={{ margin: "3em" }}>
      console.log("parameters: ", Story);
      return <><GlobalStyle/><Story/></>;
      // </div>
    },
  ],
};
import type { Meta, StoryObj } from "@storybook/react";

import { Badge, BadgeColor, BadgeSize } from "./badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   color: ColorType,
  // },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "label",
    color: BadgeColor.primary
  },
};

export const Secondary: Story = {
  args: {
    children: "label",
    color: BadgeColor.error,
    size: BadgeSize.lg
  },
};


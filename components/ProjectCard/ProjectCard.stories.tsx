import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { ProjectLanguage, ProjectStatus } from "../../pages/api/projects";

// const meta: Meta<typeof ProjectCard> = {
//   component: ProjectCard,
// };
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Project/ProjectCard",
  component: ProjectCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   project: Project,
  // },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Simple: Story = {
  args: {
    project: {
      id: "xzy",
      name: "Frontend - Web",
      language: ProjectLanguage.react,
      numIssues: 420,
      numEvents24h: 721,
      status: ProjectStatus.critical,
    },
  },
  decorators: [],
  name: "So simple!",
  parameters: {},
};

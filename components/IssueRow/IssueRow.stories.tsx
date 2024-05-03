import type {Meta, StoryObj} from "@storybook/react";
import {ProjectLanguage, ProjectStatus} from "../../pages/api/projects";
import {IssueRow} from "@/components/IssueRow/IssueRow";
import {IssueLevel} from "@/components/IssueRow/issue.types";

// const meta: Meta<typeof ProjectCard> = {
//   component: ProjectCard,
// };
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Issues/IssueRow",
    component: IssueRow,
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
} satisfies Meta<typeof IssueRow>;

export default meta;
type Story = StoryObj<typeof IssueRow>;

export const Simple: Story = {
    args: {
        project: {
            id: "1",
            name: "Frontend - Web",
            language: ProjectLanguage.react,
            numIssues: 420,
            numEvents24h: 721,
            status: ProjectStatus.critical
        },
        issue: {
            id: "c9613c41-32f0-435e-aef2-b17ce758431b",
            projectId: "6d5fff43-d691-445d-a41a-7d0c639080e6",
            name: "TypeError",
            message: "Cannot read properties of undefined (reading 'length')",
            stack: "Cannot read properties of undefined (reading 'length')\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            level: IssueLevel.error,
            // status: "resolved",
            numEvents: 105,
            numUsers: 56
        },
    },
    decorators: [],
    name: "So simple!",
    parameters: {},
};
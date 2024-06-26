import type {Meta, StoryObj} from "@storybook/react";
import {IssueList} from "@/components/IssueList/issue-list";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {ProjectLanguage, ProjectStatus} from "../../pages/api/projects";
import {getQueryKey, QueryKey} from "../../utils/getQueryKey";

const issuesData = {
    "items": [
        {
            "id": "c9613c41-32f0-435e-aef2-b17ce758431b",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "TypeError",
            "message": "Cannot read properties of undefined (reading 'length')",
            "stack": "Cannot read properties of undefined (reading 'length')\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "error",
            "status": "resolved",
            "numEvents": 105,
            "numUsers": 56
        },
        {
            "id": "1f62d084-cc32-4c7b-943d-417c5dac896e",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "TypeError",
            "message": "U is not a function",
            "stack": "\"x\" is not a function\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "warning",
            "status": "resolved",
            "numEvents": 45,
            "numUsers": 34
        },
        {
            "id": "d4febf2b-022e-45ff-a70b-cea24234f8b5",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "TypeError",
            "message": "can't define property F: \"obj\" is not extensible",
            "stack": "can't define property \"x\": \"obj\" is not extensible\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "error",
            "status": "open",
            "numEvents": 31,
            "numUsers": 21
        },
        {
            "id": "ead13b50-3662-4150-99a3-0b1e4e8e4b5b",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "TypeError",
            "message": "setting getter-only property R",
            "stack": "setting getter-only property \"x\"\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "warning",
            "status": "open",
            "numEvents": 26,
            "numUsers": 24
        },
        {
            "id": "a0ffc9a5-7105-4640-92b2-5c360db976bf",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "ReferenceError",
            "message": "C is not defined",
            "stack": "\"x\" is not defined\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "warning",
            "status": "open",
            "numEvents": 12,
            "numUsers": 11
        },
        {
            "id": "01f6f953-70ad-46cf-b863-c7bfd95e5626",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "SyntaxError",
            "message": "missing name after . operator",
            "stack": "missing name after . operator\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "error",
            "status": "resolved",
            "numEvents": 15,
            "numUsers": 13
        },
        {
            "id": "6e6151ee-74f7-4673-9441-7aead54b6ebd",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "SyntaxError",
            "message": "Malformed formal parameter",
            "stack": "Malformed formal parameter\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "info",
            "status": "open",
            "numEvents": 19,
            "numUsers": 16
        },
        {
            "id": "e06fac1f-7787-4088-b617-60a33e412694",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "SyntaxError",
            "message": "test for equality (==) mistyped as assignment (=)?",
            "stack": "test for equality (==) mistyped as assignment (=)?\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "error",
            "status": "open",
            "numEvents": 9,
            "numUsers": 8
        },
        {
            "id": "91a43bad-14f3-4cc0-b48f-d5b9cef31443",
            "projectId": "340cb147-6397-4a12-aa77-41100acf085f",
            "name": "TypeError",
            "message": "Cannot read property H of undefined",
            "stack": "Cannot read property \"x\" of undefined\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "warning",
            "status": "open",
            "numEvents": 10,
            "numUsers": 10
        },
        {
            "id": "2e39a8a0-e34f-4f8b-a027-711e29e0c016",
            "projectId": "6d5fff43-d691-445d-a41a-7d0c639080e6",
            "name": "TypeError",
            "message": "I is not a function",
            "stack": "\"x\" is not a function\n    at eval (webpack-internal:///./pages/index.tsx:37:7)\n    at invokePassiveEffectCreate (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23482:20)\n    at HTMLUnknownElement.callCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3945:14)\n    at HTMLUnknownElement.sentryWrapped (webpack-internal:///./node_modules/@sentry/browser/esm/helpers.js:81:23)\n    at Object.invokeGuardedCallbackDev (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3994:16)\n    at invokeGuardedCallback (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:4056:31)\n    at flushPassiveEffectsImpl (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23569:9)\n    at unstable_runWithPriority (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:468:12)\n    at runWithPriority$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:11276:10)\n    at flushPassiveEffects (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23442:14)\n    at eval (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:23319:11)\n    at workLoop (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:417:34)\n    at flushWork (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:390:14)\n    at MessagePort.performWorkUntilDeadline (webpack-internal:///./node_modules/scheduler/cjs/scheduler.development.js:157:27)",
            "level": "error",
            "status": "open",
            "numEvents": 18,
            "numUsers": 16
        }
    ],
    "meta": {
        "currentPage": 1,
        "limit": 10,
        "totalItems": 28,
        "totalPages": 3,
        "hasPreviousPage": false,
        "hasNextPage": true
    }
}

const projectsData = {
    items: [{
        id: "6d5fff43-d691-445d-a41a-7d0c639080e6",
        name: "Frontend - Web",
        language: ProjectLanguage.react,
        numIssues: 420,
        numEvents24h: 721,
        status: ProjectStatus.critical
    }, {
        id: "340cb147-6397-4a12-aa77-41100acf085f",
        name: "Backend",
        language: ProjectLanguage.node,
        numIssues: 175,
        numEvents24h: 37,
        status: ProjectStatus.warning
    }, {
        id: "9aa6a101-2c92-4797-b497-b31b2cb4c94b",
        name: "ML - Service",
        language: ProjectLanguage.python,
        numIssues: 59,
        numEvents24h: 4,
        status: ProjectStatus.stable
    }],
    "meta": {
        "currentPage": 1,
        "limit": 10,
        "totalItems": 3,
        "totalPages": 1,
        "hasPreviousPage": false,
        "hasNextPage": false
    }
}

// const meta: Meta<typeof ProjectCard> = {
//   component: ProjectCard,
// };
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Issues/IssueList",
    component: IssueList,
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
} satisfies Meta<typeof IssueList>;

const queryClient = new QueryClient();

export default meta;
type Story = StoryObj<typeof IssueList>;

export const Simple: Story = {
    args: {},
    decorators: [
        (Story) => {
            queryClient.setQueryData(getQueryKey({queryKey: QueryKey.Issues, page: 1}), issuesData);
            queryClient.setQueryData(["getProjects"], projectsData);
            return <QueryClientProvider client={queryClient}><Story/></QueryClientProvider>;
        },
    ],
    name: "So simple!",
    parameters: {},
};
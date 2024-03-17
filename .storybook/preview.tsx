import type { Preview } from "@storybook/react";
import { lato } from "../pages/_app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story =>
      <ThemeProvider theme={theme}>
        <div className={lato.className}>
          <Story/>
        </div>
      </ThemeProvider>
  ]
};

export default preview;

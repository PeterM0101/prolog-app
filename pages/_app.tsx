import "../styles/globals.css";
import localFont from "next/font/local";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const lato = localFont({
  src: [
    {
      path: "../public/fonts/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lato",
});

const queryClient = new QueryClient();
export default function App ({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <main className={lato.className}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {getLayout(
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </QueryClientProvider>
  </main>
    ;
}

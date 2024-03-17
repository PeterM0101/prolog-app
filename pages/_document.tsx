import { Head, Html, Main, NextScript } from "next/document";
import { lato } from "./_app";

export default function Document () {
  return (
    <Html lang="en" className={`${lato.variable}, Arial, font-sans`}>
      <Head/>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}

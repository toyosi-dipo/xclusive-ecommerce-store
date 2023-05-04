import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="max-w-[100vw] overflow-x-hidden bg-primary font-poppins text-text2">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

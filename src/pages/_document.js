import { Html, Head, Main, NextScript } from "next/document";

const metadata = {
  title: "Zoi Head Hunter",
  description: "Zoi Head Hunter",
};

const Document = () => {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
      </Head>
      <body id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

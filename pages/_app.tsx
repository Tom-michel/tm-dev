import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Michel BTOMPE - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Michel BTOMPE is a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'"
        />
        <link rel="icon" href="https://michelbtompe.vercel.app/icon.png" />
        <link rel="icon" href="/icon.png" />

        <link rel="apple-touch-icon" href="/banner.png" />
        <meta property="og:url" content="https://michelbtompe.vercel.app/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:site_name:"
          content="Michel BTOMPE - Software Engineer"
        />
        <meta property="og:title" content="Michel BTOMPE - Software Engineer" />
        <meta
          property="og:description"
          content="Michel BTOMPE is a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'"
        />
        <meta
          property="og:image"
          content="https://michelbtompe.vercel.app/banner.png"
        />
        <meta property="og:image" content="/banner.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { theme_type } from "../interface/theme";
import wrapper from "../store/configureStore";
import { default as THEME } from "../styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useSelector((state: any) => state.themes);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <ThemeProvider theme={THEME[theme as theme_type]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);

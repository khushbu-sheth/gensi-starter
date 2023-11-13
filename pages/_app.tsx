import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";

function App({ Component, pageProps }: AppProps) {
  return (
    <Grommet full theme={hpe}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Grommet>
  );
}

export default App;

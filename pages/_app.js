import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

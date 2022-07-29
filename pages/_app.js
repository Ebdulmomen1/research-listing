import "../styles/globals.css";
// import { AuthProvider } from "../context/AuthContext";
// import PrivateRoute from "../components/PrivateRoutes";
import Layout from "../components/Layout";
import { appWithTranslation, withTranslation } from "next-i18next";
import nextI18nConfig from "../next-i18next.config";

function MyApp({ Component, pageProps, t }) {
  // const protectedRoutes = ["/panel"];
  return (
    <Layout t={t}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(withTranslation("common")(MyApp));

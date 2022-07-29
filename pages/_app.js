import "../styles/globals.css";
// import { AuthProvider } from "../context/AuthContext";
// import PrivateRoute from "../components/PrivateRoutes";
import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  // const protectedRoutes = ["/panel"];
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}

export default appWithTranslation(MyApp);

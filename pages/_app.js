import "../styles/globals.css";
// import { AuthProvider } from "../context/AuthContext";
// import PrivateRoute from "../components/PrivateRoutes";
// import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";
// import nextI18nConfig from "../next-i18next.config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  // const protectedRoutes = ["/panel"];
  return (
    // <Layout>
    <div className="min-h-screen flex flex-col">
      <div className="px-3">
        <Navbar />
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
    // </Layout>
  );
}

export default appWithTranslation(MyApp);

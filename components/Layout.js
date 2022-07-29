import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const dir = router.locale === "en" ? "ltr" : "rtl";
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-3" dir={dir}>
        <Navbar />
        {children}
      </div>

      <Footer />
    </div>
  );
}

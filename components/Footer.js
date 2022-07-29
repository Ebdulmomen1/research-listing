import React from "react";
import { useTranslation } from "next-i18next";

export default function Footer({ dir }) {
  let { t } = useTranslation();

  return (
    <div
      className="w-full bg-govBrown mt-auto p-2  flex justify-center items-center"
      dir={dir}
    >
      <main className="container mx-auto max-w-5xl text-lg">
        <div className="flex justify-start items-center gap-5">
          <span className="text-white">{t("common:footer-text")}</span>
        </div>
      </main>
    </div>
  );
}

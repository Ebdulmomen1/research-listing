import React from "react";
import { useTranslation } from "next-i18next";

export default function Hero() {
  let { t } = useTranslation();
  return (
    <div className="w-full flex justify-between items-center gap-5 ">
      <div className="flex flex-col justify-center items-start">
        <h1 className="mt-10 text-3xl font-bold pr-2 border-r-[1px] border-govBrown">
          {t("home:hero-heading")}
        </h1>
        <p className="mt-5 ">{t("home:hero-description")}</p>
      </div>
      <img
        className="my-10 w-1/3 hidden lg:block"
        src="/images/20191027110015.jpg"
        alt="jumbotron"
      />
    </div>
  );
}

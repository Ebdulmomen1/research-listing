import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TbMessage2Share } from "react-icons/tb";
import { Popover, Transition } from "@headlessui/react";
import { useTranslation } from "next-i18next";

const Navbar = ({ t }) => {
  const router = useRouter();
  console.log(router.locales);
  const language =
    router.locale === "en"
      ? "Language"
      : router.locale === "ar"
      ? "اللغة"
      : "زمان";

  const languageTextMapper = { ku: "کوردی", ar: "عربی", en: "English" };
  // let { t } = useTranslation();
  return (
    <div className="navbar-wrapper bg-white border-b-2 border-govBrown py-4">
      <div className="container mx-auto max-w-5xl flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-5">
          <div className="flex justify-center items-center gap-px">
            <img
              width="60px"
              src="/images/ministry-high-education.png"
              alt="Ministry of Higher Educations logo"
            />
            <img
              width="60px"
              src="/images/krg-logo-300.png"
              alt="Kurdistan Regional Government logo"
            />
          </div>
          <span className="nav-item py-1 text-lg md:text-2xl">
            <Link href="/" className="cursor-pointer">
              <span> {t("common:publishers")}</span>
            </Link>
          </span>
          <ul className="nav-item py-1 text-2xl">
            <Popover className="relative">
              <Popover.Button className="text-lg md:text-2xl">
                {language}
              </Popover.Button>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel
                  className="absolute z-10 bg-white shadow-md"
                  style={{
                    top: "10px",
                    left: router.locale === "en" ? "-40px" : "-60px",
                    width: "150px",
                  }}
                >
                  {router.locales.map((locale) => {
                    return (
                      <li
                        key={locale}
                        className="text-center rounded-lg text-base"
                      >
                        <Link href={locale} locale={locale}>
                          <span>{languageTextMapper[locale]}</span>
                        </Link>
                      </li>
                    );
                  })}
                </Popover.Panel>
              </Transition>
            </Popover>
          </ul>
        </div>
        <button className="px-3 py-1 bg-govBrown text-white hover:bg-govBrownHover transition-all ease-in-out flex items-center justify-center md:gap-2">
          {t("common:contact-us")}
          <TbMessage2Share />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

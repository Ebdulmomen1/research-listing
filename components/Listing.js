import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const Listing = ({ publishers, journals }) => {
  let { t } = useTranslation();
  const [listedPulishers, setListedPublishers] = useState(
    publishers ? publishers : []
  );
  const [listedJournals, setListedJournals] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setListedPublishers(publishers);
    // setListedJournals(journals);
  }, [publishers]);

  const handleTextChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value === "") {
      setListedPublishers(publishers);
      setListedJournals([]);
    }
  };

  const handleSearchSubmit = (event) => {
    const word = searchInput;

    const pubResult = publishers.filter((publisher) => {
      return publisher.name.toLowerCase().includes(word.toLowerCase());
    });
    const journalResult = journals.filter((journal) => {
      return journal.title.toLowerCase().includes(word.toLowerCase());
    });
    console.log(pubResult);
    console.log(journalResult);
    setListedPublishers(pubResult);
    setListedJournals(journalResult);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl my-5 font-bold border-r-[1px] pr-2 border-govBrown">
          {t("home:listing-title")}
        </h2>
        <div>
          <input
            className="border border-govBrown rounded outline-none p-2 text-sm"
            type="text"
            onChange={handleTextChange}
            value={searchInput}
          />
          <button
            className="bg-govBrown text-white rounded-lg px-3 mx-1"
            onClick={handleSearchSubmit}
          >
            {t("home:search-btn")}
          </button>
        </div>
      </div>
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full my-5">
        {listedPulishers.map((publisher) => {
          return (
            <li className="py-2 " key={publisher._id}>
              <span className=" border-b-[1px] border-govBrown hover:border-b-2 transition-all ease-in-out transform">
                <Link href={`/publisher/${publisher._id}`}>
                  {publisher.name}
                </Link>
              </span>
            </li>
          );
        })}
      </ul>
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full my-5">
        {listedJournals.map((journal) => {
          return (
            <li
              className="bg-gray-100 pt-6 pb-2 px-3 border-b-[1px] border-govBrown flex flex-col justify-between"
              key={journal._id}
            >
              <a href={journal.url} target="_blank" rel="noreferrer">
                <div className=" border-r-[1px] border-govBrown pr-2">
                  {journal.title}
                </div>
                <div className="text-gray-400">{journal.description}</div>
              </a>
              <div className="flex w-full justify-end">
                <a
                  type="button"
                  href={journal.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-govBrown text-white hover:bg-govBrownHover transition-all ease-in-out flex items-center justify-center gap-2"
                >
                  زیاتر
                  {/* <BsArrowLeftShort /> */}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Listing;

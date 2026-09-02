"use client";

import { useState } from "react";

import {
  FaMagnifyingGlass,
  FaArrowRight,
  FaFilter,
  FaSeedling,
  FaHouse,
  FaHeartPulse,
  FaGraduationCap,
  FaBriefcase,
  FaBuilding,
  FaBolt,
  FaCircleXmark,
} from "react-icons/fa6";


const schemes = [
  {
    id: 1,
    name: "PM-KISAN",
    category: "Agriculture",
    state: "All India",
    benefit: "₹6,000 per year",
    description:
      "Financial assistance to eligible farmer families for agricultural needs.",
    icon: <FaSeedling />,
  },
  {
    id: 2,
    name: "PM Awas Yojana",
    category: "Housing",
    state: "All India",
    benefit: "Housing assistance",
    description:
      "Financial assistance to eligible families for affordable housing.",
    icon: <FaHouse />,
  },
  {
    id: 3,
    name: "Ayushman Bharat PM-JAY",
    category: "Health",
    state: "All India",
    benefit: "Health cover up to ₹5 lakh",
    description:
      "Health insurance coverage for eligible economically vulnerable families.",
    icon: <FaHeartPulse />,
  },
  {
    id: 4,
    name: "National Scholarship Scheme",
    category: "Education",
    state: "All India",
    benefit: "Educational scholarship",
    description:
      "Financial support for eligible students pursuing higher education.",
    icon: <FaGraduationCap />,
  },
  {
    id: 5,
    name: "PM Vishwakarma",
    category: "Employment",
    state: "All India",
    benefit: "Training and financial support",
    description:
      "Support for traditional artisans and craftspeople across India.",
    icon: <FaBriefcase />,
  },
  {
    id: 6,
    name: "PM MUDRA Yojana",
    category: "Business",
    state: "All India",
    benefit: "Business loans",
    description:
      "Loans to support small businesses and micro enterprises.",
    icon: <FaBuilding />,
  },
  {
    id: 7,
    name: "PM-KUSUM",
    category: "Energy",
    state: "All India",
    benefit: "Solar energy support",
    description:
      "Support for farmers adopting solar-powered agricultural solutions.",
    icon: <FaBolt />,
  },
  {
    id: 8,
    name: "Startup India",
    category: "Business",
    state: "All India",
    benefit: "Startup support",
    description:
      "Benefits and support for eligible startups and entrepreneurs.",
    icon: <FaBuilding />,
  },
  {
    id: 9,
    name: "Skill India",
    category: "Employment",
    state: "All India",
    benefit: "Free skill training",
    description:
      "Skill development and training opportunities for eligible citizens.",
    icon: <FaBriefcase />,
  },
];


const categories = [
  "All Categories",
  "Agriculture",
  "Education",
  "Employment",
  "Health",
  "Housing",
  "Business",
  "Energy",
];


const states = [
  "All States",
  "West Bengal",
  "Maharashtra",
  "Delhi",
  "Uttar Pradesh",
  "Bihar",
  "Tamil Nadu",
];


export default function SchemesPage() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [state, setState] = useState("All States");

  const filteredSchemes = schemes.filter((scheme) => {

    const searchMatch =
      scheme.name.toLowerCase().includes(search.toLowerCase()) ||
      scheme.description.toLowerCase().includes(search.toLowerCase()) ||
      scheme.category.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All Categories" ||
      scheme.category === category;

    const stateMatch =
      state === "All States" ||
      scheme.state === "All India" ||
      scheme.state === state;

    return searchMatch && categoryMatch && stateMatch;
  });


  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setState("All States");
  };


  return (
    <main className="min-h-screen bg-slate-50/50">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="border-b border-slate-100 bg-gradient-to-b from-green-50/70 to-white">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pb-10
            pt-12
            sm:px-8
            sm:pb-12
            sm:pt-16
            lg:px-10
            lg:pt-20
          "
        >

          {/* Small badge */}

          <div
            className="
              mx-auto
              mb-4
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-green-100
              bg-green-50
              px-3
              py-1.5
              text-[10px]
              font-medium
              text-green-600
            "
          >
            <FaMagnifyingGlass size={10} />

            Government Scheme Explorer
          </div>


          {/* Heading */}

          <h1
            className="
              text-center
              text-3xl
              font-bold
              tracking-tight
              text-slate-800
              sm:text-4xl
              lg:text-5xl
            "
          >
            Government{" "}
            <span className="text-green-600">
              Schemes
            </span>
          </h1>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-center
              text-sm
              leading-6
              text-slate-400
              sm:text-base
            "
          >
            Explore government schemes and discover benefits that
            may be available to you.
          </p>

        </div>

      </section>


      {/* =====================================================
          SEARCH + FILTERS
      ====================================================== */}

      <section>

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-7
            sm:px-8
            sm:py-9
            lg:px-10
          "
        >

          {/* Search */}

          <div
            className="
              mx-auto
              max-w-4xl
              rounded-xl
              border
              border-slate-200
              bg-white
              p-2
              shadow-sm
            "
          >

            <div className="flex items-center gap-3">

              <FaMagnifyingGlass
                className="ml-3 shrink-0 text-slate-400"
                size={15}
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search schemes by name, category or keyword..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  py-2
                  text-sm
                  text-slate-700
                  outline-none
                  placeholder:text-slate-400
                "
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mr-2 text-slate-300 transition hover:text-slate-500"
                >
                  <FaCircleXmark size={15} />
                </button>
              )}

              <button
                className="
                  hidden
                  rounded-lg
                  bg-green-600
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-700
                  sm:block
                "
              >
                Search
              </button>

            </div>

          </div>


          {/* Filters heading */}

          <div
            className="
              mx-auto
              mt-7
              flex
              max-w-4xl
              items-center
              justify-between
            "
          >

            <div className="flex items-center gap-2">

              <FaFilter
                className="text-green-600"
                size={12}
              />

              <h2 className="text-sm font-semibold text-slate-700">
                Filters
              </h2>

            </div>


            {(category !== "All Categories" ||
              state !== "All States" ||
              search) && (

              <button
                onClick={clearFilters}
                className="
                  text-xs
                  font-medium
                  text-green-600
                  transition
                  hover:text-green-700
                "
              >
                Clear filters
              </button>

            )}

          </div>


          {/* Filter controls */}

          <div
            className="
              mx-auto
              mt-3
              grid
              max-w-4xl
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* Category */}

            <div>

              <label
                htmlFor="category"
                className="mb-1.5 block text-[11px] font-medium text-slate-500"
              >
                Category
              </label>

              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-2.5
                  text-xs
                  text-slate-600
                  outline-none
                  transition
                  focus:border-green-400
                "
              >

                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}

              </select>

            </div>


            {/* State */}

            <div>

              <label
                htmlFor="state"
                className="mb-1.5 block text-[11px] font-medium text-slate-500"
              >
                State
              </label>

              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-2.5
                  text-xs
                  text-slate-600
                  outline-none
                  transition
                  focus:border-green-400
                "
              >

                {states.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}

              </select>

            </div>


            {/* Age */}

            <div>

              <label
                htmlFor="age"
                className="mb-1.5 block text-[11px] font-medium text-slate-500"
              >
                Age
              </label>

              <select
                id="age"
                className="
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-2.5
                  text-xs
                  text-slate-600
                  outline-none
                  transition
                  focus:border-green-400
                "
              >
                <option>Any age</option>
                <option>Below 18</option>
                <option>18 - 25</option>
                <option>26 - 40</option>
                <option>41 - 60</option>
                <option>60+</option>
              </select>

            </div>


            {/* Income */}

            <div>

              <label
                htmlFor="income"
                className="mb-1.5 block text-[11px] font-medium text-slate-500"
              >
                Annual Income
              </label>

              <select
                id="income"
                className="
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-2.5
                  text-xs
                  text-slate-600
                  outline-none
                  transition
                  focus:border-green-400
                "
              >
                <option>Any income</option>
                <option>Below ₹1 lakh</option>
                <option>₹1 - ₹2.5 lakh</option>
                <option>₹2.5 - ₹5 lakh</option>
                <option>₹5 - ₹10 lakh</option>
                <option>Above ₹10 lakh</option>
              </select>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SCHEMES
      ====================================================== */}

      <section>

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-10
            sm:px-8
            sm:py-12
            lg:px-10
          "
        >

          {/* Results header */}

          <div
            className="
              mb-6
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div>

              <h2 className="text-lg font-bold text-slate-800 sm:text-xl">
                Available Schemes
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Showing{" "}
                <span className="font-semibold text-slate-600">
                  {filteredSchemes.length}
                </span>{" "}
                schemes
              </p>

            </div>


            <button
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-lg
                border
                border-green-100
                bg-green-50
                px-3
                py-2
                text-xs
                font-medium
                text-green-600
                transition
                hover:bg-green-100
              "
            >
              Check your eligibility

              <FaArrowRight size={10} />
            </button>

          </div>


          {/* Cards */}

          {filteredSchemes.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredSchemes.map((scheme) => (

                <article
                  key={scheme.id}
                  className="
                    group
                    flex
                    min-h-64
                    flex-col
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition
                    duration-200
                    hover:-translate-y-1
                    hover:border-green-100
                    hover:shadow-md
                  "
                >

                  {/* Card top */}

                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-green-50
                        text-green-600
                      "
                    >
                      {scheme.icon}
                    </div>


                    <span
                      className="
                        rounded-full
                        bg-green-50
                        px-2.5
                        py-1
                        text-[9px]
                        font-medium
                        text-green-600
                      "
                    >
                      {scheme.state}
                    </span>

                  </div>


                  {/* Name */}

                  <h3
                    className="
                      mt-5
                      text-sm
                      font-bold
                      text-slate-800
                      transition
                      group-hover:text-green-600
                    "
                  >
                    {scheme.name}
                  </h3>


                  {/* Category */}

                  <p
                    className="
                      mt-1
                      text-[10px]
                      font-medium
                      text-green-600
                    "
                  >
                    {scheme.category}
                  </p>


                  {/* Description */}

                  <p
                    className="
                      mt-3
                      line-clamp-2
                      text-xs
                      leading-5
                      text-slate-400
                    "
                  >
                    {scheme.description}
                  </p>


                  {/* Benefit */}

                  <div
                    className="
                      mt-4
                      rounded-lg
                      bg-slate-50
                      px-3
                      py-2.5
                    "
                  >

                    <p className="text-[9px] text-slate-400">
                      Main Benefit
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-slate-700">
                      {scheme.benefit}
                    </p>

                  </div>


                  {/* Button */}

                  <div className="mt-auto pt-5">

                    <button
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2.5
                        text-xs
                        font-semibold
                        text-slate-600
                        transition
                        group-hover:border-green-200
                        group-hover:bg-green-50
                        group-hover:text-green-600
                      "
                    >
                      View Details

                      <FaArrowRight size={10} />

                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* No results */

            <div
              className="
                rounded-xl
                border
                border-dashed
                border-slate-200
                bg-white
                px-5
                py-16
                text-center
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-green-50
                  text-green-500
                "
              >
                <FaMagnifyingGlass size={18} />
              </div>


              <h3 className="mt-4 text-sm font-semibold">
                No schemes found
              </h3>


              <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-slate-400">
                Try changing your search or removing one of the
                filters to find more schemes.
              </p>


              <button
                onClick={clearFilters}
                className="
                  mt-5
                  rounded-lg
                  bg-green-600
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-700
                "
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="border-t border-slate-100 bg-white">

        <div
          className="
            mx-auto
            max-w-4xl
            px-5
            py-12
            text-center
            sm:px-8
            sm:py-16
          "
        >

          <div
            className="
              rounded-2xl
              border
              border-green-100
              bg-green-50/50
              px-5
              py-9
              sm:px-10
            "
          >

            <div
              className="
                mx-auto
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-green-100
                text-green-600
              "
            >
              <FaMagnifyingGlass size={15} />
            </div>


            <h2
              className="
                mt-4
                text-lg
                font-bold
                text-slate-800
                sm:text-xl
              "
            >
              Not sure which scheme is right for you?
            </h2>


            <p
              className="
                mx-auto
                mt-2
                max-w-lg
                text-xs
                leading-5
                text-slate-400
              "
            >
              Answer a few simple questions and YojanaAI will help
              you discover schemes that may match your profile.
            </p>


            <button
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-green-600
                px-5
                py-3
                text-xs
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-green-700
                hover:shadow-md
                active:scale-95
              "
            >
              Check My Eligibility

              <FaArrowRight size={10} />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}
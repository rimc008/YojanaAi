"use client";

import { useState } from "react";

import {
  FaMagnifyingGlass,
  FaArrowRight,
  FaFilter,
  FaCircleXmark,
  FaSeedling,
  FaGraduationCap,
  FaBriefcase,
  FaBolt,
  FaHouse,
  FaRoad,
  FaBuilding,
  FaPeopleGroup,
  FaRocket,
  FaUser,
  FaCircleCheck
} from "react-icons/fa6";

import { MdHealthAndSafety } from "react-icons/md";

import Link from "next/link";


const categories = [
    "All Categories",
    "Agriculture",
    "Education",
    "Employment",
    "Health",
    "Housing",
    "Business",
    "Energy",
    "Financial Assistance",
    "Social Welfare",
    "Women & Child",
    "Senior Citizens",
    "Disability",
    "Skill Development",
    "Pension",
    "Insurance",
    "Food & Nutrition",
    "Rural Development",
    "Urban Development",
    "Infrastructure",
    "Transport",
    "Environment",
    "Water & Sanitation",
    "Digital & Technology",
    "MSME",
    "Tribal Welfare",
    "Minority Welfare",
    "SC/ST Welfare",
];


const states = [
    "All States",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
];


export default function SchemesPage() {

  const [search, setSearch] = useState("");
  const [category_, setCategory_] = useState("All Categories");
  const [state_, setState_] = useState("All States");

  const [filteredSchemes,setFilteredSchemes] = useState([]);
  const [filteredSchemesb,setFilteredSchemesb] = useState([]);

  const [search_action,setSearch_action] = useState(false);

  const categoryIcons = [
          { pattern: /agriculture|farmer/i, icon: FaSeedling },
          { pattern: /education|scholarship|student/i, icon: FaGraduationCap },
          { pattern: /employment|job|skill/i, icon: FaBriefcase },
          { pattern: /energy|solar/i, icon: FaBolt },
          { pattern: /health|medical/i, icon: MdHealthAndSafety },
          { pattern: /housing|house/i, icon: FaHouse },
          { pattern: /infrastructure|road/i, icon: FaRoad },
          { pattern: /msme|enterprise|business/i, icon: FaBuilding },
          { pattern: /social|welfare/i, icon: FaPeopleGroup },
          { pattern: /startup/i, icon: FaRocket },
          { pattern: /women|girl/i, icon: FaUser },
  ];

  function getCategoryIcon(categoryName) {
        const match = categoryIcons.find(
            ({ pattern }) => pattern.test(categoryName)
        );
    
        return match ? match.icon : FaCircleCheck;
    }

  const filter_function = async(search_item) => {

    try {

        const as = await fetch("http://localhost:3000/api/filters",
          {
            method:"POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify({
                search_item: `${search_item}`
            })
          })

        const data3 = await as.json()

        if (data3.success){

          console.log(state_);
          console.log(category_);
          
          

          setFilteredSchemes(data3.message.filter((item)=> ( 

            (state_ !== "All States" && category_ !== "All Categories") ?
            item.state.includes(state_) && item.category.includes(category_) : item
          
          )))

          setSearch_action(false)
        }
        else{
          console.log(data3.message);       
        }

      } catch (error) {
        
        console.log(error.message);
        
      }
  } 


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
              border-green-500
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

                onClick={() => {

                  setSearch_action(!search_action)
                  console.log(search_action);
                  
                  filter_function(search);
                
                }}
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


            {/* {(category !== "All Categories" ||
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

            )} */}

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
                value={category_}
                onChange={(e) => setCategory_(e.target.value)}
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
                value={state_}
                onChange={(e) => setState_(e.target.value)}
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

              {filteredSchemes.map((scheme) => {

                const Icon3 = getCategoryIcon(scheme.name)

              return (
                <Link href={`/details/${scheme.slug}`} className="
                    group
                    flex
                    min-h-64
                    flex-col
                    rounded-xl
                    border
                    border-slate-300
                    bg-green-300
                    p-5
                    shadow-lg
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:border-black
                    hover:bg-green-400
                    hover:shadow-2xl
                  "><article
                  key={scheme.id}
                  
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
                      <Icon3 size={20}/>
                    </div>


                    <span
                      className="
                        rounded-full
                        bg-green-700
                        px-2.5
                        py-1
                        text-[9px]
                        font-medium
                        text-white
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
                      text-black
                      transition
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
                      text-black
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
                      text-black
                    "
                  >
                    {scheme.description}
                  </p>


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
                        bg-green-500
                        px-4
                        py-2.5
                        text-xs
                        font-semibold
                        text-black
                        transition
                        group-hover:border-green-200
                        group-hover:bg-green-600
                        
                      "
                    >
                      View Details

                      <FaArrowRight size={10} />

                    </button>

                  </div>
                </article></Link>)

            })}

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
                {search_action?
                
                <div className="flex justify-center gap-3">
                  <div className="animate-ping text-green-500"><FaMagnifyingGlass size={15}/></div>
                  <div className="font-bold text-green-900 animate-bounce">
                    searching
                  </div>
                </div>
                
                :"No schemes found"}
              </h3>


              <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-slate-400">
                {search_action ? "" :"Try changing your search or removing one of the filters to find more schemes"}
              </p>


              {/* <button
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
              </button> */}

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
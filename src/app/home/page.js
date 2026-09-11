"use client"
import {
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
  FaArrowRight,
  FaMagnifyingGlass,
  FaCircleCheck,
  FaRobot,
} from "react-icons/fa6";
import Link from "next/link";

import { MdHealthAndSafety } from "react-icons/md";

import { useEffect, useState } from "react";

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


export default function Home() {

  const [categories,setCategories] = useState([])
  const [viewall,setViewall] = useState(false)
  const [featuredSchemes,setFeaturedSchemes] = useState([])
  const [browseall,setBrowseall] = useState(false)

  useEffect(()=>{

    const categories_function = async() => {
      try {

        const as = await fetch("http://localhost:3000/api/scheme_categories",
          {
            method:"GET",
            headers : {"Content-Type":"application/json"}
          })

        const data = await as.json()

        if (data.success){
          setCategories(data.message)
        }
        else{
          console.log(data.message);       
        }

      } catch (error) {
        
        console.log(error.message);
        
      }
    }

    const featuredSchemes_function = async() => {
      try {

        const as = await fetch("http://localhost:3000/api/featured_schemes",
          {
            method:"GET",
            headers : {"Content-Type":"application/json"}
          })

        const data1 = await as.json()

        if (data1.success){
          setFeaturedSchemes(data1.message)
        }
        else{
          console.log(data1.message);       
        }

      } catch (error) {
        
        console.log(error.message);
        
      }
    }


    categories_function();
    featuredSchemes_function();
  },[])

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="bg-gradient-to-b from-green-50/70 to-white">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-center
            gap-10
            px-5
            py-12
            sm:px-8
            sm:py-16
            lg:grid-cols-2
            lg:gap-16
            lg:px-10
            lg:py-24
          "
        >

          {/* LEFT SIDE */}

          <div className="w-full max-w-xl">

            {/* Badge */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-100
                bg-white
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-500
                shadow-sm
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>

              AI-powered scheme discovery
            </div>


            {/* Heading */}

            <h1
              className="
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Find Government

              <span className="block text-green-600">
                Schemes You Deserve
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-6
                text-slate-500
                sm:text-base
                sm:leading-7
              "
            >
              Discover, check eligibility, and apply for 2000+ central
              and state government schemes — all in one place.
            </p>


            {/* Buttons */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >

              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-green-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  duration-200
                  hover:bg-green-700
                  hover:shadow-md
                  active:scale-95
                "
              >
                Check Your Eligibility

                <FaArrowRight size={12} />
              </button>


              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  duration-200
                  hover:border-green-200
                  hover:bg-green-50
                "
              >
                <FaMagnifyingGlass size={13} />

                Browse Schemes
              </button>

            </div>

          </div>


          {/* =================================================
              AI CARD
          ================================================== */}

          <div className="w-full">

            <div
              className="
                mx-auto
                w-full
                max-w-lg
                overflow-hidden
                rounded-xl
                border
                border-green-500
                bg-white
                shadow-lg
                shadow-slate-200/50
              "
            >

              {/* AI HEADER */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-slate-100
                  bg-green-50/60
                  px-4
                  py-3
                "
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-green-600
                    text-white
                  "
                >
                  <FaRobot size={14} />
                </div>


                <div>

                  <p className="text-sm font-semibold text-slate-800">
                    Ask YojanaAI
                  </p>

                  <p className="text-[10px] text-slate-400 sm:text-[11px]">
                    Ask anything about government schemes
                  </p>

                </div>

              </div>


              {/* AI BODY */}

              <div className="space-y-5 p-5 sm:p-6">

                {/* Search Icon */}

                <div className="flex justify-center">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-green-50
                      text-green-600
                    "
                  >
                    <FaMagnifyingGlass size={15} />
                  </div>

                </div>


                {/* AI Text */}

                <div className="text-center">

                  <h3 className="text-sm font-semibold">
                    Find schemes that match you
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Tell us about yourself and we'll find relevant schemes.
                  </p>

                </div>


                {/* Suggestions */}

                <div className="flex flex-wrap justify-center gap-2">

                  <button
                    className="
                      rounded-md
                      border
                      border-slate-200
                      px-3
                      py-1.5
                      text-[10px]
                      text-slate-500
                      transition
                      hover:border-green-200
                      hover:bg-green-50
                    "
                  >
                    What schemes am I eligible for?
                  </button>


                  <button
                    className="
                      rounded-md
                      border
                      border-slate-200
                      px-3
                      py-1.5
                      text-[10px]
                      text-slate-500
                      transition
                      hover:border-green-200
                      hover:bg-green-50
                    "
                  >
                    I'm a farmer
                  </button>


                  <button
                    className="
                      rounded-md
                      border
                      border-slate-200
                      px-3
                      py-1.5
                      text-[10px]
                      text-slate-500
                      transition
                      hover:border-green-200
                      hover:bg-green-50
                    "
                  >
                    Scholarships for students
                  </button>

                </div>


                {/* Input */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    p-2
                    focus-within:border-green-400
                  "
                >

                  <input
                    type="text"
                    placeholder="Ask about schemes, eligibility..."
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      px-2
                      text-xs
                      outline-none
                      placeholder:text-slate-400
                    "
                  />


                  <button
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-green-500
                      text-white
                      transition
                      hover:bg-green-600
                    "
                  >
                    <FaArrowRight size={11} />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW YOJANAAI WORKS
      ====================================================== */}

      <section className="border-y border-slate-100 bg-white">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-12
            sm:px-8
            lg:px-10
          "
        >

          <h2
            className="
              text-center
              text-xl
              font-bold
              sm:text-2xl
            "
          >
            How YojanaAI Works
          </h2>


          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-3
              sm:gap-6
            "
          >

            {/* STEP 1 */}

            <div className="text-center">

              <div
                className="
                  mx-auto
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
                <FaMagnifyingGlass size={14} />
              </div>


              <h3 className="mt-4 text-sm font-semibold">
                Discover Schemes
              </h3>


              <p
                className="
                  mx-auto
                  mt-2
                  max-w-xs
                  text-xs
                  leading-5
                  text-slate-400
                "
              >
                Browse government schemes based on your needs and
                interests.
              </p>

            </div>


            {/* STEP 2 */}

            <div className="text-center">

              <div
                className="
                  mx-auto
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
                <FaCircleCheck size={15} />
              </div>


              <h3 className="mt-4 text-sm font-semibold">
                Check Eligibility
              </h3>


              <p
                className="
                  mx-auto
                  mt-2
                  max-w-xs
                  text-xs
                  leading-5
                  text-slate-400
                "
              >
                Answer a few simple questions to find schemes you're
                eligible for.
              </p>

            </div>


            {/* STEP 3 */}

            <div className="text-center">

              <div
                className="
                  mx-auto
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
                <FaArrowRight size={14} />
              </div>


              <h3 className="mt-4 text-sm font-semibold">
                Apply with Help
              </h3>


              <p
                className="
                  mx-auto
                  mt-2
                  max-w-xs
                  text-xs
                  leading-5
                  text-slate-400
                "
              >
                Get detailed information and guidance on how to apply.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SCHEME CATEGORIES
      ====================================================== */}

      <section className="bg-slate-50/60">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-12
            sm:px-8
            lg:px-10
          "
        >

          {/* CATEGORY HEADER */}

          <div className="flex items-center justify-between">

            <div>

              <h2
                className="
                  text-xl
                  font-bold
                  sm:text-2xl
                "
              >
                Scheme Categories
              </h2>


              <p className="mt-1 text-xs text-slate-400">
                Explore schemes based on your needs
              </p>

            </div>


            <button
              className="
                items-center
                gap-1
                text-xs
                font-medium
                text-green-600
                flex
                hover:text-green-800
                transition-all
              "
              onClick={()=> setViewall(!viewall)}
            >
              {viewall ? "View less" : "View top 30"}

              <FaArrowRight size={10} />
            </button>

          </div>


          {/* CATEGORY GRID */}

          <div
            className={`
              mt-7
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              
              `}
            
          >

            {(viewall ? categories.slice(0,30) : categories.slice(0,11)).map((category) => {

              const Icon = getCategoryIcon(category[0])

              return (
              <Link href={{pathname:"/scheme_categoty_pool",query: { category:category[0], department:category[1] }}} className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  border
                  border-slate-200
                  bg-green-100
                  p-4
                  text-left
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-black
                  hover:shadow-md
                  hover:bg-green-300
                  z-500
                ">
                
                

                {/* ICON */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-green-50
                    text-green-600
                    transition
                    group-hover:bg-green-100
                  "
                >
                  <Icon size={20}/>
                </div>


                {/* CATEGORY TEXT */}

                <div className="min-w-0">

                  <h3 className="text-xs font-semibold">
                    {category[0]}
                  </h3>


                  <p
                    className="
                      mt-1
                      line-clamp-2
                      text-[10px]
                      leading-4
                      text-black
                    "
                  >
                    {category[1]}
                  </p>

                </div>

              
              </Link> 

              )

           })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED SCHEMES
      ====================================================== */}

      <section className="bg-white">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-12
            sm:px-8
            lg:px-10
          "
        >

          {/* HEADER */}

          <div className="flex items-center justify-between">

            <h2
              className="
                text-xl
                font-bold
                sm:text-2xl
              "
            >
              Featured Schemes
            </h2>


            <button
              className="
                flex
                items-center
                gap-1
                text-xs
                font-medium
                text-green-600
                transition
                hover:text-green-700
              "
              onClick={()=>setBrowseall(!browseall)}
            >
              {browseall ? "Browse less" : "Browse all"}

              <FaArrowRight size={10} />
            </button>

          </div>


          {/* FEATURED GRID */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {(browseall ? featuredSchemes.slice(0,10) : featuredSchemes.slice(0,6)).map((scheme) => {

              const Icon1 = getCategoryIcon(scheme.description)

              return (
              <Link href={`/details/${scheme.slug}`} className="
                  group
                  min-h-36
                  rounded-lg
                  border
                  border-slate-200
                  bg-green-100
                  p-5
                  transition
                  duration-200
                  hover:-translate-y-1
                  hover:border-black
                  hover:bg-green-300
                  hover:shadow-md
                  flex
                  flex-col
                  justify-evenly
                "><div
              >

                {/* ICON */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    text-green-500
                    shadow-sm
                  "
                >
                  <Icon1 size={20} />
                </div>


                {/* SCHEME NAME */}

                <h3 className="mt-4 text-sm font-semibold">
                  {scheme.name}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-black
                  "
                >
                  {scheme.description}
                </p>


                {/* DETAILS */}

                <button
                  className="
                    mt-4
                    flex
                    items-center
                    gap-1
                    text-xs
                    font-medium
                    text-black
                    transition
                  "
                >
                  View details

                  <FaArrowRight size={9} />
                </button>

              </div></Link>
              )

        })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          border-t
          border-slate-100
          bg-white
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-8
            text-center
            sm:px-8
          "
        >

          <h3 className="text-sm font-bold">

            Yojana

            <span className="text-green-600">
              AI
            </span>

          </h3>


          <p className="mt-2 text-xs text-slate-400">
            Empowering citizens to discover government schemes.
          </p>


          {/* DISCLAIMER */}

          <div
            className="
              mx-auto
              mt-5
              max-w-2xl
              rounded-md
              border
              border-amber-100
              bg-amber-50
              px-4
              py-3
              text-[10px]
              leading-4
              text-amber-700
            "
          >
            <strong>Disclaimer:</strong>{" "}
            This website provides information about government
            schemes for convenience. Always verify eligibility and
            application details from the official government source.
          </div>


          <p className="mt-5 text-[10px] text-slate-400">
            © 2026 YojanaAI. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}
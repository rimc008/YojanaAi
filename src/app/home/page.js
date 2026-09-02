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

import { MdHealthAndSafety } from "react-icons/md";


const categories = [
  {
    name: "Agriculture",
    description: "Farmer subsidy and support schemes",
    icon: <FaSeedling />,
  },
  {
    name: "Education",
    description: "Scholarships and education support",
    icon: <FaGraduationCap />,
  },
  {
    name: "Employment",
    description: "Job and skill development opportunities",
    icon: <FaBriefcase />,
  },
  {
    name: "Energy",
    description: "Solar and renewable energy schemes",
    icon: <FaBolt />,
  },
  {
    name: "Health",
    description: "Healthcare and medical assistance",
    icon: <MdHealthAndSafety />,
  },
  {
    name: "Housing",
    description: "Affordable housing and development",
    icon: <FaHouse />,
  },
  {
    name: "Infrastructure",
    description: "Roads and infrastructure support",
    icon: <FaRoad />,
  },
  {
    name: "MSME",
    description: "Business and enterprise support",
    icon: <FaBuilding />,
  },
  {
    name: "Social Welfare",
    description: "Social security and welfare schemes",
    icon: <FaPeopleGroup />,
  },
  {
    name: "Startup",
    description: "Startup support programs and funding",
    icon: <FaRocket />,
  },
  {
    name: "Women",
    description: "Women empowerment schemes",
    icon: <FaUser />,
  },
];


const featuredSchemes = [
  "PM-KISAN",
  "Ayushman Bharat",
  "PM Awas Yojana",
  "PM Vishwakarma",
  "National Scholarship Portal",
  "MUDRA Yojana",
];


export default function Home() {
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
                border-slate-200
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
                hidden
                items-center
                gap-1
                text-xs
                font-medium
                text-green-600
                sm:flex
              "
            >
              View all

              <FaArrowRight size={10} />
            </button>

          </div>


          {/* CATEGORY GRID */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >

            {categories.map((category) => (

              <button
                key={category.name}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  p-4
                  text-left
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-green-200
                  hover:shadow-md
                "
              >

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
                  {category.icon}
                </div>


                {/* CATEGORY TEXT */}

                <div className="min-w-0">

                  <h3 className="text-xs font-semibold">
                    {category.name}
                  </h3>


                  <p
                    className="
                      mt-1
                      line-clamp-2
                      text-[10px]
                      leading-4
                      text-slate-400
                    "
                  >
                    {category.description}
                  </p>

                </div>

              </button>

            ))}

          </div>


          {/* MOBILE VIEW ALL */}

          <button
            className="
              mt-5
              flex
              items-center
              gap-1
              text-xs
              font-medium
              text-green-600
              sm:hidden
            "
          >
            View all

            <FaArrowRight size={10} />
          </button>

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
            >
              Browse all

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

            {featuredSchemes.map((scheme) => (

              <div
                key={scheme}
                className="
                  group
                  min-h-36
                  rounded-lg
                  border
                  border-slate-200
                  bg-slate-50
                  p-5
                  transition
                  duration-200
                  hover:-translate-y-1
                  hover:border-green-100
                  hover:bg-white
                  hover:shadow-md
                "
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
                  <FaCircleCheck size={15} />
                </div>


                {/* SCHEME NAME */}

                <h3 className="mt-4 text-sm font-semibold">
                  {scheme}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-400
                  "
                >
                  Government scheme providing support and benefits
                  to eligible citizens.
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
                    text-green-600
                    opacity-0
                    transition
                    group-hover:opacity-100
                  "
                >
                  View details

                  <FaArrowRight size={9} />
                </button>

              </div>

            ))}

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
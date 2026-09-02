"use client";

import { useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaUser,
  FaLocationDot,
  FaBriefcase,
  FaIndianRupeeSign,
  FaGraduationCap,
  FaHouse,
  FaHeartPulse,
  FaSeedling,
  FaBuilding,
  FaMagnifyingGlass,
  FaRotateRight,
} from "react-icons/fa6";


export default function EligibilityPage() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    state: "",
    occupation: "",
    income: "",
    needs: [],
  });


  const totalSteps = 4;


  // =====================================================
  // UPDATE FORM DATA
  // =====================================================

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };


  // =====================================================
  // MULTIPLE NEEDS
  // =====================================================

  const toggleNeed = (need) => {

    setFormData((previous) => {

      const alreadySelected = previous.needs.includes(need);

      if (alreadySelected) {

        return {
          ...previous,
          needs: previous.needs.filter(
            (item) => item !== need
          ),
        };

      }

      return {
        ...previous,
        needs: [...previous.needs, need],
      };

    });

  };


  // =====================================================
  // NEXT
  // =====================================================

  const nextStep = () => {

    if (step < totalSteps) {
      setStep(step + 1);
    }

  };


  // =====================================================
  // PREVIOUS
  // =====================================================

  const previousStep = () => {

    if (step > 1) {
      setStep(step - 1);
    }

  };


  // =====================================================
  // RESET
  // =====================================================

  const resetForm = () => {

    setFormData({
      age: "",
      gender: "",
      state: "",
      occupation: "",
      income: "",
      needs: [],
    });

    setStep(1);

  };


  return (

    <main className="min-h-screen bg-gradient-to-b from-green-50/70 to-white">


      {/* =================================================
          HEADER
      ================================================== */}

      <section className="border-b border-slate-100">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            pb-9
            pt-12
            sm:px-8
            sm:pb-11
            sm:pt-16
            lg:px-10
            lg:pt-20
          "
        >

          {/* Badge */}

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

            Personalized Scheme Finder

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

            Check Your{" "}

            <span className="text-green-600">
              Eligibility
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
            Answer a few simple questions and discover government
            schemes that may be relevant to you.
          </p>

        </div>

      </section>



      {/* =================================================
          MAIN FORM AREA
      ================================================== */}

      <section>

        <div
          className="
            mx-auto
            max-w-3xl
            px-5
            py-8
            sm:px-8
            sm:py-12
          "
        >


          {/* =================================================
              PROGRESS
          ================================================== */}

          <div className="mb-8">

            <div className="flex items-center justify-between">

              <p className="text-xs font-semibold text-slate-600">

                Step {step} of {totalSteps}

              </p>


              <p className="text-[10px] text-slate-400">

                {step === 1 && "Basic Information"}

                {step === 2 && "Your Background"}

                {step === 3 && "Income"}

                {step === 4 && "Your Needs"}

              </p>

            </div>


            {/* Progress bar */}

            <div
              className="
                mt-3
                h-1.5
                overflow-hidden
                rounded-full
                bg-slate-200
              "
            >

              <div
                className="
                  h-full
                  rounded-full
                  bg-green-500
                  transition-all
                  duration-500
                "
                style={{
                  width: `${(step / totalSteps) * 100}%`,
                }}
              />

            </div>


            {/* Step circles */}

            <div className="mt-4 flex items-center justify-between">

              {[1, 2, 3, 4].map((item) => (

                <div
                  key={item}
                  className="flex items-center"
                >

                  <div
                    className={`
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      text-[10px]
                      font-semibold
                      transition
                      duration-300
                      ${
                        item <= step
                          ? "bg-green-600 text-white"
                          : "bg-white text-slate-400 border border-slate-200"
                      }
                    `}
                  >

                    {item < step ? (
                      <FaCheck size={10} />
                    ) : (
                      item
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>



          {/* =================================================
              FORM CARD
          ================================================== */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-8
            "
          >


            {/* =================================================
                STEP 1
            ================================================== */}

            {step === 1 && (

              <div>

                <div
                  className="
                    mb-7
                    flex
                    items-start
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-green-50
                      text-green-600
                    "
                  >

                    <FaUser size={15} />

                  </div>


                  <div>

                    <h2 className="text-lg font-bold text-slate-800">
                      Tell us about yourself
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      This information helps us find schemes suitable
                      for your profile.
                    </p>

                  </div>

                </div>



                {/* Age */}

                <div className="mb-5">

                  <label
                    htmlFor="age"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-600
                    "
                  >
                    What is your age?
                  </label>


                  <input
                    id="age"
                    type="number"
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={(e) =>
                      updateField("age", e.target.value)
                    }
                    placeholder="Enter your age"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-green-400
                      focus:ring-2
                      focus:ring-green-50
                    "
                  />

                </div>



                {/* Gender */}

                <div className="mb-5">

                  <label
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-600
                    "
                  >
                    What is your gender?
                  </label>


                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-3
                      sm:grid-cols-3
                    "
                  >

                    {[
                      "Male",
                      "Female",
                      "Other",
                    ].map((item) => (

                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          updateField("gender", item)
                        }
                        className={`
                          rounded-lg
                          border
                          px-4
                          py-3
                          text-xs
                          font-medium
                          transition
                          ${
                            formData.gender === item
                              ? "border-green-400 bg-green-50 text-green-600"
                              : "border-slate-200 bg-white text-slate-500 hover:border-green-200"
                          }
                        `}
                      >

                        {item}

                      </button>

                    ))}

                  </div>

                </div>



                {/* State */}

                <div>

                  <label
                    htmlFor="state"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      text-slate-600
                    "
                  >
                    Where do you live?
                  </label>


                  <div className="relative">

                    <FaLocationDot
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                      size={13}
                    />


                    <select
                      id="state"
                      value={formData.state}
                      onChange={(e) =>
                        updateField("state", e.target.value)
                      }
                      className="
                        w-full
                        appearance-none
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-10
                        py-3
                        text-sm
                        text-slate-600
                        outline-none
                        transition
                        focus:border-green-400
                        focus:ring-2
                        focus:ring-green-50
                      "
                    >

                      <option value="">
                        Select your state
                      </option>

                      <option>West Bengal</option>
                      <option>Maharashtra</option>
                      <option>Uttar Pradesh</option>
                      <option>Bihar</option>
                      <option>Delhi</option>
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>
                      <option>Rajasthan</option>
                      <option>Gujarat</option>
                      <option>Odisha</option>
                      <option>Other</option>

                    </select>

                  </div>

                </div>

              </div>

            )}



            {/* =================================================
                STEP 2
            ================================================== */}

            {step === 2 && (

              <div>

                <div
                  className="
                    mb-7
                    flex
                    items-start
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-green-50
                      text-green-600
                    "
                  >

                    <FaBriefcase size={15} />

                  </div>


                  <div>

                    <h2 className="text-lg font-bold text-slate-800">
                      What do you do?
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Select the option that best describes your
                      current occupation.
                    </p>

                  </div>

                </div>



                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {[
                    {
                      name: "Student",
                      icon: <FaGraduationCap />,
                    },
                    {
                      name: "Farmer",
                      icon: <FaSeedling />,
                    },
                    {
                      name: "Salaried Employee",
                      icon: <FaBriefcase />,
                    },
                    {
                      name: "Self Employed",
                      icon: <FaUser />,
                    },
                    {
                      name: "Business Owner",
                      icon: <FaBuilding />,
                    },
                    {
                      name: "Unemployed",
                      icon: <FaMagnifyingGlass />,
                    },
                  ].map((item) => (

                    <button
                      key={item.name}
                      type="button"
                      onClick={() =>
                        updateField("occupation", item.name)
                      }
                      className={`
                        group
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        border
                        p-4
                        text-left
                        transition
                        ${
                          formData.occupation === item.name
                            ? "border-green-400 bg-green-50"
                            : "border-slate-200 bg-white hover:border-green-200 hover:bg-green-50/30"
                        }
                      `}
                    >

                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          ${
                            formData.occupation === item.name
                              ? "bg-green-100 text-green-600"
                              : "bg-slate-50 text-slate-400 group-hover:bg-green-50 group-hover:text-green-600"
                          }
                        `}
                      >

                        {item.icon}

                      </div>


                      <div>

                        <p
                          className={`
                            text-xs
                            font-semibold
                            ${
                              formData.occupation === item.name
                                ? "text-green-600"
                                : "text-slate-700"
                            }
                          `}
                        >
                          {item.name}
                        </p>

                      </div>


                      {formData.occupation === item.name && (

                        <div className="ml-auto">

                          <div
                            className="
                              flex
                              h-5
                              w-5
                              items-center
                              justify-center
                              rounded-full
                              bg-green-600
                              text-white
                            "
                          >

                            <FaCheck size={8} />

                          </div>

                        </div>

                      )}

                    </button>

                  ))}

                </div>

              </div>

            )}



            {/* =================================================
                STEP 3
            ================================================== */}

            {step === 3 && (

              <div>

                <div
                  className="
                    mb-7
                    flex
                    items-start
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-green-50
                      text-green-600
                    "
                  >

                    <FaIndianRupeeSign size={15} />

                  </div>


                  <div>

                    <h2 className="text-lg font-bold text-slate-800">
                      What is your annual family income?
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Select the approximate annual income of your
                      family.
                    </p>

                  </div>

                </div>



                <div className="space-y-3">

                  {[
                    "Below ₹1 lakh",
                    "₹1 - ₹2.5 lakh",
                    "₹2.5 - ₹5 lakh",
                    "₹5 - ₹10 lakh",
                    "Above ₹10 lakh",
                  ].map((item) => (

                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        updateField("income", item)
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        border
                        px-4
                        py-3.5
                        text-left
                        transition
                        ${
                          formData.income === item
                            ? "border-green-400 bg-green-50 text-green-600"
                            : "border-slate-200 bg-white text-slate-600 hover:border-green-200 hover:bg-green-50/30"
                        }
                      `}
                    >

                      <span className="text-xs font-medium">
                        {item}
                      </span>


                      <div
                        className={`
                          flex
                          h-4
                          w-4
                          items-center
                          justify-center
                          rounded-full
                          border
                          ${
                            formData.income === item
                              ? "border-green-600 bg-green-600"
                              : "border-slate-300"
                          }
                        `}
                      >

                        {formData.income === item && (
                          <FaCheck
                            className="text-white"
                            size={7}
                          />
                        )}

                      </div>

                    </button>

                  ))}

                </div>

              </div>

            )}



            {/* =================================================
                STEP 4
            ================================================== */}

            {step === 4 && (

              <div>

                <div
                  className="
                    mb-7
                    flex
                    items-start
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-green-50
                      text-green-600
                    "
                  >

                    <FaMagnifyingGlass size={15} />

                  </div>


                  <div>

                    <h2 className="text-lg font-bold text-slate-800">
                      What kind of support do you need?
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      You can select more than one option.
                    </p>

                  </div>

                </div>



                <div
                  className="
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-2
                  "
                >

                  {[
                    {
                      name: "Education",
                      icon: <FaGraduationCap />,
                    },
                    {
                      name: "Agriculture",
                      icon: <FaSeedling />,
                    },
                    {
                      name: "Healthcare",
                      icon: <FaHeartPulse />,
                    },
                    {
                      name: "Housing",
                      icon: <FaHouse />,
                    },
                    {
                      name: "Employment",
                      icon: <FaBriefcase />,
                    },
                    {
                      name: "Business",
                      icon: <FaBuilding />,
                    },
                  ].map((item) => {

                    const selected =
                      formData.needs.includes(item.name);


                    return (

                      <button
                        key={item.name}
                        type="button"
                        onClick={() =>
                          toggleNeed(item.name)
                        }
                        className={`
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          border
                          p-4
                          text-left
                          transition
                          ${
                            selected
                              ? "border-green-400 bg-green-50"
                              : "border-slate-200 bg-white hover:border-green-200"
                          }
                        `}
                      >

                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            ${
                              selected
                                ? "bg-green-100 text-green-600"
                                : "bg-slate-50 text-slate-400"
                            }
                          `}
                        >

                          {item.icon}

                        </div>


                        <span
                          className={`
                            text-xs
                            font-semibold
                            ${
                              selected
                                ? "text-green-600"
                                : "text-slate-600"
                            }
                          `}
                        >
                          {item.name}
                        </span>


                        <div
                          className={`
                            ml-auto
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-md
                            border
                            ${
                              selected
                                ? "border-green-600 bg-green-600 text-white"
                                : "border-slate-300 bg-white"
                            }
                          `}
                        >

                          {selected && (
                            <FaCheck size={8} />
                          )}

                        </div>

                      </button>

                    );

                  })}

                </div>


                {/* Info */}

                <div
                  className="
                    mt-6
                    rounded-lg
                    border
                    border-green-100
                    bg-green-50/60
                    px-4
                    py-3
                  "
                >

                  <p className="text-[10px] leading-4 text-green-700">

                    Select all areas where you are looking for
                    government support. This helps us provide more
                    relevant results.

                  </p>

                </div>

              </div>

            )}



            {/* =================================================
                NAVIGATION BUTTONS
            ================================================== */}

            <div
              className="
                mt-8
                flex
                flex-col-reverse
                gap-3
                border-t
                border-slate-100
                pt-6
                sm:flex-row
                sm:justify-between
              "
            >

              {/* Previous */}

              {step > 1 ? (

                <button
                  type="button"
                  onClick={previousStep}
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
                    text-xs
                    font-semibold
                    text-slate-500
                    transition
                    hover:border-slate-300
                    hover:bg-slate-50
                  "
                >

                  <FaArrowLeft size={10} />

                  Back

                </button>

              ) : (

                <div />

              )}



              {/* Next */}

              <button
                type="button"
                onClick={nextStep}
                disabled={
                  (step === 1 &&
                    (!formData.age ||
                      !formData.gender ||
                      !formData.state)) ||
                  (step === 2 &&
                    !formData.occupation) ||
                  (step === 3 &&
                    !formData.income) ||
                  (step === 4 &&
                    formData.needs.length === 0)
                }
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-green-600
                  px-6
                  py-3
                  text-xs
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-green-700
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >

                {step === totalSteps
                  ? "Find My Schemes"
                  : "Continue"}

                <FaArrowRight size={10} />

              </button>

            </div>

          </div>



          {/* =================================================
              PRIVACY NOTE
          ================================================== */}

          <p
            className="
              mt-5
              text-center
              text-[10px]
              leading-4
              text-slate-400
            "
          >
            Your information is used only to identify potentially
            relevant government schemes.
          </p>

        </div>

      </section>



      {/* =================================================
          SUMMARY / RESULT PREVIEW
      ================================================== */}

      {step === totalSteps && (

        <section className="border-t border-slate-100 bg-white">

          <div
            className="
              mx-auto
              max-w-3xl
              px-5
              py-10
              sm:px-8
              sm:py-14
            "
          >

            <div
              className="
                rounded-2xl
                border
                border-green-100
                bg-green-50/50
                p-6
                sm:p-8
              "
            >

              {/* Icon */}

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-green-100
                  text-green-600
                "
              >

                <FaCheck size={18} />

              </div>


              <h2
                className="
                  mt-4
                  text-center
                  text-lg
                  font-bold
                  text-slate-800
                  sm:text-xl
                "
              >
                Your profile is ready!
              </h2>


              <p
                className="
                  mx-auto
                  mt-2
                  max-w-lg
                  text-center
                  text-xs
                  leading-5
                  text-slate-400
                "
              >
                We can now use your information to find government
                schemes that may match your profile.
              </p>


              {/* Profile */}

              <div
                className="
                  mt-6
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >

                <div
                  className="
                    rounded-lg
                    border
                    border-green-100
                    bg-white
                    p-3
                  "
                >

                  <p className="text-[9px] text-slate-400">
                    Age
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    {formData.age} years
                  </p>

                </div>


                <div
                  className="
                    rounded-lg
                    border
                    border-green-100
                    bg-white
                    p-3
                  "
                >

                  <p className="text-[9px] text-slate-400">
                    State
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    {formData.state}
                  </p>

                </div>


                <div
                  className="
                    rounded-lg
                    border
                    border-green-100
                    bg-white
                    p-3
                  "
                >

                  <p className="text-[9px] text-slate-400">
                    Occupation
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    {formData.occupation}
                  </p>

                </div>


                <div
                  className="
                    rounded-lg
                    border
                    border-green-100
                    bg-white
                    p-3
                  "
                >

                  <p className="text-[9px] text-slate-400">
                    Annual Income
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    {formData.income}
                  </p>

                </div>

              </div>


              {/* Selected needs */}

              <div className="mt-4">

                <p className="text-[9px] text-slate-400">
                  Looking for support in
                </p>

                <div className="mt-2 flex flex-wrap gap-2">

                  {formData.needs.map((need) => (

                    <span
                      key={need}
                      className="
                        rounded-full
                        bg-white
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-green-600
                        shadow-sm
                      "
                    >
                      {need}
                    </span>

                  ))}

                </div>

              </div>


              {/* Find schemes */}

              <button
                type="button"
                onClick={() => {
                  // Later this will call your backend
                  console.log("User profile:", formData);
                }}
                className="
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-center
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
                "
              >

                Find Government Schemes

                <FaArrowRight size={10} />

              </button>


              {/* Start again */}

              <button
                type="button"
                onClick={resetForm}
                className="
                  mx-auto
                  mt-4
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-medium
                  text-slate-400
                  transition
                  hover:text-green-600
                "
              >

                <FaRotateRight size={9} />

                Start again

              </button>

            </div>

          </div>

        </section>

      )}

    </main>

  );

}
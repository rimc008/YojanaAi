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
  FaHandHoldingDollar,
  FaPersonCane,
  FaShieldHalved,
  FaUtensils,
  FaChild,
  FaWheelchair,
  FaBolt,
  FaFaucetDrip,
  FaBus,
  FaLaptop,
} from "react-icons/fa6";

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

export default function EligibilityPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    state: "",
    income: "",
    needs: [],
  });

  const [loading, setLoading] = useState(false);
  const [a, setA] = useState([]);
  const [error, setError] = useState("");

  const totalSteps = 4;

  // =========================================================
  // UPDATE FIELD
  // =========================================================

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  // =========================================================
  // TOGGLE NEED
  // =========================================================

  const toggleNeed = (need) => {
    setFormData((previous) => {
      const alreadySelected = previous.needs.includes(need);

      if (alreadySelected) {
        return {
          ...previous,
          needs: previous.needs.filter((item) => item !== need),
        };
      }

      return {
        ...previous,
        needs: [...previous.needs, need],
      };
    });

    setError("");
  };

  // =========================================================
  // NEXT STEP
  // =========================================================

  const nextStep = () => {
    if (step === 1) {
      if (!formData.age || !formData.gender) {
        setError("Please fill in all the fields.");
        return;
      }
    }

    if (step === 2) {
      if (!formData.state) {
        setError("Please select your state.");
        return;
      }
    }

    if (step === 3) {
      if (!formData.income) {
        setError("Please enter your annual income.");
        return;
      }
    }

    setError("");

    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  // =========================================================
  // PREVIOUS STEP
  // =========================================================

  const previousStep = () => {
    setError("");

    if (step > 1) {
      setStep(step - 1);
    }
  };

  // =========================================================
  // RESET
  // =========================================================

  const resetForm = () => {
    setFormData({
      age: "",
      gender: "",
      state: "",
      income: "",
      needs: [],
    });

    setA([]);
    setError("");
    setStep(1);
  };

  // =========================================================
  // ELIGIBILITY API
  // =========================================================

  const eligibility_api = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      // Create FormData manually from React state
      const formdata = new FormData();

      formdata.append("age", formData.age);
      formdata.append("gender", formData.gender);
      formdata.append("state", formData.state);
      formdata.append("income", formData.income);

      // Multiple needs
      formData.needs.forEach((need) => {
        formdata.append("needs", need);
      });

      // Check what is being sent
      console.log("Age:", formdata.get("age"));
      console.log("Gender:", formdata.get("gender"));
      console.log("State:", formdata.get("state"));
      console.log("Income:", formdata.get("income"));
      console.log("Needs:", formdata.getAll("needs"));

      const response = await fetch(
        "http://localhost:3000/api/eligibility_search",
        {
          method: "POST",
          body: formdata,
        }
      );

      const data = await response.json();

      console.log("API RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (data.success) {
        setA(data.message);
      } else {
        setA([]);
        setError(data.message || "No schemes found");
      }
    } catch (error) {
      console.log(error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // NEEDS
  // =========================================================
const needs = [
  {
    name: "Agriculture",
    icon: <FaSeedling />,
  },
  {
    name: "Education",
    icon: <FaGraduationCap />,
  },
  {
    name: "Employment",
    icon: <FaBriefcase />,
  },
  {
    name: "Health",
    icon: <FaHeartPulse />,
  },
  {
    name: "Housing",
    icon: <FaHouse />,
  },
  {
    name: "Business",
    icon: <FaBuilding />,
  },
  {
    name: "Financial Help",
    icon: <FaHandHoldingDollar />,
  },
  {
    name: "Pension",
    icon: <FaPersonCane />,
  },
  {
    name: "Insurance",
    icon: <FaShieldHalved />,
  },
  {
    name: "Food & Nutrition",
    icon: <FaUtensils />,
  },
  {
    name: "Skill Development",
    icon: <FaGraduationCap />,
  },
  {
    name: "Women & Child",
    icon: <FaChild />,
  },
  {
    name: "Disability Support",
    icon: <FaWheelchair />,
  },
  {
    name: "Senior Citizens",
    icon: <FaPersonCane />,
  },
  {
    name: "Energy",
    icon: <FaBolt />,
  },
  {
    name: "Water & Sanitation",
    icon: <FaFaucetDrip />,
  },
  {
    name: "Transport",
    icon: <FaBus />,
  },
  {
    name: "Digital Services",
    icon: <FaLaptop />,
  },
];

  // =========================================================
  // STEP TITLE
  // =========================================================

  const getStepTitle = () => {
    if (step === 1) return "About You";
    if (step === 2) return "Your Location";
    if (step === 3) return "Income";
    if (step === 4) return "Your Needs";
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-8 text-center">
          <div className="mb-3 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
              <FaMagnifyingGlass size={22} />
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find Government Schemes
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Tell us a little about yourself and find schemes
            that may match your situation.
          </p>
        </div>

        {/* =====================================================
            INTERACTIVE PROGRESS BAR
        ====================================================== */}

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          {/* STEP INFO */}

          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
                Step {step} of {totalSteps}
              </p>

              <h3 className="mt-1 text-base font-bold text-slate-900">
                {getStepTitle()}
              </h3>
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              {Math.round((step / totalSteps) * 100)}% Complete
            </span>
          </div>

          {/* PROGRESS */}

          <div className="relative">

            {/* BACKGROUND LINE */}

            <div className="absolute left-0 right-0 top-5 h-1 rounded-full bg-slate-100" />

            {/* ACTIVE LINE */}

            <div
              className="absolute left-0 top-5 h-1 rounded-full bg-green-500 transition-all duration-500 ease-out"
              style={{
                width: `${((step - 1) / (totalSteps - 1)) * 100}%`,
              }}
            />

            {/* STEPS */}

            <div className="relative flex justify-between">

              {/* STEP 1 */}

              <button
                type="button"
                onClick={() => {
                  setError("");
                  setStep(1);
                }}
                className="group flex flex-col items-center"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-sm transition-all duration-300 ${
                    step >= 1
                      ? "scale-105 bg-green-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > 1 ? <FaCheck size={12} /> : "1"}
                </div>

                <span
                  className={`mt-2 text-xs font-semibold ${
                    step >= 1
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  About You
                </span>
              </button>

              {/* STEP 2 */}

              <button
                type="button"
                onClick={() => {
                  if (step >= 2) {
                    setError("");
                    setStep(2);
                  }
                }}
                disabled={step < 2}
                className="group flex flex-col items-center"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-sm transition-all duration-300 ${
                    step >= 2
                      ? "scale-105 bg-green-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > 2 ? <FaCheck size={12} /> : "2"}
                </div>

                <span
                  className={`mt-2 text-xs font-semibold ${
                    step >= 2
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  Location
                </span>
              </button>

              {/* STEP 3 */}

              <button
                type="button"
                onClick={() => {
                  if (step >= 3) {
                    setError("");
                    setStep(3);
                  }
                }}
                disabled={step < 3}
                className="group flex flex-col items-center"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-sm transition-all duration-300 ${
                    step >= 3
                      ? "scale-105 bg-green-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > 3 ? <FaCheck size={12} /> : "3"}
                </div>

                <span
                  className={`mt-2 text-xs font-semibold ${
                    step >= 3
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  Income
                </span>
              </button>

              {/* STEP 4 */}

              <button
                type="button"
                onClick={() => {
                  if (step >= 4) {
                    setError("");
                    setStep(4);
                  }
                }}
                disabled={step < 4}
                className="group flex flex-col items-center"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-sm transition-all duration-300 ${
                    step >= 4
                      ? "scale-105 bg-green-500 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step === 4 ? <FaCheck size={12} /> : "4"}
                </div>

                <span
                  className={`mt-2 text-xs font-semibold ${
                    step >= 4
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  Your Needs
                </span>
              </button>

            </div>
          </div>
        </div>

        {/* =====================================================
            FORM
        ====================================================== */}

        <form
          onSubmit={eligibility_api}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
        >

          {/* ===================================================
              STEP 1 — ABOUT YOU
          ==================================================== */}

          {step === 1 && (
            <section>
              <div className="mb-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FaUser />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Tell us about yourself
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Start with your age and gender.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">

                {/* AGE */}

                <div>
                  <label
                    htmlFor="age"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Age
                  </label>

                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="1"
                    value={formData.age}
                    onChange={(e) =>
                      updateField("age", e.target.value)
                    }
                    placeholder="Enter your age"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* GENDER */}

                <div>
                  <label
                    htmlFor="gender"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Gender
                  </label>

                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) =>
                      updateField("gender", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>
            </section>
          )}

          {/* ===================================================
              STEP 2 — LOCATION
          ==================================================== */}

          {step === 2 && (
            <section>
              <div className="mb-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FaLocationDot />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Where do you live?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Some government schemes are state-specific.
                </p>
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  State
                </label>

                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={(e) =>
                    updateField("state", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                >
                  <option value="">Select your state</option>
                  {states.map((item)=>(
                    <option value={`${item}`}>{item}</option>
                  ))}
                </select>
              </div>
            </section>
          )}

          {/* ===================================================
              STEP 3 — INCOME
          ==================================================== */}

          {step === 3 && (
            <section>
              <div className="mb-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FaIndianRupeeSign />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  What is your annual income?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Income limits can be used to identify relevant
                  schemes.
                </p>
              </div>

              <div>
                <label
                  htmlFor="income"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Annual income
                </label>

                <div className="relative">
                  <FaIndianRupeeSign
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={14}
                  />

                  <input
                    id="income"
                    name="income"
                    type="number"
                    min="0"
                    value={formData.income}
                    onChange={(e) =>
                      updateField("income", e.target.value)
                    }
                    placeholder="Enter annual income"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                  />
                </div>
              </div>
            </section>
          )}

          {/* ===================================================
              STEP 4 — NEEDS
          ==================================================== */}

          {step === 4 && (
            <section>
              <div className="mb-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FaMagnifyingGlass />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  What do you need help with?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select one or more areas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                {needs.map((need) => {
                  const selected = formData.needs.includes(
                    need.name
                  );

                  return (
                    <button
                      key={need.name}
                      type="button"
                      onClick={() => toggleNeed(need.name)}
                      className={`relative flex min-h-28 flex-col items-center justify-center rounded-2xl border p-4 transition ${
                        selected
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:bg-green-50/50"
                      }`}
                    >
                      {selected && (
                        <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                          <FaCheck size={9} />
                        </div>
                      )}

                      <div className="mb-3 text-xl">
                        {need.icon}
                      </div>

                      <span className="text-sm font-semibold">
                        {need.name}
                      </span>
                    </button>
                  );
                })}

              </div>

              {formData.needs.length > 0 && (
                <p className="mt-5 text-sm text-slate-500">
                  Selected:{" "}
                  <span className="font-semibold text-green-600">
                    {formData.needs.join(", ")}
                  </span>
                </p>
              )}
            </section>
          )}

          {/* ===================================================
              ERROR MESSAGE
          ==================================================== */}

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm font-medium text-red-600">
                {error}
              </p>
            </div>
          )}

          {/* ===================================================
              NAVIGATION
          ==================================================== */}

          <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={previousStep}
              disabled={step === 1}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                step === 1
                  ? "cursor-not-allowed text-slate-300"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <FaArrowLeft size={11} />
              Previous
            </button>

            {/* NEXT / SUBMIT */}

            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                Next
                <FaArrowRight size={11} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Finding..."
                  : "Find Government Schemes"}

                {!loading && <FaArrowRight size={11} />}
              </button>
            )}

          </div>
        </form>

        {/* =====================================================
            a
        ====================================================== */}

        {a.length > 0 && (
          <section className="mt-8">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Matching Schemes
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {a.length} scheme
                  {a.length !== 1 ? "s" : ""} found
                </p>
              </div>

              
              <button
                type="button"
                onClick={resetForm}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <FaRotateRight size={12} />
                Start Again
              </button>
            </div>

            {/* A CARDS */}

            <div className="grid md:grid-cols-2 gap-6">

              {a.map((scheme, index) => (
                <div
                  key={scheme._id || scheme.slug || index}
                  className="rounded-2xl border border-slate-200 flex flex-col justify-evenly bg-white p-6 shadow-sm transition shadow-md hover:shadow-lg hover:border-black hover:-translate-y-0.5 hover:bg-green-300 w-full min-w-0 max-w-full overflow-hidden"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {scheme.name}
                      </h3>

                      {scheme.department && (
                        <p className="mt-2 text-sm font-medium text-green-600">
                          {scheme.department}
                        </p>
                      )}
                    </div>

                    {scheme.category && (
                      <span className="w-fit rounded-lg bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                        {scheme.category}
                      </span>
                    )}

                  </div>

                  {scheme.description && (
                    <p className="mt-4 text-sm leading-6 text-black">
                      {scheme.description}
                    </p>
                  )}

                  {scheme.benefits && (
                    <div className="mt-5">
                      <h4 className="mb-1 text-sm font-semibold text-black">
                        Benefits
                      </h4>

                      <p className="text-sm leading-6 text-black">
                        {scheme.benefits}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">

                    {scheme.state && (
                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                        {scheme.state}
                      </span>
                    )}

                    {scheme.eligibility_gender && (
                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                        Gender: {scheme.eligibility_gender}
                      </span>
                    )}

                  </div>

                  {scheme.slug && (
                    <div className="mt-5">
                      <a
                        href={`/details/${scheme.slug}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                      >
                        View Scheme
                        <FaArrowRight size={10} />
                      </a>
                    </div>
                  )}

                </div>
              ))}

            </div>
          </section>
        )}

      </div>
    </main>
  );
}
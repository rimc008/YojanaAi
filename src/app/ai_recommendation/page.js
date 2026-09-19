"use client";

import { useState } from "react";
import {
    FaWandSparkles,
    FaArrowUp,
    FaGraduationCap,
    FaSeedling,
    FaHouse,
    FaBriefcase,
    FaCircleCheck,
} from "react-icons/fa6";

export default function AIRecommendation() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const examples = [
        {
            icon: <FaGraduationCap />,
            title: "Education",
            text: "I'm a student and need financial help for my education",
        },
        {
            icon: <FaSeedling />,
            title: "Agriculture",
            text: "I'm a farmer looking for support for my farming needs",
        },
        {
            icon: <FaHouse />,
            title: "Housing",
            text: "My family needs help with building or getting a house",
        },
        {
            icon: <FaBriefcase />,
            title: "Business",
            text: "I want to start a small business and need financial support",
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message.trim()) return;

        setLoading(true);

        // Connect your AI API here
        console.log("AI query:", message);

        setTimeout(() => {
            setLoading(false);
        }, 1800);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f8faf9]">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0">

                <div
                    className="
                        absolute
                        left-1/2
                        top-[-180px]
                        h-[500px]
                        w-[700px]
                        -translate-x-1/2
                        rounded-full
                        bg-emerald-200/30
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[-200px]
                        left-[-150px]
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-green-100/40
                        blur-[100px]
                    "
                />

            </div>


            {/* =====================================================
                CONTENT
            ====================================================== */}

            <section className="relative px-4 pb-20 pt-14 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-6xl">


                    {/* =================================================
                        HEADER
                    ================================================== */}

                    <div className="mx-auto max-w-3xl text-center">

                        {/* AI BADGE */}

                        <div
                            className="
                                mx-auto
                                mb-6
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-emerald-200
                                bg-white/80
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-emerald-700
                                shadow-sm
                                backdrop-blur
                            "
                        >
                        <FaWandSparkles className="text-emerald-500" />

                            <span>Powered by AI</span>

                        </div>


                        <h1
                            className="
                                text-4xl
                                font-bold
                                tracking-tight
                                text-slate-900
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Find schemes made
                            <br />

                            <span className="text-emerald-600">
                                for your situation.
                            </span>
                        </h1>


                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-2xl
                                text-base
                                leading-7
                                text-slate-600
                                sm:text-lg
                            "
                        >
                            Tell YojanaAI what you need in your own words.
                            Our AI will understand your situation and help
                            you discover relevant government schemes.
                        </p>

                    </div>


                    {/* =================================================
                        AI INPUT CARD
                    ================================================== */}

                    <div className="mx-auto mt-12 max-w-4xl">

                        <div
                            className="
                                rounded-[28px]
                                border
                                border-slate-200
                                bg-white
                                p-2
                                shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)]
                            "
                        >

                            <div
                                className="
                                    rounded-[22px]
                                    border
                                    border-slate-100
                                    bg-slate-50/80
                                    p-4
                                    sm:p-5
                                "
                            >

                                {/* TOP */}

                                <div className="mb-3 flex items-center gap-2 px-1">

                                    <div
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-emerald-100
                                            text-emerald-600
                                        "
                                    >
                                        <FaWandSparkles className="text-sm" />
                                    </div>

                                    <span
                                        className="
                                            text-sm
                                            font-semibold
                                            text-slate-700
                                        "
                                    >
                                        Ask YojanaAI
                                    </span>

                                </div>


                                {/* TEXTAREA */}

                                <form onSubmit={handleSubmit}>

                                    <div className="relative">

                                        <textarea
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            placeholder="Tell me about yourself and what kind of help you need..."
                                            rows={6}
                                            className="
                                                w-full
                                                resize-none
                                                border-0
                                                bg-transparent
                                                px-1
                                                py-2
                                                text-base
                                                leading-7
                                                text-slate-800
                                                outline-none
                                                placeholder:text-slate-400
                                            "
                                        />


                                        {/* SEND BUTTON */}

                                        <div className="flex items-center justify-between pt-3">

                                            <span
                                                className="
                                                    hidden
                                                    text-xs
                                                    text-slate-400
                                                    sm:block
                                                "
                                            >
                                                Describe your situation naturally
                                            </span>


                                            <button
                                                type="submit"
                                                disabled={
                                                    !message.trim() || loading
                                                }
                                                className="
                                                    ml-auto
                                                    flex
                                                    h-11
                                                    w-11
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    bg-emerald-600
                                                    text-white
                                                    shadow-sm
                                                    transition
                                                    hover:bg-emerald-700
                                                    hover:shadow-md
                                                    disabled:cursor-not-allowed
                                                    disabled:bg-slate-200
                                                    disabled:text-slate-400
                                                "
                                            >

                                                {loading ? (
                                                    <span
                                                        className="
                                                            h-4
                                                            w-4
                                                            animate-spin
                                                            rounded-full
                                                            border-2
                                                            border-slate-400
                                                            border-t-transparent
                                                        "
                                                    />
                                                ) : (
                                                    <FaArrowUp />
                                                )}

                                            </button>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>


                        {/* TRUST */}

                        <div
                            className="
                                mt-4
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-xs
                                text-slate-400
                            "
                        >
                            <FaCircleCheck className="text-emerald-500" />

                            AI recommendations are informational.
                            Always verify eligibility before applying.

                        </div>

                    </div>


                    {/* =================================================
                        EXAMPLES
                    ================================================== */}

                    <div className="mx-auto mt-16 max-w-5xl">

                        <div className="mb-6">

                            <p
                                className="
                                    text-center
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Not sure where to start?
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-center
                                    text-sm
                                    text-slate-400
                                "
                            >
                                Try one of these
                            </p>

                        </div>


                        <div
                            className="
                                grid
                                gap-4
                                sm:grid-cols-2
                                lg:grid-cols-4
                            "
                        >

                            {examples.map((example, index) => (

                                <button
                                    key={index}
                                    type="button"
                                    onClick={() =>
                                        setMessage(example.text)
                                    }
                                    className="
                                        group
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-5
                                        text-left
                                        shadow-sm
                                        transition
                                        duration-200
                                        hover:-translate-y-1
                                        hover:border-emerald-200
                                        hover:shadow-lg
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-emerald-50
                                            text-emerald-600
                                            transition
                                            group-hover:bg-emerald-100
                                        "
                                    >
                                        {example.icon}
                                    </div>


                                    <h3
                                        className="
                                            mt-4
                                            text-sm
                                            font-semibold
                                            text-slate-800
                                        "
                                    >
                                        {example.title}
                                    </h3>


                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-6
                                            text-slate-500
                                        "
                                    >
                                        {example.text}
                                    </p>

                                </button>

                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        BOTTOM FEATURE
                    ================================================== */}

                    <div
                        className="
                            mx-auto
                            mt-16
                            max-w-4xl
                            rounded-3xl
                            border
                            border-emerald-100
                            bg-emerald-50/60
                            p-6
                            sm:p-8
                        "
                    >

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-white
                                    text-emerald-600
                                    shadow-sm
                                "
                            >
                                <FaWandSparkles className="text-xl" />
                            </div>


                            <div>

                                <h2
                                    className="
                                        text-base
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    You don't need to know the scheme name.
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        leading-6
                                        text-slate-600
                                    "
                                >
                                    Just explain what you are going through.
                                    YojanaAI is designed to help connect your
                                    situation with relevant government support.
                                </p>

                            </div>

                        </div>

                    </div>


                </div>

            </section>

        </main>
    );
}
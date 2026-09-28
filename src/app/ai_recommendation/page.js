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
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import ReactMarkdown from "react-markdown";

import Link from "next/link";

export default function AIRecommendation() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chat_history, setChat_history] = useState([]);

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

    const ai_api = async (userMessage, currentChatHistory) => {
        if (!userMessage.trim()) return;

        setLoading(true);

        // Add user message immediately
        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ]);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/ai",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        question: userMessage,
                        chat_history: currentChatHistory,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "ai",
                        content: data.answer,
                        schemes: data.schemes,
                    },
                ]);

                setChat_history(data.chat_history);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f8faf9]">

            {/* ================= BACKGROUND ================= */}

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


            {/* ================= CONTENT ================= */}

            <section className="relative px-4 pb-20 pt-14 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-6xl">


                    {/* ================= HEADER ================= */}

                    <div className="mx-auto max-w-3xl text-center">

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


                    {/* ================= CHAT CARD ================= */}

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


                                {/* ================= CHAT HEADER ================= */}

                                <div className="mb-6 flex items-center gap-2 px-1">

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


                                {/* ================= MESSAGES ================= */}

                                <div className="flex flex-col gap-7 pb-8">

                                    {messages.map((msg, index) => (

                                        <div
                                            key={index}
                                            className={`
                                                flex
                                                w-full
                                                ${
                                                    msg.role === "user"
                                                        ? "justify-end"
                                                        : "justify-start"
                                                }
                                            `}
                                        >

                                            {msg.role === "user" ? (

                                                /* ================= USER MESSAGE ================= */

                                                <div
                                                    className="
                                                        max-w-[80%]
                                                        rounded-2xl
                                                        border
                                                        border-emerald-400
                                                        bg-white
                                                        px-5
                                                        py-4
                                                        text-sm
                                                        leading-7
                                                        text-slate-800
                                                        shadow-[0_0_18px_rgba(16,185,129,0.18)]
                                                        sm:max-w-[70%]
                                                    "
                                                >
                                                    {msg.content}
                                                </div>

                                            ) : (

                                                /* ================= AI MESSAGE ================= */

                                                <div
                                                    className="
                                                        w-full
                                                        max-w-[90%]
                                                        rounded-2xl
                                                        border
                                                        border-slate-100
                                                        bg-white
                                                        px-5
                                                        py-5
                                                        text-sm
                                                        leading-7
                                                        text-slate-700
                                                        shadow-sm
                                                    "
                                                >

                                                    {/* AI ANSWER */}

                                                    <div className="prose prose-sm max-w-none">
                                                        <ReactMarkdown>
                                                            {msg.content}
                                                        </ReactMarkdown>
                                                    </div>


                                                    {/* ================= SCHEMES ================= */}

                                                    {msg.schemes &&
                                                        msg.schemes.length > 0 && (

                                                            <div className="mt-6">

                                                                <div
                                                                    className="
                                                                        mb-3
                                                                        text-sm
                                                                        font-semibold
                                                                        text-slate-800
                                                                    "
                                                                >
                                                                    Relevant schemes
                                                                </div>


                                                                <div className="flex flex-col gap-3">

                                                                    {msg.schemes.map(
                                                                        (scheme, schemeIndex) => (

                                                                            <Link href={`/details/${scheme.slug}`}
                                                                                key={schemeIndex}
                                                                                className="
                                                                                    rounded-xl
                                                                                    border
                                                                                    border-green-100
                                                                                    bg-green-50/40
                                                                                    p-4
                                                                                    transition
                                                                                    hover:border-green-200
                                                                                    hover:bg-green-200
                                                                                "
                                                                            >

                                                                                <div
                                                                                    className="
                                                                                        flex
                                                                                        items-start
                                                                                        justify-between
                                                                                        gap-4
                                                                                    "
                                                                                >

                                                                                    <div className="min-w-0">

                                                                                        <h3
                                                                                            className="
                                                                                                text-sm
                                                                                                font-semibold
                                                                                                text-slate-900
                                                                                            "
                                                                                        >
                                                                                            {scheme.name}
                                                                                        </h3>


                                                                                        {scheme.description && (

                                                                                            <p
                                                                                                className="
                                                                                                    mt-1
                                                                                                    text-sm
                                                                                                    leading-6
                                                                                                    text-slate-600
                                                                                                "
                                                                                            >
                                                                                                {scheme.description}
                                                                                            </p>

                                                                                        )}

                                                                                    </div>


                                                                                    {scheme.apply_url && (

                                                                                        <a
                                                                                            href={scheme.apply_url}
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            className="
                                                                                                flex
                                                                                                shrink-0
                                                                                                items-center
                                                                                                gap-2
                                                                                                rounded-lg
                                                                                                bg-emerald-600
                                                                                                px-3
                                                                                                py-2
                                                                                                text-xs
                                                                                                font-medium
                                                                                                text-white
                                                                                                transition
                                                                                                hover:bg-emerald-700
                                                                                            "
                                                                                        >
                                                                                            Apply

                                                                                            <FaArrowUpRightFromSquare
                                                                                                className="
                                                                                                    text-[10px]
                                                                                                "
                                                                                            />
                                                                                        </a>

                                                                                    )}

                                                                                </div>


                                                                                {/* Scheme metadata */}

                                                                                <div
                                                                                    className="
                                                                                        mt-3
                                                                                        flex
                                                                                        flex-wrap
                                                                                        gap-2
                                                                                    "
                                                                                >

                                                                                    {scheme.state && (

                                                                                        <span
                                                                                            className="
                                                                                                rounded-full
                                                                                                bg-white
                                                                                                px-2.5
                                                                                                py-1
                                                                                                text-xs
                                                                                                text-slate-500
                                                                                            "
                                                                                        >
                                                                                            {scheme.state}
                                                                                        </span>

                                                                                    )}


                                                                                    {scheme.category && (

                                                                                        <span
                                                                                            className="
                                                                                                rounded-full
                                                                                                bg-white
                                                                                                px-2.5
                                                                                                py-1
                                                                                                text-xs
                                                                                                text-slate-500
                                                                                            "
                                                                                        >
                                                                                            {scheme.category}
                                                                                        </span>

                                                                                    )}

                                                                                </div>

                                                                            </Link>

                                                                        )
                                                                    )}

                                                                </div>

                                                            </div>

                                                        )}

                                                </div>

                                            )}

                                        </div>

                                    ))}


                                    {/* ================= THINKING ================= */}

                                    {loading && (

                                        <div className="flex w-full justify-start">

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                    rounded-2xl
                                                    border
                                                    border-slate-100
                                                    bg-white
                                                    px-5
                                                    py-4
                                                    shadow-sm
                                                "
                                            >

                                                <div
                                                    className="
                                                        relative
                                                        flex
                                                        h-4
                                                        w-4
                                                        items-center
                                                        justify-center
                                                    "
                                                >

                                                    <span
                                                        className="
                                                            absolute
                                                            h-4
                                                            w-4
                                                            animate-ping
                                                            rounded-full
                                                            bg-black
                                                            opacity-30
                                                        "
                                                    />

                                                    <span
                                                        className="
                                                            relative
                                                            h-2.5
                                                            w-2.5
                                                            rounded-full
                                                            bg-black
                                                        "
                                                    />

                                                </div>

                                                <span className="text-sm text-slate-500">
                                                    YojanaAI is thinking...
                                                </span>

                                            </div>

                                        </div>

                                    )}

                                </div>


                                {/* ================= COMPOSER ================= */}

                                <div
                                    className="
                                        rounded-[24px]
                                        border
                                        border-emerald-300
                                        bg-white
                                        p-4
                                        shadow-[0_0_25px_rgba(16,185,129,0.12)]
                                        transition
                                        focus-within:border-emerald-400
                                        focus-within:shadow-[0_0_30px_rgba(16,185,129,0.22)]
                                        sm:p-5
                                    "
                                >

                                    <textarea
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        placeholder="what kind of help you need..."
                                        rows={4}
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
                                            onClick={() => {

                                                const currentMessage = message;

                                                setMessage("");

                                                ai_api(
                                                    currentMessage,
                                                    chat_history
                                                );

                                            }}
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
                                                duration-200
                                                hover:bg-emerald-700
                                                hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]
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
                                                        border-white/40
                                                        border-t-white
                                                    "
                                                />

                                            ) : (

                                                <FaArrowUp />

                                            )}

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================= TRUST ================= */}

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


                    {/* ================= EXAMPLES ================= */}

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


                    {/* ================= BOTTOM FEATURE ================= */}

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
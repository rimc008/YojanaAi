"use client";

import { useEffect, useState } from "react";
import {
    FaArrowLeft,
    FaArrowUpRightFromSquare,
    FaBuilding,
    FaCalendarDays,
    FaCheck,
    FaChevronRight,
    FaCircleCheck,
    FaClock,
    FaFileLines,
    FaGlobe,
    FaIndianRupeeSign,
    FaInfo,
    FaLocationDot,
    FaShieldHalved,
    FaWandSparkles,
    FaUsers,
} from "react-icons/fa6";
import { useParams } from "next/navigation";


export default function SchemeDetails() {

    const { slug } = useParams();

    const [schemedetails, setSchemedetails] = useState([]);

    function parseBenefits(text) {

    if (!text) return [];

    return text
        .replace(/<br>/g, "")
        .split(/>\s*\*\*/)
        .filter(Boolean)
        .map(section => {

            section = section
                .replace(/^>\s*/, "")
                .trim();

            const titleMatch = section.match(
                /^\*\*(.*?)\*\*:/
            );

            const title = titleMatch
                ? titleMatch[1]
                : "";

            const content = section
                .replace(/^\*\*.*?\*\*:\s*/, "")
                .trim();

            const items = content
                .split(/-\s+\*\*/)
                .filter(Boolean)
                .map(item =>
                    item
                        .replace(/\*\*/g, "")
                        .trim()
                );

            return {
                title,
                items
            };

        });

}
    useEffect(() => {

        const deatils_function = async () => {

            try {

                const as = await fetch(
                    `http://localhost:3000/api/details_scheme/${slug}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );

                const data2 = await as.json();

                if (data2.success) {

                    setSchemedetails(data2.message);

                }
                else {

                    console.log(data2.message);

                }

            }
            catch (error) {

                console.log(error.message);

            }

        };


        if (slug) {
            deatils_function();
        }

    }, [slug]);


    return (

        <main className="min-h-screen bg-[#f6f8f7] text-slate-900">


            {/* =====================================================
                TOP NAV
            ====================================================== */}

            <div className="border-b border-slate-200 bg-white">

                <div className="
                    mx-auto 
                    flex 
                    max-w-7xl 
                    items-center 
                    justify-between 
                    px-5 
                    py-4 
                    lg:px-8
                ">

                    <button
                        className="
                            flex 
                            items-center 
                            gap-2 
                            text-sm 
                            font-medium 
                            text-slate-600 
                            transition 
                            hover:text-green-700
                        "
                    >

                        <FaArrowLeft className="text-xs" />

                        Back to schemes

                    </button>


                    <div
                        className="
                            hidden 
                            items-center 
                            gap-2 
                            text-xs 
                            text-slate-500 
                            sm:flex
                        "
                    >

                        <span>
                            Government Schemes
                        </span>

                        <FaChevronRight className="text-[9px]" />

                        <span className="text-slate-900">
                            Scheme Details
                        </span>

                    </div>

                </div>

            </div>


            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-white">

                <div
                    className="
                        pointer-events-none 
                        absolute 
                        -right-24 
                        -top-32 
                        h-96 
                        w-96 
                        rounded-full 
                        bg-green-100/60 
                        blur-3xl
                    "
                />

                <div
                    className="
                        pointer-events-none 
                        absolute 
                        -left-32 
                        bottom-0 
                        h-72 
                        w-72 
                        rounded-full 
                        bg-emerald-50 
                        blur-3xl
                    "
                />


                <div
                    className="
                        relative 
                        mx-auto 
                        max-w-7xl 
                        px-5 
                        pb-10 
                        pt-8 
                        lg:px-8 
                        lg:pb-14 
                        lg:pt-12
                    "
                >

                    <div className="max-w-4xl">


                        {/* Tags */}

                        <div className="mb-5 flex flex-wrap gap-2">

                            <span
                                className="
                                    inline-flex 
                                    items-center 
                                    gap-1.5 
                                    rounded-full 
                                    border 
                                    border-green-200 
                                    bg-green-50 
                                    px-3 
                                    py-1.5 
                                    text-xs 
                                    font-semibold 
                                    text-green-700
                                "
                            >

                                <FaWandSparkles className="text-[11px]" />

                                {
                                    schemedetails.length !== 0
                                        ? schemedetails[0].category
                                        : ""
                                }

                            </span>


                            <span
                                className="
                                    inline-flex 
                                    items-center 
                                    gap-1.5 
                                    rounded-full 
                                    border 
                                    border-green-200 
                                    bg-green-50 
                                    px-3 
                                    py-1.5 
                                    text-xs 
                                    font-semibold 
                                    text-green-700
                                "
                            >

                                <FaLocationDot className="text-[11px]" />

                                State :

                                {
                                    schemedetails.length !== 0
                                        ? schemedetails[0].state
                                        : ""
                                }

                            </span>

                        </div>


                        {/* Title */}

                        <h1
                            className="
                                max-w-4xl 
                                text-3xl 
                                font-bold 
                                leading-[1.15] 
                                tracking-tight 
                                text-slate-950 
                                sm:text-4xl 
                                lg:text-5xl
                            "
                        >

                            {
                                schemedetails.length !== 0
                                    ? schemedetails[0].name
                                    : ""
                            }

                            <span className="text-green-700">

                                {" "}:

                                {" "}

                                {
                                    schemedetails.length !== 0
                                        ? schemedetails[0].ministry
                                        : ""
                                }

                            </span>

                        </h1>


                        {/* Metadata */}

                        <div
                            className="
                                mt-7 
                                flex 
                                flex-wrap 
                                items-center 
                                gap-x-7 
                                gap-y-4 
                                text-sm
                            "
                        >

                            <div
                                className="
                                    flex 
                                    items-center 
                                    gap-2 
                                    text-black
                                "
                            >

                                <FaBuilding className="text-green-700" />

                                <span>

                                    <span className="text-black">
                                        Department :
                                    </span>

                                    <span className="font-semibold">

                                        {" "}

                                        {
                                            schemedetails.length !== 0
                                                ? schemedetails[0].department
                                                : ""
                                        }

                                    </span>

                                </span>

                            </div>


                            <div
                                className="
                                    hidden 
                                    h-4 
                                    w-px 
                                    bg-slate-300 
                                    sm:block
                                "
                            />


                            <div
                                className="
                                    flex 
                                    items-center 
                                    gap-2 
                                    text-black
                                "
                            >

                                <FaUsers className="text-green-700" />

                                <span>

                                    <span className="text-black">
                                        For :
                                    </span>

                                    {" "}

                                    <span className="font-semibold">

                                        {
                                            schemedetails.length !== 0
                                                ? schemedetails[0].beneficiary_type
                                                : ""
                                        }

                                    </span>

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div
                className="
                    mx-auto 
                    max-w-7xl 
                    px-5 
                    py-8 
                    lg:px-8 
                    lg:py-10
                "
            >

                <div
                    className="
                        grid 
                        grid-cols-1 
                        gap-7 
                        lg:grid-cols-[1fr_340px]
                    "
                >


                    {/* =================================================
                        LEFT CONTENT
                    ================================================== */}

                    <div className="space-y-7">


                        {/* =================================================
                            ABOUT
                        ================================================== */}

                        <section
                            className="
                                rounded-2xl 
                                border 
                                border-slate-200 
                                bg-white 
                                p-6 
                                shadow-sm 
                                lg:p-7
                            "
                        >

                            <SectionTitle
                                icon={<FaFileLines />}
                                title="About the scheme"
                            />


                            <p
                                className="
                                    mt-5 
                                    text-[15px] 
                                    leading-7 
                                    text-black
                                "
                            >

                                {
                                    schemedetails.length !== 0
                                        ? schemedetails[0].description
                                        : ""
                                }

                            </p>

                        </section>


                        {/* ================================================= 
    BENEFIT 
================================================== */}

<section 
    className="
        overflow-hidden
        rounded-2xl
        border
        border-green-200
        bg-white
        shadow-sm
    "
>

    <div 
        className="
            border-b
            border-green-100
            bg-gradient-to-r
            from-green-50
            to-white
            px-6
            py-5
        "
    >

        <h2 className="font-bold text-slate-900">
            Key Benefit
        </h2>

        <p className="mt-1 text-sm text-slate-600">
            Benefits and coverage provided under the scheme
        </p>

    </div>


    <div className="space-y-7 p-6">

        {
            schemedetails.length !== 0 &&

            parseBenefits(
                schemedetails[0].benefits
            ).map((section, index) => (

                <div key={index}>

                    {/* Heading */}

                    <div className="mb-3 flex items-center gap-3">

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
                            "
                        >

                            <FaCircleCheck />

                        </div>

                        <h3 className="
                            text-base
                            font-bold
                            text-slate-900
                        ">
                            {section.title}
                        </h3>

                    </div>


                    {/* Items */}

                    <div className="space-y-2">

                        {
                            section.items.map(
                                (item, itemIndex) => (

                                    <div
                                        key={itemIndex}
                                        className="
                                            flex
                                            gap-3
                                            rounded-xl
                                            border
                                            border-slate-100
                                            bg-slate-50
                                            px-4
                                            py-3
                                        "
                                    >

                                        <FaCheck
                                            className="
                                                mt-1
                                                shrink-0
                                                text-xs
                                                text-green-600
                                            "
                                        />

                                        <p className="
                                            text-sm
                                            leading-6
                                            text-slate-700
                                        ">
                                            {item}
                                        </p>

                                    </div>

                                )
                            )
                        }

                    </div>

                </div>

            ))

        }

    </div>

</section>


                        {/* =================================================
                            ELIGIBILITY
                        ================================================== */}

                        <section
                            className="
                                rounded-2xl 
                                border 
                                border-slate-200 
                                bg-white 
                                p-6 
                                shadow-sm 
                                lg:p-7
                            "
                        >

                            <SectionTitle
                                icon={<FaShieldHalved />}
                                title="Eligibility"
                                subtitle="Check the basic eligibility criteria"
                            />


                            <div
                                className="
                                    mt-6 
                                    grid 
                                    gap-3 
                                    sm:grid-cols-2
                                "
                            >

                                <EligibilityCard
                                    icon={<FaLocationDot />}
                                    label="State"
                                    value={
                                        schemedetails.length !== 0
                                            ? schemedetails[0].state
                                            : ""
                                    }
                                />


                                <EligibilityCard
                                    icon={<FaUsers />}
                                    label="Gender"
                                    value={
                                        schemedetails.length !== 0
                                            ? schemedetails[0].eligibility_gender
                                            : ""
                                    }
                                />


                                <EligibilityCard
                                    icon={<FaGlobe />}
                                    label="Residence"
                                    value={
                                        schemedetails.length !== 0
                                            ? schemedetails[0].eligibility_residence
                                            : ""
                                    }
                                />


                                <EligibilityCard
                                    icon={<FaShieldHalved />}
                                    label="Disability"
                                    value={
                                        schemedetails.length !== 0
                                            ? (
                                                schemedetails[0].eligibility_disability
                                                    ? schemedetails[0].eligibility_disability
                                                    : "Not specifically required"
                                            )
                                            : ""
                                    }
                                />


                                <EligibilityCard
                                    icon={<FaCircleCheck />}
                                    label="BPL"
                                    value={
                                        schemedetails.length !== 0
                                            ? (
                                                schemedetails[0].eligibility_bpl
                                                    ? "Specifically required"
                                                    : "Not required"
                                            )
                                            : ""
                                    }
                                />


                                <EligibilityCard
                                    icon={<FaUsers />}
                                    label="Caste"
                                    value={
                                        schemedetails.length !== 0
                                            ? (
                                                JSON.parse(
                                                    schemedetails[0].eligibility_caste
                                                ).length !== 0
                                                    ? JSON.parse(
                                                        schemedetails[0].eligibility_caste
                                                    ).join(", ")
                                                    : "All"
                                            )
                                            : ""
                                    }
                                />

                            </div>


                            {/* Note */}

                            <div
                                className="
                                    mt-5 
                                    flex 
                                    gap-3 
                                    rounded-xl 
                                    border 
                                    border-blue-100 
                                    bg-blue-50 
                                    p-4
                                "
                            >

                                <FaInfo
                                    className="
                                        mt-0.5 
                                        shrink-0 
                                        text-blue-600
                                    "
                                />

                                <p
                                    className="
                                        text-sm 
                                        leading-6 
                                        text-blue-800
                                    "
                                >

                                    Eligibility may depend on the specific
                                    project, unit type and conditions
                                    mentioned in the official scheme
                                    guidelines.

                                </p>

                            </div>

                        </section>


                        {/* =================================================
                            APPLICATION PROCESS
                        ================================================== */}

                        <section
                            className="
                                rounded-2xl 
                                border 
                                border-slate-200 
                                bg-white 
                                p-6 
                                shadow-sm 
                                lg:p-7
                            "
                        >

                            <SectionTitle
                                icon={<FaClock />}
                                title="Application process"
                                subtitle="Follow these steps to apply"
                            />


                            <div className="mt-7 space-y-10">

                                {
                                    parseApplicationProcess(
                                        schemedetails.length !== 0
                                            ? schemedetails[0].application_process
                                            : ""
                                    ).map((section, sectionIndex) => (

                                        <div key={sectionIndex}>


                                            {/* Process type */}

                                            <div className="mb-6 flex items-center gap-3">

                                                <div
                                                    className="
                                                        flex 
                                                        h-9 
                                                        w-9 
                                                        items-center 
                                                        justify-center 
                                                        rounded-full 
                                                        bg-green-100 
                                                        text-green-700
                                                    "
                                                >

                                                    <FaGlobe />

                                                </div>


                                                <div>

                                                    <h3
                                                        className="
                                                            text-lg 
                                                            font-bold 
                                                            text-slate-800
                                                        "
                                                    >
                                                        {section.title}
                                                    </h3>

                                                    <p className="text-sm text-slate-500">
                                                        Follow these steps
                                                    </p>

                                                </div>

                                            </div>


                                            {/* Steps */}

                                            <div className="relative space-y-6">


                                                {/* Timeline */}

                                                <div
                                                    className="
                                                        absolute 
                                                        bottom-6 
                                                        left-[17px] 
                                                        top-6 
                                                        w-px 
                                                        bg-green-100
                                                    "
                                                />


                                                {
                                                    section.steps.map(
                                                        (step, stepIndex) => (

                                                            <ProcessStep
                                                                key={stepIndex}
                                                                number={
                                                                    String(
                                                                        step.number
                                                                    ).padStart(
                                                                        2,
                                                                        "0"
                                                                    )
                                                                }
                                                                title={`Step ${step.number}`}
                                                                description={
                                                                    step.description
                                                                }
                                                            />

                                                        )
                                                    )
                                                }

                                            </div>

                                        </div>

                                    ))
                                }

                            </div>

                        </section>


                        {/* =================================================
                            DOCUMENTS
                        ================================================== */}

                        <section
                            className="
                                rounded-2xl 
                                border 
                                border-slate-200 
                                bg-white 
                                p-6 
                                shadow-sm 
                                lg:p-7
                            "
                        >

                            <SectionTitle
                                icon={<FaFileLines />}
                                title="Required documents"
                                subtitle="Documents may vary depending on the application"
                            />


                            <div
                                className="
                                    mt-6 
                                    grid 
                                    gap-3 
                                    sm:grid-cols-2
                                "
                            >

                                <DocumentItem
                                    text="Registration Certificate"
                                />

                                <DocumentItem
                                    text="Memorandum of Association"
                                />

                                <DocumentItem
                                    text="Articles of Association"
                                />

                                <DocumentItem
                                    text="Project-related documents"
                                />

                            </div>

                        </section>


                        {/* =================================================
                            IMPORTANT
                        ================================================== */}

                        <section
                            className="
                                rounded-2xl 
                                border 
                                border-amber-200 
                                bg-amber-50 
                                p-6
                            "
                        >

                            <div className="flex gap-4">

                                <div
                                    className="
                                        flex 
                                        h-10 
                                        w-10 
                                        shrink-0 
                                        items-center 
                                        justify-center 
                                        rounded-xl 
                                        bg-amber-100 
                                        text-amber-700
                                    "
                                >

                                    <FaInfo />

                                </div>


                                <div>

                                    <h3
                                        className="
                                            font-bold 
                                            text-amber-950
                                        "
                                    >
                                        Before you apply
                                    </h3>


                                    <p
                                        className="
                                            mt-1 
                                            text-sm 
                                            leading-6 
                                            text-amber-800
                                        "
                                    >

                                        Make sure you meet all conditions
                                        specified in the official notification.
                                        The information displayed here is for
                                        guidance and should be verified against
                                        the official scheme document.

                                    </p>

                                </div>

                            </div>

                        </section>

                    </div>


                    {/* =================================================
                        RIGHT SIDEBAR
                    ================================================== */}

                    <aside className="lg:relative">

                        <div
                            className="
                                space-y-5 
                                lg:sticky 
                                lg:top-6
                            "
                        >


                            {/* =================================================
                                APPLY CARD
                            ================================================== */}

                            <div
                                className="
                                    overflow-hidden 
                                    rounded-2xl 
                                    border 
                                    border-slate-200 
                                    bg-white 
                                    shadow-lg 
                                    shadow-slate-200/50
                                "
                            >

                                <div
                                    className="
                                        bg-gradient-to-br 
                                        from-green-700 
                                        to-emerald-600 
                                        p-6 
                                        text-white
                                    "
                                >

                                    <div
                                        className="
                                            mb-5 
                                            flex 
                                            h-11 
                                            w-11 
                                            items-center 
                                            justify-center 
                                            rounded-xl 
                                            bg-white/15
                                        "
                                    >

                                        <FaArrowUpRightFromSquare />

                                    </div>


                                    <h2 className="text-xl font-bold">
                                        Ready to apply?
                                    </h2>


                                    <p
                                        className="
                                            mt-2 
                                            text-sm 
                                            leading-6 
                                            text-green-50
                                        "
                                    >

                                        Apply through the official
                                        government portal.

                                    </p>

                                </div>


                                <div className="p-5">

                                    <button
                                        className="
                                            flex 
                                            w-full 
                                            items-center 
                                            justify-center 
                                            gap-2 
                                            rounded-xl 
                                            bg-green-600 
                                            px-5 
                                            py-3.5 
                                            text-sm 
                                            font-bold 
                                            text-white 
                                            shadow-sm 
                                            transition 
                                            hover:bg-green-700
                                        "
                                    >

                                        Apply Online

                                        <FaArrowUpRightFromSquare
                                            className="text-xs"
                                        />

                                    </button>


                                    <p
                                        className="
                                            mt-3 
                                            text-center 
                                            text-xs 
                                            text-slate-400
                                        "
                                    >

                                        You will be redirected to the
                                        official portal

                                    </p>

                                </div>

                            </div>


                            {/* =================================================
                                SCHEME INFORMATION
                            ================================================== */}

                            <div
                                className="
                                    rounded-2xl 
                                    border 
                                    border-slate-200 
                                    bg-white 
                                    p-6 
                                    shadow-sm
                                "
                            >

                                <h3 className="font-bold text-slate-900">
                                    Scheme information
                                </h3>


                                <div
                                    className="
                                        mt-5 
                                        divide-y 
                                        divide-slate-100
                                    "
                                >

                                    <InfoRow
                                        icon={<FaBuilding />}
                                        label="Department"
                                        value="Tourism Department"
                                    />

                                    <InfoRow
                                        icon={<FaLocationDot />}
                                        label="State"
                                        value="West Bengal"
                                    />

                                    <InfoRow
                                        icon={<FaWandSparkles />}
                                        label="Category"
                                        value="Business & Entrepreneurship"
                                    />

                                    <InfoRow
                                        icon={<FaUsers />}
                                        label="Beneficiaries"
                                        value="Business Entity, Individual"
                                    />

                                </div>

                            </div>


                            {/* =================================================
                                QUICK FACTS
                            ================================================== */}

                            <div
                                className="
                                    rounded-2xl 
                                    border 
                                    border-slate-200 
                                    bg-white 
                                    p-6 
                                    shadow-sm
                                "
                            >

                                <h3 className="font-bold text-slate-900">
                                    Quick facts
                                </h3>


                                <div className="mt-5 space-y-4">

                                    <QuickFact
                                        icon={<FaCalendarDays />}
                                        title="Special area benefit"
                                        value="Up to 10 years"
                                    />

                                    <QuickFact
                                        icon={<FaIndianRupeeSign />}
                                        title="Incentive"
                                        value="60%"
                                    />

                                    <QuickFact
                                        icon={<FaGlobe />}
                                        title="Application mode"
                                        value="Online"
                                    />

                                </div>

                            </div>


                            {/* =================================================
                                OFFICIAL RESOURCES
                            ================================================== */}

                            <div
                                className="
                                    rounded-2xl 
                                    border 
                                    border-slate-200 
                                    bg-white 
                                    p-6 
                                    shadow-sm
                                "
                            >

                                <h3 className="font-bold text-slate-900">
                                    Official resources
                                </h3>


                                <div className="mt-4 space-y-2">

                                    <ResourceLink
                                        title="Official website"
                                    />

                                    <ResourceLink
                                        title="Scheme notification"
                                    />

                                </div>

                            </div>

                        </div>

                    </aside>

                </div>

            </div>

        </main>
    );
}


/* ============================================================
   APPLICATION PROCESS PARSER
============================================================ */

function parseApplicationProcess(text) {

    const sections = [];

    if (!text) {
        return sections;
    }


    /*
        Finds:

        [Online]
        everything until next [section]

        [Offline]
        everything until next [section]
    */

    const sectionRegex =
        /\[([^\]]+)\]([\s\S]*?)(?=\[[^\]]+\]|$)/g;


    let sectionMatch;


    while ((sectionMatch = sectionRegex.exec(text)) !== null) {

        const sectionTitle = sectionMatch[1];

        const sectionText = sectionMatch[2].trim();

        const steps = [];


        /*
            Finds:

            Step 1: ........
            Step 2: ........

            Everything belonging to Step 1 is captured
            until Step 2 begins.
        */

        const stepRegex =
            /Step\s+(\d+):\s*([\s\S]*?)(?=\n?Step\s+\d+:|Track Your Application|$)/gi;


        let stepMatch;


        while ((stepMatch = stepRegex.exec(sectionText)) !== null) {

            steps.push({

                number: stepMatch[1],

                description: stepMatch[2]
                    .trim()
                    .replace(/\n+/g, " ")

            });

        }


        sections.push({

            title: sectionTitle,

            steps: steps

        });

    }


    return sections;
}


/* ============================================================
   SECTION TITLE
============================================================ */

function SectionTitle({
    icon,
    title,
    subtitle,
}) {

    return (

        <div className="flex items-start gap-3">

            <div
                className="
                    flex 
                    h-10 
                    w-10 
                    shrink-0 
                    items-center 
                    justify-center 
                    rounded-xl 
                    bg-green-50 
                    text-green-700
                "
            >

                {icon}

            </div>


            <div>

                <h2 className="text-lg font-bold text-slate-900">
                    {title}
                </h2>


                {subtitle && (

                    <p className="mt-0.5 text-sm text-slate-500">
                        {subtitle}
                    </p>

                )}

            </div>

        </div>

    );
}


/* ============================================================
   ELIGIBILITY CARD
============================================================ */

function EligibilityCard({
    icon,
    label,
    value,
}) {

    return (

        <div
            className="
                group 
                rounded-xl 
                border 
                border-slate-200 
                p-4 
                transition 
                hover:border-green-200 
                hover:bg-green-50/40
            "
        >

            <div className="flex items-center gap-3">

                <div
                    className="
                        flex 
                        h-9 
                        w-9 
                        items-center 
                        justify-center 
                        rounded-lg 
                        bg-slate-100 
                        text-slate-500 
                        transition 
                        group-hover:bg-green-100 
                        group-hover:text-green-700
                    "
                >

                    {icon}

                </div>


                <div className="min-w-0">

                    <p
                        className="
                            text-xs 
                            font-medium 
                            uppercase 
                            tracking-wide 
                            text-slate-400
                        "
                    >
                        {label}
                    </p>


                    <p
                        className="
                            mt-0.5 
                            text-sm 
                            font-semibold 
                            text-slate-800
                        "
                    >
                        {value}
                    </p>

                </div>

            </div>

        </div>

    );
}


/* ============================================================
   PROCESS STEP
============================================================ */

function ProcessStep({
    number,
    title,
    description,
}) {

    return (

        <div className="relative flex gap-4">

            <div
                className="
                    relative 
                    z-10 
                    flex 
                    h-9 
                    w-9 
                    shrink-0 
                    items-center 
                    justify-center 
                    rounded-full 
                    border-4 
                    border-white 
                    bg-green-600 
                    text-[10px] 
                    font-bold 
                    text-white 
                    shadow-sm
                "
            >

                {number}

            </div>


            <div className="pt-0.5">

                <h3 className="font-semibold text-slate-900">
                    {title}
                </h3>


                <p
                    className="
                        mt-1 
                        text-sm 
                        leading-6 
                        text-slate-500
                    "
                >
                    {description}
                </p>

            </div>

        </div>

    );
}


/* ============================================================
   DOCUMENT ITEM
============================================================ */

function DocumentItem({ text }) {

    return (

        <div
            className="
                flex 
                items-center 
                gap-3 
                rounded-xl 
                border 
                border-slate-200 
                px-4 
                py-3.5 
                transition 
                hover:border-green-200 
                hover:bg-green-50/30
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
                    rounded-lg 
                    bg-green-50 
                    text-green-600
                "
            >

                <FaCheck className="text-xs" />

            </div>


            <span
                className="
                    text-sm 
                    font-medium 
                    text-slate-700
                "
            >
                {text}
            </span>

        </div>

    );
}


/* ============================================================
   INFO ROW
============================================================ */

function InfoRow({
    icon,
    label,
    value,
}) {

    return (

        <div
            className="
                flex 
                gap-3 
                py-4 
                first:pt-0 
                last:pb-0
            "
        >

            <div className="mt-0.5 text-green-600">
                {icon}
            </div>


            <div className="min-w-0">

                <p className="text-xs text-slate-400">
                    {label}
                </p>


                <p
                    className="
                        mt-0.5 
                        text-sm 
                        font-semibold 
                        text-slate-800
                    "
                >
                    {value}
                </p>

            </div>

        </div>

    );
}


/* ============================================================
   QUICK FACT
============================================================ */

function QuickFact({
    icon,
    title,
    value,
}) {

    return (

        <div className="flex items-center gap-3">

            <div
                className="
                    flex 
                    h-9 
                    w-9 
                    items-center 
                    justify-center 
                    rounded-lg 
                    bg-green-50 
                    text-green-600
                "
            >

                {icon}

            </div>


            <div className="flex-1">

                <p className="text-xs text-slate-400">
                    {title}
                </p>


                <p
                    className="
                        text-sm 
                        font-semibold 
                        text-slate-800
                    "
                >
                    {value}
                </p>

            </div>

        </div>

    );
}


/* ============================================================
   RESOURCE LINK
============================================================ */

function ResourceLink({ title }) {

    return (

        <button
            className="
                flex 
                w-full 
                items-center 
                justify-between 
                rounded-xl 
                border 
                border-slate-200 
                px-4 
                py-3 
                text-left 
                text-sm 
                font-medium 
                text-slate-700 
                transition 
                hover:border-green-200 
                hover:bg-green-50 
                hover:text-green-700
            "
        >

            <span className="flex items-center gap-3">

                <FaFileLines />

                {title}

            </span>


            <FaArrowUpRightFromSquare className="text-xs" />

        </button>

    );

}
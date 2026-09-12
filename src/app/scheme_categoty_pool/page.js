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
  FaCircleCheck
} from "react-icons/fa6";

import Link from "next/link";

import { MdHealthAndSafety } from "react-icons/md";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SchemeCategoriesSearch() {

    const searchParams = useSearchParams();

    const [category,setCategory] = useState("")
    const [department,setDepartment] = useState("")

    useEffect(()=>{
        
        setCategory(searchParams.get("category"))
        setDepartment(searchParams.get("department"))
        
    },[])
    
    
    const [schemes, setSchemes] = useState([]);

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

    useEffect(() => {

        async function fetchSchemes() {

            try {
               const params = new URLSearchParams({category,department})
            

            const response = await fetch(
                `http://localhost:3000/api/scheme_categories_search?${params.toString()}`)

            const data = await response.json();

            if (data.success){
                setSchemes(data.message);}

            else{
                console.log(data.message);
                
            } 
            } catch (error) {
                console.log("catch");
                
                console.log(error);
                
            }

        }
        

        if (category && department) {
            fetchSchemes();
        }

    }, [category, department]);



    return (
        <main className="min-h-screen bg-slate-50 p-8"> 

            <section>


                {
                
                    [[category,department]].map((item,a)=>{

                    const Icon2 = getCategoryIcon(item[0])
                    
                    return (  

                        <div key={a}>
                            <SectionTitle
                                icon={<Icon2 size={25}/>}
                                title={item[0]}
                                subtitle={item[1]}
                            />
                        </div>
                        )
                    
                    })
                
                }

            
            </section>

            


            <div className="mt-8 grid gap-5">

                {schemes.map((scheme) => (

                    <Link href={`/details/${scheme.slug}`}>
                        <div
                            key={scheme._id}
                            className="
                                rounded-xl
                                border
                                border-slate-200
                                bg-green-300
                                p-6
                                shadow-xl
                                hover:-translate-y-0.5
                                hover:bg-green-400
                                hover:border-black
                                hover:shadow-2xl
                                transition-all
                            "
                        >

                            <h2 className="text-xl font-semibold">
                                {scheme.name}
                            </h2>

                            <p className="mt-2 text-black">
                                {scheme.description}
                            </p>

                        </div>
                    </Link>

                ))}

            </div>

        </main>
    );
}

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

                <h2 className="text-xl font-bold text-slate-900">
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
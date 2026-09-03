"use client";
import { useState } from "react";
import "./globals.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function layout({children}) {

  const [menuUnfold,setMenuUnfold] = useState(false)
  const pathname = usePathname();

  return(
    <html>
     <body>

      <nav className="relative sticky top-0">

        <div className="grid grid-cols-[1fr_4fr_0.5fr] md:grid-cols-[1fr_2fr_1fr] lg:grid-cols-[1fr_2fr_1fr] border p-2 shadow-xl/30 shadow-gray-500 border-gray-300 bg-white">

          <div className="flex justify-center gap-2">
            <p className="px-2 text-center text-white border rounded-md bg-green-600">Y</p>
            <p className="font-bold">Yojana<span className="text-green-600 font-bold">Ai</span></p>
          </div>

          <div className="hidden lg:block md:block">
            <div className="flex flex-row justify-center gap-[10%] font-semibold">

              <Link href="/home" className={pathname === "/home" ? "px-2 bg-green-600 text-white rounded-md" : "hover:text-white hover:px-2 hover:rounded-md hover:bg-green-600 transition-all"}><p className="cursor-pointer">Home</p></Link>

              <Link href="/schemes" className={pathname === "/schemes" ? "px-2 bg-green-600 text-white rounded-md" : "hover:bg-green-600 hover:text-white hover:px-2 hover:rounded-md transition-all"}><p className="cursor-pointer">Schemes</p></Link>

              <Link href="/ligibility" className={pathname === "/ligibility" ? "px-2 bg-green-600 text-white rounded-md" : "hover:bg-green-600 hover:text-white hover:px-2 hover:rounded-md transition-all"}><p className="cursor-pointer">Check Eligibility</p></Link>
              
              <p className="cursor-pointer hover:bg-green-600 hover:text-white hover:px-2 hover:rounded-md transition-all">Ai recommendation</p>

            </div>
          </div>

          <div className="flex md:justify-center justify-end gap-[7%] md:gap-[10%]">
            <p className="cursor-pointer"><AiOutlineSearch size={25}/></p>
            <p className="border rounded-md text-white px-2 pb-0.5 cursor-pointer hover:bg-green-700 transition-all bg-green-600 ">Sign Up</p>
          </div>

          <div className="block md:hidden flex justify-end cursor-pointer" onClick={()=>setMenuUnfold(!menuUnfold)}><AiOutlineMenuUnfold size={25}/></div>
        </div>
        {(
          <div className="block md:hidden transition-all absolute z-100 font-semibold">
            <div className={`flex flex-col overflow-hidden ${menuUnfold?"max-h-60 w-[100vw]":"max-h-0 w-[100vw]"} border border-gray-300 bg-green-100 transition-all duration-300 ease-in-out rounded-md shadow-xl/30 `}>

              <Link href="/home"><p className="cursor-pointer rounded-l-md border border-b-gray-300 border-green-100 hover:bg-green-600 hover:text-white pl-1 hover:px-2 hover:pb-0.5 transition-all">Home</p></Link>

              <Link href="/schemes"><p className="cursor-pointer hover:bg-green-600 border border-b-gray-300 border-green-100 hover:text-white pl-1 hover:px-2 hover:pb-0.5 transition-all">Schemes</p></Link>

              <Link href="/ligibility"><p className="cursor-pointer hover:bg-green-600 border border-b-gray-300 border-green-100 hover:text-white pl-1 hover:px-2 hover:pb-0.5 transition-all">Check Eligibility</p></Link>
              <p className="cursor-pointer rounded-l-md hover:bg-green-600 hover:text-white pl-1 hover:px-2 hover:pb-0.5 transition-all">Ai recommendation</p>

            </div>
          </div>
        )}
      </nav>


       {children}

     </body>
    </html>
  )
}
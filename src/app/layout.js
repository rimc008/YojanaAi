import "./globals.css";

export default function layout({children}) {
  return(
    <html>
     <body>

      <nav className="grid grid-cols-[1fr_2fr_1fr]">

        <div className="flex justify-center gap-2">
          <p className="px-2 text-center text-white border rounded-md bg-green-700">Y</p>
          <p>Yojana<span className="text-green-700 font-bold">Ai</span></p>
        </div>

        <div className="flex flex-row justify-center gap-[10%]">

          <p>Home</p>
          <p>Schemes</p>
          <p>Check Eligibility</p>
          <p>Ai recommendation</p>

        </div>
        <div className="flex justify-center gap-[10%]">
          <p>Search</p>
          <p className="border rounded-md text-white px-2 cursor-pointer hover:scale-110 transition-all bg-green-700 ">Sign Up</p>
        </div>
      </nav>


       {children}

     </body>
    </html>
  )
}
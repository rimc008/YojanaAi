"use client"

import { createContext, useState } from "react"

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [a,setA] = useState("")
    return (
        <AppContext.Provider value={{ a , setA }}>
            {children}
        </AppContext.Provider>
    )
}


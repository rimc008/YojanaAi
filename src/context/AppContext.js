"use client"

import { createContext, useState } from "react"

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [client_message,setClient_message] = useState("")
    const [aiclient,setAiclient] = useState(false)
    
    return (
        <AppContext.Provider value={{ client_message,setClient_message,aiclient,setAiclient }}>
            {children}
        </AppContext.Provider>
    )
}


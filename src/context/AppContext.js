"use client"

import { createContext, useState } from "react"

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [client_message,setClient_message] = useState("")
    const [aiclient,setAiclient] = useState(false)
    const [filteredSchemes,setFilteredSchemes] = useState([]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [chat_history, setChat_history] = useState([]);
    const [a, setA] = useState([]);
    const [categories,setCategories] = useState([]);
    const [featuredSchemes,setFeaturedSchemes] = useState([]);


    

    return (
        <AppContext.Provider value={{ client_message,setClient_message,aiclient,setAiclient,filteredSchemes,setFilteredSchemes,message,setMessage,messages,setMessages,chat_history,setChat_history,a,setA,categories,setCategories,featuredSchemes,setFeaturedSchemes}}>
            {children}
        </AppContext.Provider>
    )
}


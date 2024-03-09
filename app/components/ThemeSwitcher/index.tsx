"use client"

import { useEffect, useState } from "react"

export default function ThemeSwitcher(){
    const [darkMode, setDarkMode] = useState(false)

    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        if(theme === 'dark') setDarkMode(true)
    },[])

    useEffect(()=>{
      
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
        const theme = localStorage.getItem('theme')
    },[darkMode])

    return (
        <>
    <div className="dark:bg-gray-900 px-2 dark:text-white" onClick={()=>setDarkMode(!darkMode)}>
        {darkMode? 'Light' : 'Dark' }
    </div>
    <div>
        You are in {darkMode? 'Dark' : 'Lght' } mode
    </div>
    </>
    )

}
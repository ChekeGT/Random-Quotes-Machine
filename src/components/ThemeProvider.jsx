import { createContext, useContext, useState } from "react";

import "./sass/ThemeProvider.sass"

const ThemeContext = createContext()
const updateThemeContext = createContext()


export function useUpdateTheme(){
    return useContext(updateThemeContext)
}

export function useThemeContext(){
    return useContext(ThemeContext)
}



export default function ThemeProvider({ children }){   
    const themes =  ['purple', 'brown', 'orange', 'aquamarine', 'green', 'cyan']
    
    function getRandomTheme(){
        let i = Math.floor(Math.random() * themes.length)
        return themes[i]
     }
    const [theme, setTheme ] = useState(getRandomTheme())

    function updateTheme(){
        setTheme(getRandomTheme())
    }

    return (
        <ThemeContext.Provider value={theme}>
            <updateThemeContext.Provider value={updateTheme}>
                <div className={`${theme} general-container`}>
                    { children }
                </div>
            </updateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}
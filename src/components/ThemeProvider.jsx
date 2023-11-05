import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()
const updateThemeContext = createContext()


export function useUpdateTheme(){
    return useContext(updateThemeContext)
}

export function useThemeContext(){
    return useContext(ThemeContext)
}



export default function ThemeProvider({ children }){   
    const themes =  ['purple', 'brown', 'orange', 'aquamarine',]
    
    function getRandomTheme(){
        let i = Math.floor(Math.random() * themes.length)
        return themes[i]
     }
    const [theme, setTheme ] = useState(getRandomTheme())

    function updateTheme(){
        let r = getRandomTheme()
        setTheme(p => r)
    }

    return (
        <ThemeContext.Provider value={theme}>
            <updateThemeContext.Provider value={updateTheme}>
                { children }
            </updateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}
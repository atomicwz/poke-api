import { createContext, useState } from "react";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const themes = {
    light: {
        color: 'black',
        background: "URL('https://wallpapercave.com/wp/wp6112340.jpg') no-repeat fixed",
        backgroundCard: "linear-gradient(297deg, rgba(55,155,233,.3) 22%, rgba(61,48,148,0.7) 100%)",
        colorSkill: "rgba(1,1,1,.7)",
        themeButton: <FontAwesomeIcon icon={faMoon} />,
    },

    dark: {
        color: 'white',
        background: "url('https://wallpapercave.com/wp/wp6112379.jpg') no-repeat fixed",
        backgroundCard: "radial-gradient(circle, rgba(35,40,65,1) 2%, rgba(0,0,0,1) 100%)",
        backgroundProfile: "rgba(35,40,65,.4)",
        backgroundSkill:"rgba(1,1,1,.8)",
        colorSkill: "rgba(255,255,255,.8)",
        themeButton: <FontAwesomeIcon icon={faSun}/>,
        
    }
}
export const ThemeContext = createContext({})
export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )

}
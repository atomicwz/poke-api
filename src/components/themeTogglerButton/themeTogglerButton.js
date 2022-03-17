import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"
import styled from "styled-components";

export const ThemeTogglerButton = () => {
    const Button = styled.button`
    background: rgba(1,1,1,.8);
    width: 4%;
    border: none;
    padding: 10px 0px;
    color: rgba(255,255,255,1);
    position: absolute;
    font-size: 2.3rem;
    top: 15px;
    left: 15px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background:rgba(1,1,1);
        color: yellow;
        transition: 1s;
    }

    @media (max-width: 1200px){
        width: 8%;
    }
    @media (max-width: 650px){
        width: 12%;
    }
`
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>{theme.themeButton}</Button>
        </div>
    )
}


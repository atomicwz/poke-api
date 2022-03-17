import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Button = (props) => {

    const { themes } = useContext(ThemeContext)
    return (
        <button {...props} />
    )
}


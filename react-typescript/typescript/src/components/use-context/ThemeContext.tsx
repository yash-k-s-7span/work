import { createContext } from "react";
import { Themes } from "./Theme";

type ThemeComponentProps = {
    children:React.ReactNode
}
export const ThemeContext = createContext(Themes)

export const ThemeProvider = ({children}:ThemeComponentProps) => {
    return(
        <div>
            <ThemeContext.Provider value={Themes}>{children}</ThemeContext.Provider>
        </div>
    )
}
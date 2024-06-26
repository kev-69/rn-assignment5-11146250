import { createContext, useState } from "react";

const themeContext = createContext();

const themeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <themeContext.Provider value={{darkTheme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
};

export {themeProvider, themeContext};
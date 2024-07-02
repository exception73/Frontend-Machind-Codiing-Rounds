import React, { createContext, useEffect, useState } from 'react'

export const Theme = createContext();

const ThemeContext = ({children}) => {

    const [theme, setTheme] = useState(0);

    useEffect(() => {
        document.documentElement.setAttribute('theme', theme ? 'Light' : 'Dark')
    }, [theme])

  return (
    <Theme.Provider value={{theme, setTheme}} >
        {children}
    </Theme.Provider>
  )
}

export default ThemeContext
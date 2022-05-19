import React, { createContext, useState } from 'react';

export const DarkContext = createContext();

const DarkContextProvider = (props) => {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme)
  }
  return (
    <DarkContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </DarkContext.Provider>
  )
}

export default DarkContextProvider;
import { createContext, useMemo, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(themes.light);

export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: 'black'
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [theme, setTheme] = useState(themes.light)
  const handleChangeTheme = () => {
    if(theme === themes.dark) setTheme(themes.light)
    if(theme === themes.light) setTheme(themes.dark)
  }
  const providerValue = useMemo(() =>({theme,handleChangeTheme},[theme,handleChangeTheme]))
  return (
    <ContextGlobal.Provider value={{providerValue}}>
      <div style={{background: theme.background, color: theme.font}}>
      {children}
     </div>
    </ContextGlobal.Provider>
  );
};

import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ childern }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {childern}
    </ThemeContext.Provider>
  );
};

// custom hook

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };

import { createContext, useContext, useState } from "react";

// create context:

const ThemeContext = createContext();

// Provider Function:

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook:

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvider");
  return context;
}

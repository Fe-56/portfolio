// code from https://nimishjn.medium.com/toggle-theme-in-reactjs-4095dd35c69d

import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } 
  else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      document.getElementById('root').className = 'App light-theme';
      document.getElementById('navbar_nav').className = "navbar navbar-expand-sm navbar-light fixed-top";
    } 
    else {
      setTheme("dark-theme");
      document.getElementById('root').className = 'App dark-theme';
      document.getElementById('navbar_nav').className = "navbar navbar-expand-sm navbar-dark fixed-top";
    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, getTheme };

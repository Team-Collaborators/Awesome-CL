import React, { useState, useEffect } from "react";

import MainRoutes from "./routes";
import "./styles/theme.scss";
import "./styles/main.scss";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
//! Applies theme only to body not to entire layout
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <>
      <MainRoutes isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;

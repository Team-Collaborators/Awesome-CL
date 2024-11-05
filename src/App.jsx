import React, { useState, useEffect } from "react";

import MainRoutes from "./routes/routes";
import "./styles/theme.scss";
import "./styles/main.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initialize the sidebar as open

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
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
      <MainRoutes
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isSidebarOpen={isSidebarOpen}
      />
    </>
  );
}

export default App;

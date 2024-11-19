import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import MainRoutes from "./routes/routes";
import "./styles/theme.scss";
import "./styles/main.scss";

function App() {
  return (
    <>
      <ThemeProvider>
        <MainRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

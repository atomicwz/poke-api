import React from "react";
// import { Pokedex } from "./objects/home";
import { AppRoutes } from "./pages/routes";
import { ThemeProvider } from "../src/contexts/theme-context";
import { ThemeTogglerButton } from "./components/themeTogglerButton/themeTogglerButton";
import './app.css'

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
        <ThemeTogglerButton/>
      </ThemeProvider>
    </>
  );
}

export default App;

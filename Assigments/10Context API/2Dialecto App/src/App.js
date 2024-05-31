import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";

// get theme and language contexts here
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <themeContext.Provider value={{ theme, setTheme }}>
        <div className={`App ${theme}`}>
          {/* Add context provider here */}
          <Navbar />
          <Home />
        </div>
      </themeContext.Provider>
    </languageContext.Provider>
  );
}

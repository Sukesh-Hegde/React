import { useContext } from "react";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const { language, setLanguage } = useContext(languageContext);
  const { theme, setTheme } = useContext(themeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>
        <span>{language /* Show active language here */}</span>
      </div>
    </div>
  );
};

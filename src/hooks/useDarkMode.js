import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    if (darkMode === true) {
      document.body.className = "dark-mode";
    } else if (darkMode === false) {
      document.body.className = "";
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

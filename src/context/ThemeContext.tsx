import {
  createContext,
  useState,
  useMemo,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { ThemeProvider as MUIThemeProvider, PaletteMode } from "@mui/material";
import { getTheme } from "../styles/theme";

interface ThemeContextType {
  mode: PaletteMode;
  toggleThemeMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleThemeMode: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    }
  }, []);

  const toggleThemeMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleThemeMode }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

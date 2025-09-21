import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Define the type for themes
type Theme = "theme1" | "theme2" | "theme3" | "theme4" | "theme5";

// Define the style object for each theme
interface ThemeStyles {
  bodyBg: string;
  text: string;
  navBg: string;
  navText: string;
  buttonBg: string;
  buttonText: string;
}

// Define the context type
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeStyles: ThemeStyles;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define props type for the provider
interface ThemeProviderProps {
  children: ReactNode;
}

// Provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("theme5");

  // Define multiple classes for different parts of the site
  const themeClasses: Record<Theme, ThemeStyles> = {
    theme1: {
      bodyBg: "bg-zinc-50",
      text: "text-black",
      navBg: "bg-stone-200",
      navText: "text-black",
      buttonBg: "bg-blue-600",
      buttonText: "text-white",
    },
    theme2: {
      bodyBg: "bg-zinc-300",
      text: "text-black",
      navBg: "bg-stone-400",
      navText: "text-black",
      buttonBg: "bg-blue-600",
      buttonText: "text-white",
    },
    theme3: {
      bodyBg: "bg-zinc-500",
      text: "text-white",
      navBg: "bg-stone-600",
      navText: "text-white",
      buttonBg: "bg-blue-600",
      buttonText: "text-white",
    },
    theme4: {
      bodyBg: "bg-zinc-700",
      text: "text-white",
      navBg: "bg-stone-800",
      navText: "text-white",
      buttonBg: "bg-blue-600",
      buttonText: "text-white",
    },
    theme5: {
       bodyBg: "bg-zinc-900",
      text: "text-white",
      navBg: "bg-stone-950",
      navText: "text-white",
      buttonBg: "bg-blue-600",
      buttonText: "text-white",
    },
  };

  const themeStyles = themeClasses[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeStyles }}>
      <div
        className={`transition-colors duration-500 min-h-screen ${themeStyles.bodyBg} ${themeStyles.text}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming the context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

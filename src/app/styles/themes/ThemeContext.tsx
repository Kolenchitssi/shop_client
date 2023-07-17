import React from "react";

export const themes = {
  dark: "dark",
  light: "light",
};

export interface ContextProps {
  theme: string;
  setTheme: (c: string) => void;
}

export const ThemeContext = React.createContext<ContextProps>(
  {} as ContextProps
);

export const useThemeContext = () => React.useContext(ThemeContext);

//* or
// export const ThemeContext = React.createContext<ContextProps>({
//   theme: "dark",
//   setTheme: () => {},
// });

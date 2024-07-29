import { ThemeProvider } from "@material-tailwind/react";

const theme = {
  button: {
    base: "inline-flex items-center justify-center rounded-md",
    color: {
      blue: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 active:bg-blue-700",
    },
    ripple: "relative overflow-hidden transition-all",
  },
};

export const CustomThemeProvider = ({ children }) => (
  <ThemeProvider value={theme}>{children}</ThemeProvider>
);
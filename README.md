# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


npm create vite@latest my-project -- --template react
cd my-project

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

Start your build process
Run your build process with npm run dev.

Terminal

npm run dev


tart using Tailwind in your project
Start using Tailwind’s utility classes to style your content.

App.jsx

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

onfigure Material Tailwind Theme:

Create a src/theme.js file to configure the theme:

javascript
Copiar código
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

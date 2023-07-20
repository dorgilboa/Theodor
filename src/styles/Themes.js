import { createTheme } from "@mui/material/styles";
import "../index.css"

export const cssVar = (name) => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    console.log(color);
    return color;
}
//   getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const theme = createTheme({
    palette: {
        
        primary: {
            main: cssVar("--primary-dark"),
        },
        secondary: {
            main: cssVar("--secondary-dark"),
        },
        background: {
            default: "var(--background)"
        },
        text: {
            primary: cssVar("--text-dark"),
            secondary: cssVar("--secondary-dark")
        }

    },
  });
  

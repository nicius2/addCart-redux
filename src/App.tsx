import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/HomePage";
import { theme } from "./styles/theme";
import { GlobalTheme } from "./styles/global";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalTheme />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

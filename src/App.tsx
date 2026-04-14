import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/HomePage";
import { theme } from "./styles/theme";
import { GlobalTheme } from "./styles/global";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <GlobalTheme />
          <HomePage />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
}

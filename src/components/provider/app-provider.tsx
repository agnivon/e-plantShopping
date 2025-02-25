import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;

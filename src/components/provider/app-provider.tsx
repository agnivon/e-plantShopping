import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;

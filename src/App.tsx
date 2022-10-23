import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { LanguageContext } from "./context/userLangctx";
import useLocalStorage from "./hooks/useLocalStorage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthTokenContext } from "./context/AuthTokenContext";
import { SnackbarProvider } from "notistack";

function App() {
  const [language, setLanguage] = useLocalStorage<any>("lang", "en");
  const [token, setToken] = useLocalStorage<any>("auth", {});

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <LanguageContext.Provider value={{ language, setLanguage }}>
            <AuthTokenContext.Provider value={{ token, setToken }}>
              <RouterProvider router={router} />
            </AuthTokenContext.Provider>
          </LanguageContext.Provider>
        </SnackbarProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;

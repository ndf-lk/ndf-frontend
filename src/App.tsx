import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { LanguageContext } from "./context/userLangctx";
import useLocalStorage from "./hooks/useLocalStorage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [language, setLanguage] = useLocalStorage("lang", "en");
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <RouterProvider router={router} />
        </LanguageContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

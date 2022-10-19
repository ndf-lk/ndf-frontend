import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { LanguageContext } from "./context/userLangctx";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [language, setLanguage] = useLocalStorage("lang", "en");

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <RouterProvider router={router} />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

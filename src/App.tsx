import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useState } from "react";
import { LanguageContext } from "./context/userLangctx";

function App() {
  const [language, setLanguage] = useState<string>("en");

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <RouterProvider router={router} />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

import { Header } from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageContext";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <LanguageProvider>
      <>
        <Header />
        <MainContent />
      </>
    </LanguageProvider>
  );
}

export default App;

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { About } from "./components/About";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

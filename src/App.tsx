import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { About } from "./components/About";
import { Link } from "./components/Link";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/link" element={<Link />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

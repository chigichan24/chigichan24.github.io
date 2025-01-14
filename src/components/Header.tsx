import { useState, useEffect } from "react";
import "./Header.css";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, [isDark]);

  return (
    <header>
      <h1>My Application</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button onClick={() => setIsDark(!isDark)} className="theme-toggle">
        {isDark ? "🌞" : "🌙"}
      </button>
    </header>
  );
}

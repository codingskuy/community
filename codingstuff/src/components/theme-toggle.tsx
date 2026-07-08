import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-full p-2 text-sm font-medium transition-colors hover:bg-primary/10 text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}

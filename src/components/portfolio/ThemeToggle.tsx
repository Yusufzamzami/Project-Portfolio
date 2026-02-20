import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={18} className="text-foreground" /> : <Sun size={18} className="text-foreground" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;

"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // 设置默认主题为暗黑模式
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text mr-4">
          {theme === "dark" ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
        </span>
        <input 
          type="checkbox" 
          className="toggle toggle-primary" 
          checked={theme === "light"}
          onChange={toggleTheme}
        />
      </label>
    </div>
  );
} 
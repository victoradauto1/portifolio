import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed z-50 transition-all duration-900
        ${
          scrolled
            ? "top-4 left-1/2 -translate-x-1/2 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-lg rounded-full px-6"
            : "top-0 left-0 w-full bg-transparent"
        }
      `}
    >
      <nav
        className={`
          flex items-center justify-between h-14
          ${scrolled ? "gap-6" : "max-w-6xl mx-auto px-6"}
        `}
      >
        {/* Brand */}
        <a
          href="#hero"
          className="flex flex-col leading-tight cursor-pointer hover:opacity-80 transition"
        >
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Victor Silva
          </span>
          {!scrolled && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Web3 · Solidity · DeFi
            </span>
          )}
        </a>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <a href="#projects" className="hover:opacity-70 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:opacity-70 transition">
              Stack
            </a>
          </li>
          <li>
            <a href="#about" className="hover:opacity-70 transition">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-400 transition"
            >
              Contact
            </a>
          </li>
          <ThemeSwitcher />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

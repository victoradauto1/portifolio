import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
            Victor Silva
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Web3 · Solidity · DeFi
          </span>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Stack
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700
                         hover:border-gray-900 dark:hover:border-gray-400
                         transition-colors"
            >
              Contato
            </a>
          </li>

          <ThemeSwitcher />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

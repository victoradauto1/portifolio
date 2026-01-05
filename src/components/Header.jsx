import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 fixed top-0 w-full z-50 transition-colors border-b border-gray-200 dark:border-gray-700 dark:shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Victor Silva</h1>
        
        <ul className="flex space-x-6 items-center">
          <li>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-gray-100">Sobre</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-gray-100">Projetos</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-gray-100">Habilidades</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-gray-100">Contato</a>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

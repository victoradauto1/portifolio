const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-600 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Habilidades</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {["Solidity", "Hardhat", "React", "Tailwind CSS"].map((skill) => (
          <li key={skill} className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

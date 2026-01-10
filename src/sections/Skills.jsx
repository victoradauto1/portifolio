import SkillTag from "../components/SkillTag";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-600 text-center"
    >
      <h2 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-white">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Web3 & Smart Contracts */}
        <div>
          <h3
            className="
              inline-block mb-5
              px-4 py-1.5 rounded-full
              border border-gray-300 dark:border-gray-700
              text-sm font-medium
              text-gray-800 dark:text-gray-200
            "
          >
            Web3 & Smart Contracts
          </h3>

          <ul className="flex flex-wrap justify-center gap-3">
            {[
              "Solidity",
              "Hardhat",
              "Smart Contracts",
              "DeFi",
            ].map((skill) => (
              <SkillTag key={skill} name={skill} />
            ))}
          </ul>
        </div>

        {/* Frontend */}
        <div>
          <h3
            className="
              inline-block mb-5
              px-4 py-1.5 rounded-full
              border border-gray-300 dark:border-gray-700
              text-sm font-medium
              text-gray-800 dark:text-gray-200
            "
          >
            Frontend
          </h3>

          <ul className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
            ].map((skill) => (
              <SkillTag key={skill} name={skill} />
            ))}
          </ul>
        </div>

        {/* Backend & Tooling */}
        <div>
          <h3
            className="
              inline-block mb-5
              px-4 py-1.5 rounded-full
              border border-gray-300 dark:border-gray-700
              text-sm font-medium
              text-gray-800 dark:text-gray-200
            "
          >
            Backend & Tooling
          </h3>

          <ul className="flex flex-wrap justify-center gap-3">
            {[
              "Node.js",
              "Mocha",
              "Chai",
              "Git",
              "Postman",
            ].map((skill) => (
              <SkillTag key={skill} name={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

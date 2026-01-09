const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-700 text-center"
    >
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="flex justify-center flex-wrap gap-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded p-6 w-64 text-left">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
            DAO Management System
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            A decentralized condominium management system built with Solidity,
            focusing on on-chain governance and access control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "BetChain",
    description:
      "A Web3 betting platform focused on smart contracts, transparency, and fully on-chain execution.",
    image: "/projects/betchain.png",
    url: "https://bet-chain.vercel.app/",
  },
  {
    title: "CryptAid",
    description:
      "An educational decentralized donation platform adapted from a legacy course project, delivering core smart contract functionality and serving as a foundation for future security and UX improvements.",
    image: "/projects/cryptaid.png",
    url: "https://crypt-aid.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-700 text-center"
    >
      <h2 className="text-3xl font-semibold mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="flex justify-center flex-wrap gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

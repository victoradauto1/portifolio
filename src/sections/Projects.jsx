import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "BetChain",
    description:
      "A Web3 betting platform focused on smart contracts, transparency, and on-chain execution.",
    image: "/projects/betchain.png",
    url: "https://bet-chain.vercel.app/",
  },
  {
    title: "CryptAid",
    description:
      "A decentralized donation platform enabling transparent crypto contributions via smart contracts.",
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

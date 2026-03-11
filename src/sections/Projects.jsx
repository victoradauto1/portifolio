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
    title: "CryptoAid",
    description:
      "A decentralized crowdfunding platform designed to bring transparency and trust to fundraising through blockchain-based donations and automated payouts.",
    image: "/projects/cryptoaid.png",
    url: "https://crypto-aid.vercel.app/",
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

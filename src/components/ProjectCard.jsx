const ProjectCard = ({ title, description, image, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group block w-80 rounded-xl overflow-hidden
        bg-white dark:bg-gray-800
        shadow-md hover:shadow-xl
        transition-all
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
  src={image}
  alt={title}
  loading="lazy"
  className="
    h-48 w-full object-cover object-top

    brightness-75 saturate-75
    transition-all duration-500 ease-out

    group-hover:brightness-100
    group-hover:saturate-100
    group-hover:scale-105
  "
/>


        {/* Overlay */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <span className="text-white font-medium text-sm tracking-wide">
            View Project →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 text-left">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;

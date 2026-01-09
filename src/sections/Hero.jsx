const Hero = () => {
  return (
    <section
      id="hero"
      className="
        min-h-screen pt-20 flex items-center
        bg-gradient-to-r
        from-gray-100 via-gray-100 to-gray-200
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
      "
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Circular image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              w-72 h-72 md:w-80 md:h-80
              rounded-full overflow-hidden
              ring-2 ring-gray-200 dark:ring-gray-700
              shadow-lg
            "
          >
            <img
              src="/profile.jpg"
              alt="Victor Silva"
              className="
                w-full h-full
                object-cover
                object-[40%_50%]
              "
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I’m Victor
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Web3 & Full-Stack Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

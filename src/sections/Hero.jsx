const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Imagem */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900 rounded-xl" />
          <img
            src="/profile.jpg"
            alt="Victor em Amsterdam"
            className="relative z-10 w-full max-w-md rounded-xl object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Olá, eu sou o Victor
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Desenvolvedor Web3 & Full-Stack
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;

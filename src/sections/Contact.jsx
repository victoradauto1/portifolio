const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
        Get in Touch
      </h2>

      <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
        Interested in working together, discussing Web3 projects, or exploring
        opportunities? Feel free to reach out.
      </p>

      <a
        href="mailto:victoradauto@yahoo.com.br"
        className="
          inline-flex items-center gap-2
          bg-blue-600 dark:bg-blue-500
          text-white font-medium
          px-6 py-3 rounded-full
          hover:bg-blue-700 dark:hover:bg-blue-600
          transition
        "
      >
        Send Email
      </a>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        victoradauto@yahoo.com.br
      </p>
    </section>
  );
};

export default Contact;

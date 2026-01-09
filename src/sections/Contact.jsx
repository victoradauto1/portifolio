const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
        Get in Touch
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        victoradauto@yahoo.com.br
      </p>

      <a
        href="mailto:victoradauto@yahoo.com.br"
        className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600"
      >
        Send Email
      </a>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'; // Changed Twitter icon to FaCode for Leetcode

const Contact = () => {
  const contacts = [
    {
      platform: "Email",
      link: "mailto:palanuj830@gmail.com",
      icon: <FaEnvelope />,
      username: "palanuj830@gmail.com",
      color: "hover:shadow-blue-500/50"
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/anujpal6728/",
      icon: <FaLinkedin />,
      username: "Anuj Pal",
      color: "hover:shadow-sky-500/50"
    },
    {
      platform: "GitHub",
      link: "https://github.com/Backlinko2",
      icon: <FaGithub />,
      username: "anuj-pal18",
      color: "hover:shadow-purple-500/50"
    },
    {
      platform: "Leetcode",
      link: "https://leetcode.com/u/Anuj_pal6728/",
      icon: <FaCode />, // Replaced FaTwitter with FaCode for better context
      username: "Anuj Pal",
      color: "hover:shadow-yellow-500/50"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#030712] overflow-hidden text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 ${contact.color} hover:bg-white/10 hover:border-white/20`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon Container */}
              <div className="relative mb-4 p-4 bg-gray-900 rounded-xl group-hover:scale-110 transition-transform duration-300 text-3xl text-purple-400 group-hover:text-white">
                {contact.icon}
              </div>

              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-500 group-hover:text-purple-300 mb-1">
                {contact.platform}
              </h3>
              
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors break-all text-center">
                {contact.username}
              </p>

              {/* Decorative hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
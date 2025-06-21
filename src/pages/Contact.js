import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        📬 Contact Me
      </motion.h2>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>
          <span className="label">📧 Email:</span>
          <a href="mailto:kamilathrifka@gmail.com">kamilathrifka@gmail.com</a>
        </p>
        <p>
          <span className="label">🔗 LinkedIn:</span>
          <a
            href="https://linkedin.com/in/kamilath-rifka"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/kamilath-rifka
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

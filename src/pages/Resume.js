import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

const Resume = () => {
  return (
    <motion.div
      className="resume-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>📄 My Resume</h2>

      <div className="resume-content">
        <a href="/resume.pdf" download className="download-btn">
          ⬇️ Download Resume (PDF)
        </a>
      </div>
    </motion.div>
  );
};

export default Resume;

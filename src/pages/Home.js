import React from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import "./Home.css";
import profileImage from "../assets/profile.jpeg"; // Make sure the image is in /src/assets/

const Home = () => {
  return (
    <section className="hero-section">
      <div className="blobs">
        <div className="blob pink"></div>
        <div className="blob purple"></div>
        <div className="blob yellow"></div>
      </div>

      <motion.div
        className="hero-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side – Image */}
        <div className="hero-image">
  <div className="image-wrapper">
    <img src={profileImage} alt="Kamilath Rifka" className="profile-img" />
  </div>
</div>


        {/* Right Side – Text */}
        <div className="hero-content">
          <h1>
            Hi, I’m <span className="name">Kamilath Rifka S</span>
          </h1>

          <h3 className="designation">🎓 B.Tech – Information Technology</h3>

          <Typical
            steps={[
              "Full-Stack Engineer 💻", 2000,
              "ML Enthusiast 🤖", 2000,
              "React Developer ⚛️", 2000,
            ]}
            loop={Infinity}
            wrapper="h2"
          />

          <div className="hero-links">
            <a href="/projects">✨ View Projects</a>
            <a href="/contact">📬 Contact Me</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

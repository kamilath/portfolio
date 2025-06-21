import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60 }}
    >
      <h1 className="logo">Kamilath Rifka</h1>
      <div className="links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
        <Link className={location.pathname === "/resume" ? "active" : ""} to="/resume">Resume</Link>
        <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;

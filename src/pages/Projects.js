import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>🚀 Major Project</h2>

      <div className="project-grid">
        {/* ⭐ Major Project – Drone Control */}
        <motion.div
          className="project-box highlight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h3>🤖 Drone Control & Wireless Charging</h3>
          <p>
            Real-time drone control using webcam-based hand tracking and QR-code-based autonomous landing. Integrates MediaPipe, pyzbar, and Arduino for intelligent gesture-based operations.
          </p>
          <ul>
            <li>🖐️ Hand gesture recognition (MediaPipe)</li>
            <li>🧠 QR-based drone landing</li>
            <li>⚡ Wireless charging command</li>
            <li>📡 Arduino integration via serial</li>
          </ul>
          <div className="tech-tags">
            <span>Python</span>
            <span>OpenCV</span>
            <span>MediaPipe</span>
            <span>Arduino</span>
            <span>pySerial</span>
          </div>
          <a
            href="https://github.com/kamilath/Hand-Gesture-Drone-And-Wireless-Charging-Station"
            target="_blank"
            rel="noreferrer"
          >
            🔗 GitHub Repo
          </a>
        </motion.div>
        <motion.div
  className="project-box highlight"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 120 }}
>
  <h3>🧾 Bill Mate — AI Invoice Management System</h3>
  <p>
    A Flask-based smart invoice processing web app powered by Google Gemini Vision AI. Users can upload invoice images and get key data extracted like vendor name, invoice number, date, and amount. Data is stored in SQLite and can be searched and viewed in tabular format.
  </p>
  <ul>
    <li>📤 Upload invoice images from browser</li>
    <li>🤖 Gemini AI extracts key invoice details</li>
    <li>🗃️ Data saved in SQLite3 and rendered in HTML table</li>
    <li>🔐 Basic login authentication (hard-coded)</li>
    <li>🔍 Search invoices by vendor or number</li>
  </ul>
  <div className="tech-tags">
    <span>Python</span>
    <span>Flask</span>
    <span>Gemini Vision AI</span>
    <span>SQLite</span>
    <span>Pillow</span>
    <span>Pandas</span>
  </div>
  <a
    href="https://github.com/kamilath/Bill-Mate-Effortless-Invoice-Management-with-Intelligent-AI"
    target="_blank"
    rel="noreferrer"
  >
    🔗 GitHub Repo
  </a>
</motion.div>

      </div>

      <h2>🧩 Minor Projects</h2>

      <div className="project-grid">
        {/* 📊 Used Car Insight */}
        <motion.div
          className="project-box"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h3>📊 Used Car Buyer Insight</h3>
          <p>
            Data analysis using the CarDekho dataset to visualize fuel types, seller distributions, price trends, and vehicle age stats.
          </p>
          <ul>
            <li>📈 Power BI dashboards + Jupyter</li>
            <li>📊 Price & mileage distribution</li>
            <li>📍 Insights on fuel type & brand</li>
          </ul>
          <div className="tech-tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>Seaborn</span>
            <span>Power BI</span>
          </div>
          <a
            href="https://github.com/kamilath/Enhancing-Buyer-Experience-with-Predictive-and-Analytical-Tools-for-Used-Car-Selection"
            target="_blank"
            rel="noreferrer"
          >
            🔗 GitHub Repo
          </a>
        </motion.div>

        {/* 📦 E-Commerce Delivery Prediction */}
        <motion.div
          className="project-box"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h3>📦 E-Commerce Delivery Prediction</h3>
          <p>
            Machine learning classification to predict on-time delivery using customer & logistics data. Includes model comparison & GridSearch optimization.
          </p>
          <ul>
            <li>🧠 Decision Tree, KNN, Logistic Regression</li>
            <li>📊 EDA with violin plots & heatmaps</li>
            <li>✅ 68% best accuracy (Decision Tree)</li>
          </ul>
          <div className="tech-tags">
            <span>Python</span>
            <span>scikit-learn</span>
            <span>Seaborn</span>
            <span>GridSearchCV</span>
          </div>
          <a
            href="https://github.com/kamilath/E-Commerce-Product-Delivery-Prediction"
            target="_blank"
            rel="noreferrer"
          >
            🔗 GitHub Repo
          </a>
        </motion.div>
        <motion.div
  className="project-box"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 120 }}
>
  <h3>🍽 Zomato Clone – Food Delivery UI</h3>
  <p>
    A responsive web UI clone of Zomato's food delivery page. 
  </p>
  <ul>
    <li>📱 Responsive web layout using media queries</li>
    <li>🍔 Explore food categories: burgers, pizzas, desserts</li>
    <li>🏬 Restaurant showcase layout</li>
    <li>📩 Email subscription form</li>
  </ul>
  <div className="tech-tags">
    <span>HTML</span>
    <span>CSS</span>
    <span>Google Fonts</span>
    <span>Responsive Design</span>
  </div>
  <a
    href="https://github.com/kamilath/Zomato---Largest-Food-Delivery-Network-Clone"
    target="_blank"
    rel="noreferrer"
  >
    🔗 GitHub Repo
  </a>
</motion.div>

      </div>
    </div>
  );
};

export default Projects;

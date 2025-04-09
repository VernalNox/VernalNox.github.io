import React from "react";
import "./App.css";

export default function App() {
  return (
    <main className="main">
      <section className="container">
        <div className="intro">
          <h1 className="heading">Hi, I'm Rajan Gill</h1>
          <p className="subheading">
            I'm a 5th year Electrical Engineering student at the University of Manitoba with a passion for embedded systems, power systems, control systems, and hands-on design. Here’s a showcase of some of my work.
          </p>
        </div>

        <h2 className="section-heading">Featured Projects</h2>
        <div className="projects">
          <div className="card">
            <h3 className="card-title">Vehicle Control Board – Formula Electric</h3>
            <p className="card-description">Designed a Bluetooth module interface, LED driver, and safety relay circuit for the VCB. All circuits tested successfully and integrated with driver interface.</p>
            <a href="https://www.umsae.com/formula-e" target="_blank" rel="noopener noreferrer" className="card-link">UMSAE Website</a>
          </div>

          <div className="card">
            <h3 className="card-title">Power Systems Plotting Tool – Hatch</h3>
            <p className="card-description">Created a Python/Excel tool to process and graph output from power system simulations like PSSE and PSCAD. Vastly sped up analysis for engineering teams.</p>
          </div>

          <div className="card">
            <h3 className="card-title">Oscar Trash Collector – UMEC</h3>
            <p className="card-description">Autonomous robot using Arduino and sensors to detect, sort, and collect trash. Won 1st in UofM Senior Design and qualified for WEC.</p>
          </div>

          <div className="card">
            <h3 className="card-title">Audio Amplifier Passion Project</h3>
            <p className="card-description">Designed a Class AB amplifier PCB in Altium, housed in a 3D-printed enclosure. Functional prototype tested; redesign in progress to address distortion.</p>
          </div>
        </div>

        <h2 className="section-heading">Skills</h2>
        <ul className="skills">
          <li>Embedded Systems (Arduino, STM32, ESP32)</li>
          <li>PCB Design (Altium Designer, KiCad)</li>
          <li>Power Systems Software (CYME, PSSE, CYMTCC)</li>
          <li>Python, C/C++, MATLAB, Excel VBA</li>
          <li>React, CSS, Git/GitHub</li>
          <li>Automation, Control Systems, Analog Circuit Design</li>
        </ul>

        <h2 className="section-heading">Contact</h2>
        <div className="contact">
          <p>📧 Email: <a href="mailto:rajangill256@gmail.com">rajangill256@gmail.com</a></p>
          <p>📞 Phone: +1 431-997-6829</p>
          <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/rajangill-manitoba" target="_blank" rel="noopener noreferrer">rajangill-manitoba</a></p>
        </div>

        <div className="downloads">
          <a href="/Rajanvir Gill - Dec 2024.pdf" download className="download-button">📄 Download Resume</a>
          <a href="/Rajanvir Gill Portfolio Jan2024.pdf" target="_blank" className="download-link">📁 View Portfolio</a>
        </div>
      </section>
    </main>
  );
}
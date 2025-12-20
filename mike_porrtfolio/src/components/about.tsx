// src/components/About.tsx
import React from "react";
import "./about.css";


const About: React.FC = () => {
  return (
    <section id="about" className="about section py-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Intro Row */}
        <div className="row gy-4 justify-content-center align-items-start">
          <div className="col-lg-4">
            <img
              src="/images/portrait.webp"
              className="img-fluid rounded"
              alt="Mikiyas Sintayehu"
            />
          </div>

          <div className="col-lg-8 content">
            <h2>Mikiyas Sintayehu, Visual Artist.</h2>

            <p className="fst-italic py-3">
              My work is about capturing the diverse range of emotions that people
              experience when they interact with themselves through the objects
              they hold in their hands. I aim to question the meaning behind these
              actions and explore the deeper significance they hold in our lives.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Name:</strong>
                    <span>Mikiyas Sintayehu Gebrekidan</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong>
                    <span>13 April 1998</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Nationality:</strong>
                    <span>Ethiopian</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Age:</strong>
                    <span>27</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Commissions:</strong>
                    <span>Available</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong>
                    <span>Addis Ababa, Ethiopia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="section-title mt-5">
          <h2>Biography</h2>
          <p>
            Mikiyas Sintayehu was born in 1998 in Addis Ababa, Ethiopia. He earned
            his bachelor degree in 2023 in Interdisciplinary Visual Arts from the
            Addis Ababa University Alle School of Fine Arts and Design.
          </p>
          <p>
            In 2022 Mikiyas had his first solo show <em>Reflections</em> at
            Atmosphere Gallery, Addis Ababa. He later presented <em>Escape</em>{" "}
            (2023) and <em>Odyssey</em> (2024), and participated in numerous group
            exhibitions across the city.
          </p>
          <p>
            He is currently a studio artist based in Addis Ababa, exploring the
            effects of technology on social life and personal space.
          </p>
        </div>

        {/* Resume */}
        <div className="section-title mt-5">
          <h2>Resume</h2>
        </div>

        <div className="row resume">
          {/* Left Column */}
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Mikiyas Sintayehu</h4>
              <p>
                <em>
                  Interdisciplinary studio artist based in Addis Ababa, Ethiopia
                </em>
              </p>
              <ul>
                <li>Addis Ababa, Ethiopia</li>
                <li>+251 93 965 7365</li>
                <li>mikiyasarts@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>

            <div className="resume-item">
              <h4>Certificate in Film Making</h4>
              <h5>2015</h5>
              <p>
                <em>Tom Videography Training Center, Addis Ababa</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>Diploma in Fine Art</h4>
              <h5>2016 – 2018</h5>
              <p>
                <em>Entoto Polytechnic College, Addis Ababa</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>BA in Interdisciplinary Visual Arts</h4>
              <h5>2019 – 2023</h5>
              <p>
                <em>
                  Addis Ababa University, Alle School of Fine Arts and Design
                </em>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <h3 className="resume-title">Group Exhibitions</h3>

            {[
              ["Cube", "2023", "Embassy of Brazil Residence"],
              ["Impression of Time", "2023", "Alliance Ethio-Française Gallery"],
              ["Faces", "2021", "Hyatt Regency Hotel"],
              ["The Tales of Rodari", "2020", "AAU Gallery"],
              ["Graduation Exhibition", "2018", "Entoto Polytechnic College"]
            ].map(([title, year, venue]) => (
              <div className="resume-item" key={title}>
                <h4>{title}</h4>
                <h5>{year}</h5>
                <p>
                  <em>{venue}</em>
                </p>
              </div>
            ))}

            <h3 className="resume-title">Solo Exhibitions</h3>

            <div className="resume-item">
              <h4>Reflection</h4>
              <h5>2022</h5>
              <p>
                <em>Atmosphere 251 Art Gallery</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>Escape</h4>
              <h5>2023</h5>
              <p>
                <em>Social Addis Art Gallery</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>Odyssey</h4>
              <h5>2024</h5>
              <p>
                <em>Artawi Gallery</em>
              </p>
            </div>
          </div>
        </div>

        {/* Artist Statement */}
        <div className="section-title mt-5">
          <h2>Artist Statement</h2>
          <p>
            My inspiration often begins with ordinary moments—friends gathered
            in my studio or someone lost in their phone. These scenes compel me
            to capture and translate them onto canvas.
          </p>
          <p>
            Working through an Impressionist approach, I focus on light,
            atmosphere, and perspective, with human figures at the center of my
            compositions.
          </p>
          <p>
            By sharing my lived experiences honestly, my work becomes inherently
            political—reflecting collective struggles, aspirations, and the
            emotional texture of contemporary life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

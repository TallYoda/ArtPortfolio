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
            My work is rooted in the home and community that has formed in and around my studio. The paintings are intimate snapshots of the ebb of life in this place—and of the sanctuary a home can hold for the people who gather there.
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
            He lives and works in Addis Ababa, where his studio is both a
            workplace and a home. His paintings come from the community that has
            formed there: intimate scenes of people gathering, sitting together,
            and sharing space as daily life moves through the room. Raised
            watching his mother keep a sanctuary not only for family but for
            neighbors and friends, he treats homemaking as the ground of his
            practice. He is less concerned with becoming a better artist than
            with becoming a better homemaker, trusting that creation needs
            safety, and a home at the least.
          </p>
        </div>

        {/* Artist Statement */}
        <div className="section-title mt-5">
          <h2>Artist Statement</h2>
          <p>
            My work begins in the home and community that has formed in and around my studio. Most of the paintings are intimate snapshots of the ebb of life here: friends gathering, people sitting together, the room filling and emptying as the day turns. I photograph these scenes, then paint from them. The studio stays the same, but the feeling inside it is always shifting.
          </p>
          <p>
            I return to this setting again and again because it is not only a workplace. It is a home. By staying close to one room, I can watch how presence changes from day to day—conversations, moods, the way people share space. After I choose a photograph, I am not trying to copy it exactly. I work through the atmosphere of that moment with loose brushwork, color, and light, so the painting holds the feeling around the scene as much as the scene itself.
          </p>
          <p>
            I learned what a home can be by watching my mother. She was a homemaker not only to our immediate family, but to the people around us. From a young age I saw how the sanctuary she built served many lives. That memory sits under everything I make.
          </p>
          <p>
            I try to be a better homemaker more than I try to be a better artist. Creation needs safety, and a home at the least. The paintings grow out of that belief: that a room held with care can become a place where people gather, and that those small, passing moments of being together are worth keeping.
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
              ["Graduation Exhibition", "2018", "Entoto Polytechnic College"],
              ["The Tales of Rodari", "2020", "AAU Gallery"],
              ["Faces", "2021", "Hyatt Regency Hotel"],
              ["Impression of Time", "2023", "Alliance Ethio-Française Gallery"],
              ["Cube", "2023", "Embassy of Brazil Residence"]
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
      </div>
    </section>
  );
};

export default About;

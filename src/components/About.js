import React from "react";
import profile from "../assets/images/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0ea5e9)",
      }}
    >
      <div className="container">

        {/* Title */}
        <h2
          className="text-center fw-bold mb-5"
          data-aos="fade-up"
          style={{ fontSize: "2.7rem", letterSpacing: "1px" }}
        >
          About Me
        </h2>

        {/* PROFILE IMAGE (CENTERED & GLOW STYLE) */}
        <div className="text-center mb-5" data-aos="zoom-in">
          <div
            style={{
              display: "inline-block",
              padding: "8px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #38bdf8, #6366f1)",
              boxShadow: "0 0 25px rgba(56,189,248,0.6)",
            }}
          >
            <img
              src={profile}
              alt="Profile"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid white",
              }}
            />
          </div>
        </div>

        {/* CONTENT CARD */}
        <div
          className="mx-auto"
          style={{ maxWidth: "800px" }}
          data-aos="fade-up"
        >
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >

            <h3 className="fw-bold mb-3 text-center">
              Hi, I'm Shopto 👋
            </h3>

            <p className="text-center text-light mb-3">
              I am a passionate <strong>Front-End Developer</strong> and
              <strong> UI Designer</strong> who loves building modern,
              interactive, and user-friendly web experiences.
            </p>

            <p className="text-center text-light opacity-75 mb-4">
              I specialize in crafting responsive websites using
              <strong> HTML, CSS, JavaScript, React, Bootstrap,</strong> and
              <strong> Tailwind CSS</strong>. I enjoy turning ideas into clean
              and professional UI designs.
            </p>

            {/* WHAT I DO */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h5 className="fw-bold text-info text-center mb-3">
                What I Do
              </h5>

              <ul className="list-unstyled text-center mb-0">
                <li>✔ Modern Front-End Development</li>
                <li>✔ Responsive UI / UX Design</li>
                <li>✔ Smooth Web Animations</li>
                <li>✔ Creative Branding & Design</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
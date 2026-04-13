import React from "react";

function Hero() {
  return React.createElement(
    "section",
    {
      id: "hero",
      className: "d-flex align-items-center text-white text-center",
      style: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0ea5e9)",
        padding: "40px 0",
      },
    },

    React.createElement(
      "div",
      { className: "container" },

      // GLASS CARD WRAPPER
      React.createElement(
        "div",
        {
          style: {
            maxWidth: "850px",
            margin: "0 auto",
            padding: "40px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          },
          "data-aos": "zoom-in",
        },

        // NAME
        React.createElement(
          "h1",
          {
            style: {
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "15px",
            },
            "data-aos": "fade-up",
          },
          "Hello, I'm Fidah 👋"
        ),

        // ROLE
        React.createElement(
          "h3",
          {
            style: {
              color: "#38bdf8",
              marginBottom: "20px",
              fontWeight: "600",
            },
            "data-aos": "fade-up",
            "data-aos-delay": "200",
          },
          "Front-End Developer | React Enthusiast | UI Designer"
        ),

        // DESCRIPTION
        React.createElement(
          "p",
          {
            style: {
              color: "#cbd5e1",
              fontSize: "1.1rem",
              marginBottom: "30px",
            },
            "data-aos": "fade-up",
            "data-aos-delay": "300",
          },
          "I build modern, responsive and user-friendly web experiences that bring ideas to life."
        ),

        // BUTTONS
        React.createElement(
          "div",
          { "data-aos": "zoom-in", "data-aos-delay": "400" },

          React.createElement(
            "a",
            {
              href: "#projects",
              className: "btn btn-primary btn-lg me-3",
              style: {
                borderRadius: "10px",
                padding: "10px 25px",
              },
            },
            "View Projects"
          ),

          React.createElement(
            "a",
            {
              href: "#contact",
              className: "btn btn-outline-light btn-lg",
              style: {
                borderRadius: "10px",
                padding: "10px 25px",
              },
            },
            "Contact Me"
          )
        )
      )
    )
  );
}

export default Hero;
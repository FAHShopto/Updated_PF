import React from "react";

function Projects() {
  return React.createElement(
    "section",
    {
      id: "projects",
      style: {
        padding: "80px 0",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
      },
    },

    React.createElement(
      "div",
      { className: "container" },

      // Title
      React.createElement(
        "h2",
        {
          style: {
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "50px",
          },
          "data-aos": "fade-up",
        },
        "My Projects"
      ),

      // Row
      React.createElement(
        "div",
        { className: "row" },

        /* PROJECT 1 */
        React.createElement(
          "div",
          { className: "col-md-4 mb-4", "data-aos": "zoom-in" },
          React.createElement(
            "div",
            {
              style: {
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              },
            },

            React.createElement(
              "h5",
              { style: { fontWeight: "bold", marginBottom: "10px" } },
              "Portfolio Website"
            ),

            React.createElement(
              "p",
              { style: { color: "#cbd5e1" } },
              "A modern personal portfolio built using React and Bootstrap."
            ),

            React.createElement(
              "a",
              {
                href: "https://github.com/FAHShopto",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "#38bdf8",
                  color: "#0f172a",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  textDecoration: "none",
                },
              },
              "View Project"
            )
          )
        ),

        /* PROJECT 2 */
        React.createElement(
          "div",
          { className: "col-md-4 mb-4", "data-aos": "zoom-in" },
          React.createElement(
            "div",
            {
              style: {
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              },
            },

            React.createElement(
              "h5",
              { style: { fontWeight: "bold", marginBottom: "10px" } },
              "E-commerce UI"
            ),

            React.createElement(
              "p",
              { style: { color: "#cbd5e1" } },
              "Modern UI design for online shopping experience."
            ),

            React.createElement(
              "a",
              {
                href: "https://github.com/FAHShopto",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "#38bdf8",
                  color: "#0f172a",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  textDecoration: "none",
                },
              },
              "View Project"
            )
          )
        ),

        /* PROJECT 3 */
        React.createElement(
          "div",
          { className: "col-md-4 mb-4", "data-aos": "zoom-in" },
          React.createElement(
            "div",
            {
              style: {
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              },
            },

            React.createElement(
              "h5",
              { style: { fontWeight: "bold", marginBottom: "10px" } },
              "Landing Page"
            ),

            React.createElement(
              "p",
              { style: { color: "#cbd5e1" } },
              "Clean and modern landing page built with Bootstrap + React."
            ),

            React.createElement(
              "a",
              {
                href: "https://github.com/FAHShopto",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "#38bdf8",
                  color: "#0f172a",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  textDecoration: "none",
                },
              },
              "View Project"
            )
          )
        )
      )
    )
  );
}

export default Projects;
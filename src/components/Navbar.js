import React from "react";

function Navbar() {
  return React.createElement(
    "nav",
    {
      className: "navbar navbar-expand-lg fixed-top",
      style: {
        background: "rgba(15, 23, 42, 0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      },
    },

    React.createElement(
      "div",
      { className: "container" },

      // BRAND
      React.createElement(
        "a",
        {
          className: "navbar-brand fw-bold text-white",
          href: "#hero",
          style: { fontSize: "1.5rem", letterSpacing: "1px" },
        },
        "Fidah.dev"
      ),

      // TOGGLER
      React.createElement(
        "button",
        {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
        React.createElement("span", { className: "navbar-toggler-icon" })
      ),

      // MENU
      React.createElement(
        "div",
        { className: "collapse navbar-collapse", id: "navbarNav" },

        React.createElement(
          "ul",
          { className: "navbar-nav ms-auto text-center" },

          // HOME
          React.createElement(
            "li",
            { className: "nav-item mx-2" },
            React.createElement(
              "a",
              {
                className: "nav-link text-white",
                href: "#hero",
                style: { transition: "0.3s" },
              },
              "Home"
            )
          ),

          // ABOUT
          React.createElement(
            "li",
            { className: "nav-item mx-2" },
            React.createElement(
              "a",
              {
                className: "nav-link text-white",
                href: "#about",
              },
              "About"
            )
          ),

          // PROJECTS
          React.createElement(
            "li",
            { className: "nav-item mx-2" },
            React.createElement(
              "a",
              {
                className: "nav-link text-white",
                href: "#projects",
              },
              "Projects"
            )
          ),

          // CONTACT
          React.createElement(
            "li",
            { className: "nav-item mx-2" },
            React.createElement(
              "a",
              {
                className: "nav-link text-white",
                href: "#contact",
              },
              "Contact"
            )
          )
        )
      )
    )
  );
}

export default Navbar;
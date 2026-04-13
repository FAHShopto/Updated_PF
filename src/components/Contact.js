import React from "react";

function Contact() {
  return React.createElement(
    "section",
    {
      id: "contact",
      style: {
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0ea5e9)",
        padding: "80px 0",
        textAlign: "center",
        color: "white",
      },
    },

    React.createElement(
      "div",
      { className: "container" },

      React.createElement(
        "h2",
        {
          className: "fw-bold mb-3",
          style: { fontSize: "2.5rem" },
        },
        "Let’s Connect"
      ),

      React.createElement(
        "p",
        {
          className: "text-white-50 mb-5",
        },
        "Click an icon to visit my profile 🚀"
      ),

      // ICON ROW
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            fontSize: "34px",
          },
        },

        // FACEBOOK
        React.createElement(
          "a",
          {
            href: "https://www.facebook.com/fidah.shopto.2024/",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "#1877F2" },
          },
          React.createElement("i", { className: "fab fa-facebook" })
        ),

        // INSTAGRAM
        React.createElement(
          "a",
          {
            href: "https://www.instagram.com/fidahshopto/",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "#E1306C" },
          },
          React.createElement("i", { className: "fab fa-instagram" })
        ),

        // LINKEDIN (UPDATED)
        React.createElement(
          "a",
          {
            href: "https://www.linkedin.com/in/fidah-shopto-4948801b7/",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "#0A66C2" },
          },
          React.createElement("i", { className: "fab fa-linkedin" })
        ),

        // GITHUB
        React.createElement(
          "a",
          {
            href: "https://github.com/FAHShopto",
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "white" },
          },
          React.createElement("i", { className: "fab fa-github" })
        ),

        // EMAIL
        React.createElement(
          "a",
          {
            href: "mailto:fidahalhasan87@gmail.com",
            style: { color: "#a3e635" },
          },
          React.createElement("i", { className: "fas fa-envelope" })
        )
      ),

      // PHONE
      React.createElement(
        "p",
        {
          style: {
            marginTop: "40px",
            color: "#94a3b8",
            fontSize: "14px",
          },
        },
        "📞 01785484787"
      )
    )
  );
}

export default Contact;
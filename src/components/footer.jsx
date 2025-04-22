import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        padding: "20px 0",
        textAlign: "center",
        color: "white",
        borderTop: "5px solid #fff",
        marginTop: "10px", // Space between slider and footer
      }}
    >
      <p style={{ margin: 0, fontSize: "18px" }}>
        © 2025 Demo Slider | All Rights Reserved
      </p>
      <p style={{ marginTop: "10px", fontSize: "14px" }}>Designed by Akash</p>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        <a
          href="https://akashsrivastavafsd.github.io/"
          style={{ color: "#fff" }}
        >
          Portfolio
        </a>
      </p>
    </div>
  );
};

export default Footer;

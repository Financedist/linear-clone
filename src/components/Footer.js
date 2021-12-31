import React from "react";
import Logo from "../images/linear-logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-dark"
      style={{ fontSize: "0.8rem", borderTop: "1px solid var(--bg-off-black)" }}
    >
      <div className="container py-5 d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="/" className="text-secondary">
            <img src={Logo} alt={Logo} width="25px" />
            <span className="mx-2">Linearr - Designed in Ghana</span>
          </a>
        </div>
        <nav className="footer-nav">
          <ul className="d-flex align-items-center justify-content-between">
            <li className="px-2">
              <a href="/" className="text-secondary">
                Status
              </a>
            </li>
            <li className="px-2">
              <a href="/" className="text-secondary">
                Twitter
              </a>
            </li>
            <li className="px-2">
              <a href="/" className="text-secondary">
                Contact us
              </a>
            </li>
            <li className="px-2">
              <a href="/" className="text-secondary">
                Docs
              </a>
            </li>
            <li className="px-2">
              <a href="/" className="text-secondary">
                API
              </a>
            </li>
            <li className="px-2">
              <a href="/" className="text-secondary">
                Privacy
              </a>
            </li>
            <li className="px-2">
              <a href="/" className="text-secondary">
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Logo from "../images/linear-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const [minimised, setMinimised] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);
  const handleResize = () => {
    if (window.innerWidth < 992) {
      setMinimised(true);
    } else {
      setMinimised(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      console.log(window.scrollY);
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  window.addEventListener("scrollY", handleScroll);
  window.addEventListener("resize", handleResize);

  React.useEffect(handleResize, []);
  React.useEffect(handleScroll, []);

  return (
    <nav
      className={`navbar navbar-dark bg-dark ${minimised && "minimised"} ${
        sticky && "sticky"
      }
      `}
    >
      <div className="container py-2">
        <div
          className="logo text-light d-flex align-items-center"
          style={{ fontSize: "1.4rem" }}
        >
          <img
            src={Logo}
            alt="logo"
            width="25px"
            style={{ borderRadius: "10px" }}
          />
          <span className="px-2">Linear</span>
        </div>
        <ul
          className={`main-menu d-lg-flex align-items-center ms-auto d-none ${
            navOpen && "open"
          }`}
        >
          <li onClick={handleNavToggle}>
            <a href="/">Method</a>
          </li>
          <li onClick={handleNavToggle}>
            <a href="/">Changelog</a>
          </li>
          <li onClick={handleNavToggle}>
            <a href="/">Customers</a>
          </li>
          <li onClick={handleNavToggle}>
            <a href="/">About us</a>
          </li>
          <li onClick={handleNavToggle}>
            <a href="/">Pricing</a>
          </li>
          <li onClick={handleNavToggle}>
            <a href="/">Blog</a>
          </li>
          <li onClick={handleNavToggle}>
            <a href="/">We're hiring</a>
          </li>
        </ul>
        <ul className="cta d-flex mx-2 ms-auto align-items-center">
          <li>
            <a className="login" href="/">
              Login
            </a>
          </li>
          <li>
            <a className="sign-up btn btn-primary py-1" href="/">
              Sign up
            </a>
          </li>
        </ul>
        <button
          className="btn btn-dark d-block d-lg-none"
          onClick={handleNavToggle}
        >
          =
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

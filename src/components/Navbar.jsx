import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "首页", href: "#hero" },
  { label: "项目", href: "#projects" },
  { label: "经历", href: "#experience" },
  { label: "技能", href: "#skills" },
  { label: "联系", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          Alex
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <ul
          className={`navbar__links ${mobileOpen ? "navbar__links--open" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger ${mobileOpen ? "navbar__hamburger--active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="切换菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

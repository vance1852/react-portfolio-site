import "./Footer.css";

const socialLinks = [
  { label: "GitHub", icon: "🐙", href: "#" },
  { label: "掘金", icon: "📘", href: "#" },
  { label: "Twitter", icon: "🐦", href: "#" },
  { label: "LinkedIn", icon: "💼", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              Alex
              <span className="footer__logo-bracket">/&gt;</span>
            </span>
            <p className="footer__tagline">构建优雅的 Web 体验</p>
          </div>

          <div className="footer__social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer__social-link"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Alex Chen. 用 ❤️ 和 ☕ 构建
          </p>
          <p className="footer__tech">React + Vite · 部署于 Vercel</p>
        </div>
      </div>
    </footer>
  );
}

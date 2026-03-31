import { useEffect, useState } from "react";
import "./Hero.css";

const roles = ["前端开发工程师", "UI/UX 爱好者", "开源贡献者"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const displayText = roles[roleIndex].substring(0, charIndex);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid"></div>
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">你好，我是</p>
          <h1 className="hero__name">Alex Chen</h1>
          <div className="hero__role-wrapper">
            <span className="hero__role">{displayText}</span>
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__description">
            热衷于构建优雅、高性能的 Web 应用。3 年前端开发经验， 擅长 React
            生态和现代 CSS，追求像素级的细节还原。
          </p>
          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              查看项目
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              联系我
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <div className="hero__avatar-placeholder">AC</div>
            </div>
          </div>
          <div className="hero__floating-badge hero__floating-badge--react">
            ⚛️ React
          </div>
          <div className="hero__floating-badge hero__floating-badge--vue">
            💚 Vue
          </div>
          <div className="hero__floating-badge hero__floating-badge--ts">
            🔷 TypeScript
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>向下滚动</span>
        <div className="hero__scroll-arrow"></div>
      </div>
    </section>
  );
}

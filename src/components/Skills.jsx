import { useState, useEffect, useRef } from "react";
import "./Skills.css";

const skillCategories = [
  {
    title: "前端开发",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Vue 3", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "CSS/Sass", level: 92 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "后端 & 数据库",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Python", level: 70 },
      { name: "PostgreSQL", level: 72 },
      { name: "MongoDB", level: 68 },
      { name: "Redis", level: 60 },
    ],
  },
  {
    title: "工具 & 其他",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 65 },
      { name: "Figma", level: 82 },
      { name: "Webpack/Vite", level: 85 },
      { name: "CI/CD", level: 60 },
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills__container">
        <div className="skills__header">
          <span className="skills__label">技术栈</span>
          <h2 className="skills__title">专业技能</h2>
          <p className="skills__subtitle">
            持续学习，不断精进。以下是我的核心技术能力。
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="skill-category">
              <div className="skill-category__header">
                <span className="skill-category__icon">{category.icon}</span>
                <h3 className="skill-category__title">{category.title}</h3>
              </div>
              <div className="skill-category__list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item__info">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">{skill.level}%</span>
                    </div>
                    <div className="skill-item__bar">
                      <div
                        className="skill-item__fill"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${catIdx * 0.2 + skillIdx * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

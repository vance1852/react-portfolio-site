import { useState } from "react";
import "./Projects.css";

const categories = ["全部", "前端", "全栈", "开源"];

const projectsData = [
  {
    id: 1,
    title: "Nexa UI 组件库",
    description:
      "基于 Vue 3 的企业级 UI 组件库，包含 20+ 高质量组件，支持主题定制和按需加载。",
    tags: ["Vue 3", "TypeScript", "UnoCSS"],
    category: "开源",
    image: "🧩",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "智能看板系统",
    description: "支持拖拽排序的项目管理看板，集成实时协作和数据可视化功能。",
    tags: ["React", "DnD Kit", "WebSocket"],
    category: "全栈",
    image: "📋",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "3D 数据地球",
    description:
      "基于 Three.js 的交互式 3D 地球可视化，支持实时数据映射和动态动画。",
    tags: ["Three.js", "D3.js", "WebGL"],
    category: "前端",
    image: "🌍",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "菜谱分享平台",
    description: "仿下厨房的全栈菜谱网站，支持菜谱发布、收藏、评分和社区互动。",
    tags: ["Spring Boot", "Vue 3", "MySQL"],
    category: "全栈",
    image: "🍳",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Markdown 编辑器",
    description: "支持实时预览和同步滚动的桌面端 Markdown 编辑器。",
    tags: ["Electron", "React", "CodeMirror"],
    category: "前端",
    image: "📝",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Git Commit 分析器",
    description:
      "自动分析 Git 仓库提交历史，生成贡献者统计和代码变更趋势报告。",
    tags: ["Python", "Click", "Matplotlib"],
    category: "开源",
    image: "📊",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    link: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects =
    activeCategory === "全部"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <span className="projects__label">作品集</span>
          <h2 className="projects__title">精选项目</h2>
          <p className="projects__subtitle">
            以下是我近期参与的一些项目，涵盖前端、全栈和开源领域。
          </p>
        </div>

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeCategory === cat ? "projects__filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? "project-card--featured" : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="project-card__image"
                style={{ background: project.gradient }}
              >
                <span className="project-card__emoji">{project.image}</span>
                <div className="project-card__overlay">
                  <a href={project.link} className="project-card__overlay-btn">
                    🔗 预览
                  </a>
                  <a
                    href={project.github}
                    className="project-card__overlay-btn"
                  >
                    📂 源码
                  </a>
                </div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

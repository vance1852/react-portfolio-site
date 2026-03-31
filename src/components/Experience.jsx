import "./Experience.css";

const experiences = [
  {
    id: 1,
    role: "高级前端工程师",
    company: "TechFlow 科技",
    period: "2024.03 - 至今",
    description:
      "负责公司核心 SaaS 产品的前端架构设计，主导从 Vue 2 到 Vue 3 的技术栈迁移，搭建了组件库和前端工程化体系。",
    tags: ["Vue 3", "TypeScript", "Micro Frontend"],
    current: true,
  },
  {
    id: 2,
    role: "前端工程师",
    company: "DataViz 数据可视化",
    period: "2022.07 - 2024.02",
    description:
      "参与大屏数据可视化项目开发，使用 Three.js 和 D3.js 构建交互式图表和 3D 场景，优化渲染性能提升 40%。",
    tags: ["React", "Three.js", "D3.js", "WebGL"],
    current: false,
  },
  {
    id: 3,
    role: "前端实习生",
    company: "StartUp Lab 创新工场",
    period: "2022.01 - 2022.06",
    description:
      "参与电商小程序和后台管理系统开发，独立完成订单管理模块和数据报表页面。",
    tags: ["React", "Ant Design", "ECharts"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <span className="experience__label">工作经历</span>
          <h2 className="experience__title">职业旅程</h2>
          <p className="experience__subtitle">
            从实习到独当一面，每一步都在成长。
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`timeline-item ${idx % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}
            >
              <div className="timeline-item__dot">
                {exp.current && <span className="timeline-item__pulse"></span>}
              </div>
              <div className="timeline-item__card">
                <div className="timeline-item__header">
                  <div>
                    <h3 className="timeline-item__role">{exp.role}</h3>
                    <p className="timeline-item__company">{exp.company}</p>
                  </div>
                  <span
                    className={`timeline-item__period ${exp.current ? "timeline-item__period--current" : ""}`}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="timeline-item__desc">{exp.description}</p>
                <div className="timeline-item__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="timeline-item__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from "react";
import "./Stats.css";

const statsData = [
  { label: "年开发经验", target: 3, suffix: "+", icon: "⏱️" },
  { label: "完成项目", target: 20, suffix: "+", icon: "🚀" },
  { label: "GitHub Stars", target: 850, suffix: "", icon: "⭐" },
  { label: "开源贡献", target: 120, suffix: "+", icon: "🔧" },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatItem({ stat, isVisible }) {
  const count = useCountUp(stat.target, 2000, isVisible);

  return (
    <div className="stat-item">
      <span className="stat-item__icon">{stat.icon}</span>
      <div className="stat-item__value">
        {count}
        {stat.suffix}
      </div>
      <div className="stat-item__label">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__container">
        {statsData.map((stat) => (
          <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}

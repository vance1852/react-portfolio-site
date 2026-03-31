import "./ThemeToggle.css";

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={darkMode ? "切换到亮色模式" : "切换到暗色模式"}
      title={darkMode ? "切换到亮色模式" : "切换到暗色模式"}
    >
      <span
        className={`theme-toggle__icon ${darkMode ? "theme-toggle__icon--dark" : "theme-toggle__icon--light"}`}
      >
        {darkMode ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

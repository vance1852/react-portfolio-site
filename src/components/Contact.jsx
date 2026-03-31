import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "请输入姓名";
    if (!formData.email.trim()) {
      newErrors.email = "请输入邮箱";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "邮箱格式不正确";
    }
    if (!formData.message.trim()) newErrors.message = "请输入留言内容";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        next[name] = undefined;
        return next;
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <span className="contact__label">联系方式</span>
          <h2 className="contact__title">一起聊聊？</h2>
          <p className="contact__description">
            无论是项目合作、技术交流还是工作机会，都欢迎联系我。 我会在 24
            小时内回复你的消息。
          </p>

          <div className="contact__channels">
            <div className="contact__channel">
              <span className="contact__channel-icon">📧</span>
              <div>
                <p className="contact__channel-label">邮箱</p>
                <p className="contact__channel-value">[email]</p>
              </div>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-icon">💬</span>
              <div>
                <p className="contact__channel-label">微信</p>
                <p className="contact__channel-value">[wechat_id]</p>
              </div>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-icon">🐙</span>
              <div>
                <p className="contact__channel-label">GitHub</p>
                <p className="contact__channel-value">[github_username]</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div
            className={`contact__field ${errors.name ? "contact__field--error" : ""}`}
          >
            <label htmlFor="name" className="contact__field-label">
              姓名
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="你的名字"
              className="contact__input"
            />
            {errors.name && (
              <span className="contact__error">{errors.name}</span>
            )}
          </div>

          <div
            className={`contact__field ${errors.email ? "contact__field--error" : ""}`}
          >
            <label htmlFor="email" className="contact__field-label">
              邮箱
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="[email]"
              className="contact__input"
            />
            {errors.email && (
              <span className="contact__error">{errors.email}</span>
            )}
          </div>

          <div
            className={`contact__field ${errors.message ? "contact__field--error" : ""}`}
          >
            <label htmlFor="message" className="contact__field-label">
              留言
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="写点什么..."
              rows="5"
              className="contact__input contact__textarea"
            ></textarea>
            {errors.message && (
              <span className="contact__error">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={`contact__submit ${status === "sending" ? "contact__submit--sending" : ""}`}
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "发送中..."
              : status === "success"
                ? "✓ 发送成功"
                : "发送消息"}
          </button>
        </form>
      </div>
    </section>
  );
}

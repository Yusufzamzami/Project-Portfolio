import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Mail, Linkedin, Github, MessageCircle, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const socials = [
  { icon: Mail, label: "yusufzamzamijr@gmail.com", href: "mailto:yusufzamzamijr@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/yusufiihamzamzami", href: "https://www.linkedin.com/in/yusufiihamzamzami" },
  { icon: Github, label: "github.com/Yusufzamzami", href: "https://github.com/Yusufzamzami/Yusufzamzami" },
  { icon: MessageCircle, label: "WhatsApp: 0823-2511-0647", href: "https://wa.me/6282325110647" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Let's Connect
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <SectionReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              {(["name", "email", "message"] as const).map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-foreground mb-1.5 capitalize">
                    {field}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      rows={4}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                      placeholder={`Your ${field}...`}
                    />
                  ) : (
                    <input
                      id={field}
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder={`Your ${field}...`}
                    />
                  )}
                  {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
                </div>
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
                {sent ? "Sent!" : "Send Message"}
              </motion.button>
            </form>
          </SectionReveal>

          {/* Socials */}
          <SectionReveal delay={0.15}>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects, or collaborations.
                Feel free to reach out through any channel.
              </p>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card hover-lift group"
                >
                  <social.icon size={20} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

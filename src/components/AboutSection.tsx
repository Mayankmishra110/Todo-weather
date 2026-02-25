import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const stats = [
  { emoji: "🏫", value: 12, suffix: "+", label: "Institutes Onboarded" },
  { emoji: "🖥️", value: 3400, suffix: "+", label: "Devices Monitored" },
  { emoji: "📍", value: 6, suffix: "", label: "Cities Across India" },
];

const team = [
  { initials: "MM", name: "Mayank Mishra", email: "kmmay15@gmail.com", phone: "8987551030" },
  { initials: "SK", name: "Shivam Kumar", email: "shkm34@gmail.com", phone: "9525790951", whatsapp: true },
];

function useCountUp(target: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, trigger]);
  return count;
}

const StatCounter = ({ emoji, value, suffix, label, trigger }: { emoji: string; value: number; suffix: string; label: string; trigger: boolean }) => {
  const count = useCountUp(value, trigger);
  return (
    <div className="text-center">
      <div className="text-3xl mb-2">{emoji}</div>
      <div className="text-3xl font-bold">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue">About Kavach AI</p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">About Kavach AI</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kavach AI is a technology company building focused, high-impact AI products for Indian institutions and enterprises. 
            We believe in building tools that are affordable, practical, and made for the ground realities of Bharat.
          </p>
        </motion.div>

        {/* Stats */}
        <div ref={ref} className="mx-auto mb-16 grid max-w-2xl grid-cols-3 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} trigger={visible} />
          ))}
        </div>

        {/* Team */}
        <div className="mx-auto max-w-md">
          <h3 className="mb-6 text-center text-lg font-semibold">Our Team</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {team.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-glow-blue">
                  {t.initials}
                </div>
                <p className="text-sm font-semibold mb-2">{t.name}</p>
                <div className="flex flex-col items-center gap-1.5 w-full">
                  <a href={`mailto:${t.email}`} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-glow-blue transition-colors">
                    <Mail className="h-3 w-3" />
                    <span className="truncate">{t.email}</span>
                  </a>
                  <a
                    href={`tel:${t.phone}`}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-glow-blue transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    <span>{t.phone}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

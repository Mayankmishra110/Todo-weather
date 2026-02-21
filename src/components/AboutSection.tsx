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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue">About Hum</p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">About Hum</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hum is a technology company building focused, high-impact AI products for Indian institutions and enterprises. 
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
          <div className="grid grid-cols-2 gap-4">
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
                  {t.whatsapp ? (
                    <a href={`https://wa.me/91${t.phone}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-green-500 transition-colors">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>{t.phone}</span>
                    </a>
                  ) : (
                    <a href={`tel:${t.phone}`} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-glow-blue transition-colors">
                      <Phone className="h-3 w-3" />
                      <span>{t.phone}</span>
                    </a>
                  )}
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

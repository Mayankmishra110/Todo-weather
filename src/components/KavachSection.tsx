import { motion } from "framer-motion";
import { Shield, BarChart3, Bell, LayoutDashboard, Users, Server, Download, Settings, Activity } from "lucide-react";

const features = [
  { icon: Shield, emoji: "🛡️", title: "App & Website Tracking", desc: "Monitor every application and website accessed on lab computers in real time." },
  { icon: BarChart3, emoji: "📊", title: "AI Usage Insights", desc: "Get weekly AI-generated reports on student focus patterns, distractions, and productivity." },
  { icon: Bell, emoji: "🔔", title: "Smart Alerts", desc: "Instant alerts for policy violations — blocked app attempts, restricted site visits, anomalies." },
  { icon: LayoutDashboard, emoji: "👨‍💼", title: "Role-Based Dashboard", desc: "Separate views for IT Head, Principal, and Coaching Owner with permission controls." },
  { icon: Users, emoji: "👪", title: "Parent Portal", desc: "Optional parent access to view child's lab usage summary." },
  { icon: Server, emoji: "🖥️", title: "Local Server Architecture", desc: "Data stays within your campus. No cloud dependency. Better privacy, lower cost." },
];

const steps = [
  { icon: Download, step: "01", title: "Install Agent", desc: "Deploy our lightweight Windows desktop agent on lab computers in minutes." },
  { icon: Settings, step: "02", title: "Configure Rules", desc: "Set app block lists, time limits, and alert triggers from your web dashboard." },
  { icon: Activity, step: "03", title: "Monitor & Act", desc: "View real-time reports, receive alerts, and take action from anywhere." },
];

const KavachSection = () => {
  return (
    <section id="kavach" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue">hanura AI</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Computer Lab Discipline &<br className="hidden sm:block" /> Student Safety Platform
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Built for Indian schools and coaching institutes. Not for remote employees.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="mx-auto mb-20 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg">
                {f.emoji}
              </div>
              <h3 className="mb-1.5 text-base font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue">How It Works</p>
          <h3 className="text-2xl font-bold sm:text-3xl">Up and Running in 3 Steps</h3>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-card">
                <s.icon className="h-7 w-7 text-glow-blue" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {s.step}
                </span>
              </div>
              <h4 className="mb-2 text-lg font-semibold">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KavachSection;

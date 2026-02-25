import { motion } from "framer-motion";
import { Download, Settings, Activity } from "lucide-react";

const steps = [
  { icon: Download, step: "01", title: "Install Agent", desc: "Deploy our lightweight Windows desktop agent on lab computers in minutes." },
  { icon: Settings, step: "02", title: "Configure Rules", desc: "Set app block lists, time limits, and alert triggers from your web dashboard." },
  { icon: Activity, step: "03", title: "Monitor & Act", desc: "View real-time reports, receive alerts, and take action from anywhere." },
];

const KavachSection = () => {
  return (
    <section id="kavach" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
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

import { motion } from "framer-motion";

interface HeroSectionProps {
  onBookDemo: () => void;
}

const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  const scrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background graphics: orbs + grid + diagonal */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-glow-blue/5"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
              left: `${5 + i * 17}%`,
              top: `${10 + ((i * 15) % 60)}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          />
        ))}
        {/* Stronger mesh orbs left/right */}
        <div
          className="absolute -left-[20%] top-1/2 h-[70%] w-[50%] -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
          style={{ background: "hsl(var(--glow-blue) / 0.15)" }}
          aria-hidden
        />
        <div
          className="absolute -right-[20%] top-1/3 h-[50%] w-[40%] rounded-full opacity-20 blur-[100px]"
          style={{ background: "hsl(var(--glow-gold) / 0.12)" }}
          aria-hidden
        />
        <div className="hero-grid-lines absolute inset-0 opacity-80" aria-hidden />
        <div className="hero-diagonal absolute inset-0 opacity-100" aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--glow-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--glow-blue)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-glow-blue animate-pulse-glow" />
            Now launching Kavach AI
          </div>

          {/* Full-width heading + subheading panel */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm hero-content-glow hero-panel-mesh py-10 shadow-[0_0_80px_-20px_hsl(var(--glow-blue)/0.2),inset_0_1px_0_0_hsl(var(--glow-blue)/0.08)] sm:rounded-3xl sm:py-12 lg:py-16">
            {/* Dot pattern */}
            <div className="hero-pattern absolute inset-0 opacity-70 pointer-events-none" aria-hidden />
            {/* Gradient top edge */}
            <div
              className="absolute left-0 right-0 top-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--glow-blue) / 0.4), hsl(var(--glow-gold) / 0.3), hsl(var(--glow-blue) / 0.4), transparent)",
              }}
            />
            {/* Bottom gradient edge */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--glow-blue) / 0.15), transparent)",
              }}
            />
            {/* Corner accents */}
            <div
              className="absolute left-0 top-0 h-32 w-32 opacity-50"
              style={{
                background: "radial-gradient(circle at 0 0, hsl(var(--glow-blue) / 0.25), transparent 70%)",
              }}
              aria-hidden
            />
            <div
              className="absolute right-0 top-0 h-32 w-32 opacity-50"
              style={{
                background: "radial-gradient(circle at 100% 0, hsl(var(--glow-gold) / 0.2), transparent 70%)",
              }}
              aria-hidden
            />

            <div className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-14">
              <h1 className="mb-8 text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                Building{" "}
                <span className="text-gradient bg-clip-text text-transparent">
                  smarter, disciplined
                </span>{" "}
                computer labs
              </h1>

              <ul className="mx-auto max-w-2xl space-y-4 text-center sm:max-w-xl sm:text-left">
                {[
                  {
                    text: "Monitor all PCs from one screen.",
                    icon: (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                    ),
                  },
                  {
                    text: "Stop gaming, social media, and YouTube with one click.",
                    icon: (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ),
                  },
                  {
                    text: "Get instant alerts when rules are broken.",
                    icon: (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-center gap-4 text-base sm:justify-start sm:text-lg"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary"
                      aria-hidden
                    >
                      {item.icon}
                    </span>
                    <span className="text-premium-muted leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProducts}
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-glow hover:shadow-[0_0_50px_-10px_hsl(var(--glow-blue)/0.4)]"
            >
              Explore Kavach AI
            </button>
            <button
              onClick={scrollToContact}
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Quick Enquiry
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

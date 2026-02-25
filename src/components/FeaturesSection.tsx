import { motion } from "framer-motion";
import {
  Monitor,
  CircleSlash,
  Clock,
  Bell,
  FileText,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

type CardAccent = "blue" | "red" | "gold" | "orange" | "green" | "purple";

interface BenefitCard {
  id: string;
  title: string;
  benefit: string;
  example: string;
  icon: "monitor-stack" | "slash-circle" | "clock" | "bell" | "file-text" | "wifi-off";
  accent: CardAccent;
}

const BENEFIT_CARDS: BenefitCard[] = [
  {
    id: "live-status",
    title: "Live Lab Status",
    benefit: "See how many PCs are ON, idle, or offline — at a glance.",
    example: 'Example: "Total: 60 — Active: 47 — Offline: 5"',
    icon: "monitor-stack",
    accent: "blue",
  },
  {
    id: "stop-distractions",
    title: "Stop Distractions (One click)",
    benefit: "One button locks browsers, games and social apps during class.",
    example: '"Clicked Lock All — YouTube & games blocked on all PCs"',
    icon: "slash-circle",
    accent: "red",
  },
  {
    id: "study-mode",
    title: "Start Study Mode",
    benefit: "Set a study timer — students can only use approved apps.",
    example: '"45 min Study Mode — Only Tally & MS Office allowed"',
    icon: "clock",
    accent: "gold",
  },
  {
    id: "live-alerts",
    title: "Live Alerts",
    benefit: "Get instant alerts if a student opens YouTube, installs a game, or tries to bypass controls.",
    example: '"Alert: System 12 opened YouTube — blocked"',
    icon: "bell",
    accent: "orange",
  },
  {
    id: "show-parents",
    title: "Show Proof",
    benefit: "Download a simple PDF report with attendance and screen use for students.",
    example: '"Monthly report: 20 class sessions — 92% productive time"',
    icon: "file-text",
    accent: "green",
  },
  {
    id: "works-offline",
    title: "Local Server",
    benefit: "Data stays at your center — works without internet (optional local setup).",
    example: '"Local mode: Works even if internet is down"',
    icon: "wifi-off",
    accent: "purple",
  },
];

const ICON_MAP: Record<BenefitCard["icon"], LucideIcon> = {
  "monitor-stack": Monitor,
  "slash-circle": CircleSlash,
  clock: Clock,
  bell: Bell,
  "file-text": FileText,
  "wifi-off": WifiOff,
};

const ACCENT_STYLES: Record<CardAccent, { border: string; iconBg: string; iconText: string; glow: string }> = {
  blue: {
    border: "border-t-2 border-t-blue-500/60",
    iconBg: "bg-blue-500/15",
    iconText: "text-blue-400",
    glow: "hover:shadow-[0_24px_60px_rgba(59,130,246,0.15)]",
  },
  red: {
    border: "border-t-2 border-t-red-500/60",
    iconBg: "bg-red-500/15",
    iconText: "text-red-400",
    glow: "hover:shadow-[0_24px_60px_rgba(239,68,68,0.15)]",
  },
  gold: {
    border: "border-t-2 border-t-amber-500/60",
    iconBg: "bg-amber-500/15",
    iconText: "text-amber-400",
    glow: "hover:shadow-[0_24px_60px_rgba(245,158,11,0.15)]",
  },
  orange: {
    border: "border-t-2 border-t-orange-500/60",
    iconBg: "bg-orange-500/15",
    iconText: "text-orange-400",
    glow: "hover:shadow-[0_24px_60px_rgba(249,115,22,0.15)]",
  },
  green: {
    border: "border-t-2 border-t-emerald-500/60",
    iconBg: "bg-emerald-500/15",
    iconText: "text-emerald-400",
    glow: "hover:shadow-[0_24px_60px_rgba(16,185,129,0.15)]",
  },
  purple: {
    border: "border-t-2 border-t-violet-500/60",
    iconBg: "bg-violet-500/15",
    iconText: "text-violet-400",
    glow: "hover:shadow-[0_24px_60px_rgba(139,92,246,0.15)]",
  },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 bg-[rgba(10,15,25,0.4)]"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p
            id="features-heading"
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue"
          >
            Features you will get
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need to run a disciplined lab.
          </h2>
        </motion.div>

        {/* 6-card grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {BENEFIT_CARDS.map((card, i) => {
            const IconComponent = ICON_MAP[card.icon];
            const styles = ACCENT_STYLES[card.accent];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-950/95 text-left shadow-[0_18px_45px_rgba(15,23,42,0.75)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02] ${styles.border} ${styles.glow}`}
              >
                {/* Accent glow in the corner */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-25 ${styles.iconBg}`}
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col gap-4 p-5 sm:p-6 lg:gap-5 lg:p-6">
                  {/* Icon + heading in one line */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 ${styles.iconBg} ${styles.iconText}`}
                      role="img"
                      aria-label={card.icon.replace("-", " ")}
                    >
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                    </span>
                    <h3 className="min-w-0 text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description below */}
                  <p className="text-[0.9375rem] leading-[1.6] text-slate-300/95 sm:text-base">
                    {card.benefit}
                  </p>

                  {/* Example below */}
                  <div className="mt-auto rounded-lg border-l-2 border-slate-500/40 bg-slate-500/5 px-3 py-2.5">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Example
                    </p>
                    <p className="mt-1 text-[0.8125rem] leading-[1.5] text-slate-200/90 sm:text-sm">
                      {card.example
                        .replace(/^Example:\s*"?/i, "")
                        .replace(/^"?|"$/g, "")
                        .trim()}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Shield, Lock, ArrowRight } from "lucide-react";

interface ProductsSectionProps {
  onKavachDetails: () => void;
  onNotify: (product: string) => void;
}

const ProductsSection = ({ onKavachDetails, onNotify }: ProductsSectionProps) => {
  const products = [
    {
      title: "hanura AI",
      badge: "Live",
      badgeClass: "bg-emerald-500/10 text-emerald-400",
      dotClass: "bg-emerald-400",
      desc: "Student safety & computer lab discipline platform for schools and coaching institutes. Desktop-first. AI-powered.",
      price: "From ₹100/device/month",
      cta: "See Details",
      onClick: onKavachDetails,
      active: true,
    },
    {
      title: "HumShield",
      badge: "Coming Soon",
      badgeClass: "bg-muted text-muted-foreground",
      dotClass: "bg-muted-foreground",
      desc: "Enterprise-grade cybersecurity compliance platform. Launching 2025.",
      price: null,
      cta: "Notify Me",
      onClick: () => onNotify("HumShield"),
      active: false,
    },
    {
      title: "HumInsights",
      badge: "In Development",
      badgeClass: "bg-muted text-muted-foreground",
      dotClass: "bg-muted-foreground",
      desc: "AI analytics dashboard for institutional performance tracking.",
      price: null,
      cta: "Notify Me",
      onClick: () => onNotify("HumInsights"),
      active: false,
    },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue">Our Products</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Focused AI Products for Institutions</h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-xl border p-6 transition-all ${
                p.active
                  ? "border-border bg-card shadow-card hover:shadow-card-hover hover:border-glow-blue/30"
                  : "border-border/50 bg-card/50 opacity-75"
              }`}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${p.active ? "bg-primary/10" : "bg-muted"}`}>
                  {p.active ? <Shield className="h-4 w-4 text-glow-blue" /> : <Lock className="h-4 w-4 text-muted-foreground" />}
                </div>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${p.badgeClass}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${p.dotClass}`} />
                  {p.badge}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              {p.price && <p className="mb-4 text-sm font-semibold text-glow-blue">{p.price}</p>}

              <button
                onClick={p.onClick}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5 ${
                  p.active ? "text-glow-blue" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

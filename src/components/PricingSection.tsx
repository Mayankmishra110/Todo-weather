import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onTrial: () => void;
  onBookDemo: () => void;
  onContactSales: () => void;
}

const PricingSection = ({ onTrial, onBookDemo, onContactSales }: PricingSectionProps) => {
  const [annual, setAnnual] = useState(false);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Starter",
      monthly: 100,
      annual: 80,
      devices: "Up to 50",
      features: ["Basic monitoring", "Web dashboard", "Email alerts"],
      cta: "Start Free Trial",
      onClick: onTrial,
      popular: false,
    },
    {
      name: "Institute",
      monthly: 150,
      annual: 120,
      devices: "Up to 300",
      features: ["Everything in Starter", "AI-powered insights", "Parent portal", "Priority support", "Custom rule engine"],
      cta: "Get Quotation",
      onClick: scrollToContact,
      popular: true,
    },
    {
      name: "Enterprise",
      monthly: null,
      annual: null,
      devices: "Unlimited",
      features: ["Everything in Institute", "Local server setup", "Dedicated onboarding", "Custom integrations", "SLA guarantee"],
      cta: "Contact Sales",
      onClick: onContactSales,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue">Pricing</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
        </motion.div>

        {/* Toggle */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-6 w-11 rounded-full transition-colors ${annual ? "bg-primary" : "bg-secondary"}`}
            role="switch"
            aria-checked={annual}
          >
            <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-foreground transition-transform duration-200 ${annual ? "translate-x-5" : ""}`} />
          </button>
          <span className={`text-sm font-medium transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual <span className="text-glow-blue text-xs font-semibold">Save 20%</span>
          </span>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl border p-8 transition-all ${
                plan.popular ? "border-glow-blue/40 bg-card shadow-glow" : "border-border bg-card shadow-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="mb-1 text-lg font-bold">{plan.name}</h3>
              <p className="mb-4 text-xs text-muted-foreground">{plan.devices} devices</p>

              <div className="mb-6">
                {plan.monthly !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">₹{annual ? plan.annual : plan.monthly}</span>
                    <span className="text-sm text-muted-foreground">/device/month</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold">Custom</span>
                )}
              </div>

              <ul className="mb-8 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-glow-blue" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={plan.onClick}
                className={`block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Bulk discounts available for 500+ devices. Annual billing recommended for institutions.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

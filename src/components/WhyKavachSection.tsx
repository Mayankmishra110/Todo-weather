import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { old: "Built for remote employees", kavach: "Built for computer labs & classrooms" },
  { old: "Focus on productivity billing", kavach: "Focus on student safety & discipline" },
  { old: "Cloud-only, data leaves campus", kavach: "Local server option, data stays on campus" },
  { old: "No student-specific rules", kavach: "Age-appropriate content rules, focus modes" },
  { old: "No parent access", kavach: "Parent portal included" },
  { old: "Expensive enterprise pricing", kavach: "Starts at ₹100/device/month" },
];

const WhyKavachSection = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Built for Students.{" "}
            <span className="text-glow-blue">Not Employees.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border"
        >
          <div className="grid grid-cols-2 border-b border-border bg-card">
            <div className="p-4 text-center text-sm font-semibold text-muted-foreground">Generic Tools</div>
            <div className="border-l border-border p-4 text-center text-sm font-semibold text-glow-blue">Kavach AI</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-border last:border-b-0">
              <div className="flex items-start gap-2 p-4 text-sm text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/60" /> {r.old}
              </div>
              <div className="flex items-start gap-2 border-l border-border bg-card/50 p-4 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-glow-blue" /> {r.kavach}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKavachSection;

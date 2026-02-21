import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "KAVACH AI helped us reduce unauthorized browsing by 80% in our computer lab within the first week.",
    name: "Rajesh Kumar",
    role: "IT Head, Delhi Public School, Lucknow",
  },
  {
    quote: "Finally a tool made for Indian schools. Setup was fast and the dashboard is very easy to use.",
    name: "Priya Sharma",
    role: "Principal, Sunrise Coaching Institute, Jaipur",
  },
  {
    quote: "The local server option was the deciding factor for us. Our data stays with us.",
    name: "Anil Verma",
    role: "Chairman, TechBridge Academy, Pune",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue">Testimonials</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Trusted by Educators Across India</h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-glow-gold text-glow-gold" />
                ))}
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-glow-blue">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    institute: "",
    email: "",
    phone: "",
    devices: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-lg text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-glow-blue">Get Started</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Book an Enquiry and Receive a Call Back with Quotations</h2>
          <p className="mb-10 text-muted-foreground">
            Fill out the form below and our team will get back to you with detailed quotations and pricing information.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-border bg-card p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-3xl">✅</span>
              </div>
              <p className="text-lg font-semibold mb-2">Thank you!</p>
              <p className="text-sm text-muted-foreground">Our team will reach out within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Name <span className="text-destructive">*</span></label>
                  <input name="name" required value={form.name} onChange={handleChange} placeholder="Your Name"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Institute Name <span className="text-destructive">*</span></label>
                  <input name="institute" required value={form.institute} onChange={handleChange} placeholder="Institute Name"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Email <span className="text-destructive">*</span></label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Phone <span className="text-destructive">*</span></label>
                  <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Number of Devices</label>
                <select name="devices" value={form.devices} onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Select range</option>
                  <option value="<50">Less than 50</option>
                  <option value="50-150">50 – 150</option>
                  <option value="150-300">150 – 300</option>
                  <option value="300+">300+</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Message (optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your needs..."
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              </div>
              <button type="submit"
                className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-glow">
                Request Call Back
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

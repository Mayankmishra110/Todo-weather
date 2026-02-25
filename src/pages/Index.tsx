import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import KavachSection from "@/components/KavachSection";
import PricingSection from "@/components/PricingSection";
import WhyKavachSection from "@/components/WhyKavachSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import NotifyModal from "@/components/NotifyModal";
import KavachDetailModal from "@/components/KavachDetailModal";
import LegalModal from "@/components/LegalModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);
  const [contactSalesOpen, setContactSalesOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [notifyProduct, setNotifyProduct] = useState("");
  const [kavachOpen, setKavachOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const openNotify = (product: string) => {
    setNotifyProduct(product);
    setNotifyOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onBookDemo={() => setDemoOpen(true)} />
      <HeroSection onBookDemo={() => setDemoOpen(true)} />
      <ProductsSection onKavachDetails={() => setKavachOpen(true)} onNotify={openNotify} />
      <FeaturesSection />
      <KavachSection />
      <PricingSection onTrial={() => setTrialOpen(true)} onBookDemo={() => setDemoOpen(true)} onContactSales={() => setContactSalesOpen(true)} />
      <WhyKavachSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer onPrivacy={() => setPrivacyOpen(true)} onTerms={() => setTermsOpen(true)} />

      {/* Demo Booking Modal */}
      <FormModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        title="Book a Demo"
        submitLabel="Schedule Demo"
        successMessage="Demo booked! Our team will confirm your slot within 24 hours."
        fields={[
          { name: "name", label: "Name", required: true, placeholder: "Your Name" },
          { name: "institute", label: "Institute", required: true, placeholder: "Institute Name" },
          { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
          { name: "phone", label: "Phone", required: true, placeholder: "+91 98765 43210" },
          { name: "time", label: "Preferred Time", required: true, options: ["Mon 10:00 AM", "Tue 2:00 PM", "Wed 11:00 AM", "Thu 3:00 PM", "Fri 10:00 AM"], placeholder: "Select a slot" },
        ]}
      />

      {/* Trial Signup Modal */}
      <FormModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        title="Start Your Free Trial"
        submitLabel="Start Trial"
        successMessage="Trial activated! Check your email for next steps."
        fields={[
          { name: "name", label: "Name", required: true, placeholder: "Your Name" },
          { name: "institute", label: "Institute", required: true, placeholder: "Institute Name" },
          { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
          { name: "devices", label: "Number of Devices", required: true, options: ["< 10", "10–25", "25–50"], placeholder: "Select range" },
        ]}
      />

      {/* Contact Sales Modal */}
      <FormModal
        isOpen={contactSalesOpen}
        onClose={() => setContactSalesOpen(false)}
        title="Contact Sales"
        submitLabel="Send Message"
        successMessage="Message sent! Our sales team will get back to you shortly."
        fields={[
          { name: "name", label: "Name", required: true, placeholder: "Your Name" },
          { name: "company", label: "Company / Institute", required: true, placeholder: "Organization Name" },
          { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
          { name: "phone", label: "Phone", required: true, placeholder: "+91 98765 43210" },
          { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your requirements..." },
        ]}
      />

      {/* Notify Modal */}
      <NotifyModal isOpen={notifyOpen} onClose={() => setNotifyOpen(false)} productName={notifyProduct} />

      {/* KAVACH Detail Modal */}
      <KavachDetailModal isOpen={kavachOpen} onClose={() => setKavachOpen(false)} onBookDemo={() => setDemoOpen(true)} />

      {/* Legal Modals */}
      <LegalModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} type="privacy" />
      <LegalModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} type="terms" />
    </div>
  );
};

export default Index;

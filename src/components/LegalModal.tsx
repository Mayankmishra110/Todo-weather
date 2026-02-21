import Modal from "./Modal";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms";
}

const privacyText = `
**Privacy Policy — Hanura AI Technologies Pvt. Ltd.**

Last updated: January 1, 2025

Hanura AI Technologies Pvt. Ltd. ("Hanura AI", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our products and services.

**1. Information We Collect**
We collect information you provide directly, including your name, email address, phone number, institute details, and device information when you register for our products or contact us.

**2. How We Use Your Information**
We use your information to provide and improve our services, process your transactions, send you updates about our products, respond to your inquiries, and comply with legal obligations.

**3. Data Storage and Security**
For hanura AI users with local server deployment, monitoring data is stored on-premises within your institution's infrastructure. Cloud-hosted data is stored securely using industry-standard encryption.

**4. Data Sharing**
We do not sell your personal information. We may share data with service providers who assist in operating our products, subject to confidentiality agreements.

**5. Student Data Protection**
We are committed to protecting student data. All student activity data collected through hanura AI is accessible only to authorized school administrators, IT staff, and (where enabled) parents/guardians.

**6. Your Rights**
You have the right to access, correct, or delete your personal data. Contact us at privacy@hanuraai.com to exercise these rights.

**7. Contact Us**
For privacy-related questions, email privacy@hanuraai.com or write to our registered office.
`;

const termsText = `
**Terms of Use — Hanura AI Technologies Pvt. Ltd.**

Last updated: January 1, 2025

These Terms of Use govern your access to and use of the products and services provided by Hanura AI Technologies Pvt. Ltd.

**1. Acceptance of Terms**
By accessing or using our products, you agree to be bound by these Terms. If you do not agree, do not use our products.

**2. Products and Services**
Hanura AI provides AI-powered software products for institutions, including hanura AI for computer lab monitoring and student safety. Products are licensed, not sold.

**3. User Accounts**
You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.

**4. Acceptable Use**
You agree to use our products only for lawful purposes and in accordance with institutional policies. You shall not misuse monitoring data, attempt to circumvent security features, or use the products to violate any individual's rights.

**5. Payment Terms**
Subscription fees are billed monthly or annually as selected. All fees are in Indian Rupees (INR) and are exclusive of applicable taxes. Refunds are subject to our refund policy.

**6. Intellectual Property**
All content, features, and functionality of our products are owned by Hanura AI Technologies and protected by intellectual property laws.

**7. Limitation of Liability**
To the maximum extent permitted by law, Hanura AI shall not be liable for any indirect, incidental, or consequential damages arising from your use of our products.

**8. Termination**
We reserve the right to suspend or terminate your access if you violate these Terms.

**9. Governing Law**
These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi.

**10. Contact**
For questions about these Terms, email legal@hanuraai.com.
`;

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  const content = type === "privacy" ? privacyText : termsText;
  const title = type === "privacy" ? "Privacy Policy" : "Terms of Use";

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="max-w-2xl">
      <div className="prose prose-sm prose-invert max-w-none">
        {content.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
            return <h4 key={i} className="text-base font-bold mt-4 mb-2">{paragraph.replace(/\*\*/g, "")}</h4>;
          }
          if (paragraph.includes("**")) {
            const parts = paragraph.split(/\*\*/g);
            return (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part
                )}
              </p>
            );
          }
          return <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">{paragraph}</p>;
        })}
      </div>
    </Modal>
  );
};

export default LegalModal;

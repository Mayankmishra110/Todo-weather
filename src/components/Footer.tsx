interface FooterProps {
  onPrivacy: () => void;
  onTerms: () => void;
}

const Footer = ({ onPrivacy, onTerms }: FooterProps) => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl font-bold tracking-tight text-foreground">
              hum<span className="text-glow-blue">.</span>
            </button>
            <p className="mt-1 text-sm text-muted-foreground">Intelligent Systems for Bharat</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <button onClick={() => scrollTo("#products")} className="text-muted-foreground hover:text-foreground transition-colors">Products</button>
            <button onClick={() => scrollTo("#pricing")} className="text-muted-foreground hover:text-foreground transition-colors">Pricing</button>
            <button onClick={() => scrollTo("#about")} className="text-muted-foreground hover:text-foreground transition-colors">About</button>
            <button onClick={() => scrollTo("#contact")} className="text-muted-foreground hover:text-foreground transition-colors">Contact</button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <button onClick={onPrivacy} className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</button>
            <button onClick={onTerms} className="text-muted-foreground hover:text-foreground transition-colors">Terms of Use</button>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X (Twitter)">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2025 Hum Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

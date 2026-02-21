import Modal from "./Modal";
import { Shield, BarChart3, Bell, LayoutDashboard, Users, Server } from "lucide-react";

interface KavachDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

const features = [
  { icon: Shield, title: "App & Website Tracking", desc: "Monitor every application and website accessed on lab computers in real time." },
  { icon: BarChart3, title: "AI Usage Insights", desc: "Weekly AI-generated reports on student focus patterns, distractions, and productivity." },
  { icon: Bell, title: "Smart Alerts", desc: "Instant alerts for policy violations — blocked app attempts, restricted site visits." },
  { icon: LayoutDashboard, title: "Role-Based Dashboard", desc: "Separate views for IT Head, Principal, and Coaching Owner." },
  { icon: Users, title: "Parent Portal", desc: "Optional parent access to view child's lab usage summary." },
  { icon: Server, title: "Local Server Architecture", desc: "Data stays within your campus. No cloud dependency." },
];

const KavachDetailModal = ({ isOpen, onClose, onBookDemo }: KavachDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="hanura AI — Product Details" maxWidth="max-w-2xl">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-glow-blue font-semibold mb-1">Computer Lab Discipline & Student Safety Platform</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Built for Indian schools and coaching institutes. Monitor student activity, enforce digital discipline, and ensure compliance — all from a single dashboard.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Key Features</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 rounded-lg border border-border bg-background p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-4 w-4 text-glow-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-4">
          <h4 className="text-sm font-semibold mb-2">Pricing Summary</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span><strong className="text-foreground">Starter:</strong> ₹100/device/mo</span>
            <span><strong className="text-foreground">Institute:</strong> ₹150/device/mo</span>
            <span><strong className="text-foreground">Enterprise:</strong> Custom</span>
          </div>
        </div>

        <button
          onClick={() => { 
            onClose(); 
            setTimeout(() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }, 300);
          }}
          className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get Quotation
        </button>
      </div>
    </Modal>
  );
};

export default KavachDetailModal;

import { useState } from "react";
import Modal from "./Modal";

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const NotifyModal = ({ isOpen, onClose, productName }: NotifyModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={submitted ? undefined : `Get Notified — ${productName}`}>
      {submitted ? (
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <span className="text-3xl">🎉</span>
          </div>
          <p className="text-lg font-semibold mb-1">You're on the list!</p>
          <p className="text-sm text-muted-foreground">We'll notify you when {productName} launches.</p>
          <button
            onClick={handleClose}
            className="mt-4 rounded-lg bg-secondary px-6 py-2 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter your email and we'll let you know as soon as {productName} is ready.
          </p>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Notify Me
          </button>
        </form>
      )}
    </Modal>
  );
};

export default NotifyModal;

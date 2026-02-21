import { useState } from "react";
import Modal from "./Modal";

interface FormField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
}

const FormModal = ({ isOpen, onClose, title, fields, submitLabel, successMessage }: FormModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({});
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={submitted ? undefined : title}>
      {submitted ? (
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <span className="text-3xl">✅</span>
          </div>
          <p className="text-lg font-semibold mb-2">{successMessage}</p>
          <button
            onClick={handleClose}
            className="mt-4 rounded-lg bg-secondary px-6 py-2 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) =>
            field.options ? (
              <div key={field.name}>
                <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                  {field.label} {field.required && <span className="text-destructive">*</span>}
                </label>
                <select
                  required={field.required}
                  value={formData[field.name] || ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">{field.placeholder || "Select..."}</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ) : field.type === "textarea" ? (
              <div key={field.name}>
                <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                  {field.label} {field.required && <span className="text-destructive">*</span>}
                </label>
                <textarea
                  required={field.required}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
            ) : (
              <div key={field.name}>
                <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                  {field.label} {field.required && <span className="text-destructive">*</span>}
                </label>
                <input
                  type={field.type || "text"}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            )
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {submitLabel}
          </button>
        </form>
      )}
    </Modal>
  );
};

export default FormModal;

import { useState } from 'react';
import SectionReveal from '../components/SectionReveal';
import { t, type Lang } from '../lib/content';

interface ContactSectionProps {
  lang: Lang;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const contact = t(lang, 'contact') as any;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const form = contact.form as Record<string, any>;

  return (
    <section id="contact" className="relative section-padding bg-background">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(37, 99, 235, 0.06) 0%, transparent 50%)',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            {contact.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-6">
            {contact.title}
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            {contact.subtitle}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="max-w-[600px] mx-auto">
            <div className="glass-card p-8 sm:p-12 border border-primary/15">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-2">{form.submit}</h3>
                  <p className="text-text-secondary">Thank you for reaching out!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      {form.name.label}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={form.name.placeholder}
                      className={`w-full bg-white/[0.03] border rounded-lg px-4 py-3.5 text-accent placeholder:text-text-secondary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      {form.email.label}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={form.email.placeholder}
                      className={`w-full bg-white/[0.03] border rounded-lg px-4 py-3.5 text-accent placeholder:text-text-secondary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      {form.subject.label}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={form.subject.placeholder}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3.5 text-accent placeholder:text-text-secondary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      {form.message.label}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={form.message.placeholder}
                      rows={5}
                      className={`w-full bg-white/[0.03] border rounded-lg px-4 py-3.5 text-accent placeholder:text-text-secondary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-btn text-white font-semibold py-4 rounded-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-shadow"
                  >
                    {form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
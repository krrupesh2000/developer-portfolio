import { useState } from 'react';
import { FiLoader, FiSend } from 'react-icons/fi';

const SUBJECTS = [
  'Job Opportunity',
  'Freelance Project',
  'Collaboration',
  'General Inquiry',
];

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(null);

  const [message, setMessage] = useState('');

  const maxCharacters = 500;

  async function handleSubmit(e) {
    e.preventDefault();

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus({
        type: 'error',
        title: 'Contact form unavailable',
        message:
          'Please email me directly at krrupesh2000@gmail.com while the form is being configured.',
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    const form = e.target;

    const formData = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setMessage('');

        setStatus({
          type: 'success',
          title: 'Message Sent!',
          message:
            "Thank you for reaching out. I'll get back to you as soon as possible.",
        });
      } else {
        setStatus({
          type: 'error',
          title: 'Something went wrong',
          message: "Your message couldn't be sent. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: 'error',
        title: 'Network Error',
        message: 'Unable to connect. Please try again later.',
      });
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="section-content space-y-4 sm:space-y-5"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Source */}
      <input type="hidden" name="source" value="Portfolio Website" />

      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="John Doe"
          className="w-full rounded-xl border border-border bg-background px-4 py-2 transition-colors outline-none focus:border-primary"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="john@example.com"
          className="w-full rounded-xl border border-border bg-background px-4 py-2 transition-colors outline-none focus:border-primary"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="mb-3 block text-sm font-medium">Subject</label>

        <div className="grid gap-3 grid-cols-2">
          {SUBJECTS.map((subject) => (
            <label key={subject} className="group cursor-pointer">
              <input
                type="radio"
                name="subject"
                value={subject}
                required
                className="peer sr-only"
              />

              <div className="rounded-xl border border-border p-2.5 transition-all duration-300 hover:border-primary/40 hover:bg-accent peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:ring-2 peer-checked:ring-primary/20 sm:p-3">
                <p className="text-sm font-medium sm:text-base text-center">{subject}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>

          <span
            className={`text-xs ${
              message.length > maxCharacters * 0.9
                ? 'text-orange-500'
                : 'text-muted-foreground'
            }`}
          >
            {message.length}/{maxCharacters}
          </span>
        </div>

        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={maxCharacters}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project, opportunity, or idea..."
          className="w-full resize-y rounded-xl border border-border bg-background px-4 py-2 leading-7 transition-colors outline-none focus:border-primary"
        />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2 font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
        {loading ? (
          <>
            <FiLoader size={18} className="animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <FiSend size={18} />
            Send Message
          </>
        )}
        </button>
      </div>

      {/* Status */}
      {status && (
        <div
          role="alert"
          className={`rounded-xl border p-4 ${
            status.type === 'success'
              ? 'border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400'
              : 'border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-400'
          }`}
        >
          <h4 className="font-semibold">{status.title}</h4>

          <p className="mt-1 text-sm">{status.message}</p>
        </div>
      )}
    </form>
  );
}

export default ContactForm;

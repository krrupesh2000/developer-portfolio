import { FiMail, FiMapPin } from 'react-icons/fi';

import SectionTitle from '../ui/SectionTitle';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl">
        <SectionTitle
          align="center"
          subtitle="Have a project, job opportunity, or just want to connect? Fill out the form below and I'll get back to you as soon as possible."
        >
          Let&apos;s Work Together
        </SectionTitle>

        {/* Contact Form */}
        <ContactForm />

        {/* Contact Information */}
        <div className="mt-6 border-t border-border pt-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <FiMail size={20} className="text-primary" />
              </div>

              <div>
                <h3 className="type-label font-semibold">Email</h3>

                <p className="type-small mt-1 text-muted-foreground">
                  Prefer email? Reach me directly.
                </p>

                <a
                  href="mailto:krrupesh2000@gmail.com"
                  className="type-small mt-2 inline-block break-all font-medium text-primary transition-colors hover:underline"
                >
                  krrupesh2000@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <FiMapPin size={20} className="text-primary" />
              </div>

              <div>
                <h3 className="type-label font-semibold">Location</h3>

                <p className="type-small mt-1 text-muted-foreground">
                  Open to remote opportunities worldwide.
                </p>

                <p className="type-small mt-2">Bihar, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

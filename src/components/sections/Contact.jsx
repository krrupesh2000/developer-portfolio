import { Mail, MapPin } from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import ContactForm from "../contact/ContactForm";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <SectionTitle
        align="center"
        subtitle="Have a project, job opportunity, or just want to connect? Fill out the form below and I'll get back to you as soon as possible."
      >
        Let's Work Together
      </SectionTitle>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Information */}
      <div className="mt-14 border-t border-border pt-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3">
              <Mail size={20} className="text-primary" />
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Prefer email? Reach me directly.
              </p>

              <a
                href="mailto:krrupesh2000@email.com"
                className="mt-2 inline-block text-primary transition-colors hover:underline"
              >
                krrupesh2000@email.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3">
              <MapPin size={20} className="text-primary" />
            </div>

            <div>
              <h3 className="font-semibold">Location</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Open to remote opportunities worldwide.
              </p>

              <p className="mt-2">Bihar, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

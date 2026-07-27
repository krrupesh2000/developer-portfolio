import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <SectionTitle
        align="center"
        subtitle="Have an idea or opportunity? Let's connect."
      >
        Contact
      </SectionTitle>

      <form className="mt-12 space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium">
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-slate-800 bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary
focus:ring-2
focus:ring-primary/30"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-medium">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-slate-800 bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary
focus:ring-2
focus:ring-primary/30"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block font-medium">
            Subject
          </label>

          <input
            id="subject"
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-slate-800 bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary
focus:ring-2
focus:ring-primary/30"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-medium">
            Message
          </label>

          <textarea
            id="message"
            rows="6"
            placeholder="Write your message..."
            className="w-full rounded-lg border border-slate-800 bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary
focus:ring-2
focus:ring-primary/30"
          />
        </div>

        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}

export default Contact;

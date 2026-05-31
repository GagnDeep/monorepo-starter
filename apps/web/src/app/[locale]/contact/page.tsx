import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'Contact Aura Boutique', description: 'Get in touch to book a consultation for custom stitching or inquire about our collections. Located in Tripuri, Patiala.', path: '/contact', locale });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-32 border-b border-border/20 mb-16">
        <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight uppercase leading-none mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground uppercase tracking-widest max-w-2xl font-medium">
          Whether you need a custom fit or have a question about an order, we&apos;re here to help.
        </p>
      </div>

      <div className="container pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Studio Location</h2>
            <p className="font-serif text-2xl font-medium">
              Tripuri, Patiala<br />
              Punjab, India
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Hours</h2>
            <div className="font-serif text-2xl font-medium space-y-2">
              <p>Monday - Sunday</p>
              <p className="text-primary">10:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Contact</h2>
            <div className="font-serif text-2xl font-medium space-y-4">
              <p>
                <a href="tel:+918171803989" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                  +91 81718 03989
                </a>
              </p>
              <p>
                <a href="https://instagram.com/auraboutique" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                  @auraboutique
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase mb-8">Send a Message</h2>
          <form className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-transparent border-b border-border/40 focus:border-foreground outline-none py-3 font-medium transition-colors"
                placeholder="Jane Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest">Email or Phone</label>
              <input
                type="text"
                id="email"
                className="w-full bg-transparent border-b border-border/40 focus:border-foreground outline-none py-3 font-medium transition-colors"
                placeholder="jane@example.com or +91 98765..."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-border/40 focus:border-foreground outline-none py-3 font-medium transition-colors resize-none"
                placeholder="I'm interested in custom blouse stitching..."
              />
            </div>

            <button type="button" className="w-full bg-foreground text-background py-5 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

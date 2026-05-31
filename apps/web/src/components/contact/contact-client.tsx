'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitContactForm } from '@/app/[locale]/(marketing)/contact/actions';

interface ContactClientProps {
  title: string;
  description: string;
  visit: string;
  address: string;
  hours: string;
  phoneLabel: string;
  phone: string;
  name: string;
  email: string;
  message: string;
  submit: string;
}

export function ContactClient(props: ContactClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.fromTo(
      infoRef.current!.children,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.15 }
    )
    .fromTo(
      formRef.current!.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1 },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Contact Info */}
      <div ref={infoRef} className="flex flex-col justify-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
          {props.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
          {props.description}
        </p>

        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{props.visit}</h3>
              <p className="text-muted-foreground">{props.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">Hours</h3>
              <p className="text-muted-foreground">{props.hours}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{props.phoneLabel}</h3>
              <p className="text-muted-foreground">{props.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-secondary/50 p-8 md:p-12 rounded-3xl border border-border/50">
        <form ref={formRef} action={submitContactForm} className="flex flex-col gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold tracking-wide uppercase text-foreground/80">{props.name}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all h-12"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold tracking-wide uppercase text-foreground/80">{props.email}</Label>
            <Input
              type="email"
              name="email"
              id="email"
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all h-12"
              placeholder="jane@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold tracking-wide uppercase text-foreground/80">{props.message}</Label>
            <Textarea
              name="message"
              id="message"
              rows={5}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="How can we help you..."
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full mt-4 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12">
            {props.submit}
          </Button>
        </form>
      </div>
    </div>
  );
}

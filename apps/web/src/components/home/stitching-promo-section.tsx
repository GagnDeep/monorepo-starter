'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function StitchingPromoSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect on the image
    gsap.to('.promo-img', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: 50,
      ease: 'none'
    });

    // Content reveal
    gsap.from('.promo-content > *', {
      scrollTrigger: {
        trigger: '.promo-content',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div ref={imageContainerRef} className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2883&auto=format&fit=crop"
              alt="Custom Stitching Process"
              fill
              className="promo-img object-cover scale-110"
            />
          </div>

          <div className="promo-content flex flex-col justify-center max-w-xl">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('stitchingTitle')}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
              {t('stitchingDesc')}
            </p>
            <div>
              <Button size="lg" variant="outline" className="rounded-none border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary uppercase tracking-widest px-8" asChild>
                <Link href="/custom-stitching">{t('stitchingCta')}</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Globe } from 'lucide-react';
import { Button } from './ui/button';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  socialMedia?: {
    instagram?: string;
    portfolio?: string;
  };
};

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  secondaryColor?: string;
  className?: string;
}

export interface SupportTeamProps extends TeamSectionProps {
  ctaButtons?: Array<{
    label: string;
    href?: string;
    isPrimary?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
  }>;
}

export default function TeamSectionVariant6({
  title,
  subtitle,
  teamMembers,
  accentColor = '#4f46e5',
  secondaryColor = '#6b7280',
  className,
  ctaButtons = [
    { label: 'Book a call', isPrimary: false },
    { label: 'Book a demo', isPrimary: true },
  ],
}: SupportTeamProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={cn('w-full', className)}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-2xl p-8 shadow-sm md:p-12">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl text-primary font-semibold md:text-4xl">{title}</h2>
            <p className="mx-auto max-w-2xl text-base" style={{ color: secondaryColor }}>
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href || '#'}
                  className={cn(
                    'flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all',
                    button.isPrimary
                      ? 'text-white'
                      : 'bg-primary text-primary-foreground hover:bg-gray-200',
                  )}
                  style={button.isPrimary ? { backgroundColor: accentColor } : {}}
                  onClick={button.onClick}
                >
                  {button.icon}
                  {button.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative mt-12">
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="bg-primary absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full p-2 shadow-md"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <div
              ref={scrollContainerRef}
              className="hide-scrollbar flex gap-4 overflow-x-auto pb-4"
              onScroll={checkScrollButtons}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-card/90 w-64 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 opacity-100 shadow-sm transition-opacity hover:opacity-75 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex gap-3 mt-4 px-4">
                    {member.socialMedia?.instagram && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-bl from-yellow-300 to-red-600"
                      >
                        <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="mr-1 h-4 w-4" /> Instagram
                        </a>
                      </Button>
                    )}
                    {member.socialMedia?.portfolio && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-blue-200 to-cyan-200"
                      >
                        <a href={member.socialMedia.portfolio} target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-1 h-4 w-4" /> Portfolio
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium text-primary">{member.name}</h3>
                    <p className="text-sm" style={{ color: secondaryColor }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="bg-primary absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full p-2 shadow-md"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

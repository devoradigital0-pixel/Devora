

import { Services } from "@/components/services"
import { WorkSection } from "@/components/work-section"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import TeamSectionVariant6 from "@/components/team"
import { lazy, Suspense } from "react"
import { Spinner } from '@/components/ui/shadcn-io/spinner';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  socialMedia?: {
    instagram?: string;
    portfolio?: string;
  };
}

const Hero = lazy(() => import("@/components/hero").then(module => ({ default: module.Hero })));
const dami_data: TeamMember[] = [
  {
    id: 1,
    name: 'Wasif Mehmood',
    role: 'Full Stack Developer',
    image: './wasif_croped.webp',
    socialMedia: {
      instagram: 'https://www.instagram.com/wasiii.js/',
      portfolio: 'https://wasifdev.vercel.app',
    },
  },
  {
    id: 2,
    name: 'Abdullah Afzal',
    role: 'Wordpress & E-commerce Specialist',
    image: './abdullah.webp',
    socialMedia: {
      instagram: 'https://www.linkedin.com/in/abdullah-afzal-310388329/',
      portfolio: 'https://socialcard-opal.vercel.app/',
    },
  },
  {
    id: 3,
    name: 'Habib ur Rahman',
    role: 'Social Media Manager & Ads Specialist',
    image: 'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.webp',
    socialMedia: {
      instagram: 'https://www.instagram.com/habeebecom/',
    },
  },
];
export const metadata = {
  title: " Devora| Digital Solutions for Growth",
  description: "Check out our portfolio: websites, Shopify, SaaS, and social media projects.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation  />
      <Suspense fallback={<Spinner/>}>
        <Hero />
        <Services />
        <WorkSection />
      </Suspense>
        <TeamSectionVariant6 title="Meet our Strategic Team Members" description="" teamMembers={dami_data} />
        <Testimonials />
        <Contact />
    </div>
  )
}

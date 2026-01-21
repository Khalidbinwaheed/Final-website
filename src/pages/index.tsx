import { lazy, Suspense } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';

// Lazy load below-the-fold components
const StatsCounter = lazy(() => import('@/components/StatsCounter'));
const About = lazy(() => import('@/components/About'));
const Services = lazy(() => import('@/components/Services'));
const Portfolio = lazy(() => import('@/components/portfolio'));
import Clients from '@/components/Clients';
const Team = lazy(() => import('@/components/Team'));
// const Career = lazy(() => import('@/components/career')); // Removed legacy section
const Contact = lazy(() => import('@/components/contact'));

// ...
// ...

const FAQ = lazy(() => import('@/components/FAQ'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-24"><div className="container mx-auto text-center text-muted-foreground">Loading...</div></div>}>
          <StatsCounter />
          <About />
          <Services />
          <Portfolio />
          <Team />
          {/* <Career /> */}
          <Clients />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="py-12"><div className="container mx-auto text-center text-muted-foreground">Loading footer...</div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

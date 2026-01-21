import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ApplicationForm from '@/components/ApplicationForm';
import SEO from '@/components/SEO';

const CareersPage = () => {
  useSmoothScroll();
  const navigate = useNavigate();
  // Removed inline form logic (formData, handleSubmit, etc.) as it's now in ApplicationForm


  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Careers" 
        description="Join the Code Craft It Solution team. Explore job openings, internships, and professional courses."
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="relative py-12 lg:py-24 overflow-hidden">
             {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[128px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left space-y-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                            <span className="text-primary glow-text">Career</span>
                        </h1>
                        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed">
                            Job openings in <span className="text-foreground font-medium">IT Company</span>. <br/>
                            <span className="gradient-text font-semibold">Apply Now!</span>
                        </p>
                        
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                            <Button variant="outline" onClick={() => navigate('/internships')}>
                                View Internships
                            </Button>
                            <Button variant="outline" onClick={() => navigate('/jobs')}>
                                View Full-Time Jobs
                            </Button>
                            <Button variant="outline" onClick={() => navigate('/courses')}>
                                View Professional Courses
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Application Form */}
                     <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <ApplicationForm />

                    </motion.div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;

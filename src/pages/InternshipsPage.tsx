import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';
import { useRef, useState } from 'react';
import SEO from '@/components/SEO';

const internships = [
 
];

const InternshipsPage = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [selectedRole, setSelectedRole] = useState('');

    const handleApply = (jobTitle: string) => {
        setSelectedRole(jobTitle);
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Internship Programs" 
        description="Kickstart your career with Code Craft It Solution's internship programs for fresh talent."
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="relative py-12 lg:py-24 overflow-hidden">
             {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mx-auto mb-16"
                >
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    Opportunities
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                    Internship <span className="gradient-text">Programs</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                    Kickstart your career with our internship programs tailored for fresh talent.
                </p>
                </motion.div>

                <div className="max-w-4xl mx-auto mb-16 space-y-4">
                    {internships.map((job, index) => (
                    <motion.div
                        key={job.title}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {job.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mt-1 mb-3">
                            {job.description}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4 text-primary" />
                                {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-primary" />
                                {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-primary" />
                                {job.experience}
                            </span>
                            </div>
                        </div>

                        <Button
                            variant="glassOutline"
                            className="w-full sm:w-auto shrink-0 mt-4 lg:mt-0 group/btn"
                            onClick={() => handleApply(job.title)}
                            aria-label={`Apply for ${job.title}`}
                        >
                            Apply Now
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        </div>
                    </motion.div>
                    ))}
                </div>

                <div ref={formRef} className="scroll-mt-24 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-display font-bold">Ready to Apply?</h3>
                        <p className="text-muted-foreground mt-2">Submit your application below.</p>
                    </div>
                    <ApplicationForm defaultRole={selectedRole} />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InternshipsPage;

import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, ArrowRight, BookOpen } from 'lucide-react'; // Added BookOpen for courses
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';
import { useRef, useState } from 'react';
import SEO from '@/components/SEO';

const courses = [
  // Empty as per user request/pattern
];

const CoursesPage = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [selectedCourse, setSelectedCourse] = useState('');

    const handleApply = (courseTitle: string) => {
        setSelectedCourse(courseTitle);
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Professional Courses" 
        description="Enhance your skills with expert-led courses and certifications from Code Craft It Solution."
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
                    Learning & Development
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                    Professional <span className="gradient-text">Courses</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                    Enhance your skills with our expert-led courses and certifications.
                </p>
                </motion.div>

                <div className="max-w-4xl mx-auto mb-16 space-y-4">
                    {courses.map((course: any, index: number) => (
                    <motion.div
                        key={course.title}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {course.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mt-1 mb-3">
                            {course.description}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4 text-primary" />
                                {course.type || 'Course'}
                            </span>
                             <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-primary" />
                                {course.duration}
                            </span>
                            </div>
                        </div>

                        <Button
                            variant="glassOutline"
                            className="w-full sm:w-auto shrink-0 mt-4 lg:mt-0 group/btn"
                            onClick={() => handleApply(course.title)}
                            aria-label={`Enroll in ${course.title}`}
                        >
                            Enroll Now
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        </div>
                    </motion.div>
                    ))}
                    {courses.length === 0 && (
                        <div className="text-center text-muted-foreground py-10">
                            <p>No courses currently available. Please check back later or submit a general inquiry below.</p>
                        </div>
                    )}
                </div>

                <div ref={formRef} className="scroll-mt-24 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-display font-bold">Enroll / Inquiry</h3>
                        <p className="text-muted-foreground mt-2">Fill out the form below to enroll or ask about our courses.</p>
                    </div>
                    <ApplicationForm defaultRole={selectedCourse} />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;

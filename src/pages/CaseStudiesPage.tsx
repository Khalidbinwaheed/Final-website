import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, Target, CheckCircle2, Trophy } from 'lucide-react';
import SEO from '@/components/SEO';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Case Studies" 
        description="Discover how Code Craft It Solution solves complex problems. Read our case studies on privacy frameworks and more."
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <Briefcase className="w-16 h-16 mx-auto text-primary mb-6" />
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Case Studies</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real-world examples of how we solve complex problems.
              </p>
            </div>

            <div className="glass-card overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-black/40">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-8">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Featured Case Study</span>
                        <h2 className="text-3xl font-bold mb-2">Privacy & Policy Framework Implementation</h2>
                        <p className="text-muted-foreground">Client: Code Craft IT Solutions</p>
                    </div>
                </div>

                <div className="space-y-10">
                    <div>
                         <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            Goal
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Build a complete legal, compliance, and documentation system to protect the company legally and ensure professionalism.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">The Challenge</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Code Craft needed official policy documents to protect the company legally and ensure professionalism when dealing with international clients. The absence of structured documentation created potential for misunderstandings.
                            </p>
                        </div>
                        <div>
                             <h3 className="text-xl font-bold mb-4 text-white">The Solution</h3>
                             <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                We created a fully customized set of documents including:
                             </p>
                             <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Privacy Policy</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Terms & Conditions</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Internal Documentation Manual</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Client Guidelines</li>
                             </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            Results Achieved
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Clients now clearly understand project scope & rules",
                                "Reduced disputes and misunderstandings",
                                "Improved professionalism & trust",
                                "Easier onboarding for new clients",
                                "Documentation ready for website publication",
                                "Company now complies with modern data standards"
                            ].map((result, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{result}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
              <div className="bg-primary/10 p-6 border-t border-white/10">
                 <p className="text-center font-medium">
                    <span className="text-primary font-bold">Outcome: </span>
                    Code Craft IT Solutions now has a complete policy & documentation system, suitable for clients, employees, and corporate compliance.
                 </p>
              </div>
            </div>

          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;

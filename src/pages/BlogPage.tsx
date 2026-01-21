import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Lock, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Blog" 
        description="Insights, news, and articles from the Code Craft It Solution team. Learn about privacy policies, legal structures, and more."
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
            <div className="mb-12 text-center">
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Latest Article</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Why Privacy Policies & Terms Matter for IT Companies
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding why clear legal structures are essential for modern software agencies.
              </p>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                alt="Cybersecurity and Law" 
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-10 opacity-80"
              />

              <div className="prose prose-invert max-w-none">
                 <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-primary" />
                    Why Every IT Company Needs Clear Privacy & Legal Policies
                </h2>
                <p>
                  In today’s digital world, IT companies handle more sensitive customer information than ever before. 
                  At <strong>Code Craft It Solution</strong>, data privacy and client protection are core priorities.
                </p>

                <div className="my-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-green-400" />
                            A Strong Privacy Policy
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">Ensures clients understand:</p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>What data is collected</li>
                            <li>How it is used</li>
                            <li>Why it is needed</li>
                            <li>How it is protected</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-blue-400" />
                            Terms & Conditions
                        </h3>
                         <p className="text-sm text-muted-foreground mb-4">Protect both company and client by defining:</p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Project responsibilities</li>
                            <li>Payments & refunds</li>
                            <li>Revisions & scope</li>
                            <li>Ownership of the final product</li>
                        </ul>
                    </div>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  These documents help reduce misunderstandings, ensure compliance, and create trust. 
                  For software companies, especially those handling custom projects, proper legal structure isn’t optional — it’s essential.
                </p>

                <div className="mt-10 p-6 bg-primary/10 rounded-xl border border-primary/20 flex items-start gap-4">
                    <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-white mb-1">Our Commitment</h4>
                        <p className="text-sm text-muted-foreground">
                            We believe in transparency. That's why we've updated our legal pages to clearly outline how we operate and protect your data.
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

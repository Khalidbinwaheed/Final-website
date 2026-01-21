import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Book, Shield, FileText, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Documentation" 
        description="Technical documentation, company policies, and project guidelines for Code Craft It Solution."
      />
      <Header />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <Book className="w-16 h-16 mx-auto text-primary mb-6" />
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Company Documentation</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Summarizing how Code Craft It Solution manages client projects, privacy, and security.
              </p>
            </div>

            <div className="grid gap-8">
              {/* Privacy Policy Summary */}
              <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Privacy Policy Summary</h2>
                </div>
                <ul className="space-y-4">
                    {[
                        "We collect only necessary project data.",
                        "Client information is stored securely and never sold.",
                        "Data may be shared only with team members handling the project.",
                        "Clients may request data access, correction, or deletion anytime."
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
              </div>

               {/* Terms & Conditions Summary */}
               <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Terms & Conditions Summary</h2>
                </div>
                <ul className="space-y-4">
                    {[
                        "Advance payment is required to begin work.",
                        "All project assets belong to Code Craft until full payment is made.",
                        "Revisions are limited according to the agreed scope.",
                        "Client delays affect timeline; company is not responsible.",
                        "Completed work is non-refundable.",
                        "All work follows the laws of Pakistan."
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
              </div>

               {/* Internal Guidelines */}
               <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Book className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Internal Guidelines (For Team)</h2>
                </div>
                <ul className="space-y-4">
                    {[
                        "Team members must maintain confidentiality.",
                        "No sharing of client project details to third parties.",
                        "Secure handling of files, credentials, and communication.",
                        "Proper closing procedure after project delivery."
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
              </div>
            </div>

          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentationPage;

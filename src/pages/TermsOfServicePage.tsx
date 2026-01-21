import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import SEO from '@/components/SEO';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Terms of Service" 
        description="Review the Terms and Conditions for using Code Craft It Solution's services and website."
      />
      <Header />
      <main className="flex-grow pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <div className="text-center mb-16">
          <FileText className="w-16 h-16 mx-auto text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Last Updated: 21 January 2026
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40 prose prose-invert max-w-none">
          <p className="lead text-xl mb-8">
            These Terms & Conditions ("Terms") govern the use of services provided by Code Craft IT Solutions.
            By hiring us or using our services, you agree to these Terms.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Service Scope</h2>
              <p className="text-muted-foreground">
                Code Craft IT Solutions provides IT and software development services according to a mutually agreed project scope.
                Any work outside the defined scope will be considered additional work and charged separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Payments</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Advance payment is required before starting the project.</li>
                <li>Remaining balance must be paid before final delivery.</li>
                <li>Delayed payments may pause or terminate the project.</li>
                <li>Completed work is non-refundable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Project Timeline</h2>
              <p className="text-muted-foreground mb-3">Timelines depend on:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Client responsiveness</li>
                <li>Scope stability</li>
                <li>Quality and timing of provided content</li>
              </ul>
              <p className="text-muted-foreground mt-3">Code Craft IT Solutions is not responsible for delays caused by the client.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                4. Ownership & Intellectual Property
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>All project assets remain the property of Code Craft IT Solutions until full payment is received.</li>
                <li>After complete payment, ownership transfers to the client.</li>
                <li>The company may display the project in its portfolio unless the client requests otherwise in writing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-3">Clients must:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Offer timely feedback</li>
                <li>Maintain professional communication</li>
                <li>Approve milestones without unreasonable delays</li>
              </ul>
              <p className="text-muted-foreground mt-3">Any delays caused by the client may affect project timelines.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Revisions</h2>
              <p className="text-muted-foreground">
                Revisions are limited to those defined in the contract.
                Additional or major revisions may require extra charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
              <p className="text-muted-foreground">
                Both parties agree to keep all project-related data confidential.
                Information will not be disclosed to third parties without written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground mb-3">Code Craft IT Solutions may terminate a project if:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Payments are delayed</li>
                <li>Terms are violated</li>
                <li>Misconduct occurs</li>
              </ul>
              <p className="text-muted-foreground mt-3">Work completed before termination is non-refundable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-primary" />
                9. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-3">The Company is not liable for:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Loss of business or revenue</li>
                <li>Data loss caused by third‑party platforms</li>
                <li>Issues arising after project delivery or client modifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                10. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of Pakistan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By making payment or requesting services, the client agrees to all terms stated in this document.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;

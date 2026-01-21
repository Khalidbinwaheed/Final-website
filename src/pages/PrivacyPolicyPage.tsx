import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Server, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Privacy Policy" 
        description="Read Code Craft It Solution's Privacy Policy to understand how we collect, use, and protect your data."
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
          <Shield className="w-16 h-16 mx-auto text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Last Updated: 21 January 2026
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40 prose prose-invert max-w-none">
          <p className="lead text-xl mb-8">
            This Privacy Policy explains how Code Craft IT Solutions ("Company", "we", "our", "us") collects, uses, protects, and manages information when clients interact with us, use our services, or visit our website.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                1. Information We Collect
              </h2>
              <div className="pl-9 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">a. Personal Information</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company details</li>
                    <li>Billing information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">b. Technical Information</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>IP address</li>
                    <li>Device information</li>
                    <li>Browser details</li>
                    <li>Cookies and usage data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">c. Project Information</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Requirements</li>
                    <li>Documents or files shared by the client</li>
                    <li>Communication records</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">We use your information to:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Deliver software development and IT services</li>
                <li>Communicate regarding project updates and support</li>
                <li>Process billing and payments</li>
                <li>Improve service quality and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
              <p className="text-muted-foreground mb-3">We never sell or trade client data. We only share data with:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Team members working on the client project</li>
                <li>Third‑party tools essential for project execution</li>
                <li>Authorities, if legally required</li>
              </ul>
              <p className="text-muted-foreground mt-3">All shared information remains confidential and protected.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                4. Data Protection & Security
              </h2>
              <p className="text-muted-foreground">
                Code Craft IT Solutions uses technical and organizational safeguards to secure client information.
                However, no digital system is entirely risk‑free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground mb-3">We retain information:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>For the duration of the project</li>
                <li>To comply with regulations</li>
                <li>To resolve disputes</li>
              </ul>
              <p className="text-muted-foreground mt-3">Clients may request deletion of their stored data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                6. Client Rights
              </h2>
              <p className="text-muted-foreground mb-3">Clients may request:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Access to their data</li>
                <li>Correction of inaccurate data</li>
                <li>Data deletion</li>
                <li>Limitation of processing</li>
              </ul>
              <p className="text-muted-foreground mt-3">Requests can be sent to our official support email.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-muted-foreground mb-3">Our website may use cookies to:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Enhance user experience</li>
                <li>Track analytics</li>
                <li>Improve performance</li>
              </ul>
              <p className="text-muted-foreground mt-3">Users can turn off cookies from browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
              <p className="text-muted-foreground">
                Code Craft IT Solutions may update this policy periodically.
                Changes will be posted with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground mb-2">For privacy-related questions, contact us at:</p>
              <div className="bg-muted/30 p-4 rounded-lg border border-white/5">
                <p className="text-white">📧 codecraftitsol@gmail.com</p>
                <p className="text-white">📍 Code Craft IT Solutions, Pakistan</p>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

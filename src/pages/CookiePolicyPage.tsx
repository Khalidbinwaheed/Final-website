import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Info } from 'lucide-react';
import SEO from '@/components/SEO';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Cookie Policy" 
        description="Learn about how Code Craft It Solution uses cookies to enhance your experience."
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
          <Cookie className="w-16 h-16 mx-auto text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Last Updated: 21 January 2026
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40 prose prose-invert max-w-none">
          <p className="lead text-xl mb-8">
            This Cookie Policy explains how Code Craft IT Solutions uses cookies to improve your experience on our website.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small text files stored on your device when you visit a website. They help us understand how you use our site and enable certain functionalities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground mb-3">Our website may use cookies to:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Enhance user experience:</strong> Remembering your preferences and settings.</li>
                <li><strong>Track analytics:</strong> Understanding how visitors interact with our website to improve content and layout.</li>
                <li><strong>Improve performance:</strong> Ensuring the website loads quickly and functions correctly.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground">
                You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. Any changes will be reflected with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-2">If you have any questions about our use of cookies, please contact us at:</p>
              <div className="bg-muted/30 p-4 rounded-lg border border-white/5">
                <p className="text-white">📧 codecraftitsol@gmail.com</p>
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

export default CookiePolicyPage;

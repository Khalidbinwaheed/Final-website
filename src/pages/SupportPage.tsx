import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { LifeBuoy, Wrench, CreditCard, FileText, Mail, Clock, Lock, Phone } from 'lucide-react';
import SEO from '@/components/SEO';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <SEO 
        title="Support Center" 
        description="Need help? Contact Code Craft It Solution support team via email or WhatsApp. We are here for you."
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
              <LifeBuoy className="w-16 h-16 mx-auto text-primary mb-6" />
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Support Center</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Need Help? We’re Here for You. Offering full support before, during, and after project completion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {/* Technical Support */}
                <div className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                    <Wrench className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Technical Support</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Bug fixing</li>
                        <li>• Minor updates</li>
                        <li>• Deployment assistance</li>
                        <li>• Server & hosting guidance</li>
                    </ul>
                </div>

                {/* Account & Billing */}
                <div className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                    <CreditCard className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Account & Billing</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Payment queries</li>
                        <li>• Invoice assistance</li>
                        <li>• Contract clarification</li>
                    </ul>
                </div>

                {/* Documentation & Policy */}
                <div className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                    <FileText className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Policy Support</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Privacy Policy questions</li>
                        <li>• Terms & Conditions guidance</li>
                        <li>• Data access/deletion requests</li>
                    </ul>
                </div>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md bg-black/40">
                <h2 className="text-2xl font-bold mb-8">How to Contact Support</h2>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                <a href="mailto:codecraftitsol@gmail.com" className="text-primary hover:underline text-lg">
                                    codecraftitsol@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">WhatsApp Us</h4>
                                <a href="https://wa.me/923481923575" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-lg">
                                    +92 348 1923575
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Availability</h4>
                                <p className="text-muted-foreground">Monday – Saturday</p>
                                <p className="text-sm text-muted-foreground mt-1">Response Time: Typically within 24 hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <Lock className="w-6 h-6 text-green-400" />
                            <h3 className="font-bold text-white">Data Handling Guarantee</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Any information you share with our support team remains secure and confidential. We prioritize your privacy in every interaction.
                        </p>
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

export default SupportPage;

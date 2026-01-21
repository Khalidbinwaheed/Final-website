
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Facebook } from 'lucide-react';
import logo from '@/Assets/logo.png';

/** Custom X (Twitter) logo: latest glyph */
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    role="img"
    {...props}
  >
    {/* X glyph (monochrome, uses currentColor) */}
    <path d="M3.5 3h5.8l4.1 5.6L17.8 3H21l-6.6 8.3L21.7 21h-5.8l-4.5-6.1L10.2 21H3l7.4-9.3L3.5 3zm3.1 1.8l5.3 7-5.9 7.4h3.5l4.7-6.1 4.5 6.1h3.2l-6.3-8.5L20.1 4.8h-3.4l-4.2 5.6-4.2-5.6H6.6z"/>
  </svg>
);

/** Custom TikTok logo: single-color, clean path */
const TikTokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    role="img"
    {...props}
  >
    {/* TikTok glyph (monochrome, uses currentColor) */}
    <path d="M16.5 3c.3 2.1 1.9 3.9 4 4.3v2.1c-1.7-.1-3.3-.7-4.7-1.7v6.8c0 3.9-2.8 7.2-6.8 7.5-1.8.1-3.6-.4-5-1.6A6.9 6.9 0 0 1 2.4 14c.2-3.6 3.1-6.5 6.7-6.7.6 0 1.2 0 1.8.1v2.5c-.6-.1-1.2-.1-1.8 0A4.3 4.3 0 0 0 5 14.2c-.1 1.2.3 2.4 1.1 3.3a4.3 4.3 0 0 0 3.2 1.2c2.4-.2 4.2-2.3 4.2-4.7V3h3z" />
  </svg>
);

/** Custom WhatsApp logo: single-color, clean path */
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    role="img"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Career', href: '/careers' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/documentation' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/codecraftitsolution', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/code-craft-it-solution', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com/codecraftpak', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://www.instagram.com/codecraftitsolution?igsh=eWZndDV5NzlqbWpn', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1ALf5mPbRF/', label: 'Facebook' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@codecraftitsolution?_r=1&_t=ZS-93FevPYgncW', label: 'TikTok' },
    { icon: WhatsAppIcon, href: 'https://wa.me/message/XU3JHEPQ24JAJ1', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:codecraftitsol@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
        navigate(href);
        return;
    }
    if (location.pathname !== '/' && href.startsWith('#')) {
        navigate('/' + href);
        return;
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="inline-flex items-center gap-2 mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={logo} alt="Code Craft It Solution logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Code<span className="gradient-text"> Craft It</span><span> Solution</span>
              </span>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming ideas into powerful digital solutions. We're your trusted partner for
              web development, mobile apps, and enterprise software.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex justify-center items-center text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Code Craft It Solution. Created by Khalid Bin Waheed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

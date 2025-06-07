import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  AI Mock Interviewer
                </h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Transform your interview skills with AI-powered practice sessions. 
                Get personalized feedback and build confidence for your dream job.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Stay Updated
              </h3>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-r-lg transition-all duration-200 text-white font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {['About Us', 'Features', 'How It Works', 'Pricing'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="text-slate-400 hover:text-white transition-colors duration-200 relative group"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Support & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Support
            </h3>
            <nav className="flex flex-col space-y-3">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="text-slate-400 hover:text-white transition-colors duration-200 relative group"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
                  { icon: Mail, href: 'mailto:contact@aimockinterviewer.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-8 right-6 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-700/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-700/20 to-transparent" />
    </footer>
    </>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real app, post to backend or use a form service
    await new Promise((r) => setTimeout(r, 900));
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative z-10 bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">Get in touch</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                rows={5}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-white"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Send size={16} /> Send Message
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-400">{status}</p>
            </div>
          </motion.form>

          <motion.div
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Social</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">I’m open for freelance, full-time, and collaborations.</p>
            <div className="mt-4 flex flex-col gap-3">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                <Github size={18} /> github.com/yourusername
              </a>
              <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                <Linkedin size={18} /> linkedin.com/in/yourusername
              </a>
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                <Mail size={18} /> you@example.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

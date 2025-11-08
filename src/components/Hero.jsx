import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, FileDown, Moon, Sun } from 'lucide-react';

export default function Hero() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    if (initial === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/0 dark:from-black/70 dark:via-black/40 dark:to-black/0" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 pb-16 sm:pt-24">
        <div className="mb-6 flex w-full items-center justify-between">
          <motion.a
            href="#home"
            className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mobile Dev Portfolio
          </motion.a>

          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-sm font-medium text-gray-800 shadow-sm backdrop-blur hover:bg-white dark:border-gray-800 dark:bg-black/60 dark:text-gray-100 dark:hover:bg-black"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </button>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 mt-24 flex max-w-3xl flex-col items-center text-center sm:mt-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://i.pravatar.cc/200?img=13"
            alt="Profile"
            className="mb-6 h-28 w-28 rounded-2xl border border-white/60 shadow-xl ring-1 ring-black/5 dark:border-white/10"
          />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Your Name Here
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-base text-gray-700 sm:text-lg dark:text-gray-300">
            Mobile developer specializing in Flutter and native Android. I build fast, reliable, and beautiful apps with
            a love for clean architecture, smooth animations, and delightful user experiences.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-offset-0"
            >
              <FileDown size={16} /> View CV
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur hover:bg-white dark:border-gray-700 dark:bg-black/60 dark:text-gray-100"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur hover:bg-white dark:border-gray-700 dark:bg-black/60 dark:text-gray-100"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur hover:bg-white dark:border-gray-700 dark:bg-black/60 dark:text-gray-100"
            >
              <Mail size={16} /> Email
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 text-left sm:grid-cols-4">
            {[
              { label: 'Flutter', value: 'Dart, Riverpod, BLoC' },
              { label: 'Android', value: 'Kotlin, Jetpack, Compose' },
              { label: 'CI/CD', value: 'Fastlane, GitHub Actions' },
              { label: 'Quality', value: 'Unit/Widget Tests' },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="rounded-xl border border-gray-200/70 bg-white/60 p-4 text-sm shadow-sm backdrop-blur dark:border-gray-800 dark:bg-black/50 dark:text-gray-200"
                whileHover={{ y: -2 }}
              >
                <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{item.label}</div>
                <div className="mt-1 font-medium text-gray-900 dark:text-gray-100">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

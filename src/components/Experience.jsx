import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Mobile Developer (Flutter)',
    company: 'Freelance',
    year: '2023 – Present',
    details: 'Building cross-platform apps with Flutter, integrating Firebase, and shipping to App Store and Google Play.'
  },
  {
    role: 'Android Engineer',
    company: 'Tech Studio',
    year: '2021 – 2023',
    details: 'Developed Kotlin-based apps using Jetpack components, optimized performance, and implemented CI/CD.'
  },
  {
    role: 'Junior Mobile Developer',
    company: 'Startup Labs',
    year: '2019 – 2021',
    details: 'Contributed to multiple client apps, wrote unit/widget tests, and collaborated with designers and PMs.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">Experience</h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.06 }}
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{exp.year}</div>
              </div>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FitTrack Pro',
    tech: ['Flutter', 'Riverpod', 'Firebase'],
    description:
      'A fitness tracking app with workout plans, progress charts, and social challenges. Offline-first with background sync.',
    image:
      'https://images.unsplash.com/photo-1594385208976-5f41c7bcd1d6?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/yourusername/fittrack-pro',
    demo: 'https://example.com/fittrack-demo',
  },
  {
    title: 'NexShop',
    tech: ['Flutter', 'BLoC', 'Supabase'],
    description:
      'E-commerce mobile app with real-time inventory, Stripe payments, and push notifications.',
    image:
      'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/yourusername/nexshop',
    demo: 'https://example.com/nexshop-demo',
  },
  {
    title: 'Travelio',
    tech: ['Android', 'Kotlin', 'Jetpack'],
    description:
      'Native Android travel planner with offline maps, itinerary collaboration, and Compose UI.',
    image:
      'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f5?q=80&w=1200&auto=format&fit=crop',
    repo: 'https://github.com/yourusername/travelio-android',
    demo: 'https://example.com/travelio-demo',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A selection of mobile apps I designed and built.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-gray-200 px-2 py-1 text-xs text-gray-700 dark:border-gray-700 dark:text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:underline dark:text-gray-300"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

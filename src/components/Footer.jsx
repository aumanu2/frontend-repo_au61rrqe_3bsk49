export default function Footer() {
  return (
    <footer className="bg-white py-10 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400">Portfolio</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

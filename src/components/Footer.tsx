export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-zota">zota</span>
          <span className="text-sm text-gray-400 dark:text-gray-500">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="https://zota.com" target="_blank" rel="noopener noreferrer" className="hover:text-zota transition-colors">Website</a>
          <a href="https://doc.zota.com" target="_blank" rel="noopener noreferrer" className="hover:text-zota transition-colors">API Docs</a>
          <a href="mailto:sales@zota.com" className="hover:text-zota transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

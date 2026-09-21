function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          © 2026 André Cesar Henrique
        </p>

        <p className="text-text-secondary text-xs font-mono">
          Built with React + TypeScript + Tailwind
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/andrecesarhdev" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent text-sm transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/andrecesar-dev/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent text-sm transition-colors">
            LinkedIn
          </a>
          <a href="mailto:andrecesarhenrique@gmail.com" className="text-text-secondary hover:text-accent text-sm transition-colors">
            E-mail
          </a>
        </div>
      </div>

      <p className="text-center text-text-secondary/60 text-xs pb-6 font-mono">
        Always learning. Always building.
      </p>
    </footer>
  );
}

export default Footer;
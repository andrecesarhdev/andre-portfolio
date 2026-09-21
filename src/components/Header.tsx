import { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="text-text-primary font-semibold tracking-tight">
          AndreCesar-dev
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors">
              {link.label}
            </a>
          ))}
          <a href="https://github.com/andrecesarhdev" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent text-sm transition-colors">
            GitHub
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text-primary"
          aria-label="Abrir menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-surface border-t border-border ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-text-secondary hover:text-text-primary text-sm">
              {link.label}
            </a>
          ))}
          <a href="https://github.com/andrecesarhdev" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent text-sm">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
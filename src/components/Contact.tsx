import { useState } from "react";

const EMAIL = "andrecesarhenrique@gmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="bg-accent/6 border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-accent font-mono text-sm mb-2">04 / CONTACT</p>
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
          Pronto para o próximo desafio.
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
          Estou aberto a oportunidades, projetos e conexões que possam me ajudar
          a transformar conhecimento em experiência.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a href={`mailto:${EMAIL}`} className="bg-accent hover:bg-accent/90 text-bg font-medium px-6 py-3 rounded-lg transition-colors">
            Entrar em contato
          </a>
          <a href="https://github.com/andrecesarhdev" target="_blank" rel="noopener noreferrer" className="border border-border hover:border-accent text-text-primary font-medium px-6 py-3 rounded-lg transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/andrecesar-dev/" target="_blank" rel="noopener noreferrer" className="border border-border hover:border-accent text-text-primary font-medium px-6 py-3 rounded-lg transition-colors">
            LinkedIn
          </a>
        </div>

        <button
          onClick={handleCopyEmail}
          className="text-text-secondary hover:text-accent text-sm font-mono transition-colors"
        >
          {copied ? "✓ E-mail copiado!" : EMAIL}
        </button>
      </div>
    </section>
  );
}

export default Contact;
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center max-w-6xl mx-auto px-6 pt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-text-secondary text-xs tracking-wide uppercase">
              Disponível para oportunidades
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
            Código com propósito,
            <br />
            soluções reais.
          </h1>

          <p className="text-accent font-medium mb-6">Full Stack Developer</p>

          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
            Desenvolvedor Full Stack focado em construir aplicações web
            funcionais, do frontend à API, com atenção a arquitetura e boas
            práticas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-accent hover:bg-accent/90 text-bg font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Ver projetos
            </a>
            <a
              href="/curriculo-andre-cesar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-accent text-text-primary font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Ver currículo
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 max-w-sm mx-auto lg:mx-0 w-full">
          <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-text-secondary text-xs ml-2 font-mono">
                developer.profile
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-text-secondary">name: </span>
                <span className="text-green-400">"André Cesar"</span>
              </p>
              <p>
                <span className="text-text-secondary">role: </span>
                <span className="text-green-400">"Full Stack Developer"</span>
              </p>
              <p>
                <span className="text-text-secondary">status: </span>
                <span className="text-accent">"open_to_work"</span>
              </p>
              <p className="mt-2">
                <span className="text-text-secondary">focus: </span>
                <span className="text-accent">[</span>
                <span className="text-green-400">"React"</span>
                <span className="text-text-secondary">, </span>
                <span className="text-green-400">"Node"</span>
                <span className="text-text-secondary">, </span>
                <span className="text-green-400">"TypeScript"</span>
                <span className="text-accent">]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

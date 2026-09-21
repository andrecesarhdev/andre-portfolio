const aboutCards = [
  {
    title: "Quem sou",
    text: "Passei quase 6 anos como eletricista antes de trocar de rumo. Hoje moro em Recife e vivo entre linhas de código, tentando entender como as coisas funcionam por baixo dos panos, do jeito que sempre gostei de fazer, só que agora com teclado em vez de alicate.",
  },
  {
    title: "Como trabalho",
    text: "Sou curioso por natureza, prefiro entender o porquê antes de simplesmente copiar uma solução. Gosto de testar, quebrar, consertar e só então seguir em frente. Aprendizado prático fala mais alto pra mim do que teoria pura.",
  },
  {
    title: "O que busco",
    text: "Quero trocar o aprendizado solitário por um time de verdade, trabalhar ao lado de outros devs, receber feedback direto e crescer mais rápido do que consigo sozinho, aplicando o que já venho construindo.",
  },
];

const journeySteps = [
  { year: "2023", title: "Lógica de Programação", description: "Primeiros passos com Python." },
  { year: "2024", title: "Início do ADS", description: "Graduação em Análise e Desenvolvimento de Sistemas." },
  { year: "2025", title: "Full Stack Java", description: "Spring Boot e backend estruturado." },
  { year: "2025", title: "Cibersegurança (FAST)", description: "Formação acelerada em Techdesign, transição de carreira." },
  { year: "2026", title: "Full Stack JS", description: "Generation Brasil: TypeScript, Node, NestJS, React." },
  { year: "2026", title: "DevOps", description: "Cursando na FAP/Aponti (Porto Digital)." },
];

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-accent font-mono text-sm mb-2">01 / ABOUT</p>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16">
        Por trás do código.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutCards.map((card) => (
          <div key={card.title} className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
            <h3 className="text-text-primary font-semibold mb-3">
              {card.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-20">
        <div className="overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar">
          <div className="relative flex gap-10 min-w-max">
            <div className="absolute left-2 right-2 top-2 h-px bg-border" />

            {journeySteps.map((step, index) => {
              const isLast = index === journeySteps.length - 1;

              return (
                <div key={`${step.year}-${step.title}`} className="relative flex flex-col items-start w-[170px] flex-shrink-0">
                  <span className="relative flex h-4 w-4 z-10 mb-3">
                    {isLast && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    )}
                    <span className={`relative inline-flex h-4 w-4 rounded-full border-2 border-accent ${isLast ? "bg-transparent" : "bg-accent"}`} />
                  </span>

                  <p className="text-accent font-mono text-xs mb-1">{step.year}</p>
                  <p className="text-text-primary font-medium text-sm mb-1">{step.title}</p>
                  <p className="text-text-secondary text-xs leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
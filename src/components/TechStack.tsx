import { useState } from "react";
import { technologies } from "../data/technologies";
import type { Technology } from "../types";

const categories: { key: Technology["category"]; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "devops", label: "DevOps" },
  { key: "tools", label: "Tools" },
];

function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Technology["category"]>("frontend");

  const filteredTechs = technologies.filter(
    (tech) => tech.category === activeCategory
  );

  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-accent font-mono text-sm mb-2">02 / STACK</p>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
        Minha caixa de ferramentas.
      </h2>

      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category.key
                ? "bg-accent text-bg"
                : "bg-surface text-text-secondary hover:text-text-primary border border-border"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredTechs.map((tech) => (
          <div
            key={tech.name}
            className="bg-surface border border-border rounded-lg px-4 py-3 hover:border-accent/50 hover:-translate-y-1 transition-all"
          >
            <p className="text-text-primary text-sm font-medium mb-1">
              {tech.name}
            </p>
            <p className="text-accent text-xs">{tech.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-accent font-mono text-sm mb-2">03 / PROJECTS</p>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
        Projetos que saíram da ideia.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors flex flex-col">
            <h3 className="text-text-primary font-semibold mb-2">
              {project.name}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-accent text-xs font-mono border border-border rounded-full px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm pt-4 border-t border-border">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                GitHub →
              </a>

              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                  Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "nutrihub",
    name: "nutrihub",
    description: "Plataforma SaaS de delivery white label para restaurantes, com painel administrativo independente por cliente.",
    problem: "Pequenos restaurantes sem um cardápio digital gerenciável, dependendo de soluções caras ou genéricas.",
    technologies: ["NestJS", "TypeScript", "MySQL", "JWT", "Swagger"],
    githubUrl: "https://github.com/Grupo-04-Turma-JavaScript-12/nutrihub",
    liveUrl: "https://nutrihub-l8i9.onrender.com/swagger",
  },
  {
    id: "crm-backend-nestjs",
    name: "crm-backend-nestjs",
    description: "Backend de CRM com autenticação JWT e controle de acesso por perfil de usuário.",
    problem: "Sistemas de gestão que não diferenciam permissões entre administradores, gerentes e operadores.",
    technologies: ["NestJS", "TypeORM", "MySQL", "JWT", "Swagger"],
    githubUrl: "https://github.com/andrecesarhdev/crm-backend-nestjs",
  },
  {
    id: "sistema-biblioteca",
    name: "sistema-biblioteca",
    description: "Sistema de gerenciamento de biblioteca com testes automatizados e pipelines de CI/CD.",
    problem: "Aplicar na prática o que venho aprendendo em DevOps, com deploy automatizado e testes confiáveis.",
    technologies: ["Python", "GitHub Actions", "GitLab CI/CD", "unittest"],
    githubUrl: "https://github.com/andrecesarhdev/sistema-biblioteca",
  },
];
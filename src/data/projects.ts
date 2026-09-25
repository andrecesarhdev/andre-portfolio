import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "gestor-financeiro",
    name: "gestor-financeiro",
    description: "API REST para gestão de finanças pessoais, com receitas, despesas, categorias e relatórios por período, em produção.",
    problem: "A falta de controle sobre o próprio dinheiro. Criei para uso próprio e para ajudar outras pessoas a organizarem suas finanças.",
    technologies: ["NestJS", "PostgreSQL", "Prisma", "Jest", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/andrecesarhdev/gestor-financeiro-backend",
    liveUrl: "https://gestor-financeiro-api-1369.onrender.com/docs",
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
    description: "Sistema de gerenciamento de biblioteca desenvolvido em equipe, com testes automatizados e pipelines de CI/CD.",
    problem: "Aplicar na prática o que venho aprendendo em DevOps, com deploy automatizado e testes confiáveis.",
    technologies: ["Python", "GitHub Actions", "GitLab CI/CD", "unittest", "Docker"],
    githubUrl: "https://github.com/andrecesarhdev/sistema-biblioteca",
  },
];
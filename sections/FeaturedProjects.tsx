import ProjectCard from '@/components/ProjectCard'
const featured = [
  {
    title: 'Prontuário Psicológico',
    description:
      'Sistema web publicado em produção para gerenciamento de prontuários psicológicos.',
    technologies: ['React', 'Next.js'],
    githubUrl: 'https://github.com/pedro-hma/prontuario-psicologico',
    liveUrl: 'https://prontuario-psicologico.vercel.app',
  },
  {
    title: 'Projeto Vida Plena',
    description:
      'Aplicação prática com foco em organização de funcionalidades e estruturação de código.',
    technologies: ['React'],
    githubUrl: 'https://github.com/pedrooayres/Projeto-Vida-Plena',
  },
]
export default function FeaturedProjects() {
  return (
    <section>
      <div className="container">
        <h2>Projetos em destaque</h2>
        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <a href="/projetos" className="button-neon">Ver todos os projetos</a>
        </div>
      </div>
    </section>
  )
}
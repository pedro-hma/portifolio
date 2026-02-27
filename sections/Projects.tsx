import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <section id="projetos" style={{ padding: 20 }}>
      <h2>Projetos</h2>

      <div style={{ display: 'grid', gap: 16 }}>
        <ProjectCard
          title="Portfólio"
          description="Meu site pessoal com Next.js"
        />
        <ProjectCard
          title="Dashboard"
          description="Painel administrativo em React"
        />
      </div>
    </section>
  )
}
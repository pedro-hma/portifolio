import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Prontuário Psicológico',
    description:
      'Sistema para gerenciamento de prontuários psicológicos.',
    technologies: ['Java', 'POO'],
    githubUrl: 'https://github.com/pedro-hma/prontuario-psicologico',
  },
  {
    title: 'Estrutura de Dados',
    description: 'Implementações de estruturas de dados clássicas.',
    technologies: ['Java', 'Algoritmos'],
    githubUrl: 'https://github.com/pedro-hma/Projeto-Estrutura-de-Dados',
  },
  {
    title: 'Projeto POO',
    description: 'Projeto acadêmico focado em Programação Orientada a Objetos.',
    technologies: ['Java'],
    githubUrl: 'https://github.com/pedro-hma/Projeto-POO',
  },
  {
    title: 'Projeto Final PE 2024.1',
    description: 'Projeto final da disciplina de Programação Estruturada.',
    technologies: ['C'],
    githubUrl: 'https://github.com/pedro-hma/projeto-final-pe2024.1',
  },
  {
    title: 'Portfólio Pessoal',
    description: 'Meu portfólio desenvolvido com Next.js.',
    technologies: ['Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/pedro-hma/pedro-ayres',
  },
]

export default function Projects() {
  return (
    <section id="projetos">
      <h2>Projetos</h2>

      <div style={{ display: 'grid', gap: 24 }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
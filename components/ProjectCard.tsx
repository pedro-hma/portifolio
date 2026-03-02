type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul style={styles.techList}>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        Ver no GitHub →
      </a>
      </article>
  )
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 12,
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: 24,
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 8,
    listStyle: 'none',
    padding: 0,
    margin: '8px 0',
    fontSize: 14,
    opacity: 0.8,
  },
}
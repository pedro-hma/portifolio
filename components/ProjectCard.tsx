type ProjectCardProps = {
  title: string
  description: string
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
  }
}
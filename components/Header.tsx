import Link from 'next/link'

export default function Header() {
  return (
    <header style={styles.header}>
      <strong>Pedro Ayres</strong>

      <nav style={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
    borderBottom: '1px solid #eee',
  },
  nav: {
    display: 'flex',
    gap: 20,
  },
}
import type { Metadata } from 'next'
import Projects from '@/sections/Projects'

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Projetos desenvolvidos por Pedro Ayres em React e Next.js.',
}

export default function ProjetosPage() {
  return (
    <main>
      <Projects />
    </main>
  )
}
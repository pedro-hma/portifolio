import type { Metadata } from 'next'
import Contact from '@/sections/Contact'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com Pedro Ayres.',
}

export default function ContatoPage() {
  return (
    <main>
      <Contact />
    </main>
  )
}
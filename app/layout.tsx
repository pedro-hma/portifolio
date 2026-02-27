import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Pedro Ayres | Desenvolvedor Frontend',
    template: '%s | Pedro Ayres',
  },
  description:
    'Portfólio de Pedro Ayres, desenvolvedor frontend especializado em React, Next.js e TypeScript.',
  metadataBase: new URL('https://seusite.vercel.app'),
  openGraph: {
    title: 'Pedro Ayres | Desenvolvedor Frontend',
    description:
      'Portfólio profissional com projetos em React, Next.js e TypeScript.',
    url: 'https://seusite.vercel.app',
    siteName: 'Pedro Ayres',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
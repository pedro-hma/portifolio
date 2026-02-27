export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-4xl md:text-6xl font-bold">
          Olá, eu sou <span className="text-blue-500">Pedro Ayres</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-400 text-lg">
          Desenvolvedor focado em criar aplicações web modernas, rápidas e bem
          estruturadas usando React, Next.js e Node.js.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
          >
            Ver projetos
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 transition"
          >
            Contato
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>

        <p className="text-gray-400 leading-relaxed">
          Sou desenvolvedor apaixonado por tecnologia, com experiência em
          projetos pessoais e profissionais. Gosto de trabalhar com interfaces
          bem pensadas, código limpo e soluções escaláveis. Atualmente foco em
          desenvolvimento frontend com React e Next.js, mas também tenho
          familiaridade com backend.
        </p>
      </section>

      {/* STACK */}
      <section className="bg-neutral-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Tecnologias</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "GitHub",
              "Vercel",
            ].map((tech) => (
              <div
                key={tech}
                className="border border-gray-800 rounded-lg py-4 text-center text-gray-300 hover:border-blue-500 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center px-6 py-32">
        <h2 className="text-3xl md:text-4xl font-bold">
          Vamos construir algo juntos?
        </h2>

        <p className="mt-4 text-gray-400">
          Entre em contato ou veja meus projetos mais recentes.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-4 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-400 transition"
        >
          Entrar em contato
        </a>
      </section>
    </main>
  )
}
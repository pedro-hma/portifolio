export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">
          Desenvolvedor Frontend focado em{' '}
          <span className="highlight">aplicações web modernas</span>
        </h1>
        <p className="hero-subtitle">
          Desenvolvo aplicações web com React e Next.js, aplicando boas práticas,
          organização de código e foco na experiência do usuário.
        </p>
        <div className="hero-buttons">
          <a href="#projetos" className="button-neon">
            Ver Projetos
          </a>
          <a href="#contato" className="button-outline">
            Entrar em Contato
          </a>
        </div>
        {/* 🔥 Card social integrado */}
        <div className="hero-profile">
          <span className="hero-name">Prazer, sou Pedro Ayres</span>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/pedro-henrique-ayres-563145246/"target="_blank"rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://github.com/pedro-hma"target="_blank"rel="noopener noreferrer"aria-label="GitHub">GH</a>
            </div>
            </div>
            </div>
            </section>
  )
}
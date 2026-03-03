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
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.24 8.5h4.48V24H.24zM8.34 8.5h4.29v2.11h.06c.6-1.14 2.07-2.35 4.26-2.35 4.55 0 5.39 2.99 5.39 6.87V24h-4.48v-7.63c0-1.82-.03-4.17-2.54-4.17-2.54 0-2.93 1.98-2.93 4.04V24H8.34z"/>
              </svg>
              <a href="https://github.com/pedro-hma"target="_blank"rel="noopener noreferrer"aria-label="GitHub">GH</a>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.58.11.79-.25.79-.56v-2.17c-3.25.7-3.94-1.57-3.94-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.57-2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.33 1.21-3.15-.12-.3-.52-1.52.11-3.18 0 0 .99-.32 3.24 1.2a11.3 11.3 0 015.9 0c2.24-1.52 3.23-1.2 3.23-1.2.64 1.66.24 2.88.12 3.18.76.82 1.21 1.87 1.21 3.15 0 4.49-2.74 5.47-5.35 5.76.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
            </div>
            </div>
            </div>
            </section>
  )
}
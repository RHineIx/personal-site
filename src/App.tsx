function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

const skills = ['Java', 'Kotlin', 'Python', 'JavaScript', 'Rust', 'Dart / Flutter', 'C / C++', 'Web'];

function App() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="RHine home">RHine<span>.</span></a>
        <div className="nav-right">
          <span className="nav-note">personal site / 2026</span>
          <a className="nav-link" href="https://t.me/RHineArchive" target="_blank" rel="noreferrer">Archive <ArrowUpRight /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-index">01<br /><span>intro</span></div>
        <div className="hero-main">
          <p className="overline">Hello, I’m</p>
          <h1>RHine<span className="blue-dot">.</span></h1>
          <p className="hero-line">Developer / collector / curious person</p>
        </div>
        <div className="hero-aside">
          <p>A small, intentional corner<br />for things I make,<br />learn, and keep.</p>
          <span className="scroll-mark">↓ scroll to explore</span>
        </div>
      </section>

      <section className="statement section-grid">
        <div className="section-label">02 / about</div>
        <div className="statement-copy">
          <p className="statement-lead">I like turning curiosity into working things.</p>
          <p className="body-copy">Software, experiments, useful tools, strange ideas — this is where they meet. No loud portfolio theatre. Just a living index of what I’m building and what I’m paying attention to.</p>
          <p className="ru-line"><span>RU</span> Небольшое цифровое пространство о коде, любопытстве и вещах, которые хочется сохранить.</p>
        </div>
      </section>

      <section className="archive section-grid" id="archive">
        <div className="section-label">03 / archive</div>
        <div className="archive-panel">
          <div className="archive-topline"><span className="telegram-mark">↗</span><span>Telegram channel</span><span className="archive-status">open collection</span></div>
          <div className="archive-content">
            <h2>RHine’s<br /><i>Archive</i></h2>
            <div className="archive-description">
              <p>A personal shelf of screenshots, music, films, books, tools, games, and useful little discoveries.</p>
              <a className="archive-cta" href="https://t.me/RHineArchive" target="_blank" rel="noreferrer">Enter the archive <ArrowUpRight /></a>
            </div>
          </div>
          <div className="archive-tags"><span>art</span><span>anime</span><span>games</span><span>music</span><span>books</span><span>tools</span><span>+ more</span></div>
        </div>
      </section>

      <section className="toolkit section-grid">
        <div className="section-label">04 / toolkit</div>
        <div className="toolkit-content">
          <div className="toolkit-heading"><span>Languages I speak</span><strong>in code.</strong></div>
          <div className="skills-grid">
            {skills.map((skill, index) => <div className="skill" key={skill}><span>0{index + 1}</span>{skill}</div>)}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-name">RHine<span>.</span></div>
        <div className="footer-center">made with attention / rhineix.online</div>
        <a href="https://t.me/RHineArchive" target="_blank" rel="noreferrer" className="footer-link">@RHineArchive <ArrowUpRight /></a>
      </footer>
    </main>
  );
}

export default App;

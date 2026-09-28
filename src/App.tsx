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
        <div className="hero-copy">
          <p className="eyebrow">Hello, I’m RHine<span>.</span></p>
          <h1>Ideas, code<br /><i>and curiosity.</i></h1>
          <p className="hero-description">A small personal space for things I build, learn, collect, and keep.</p>
          <p className="ru-line"><span>RU</span> Privet, ya RHine. Eto moe malenkoe mesto v internete.</p>
        </div>
        <div className="hero-side">
          <span className="side-mark">01</span>
          <span>developer<br />collector<br />curious person</span>
        </div>
      </section>

      <section className="archive" id="archive">
        <div className="section-head"><span>01</span><h2>The archive</h2></div>
        <div className="archive-panel">
          <div className="archive-title"><span className="telegram-mark">↗</span><h3>RHine’s<br /><i>Archive</i></h3></div>
          <div className="archive-info">
            <p>A personal Telegram shelf for screenshots, music, films, books, tools, games, and small discoveries worth keeping.</p>
            <a className="archive-cta" href="https://t.me/RHineArchive" target="_blank" rel="noreferrer">Open @RHineArchive <ArrowUpRight /></a>
          </div>
          <div className="archive-tags"><span>art</span><span>anime</span><span>games</span><span>music</span><span>books</span><span>tools</span></div>
        </div>
      </section>

      <section className="toolkit" id="toolkit">
        <div className="section-head"><span>02</span><h2>Toolkit</h2></div>
        <div className="toolkit-body">
          <p className="toolkit-intro">Languages and tools I enjoy turning into useful things.</p>
          <div className="skills-grid">
            {skills.map((skill, index) => <div className="skill" key={skill}><span>0{index + 1}</span>{skill}</div>)}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-name">RHine<span>.</span></div>
        <div className="footer-right"><a href="https://t.me/RHineArchive" target="_blank" rel="noreferrer">@RHineArchive <ArrowUpRight /></a><span>© 2026</span></div>
      </footer>
    </main>
  );
}

export default App;

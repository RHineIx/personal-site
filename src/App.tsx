import { useState } from 'react';

const archiveImage = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663292677335/RZWvmbcoKmuwBUZT.jpg';

const skills = [
  'Java',
  'Kotlin',
  'Python',
  'JavaScript',
  'Rust',
  'Dart / Flutter',
  'C / C++',
  'Web craft',
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [copied, setCopied] = useState(false);

  const copyHandle = async () => {
    try {
      await navigator.clipboard.writeText('RHineIx');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="RHine home">
          <span className="brand-mark">R</span>
          <span>RHine<span className="brand-dot">.</span></span>
        </a>
        <div className="topbar-meta">
          <span className="status-dot" />
          <span>online / somewhere</span>
          <span className="mono">rhineix.online</span>
        </div>
        <a className="top-link" href="https://t.me/RHineArchive" target="_blank" rel="noreferrer">
          Archive <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> personal space · 01</p>
          <h1>I build things<br /><em>that feel alive.</em></h1>
          <p className="hero-lede">
            A quiet corner of the internet for <strong>RHineIx</strong> — developer, collector,
            and curious human wandering between systems, screens, and small ideas.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://t.me/RHineArchive" target="_blank" rel="noreferrer">
              Visit the archive <ArrowUpRight />
            </a>
            <button className="handle-button" onClick={copyHandle} type="button">
              <span className="handle-symbol">@</span>
              <span>{copied ? 'Copied' : 'RHineIx'}</span>
              <span className="copy-hint">{copied ? '✓' : 'copy'}</span>
            </button>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core"><span>R</span></div>
          <span className="orbit-label label-top">curiosity</span>
          <span className="orbit-label label-right">craft</span>
          <span className="orbit-label label-bottom">signal</span>
          <span className="orbit-label label-left">play</span>
        </div>
      </section>

      <div className="section-rule"><span>02</span><span className="rule" /><span>the short version</span></div>

      <section className="intro-grid">
        <div className="intro-heading">
          <p className="section-kicker">A little context</p>
          <h2>Not a résumé.<br /><span>A living index.</span></h2>
        </div>
        <div className="intro-body">
          <p>
            I like learning by making: apps, tools, experiments, and occasionally a beautifully
            over-organized folder. This space is a compact map of what I’m into right now.
          </p>
          <p className="russian-note"><span>RU /</span> Цифровое пространство RHine — немного кода, любопытства и вещей, которые хочется сохранить.</p>
          <div className="micro-stats">
            <div><strong>∞</strong><span>things left to learn</span></div>
            <div><strong>01</strong><span>personal archive</span></div>
            <div><strong>24/7</strong><span>ideas in progress</span></div>
          </div>
        </div>
      </section>

      <section className="archive-card" id="archive">
        <div className="archive-visual">
          <img src={archiveImage} alt="Preview of RHine's Archive on Telegram" />
          <div className="image-shade" />
          <span className="visual-tag">a personal collection</span>
          <span className="visual-corner">01 / 01</span>
        </div>
        <div className="archive-copy">
          <p className="section-kicker">The archive</p>
          <h2>RHine’s<br /><span>Archive</span></h2>
          <p>A small Telegram corner for screenshots, music, tools, books, game finds, and whatever else deserves a second look.</p>
          <a className="text-link" href="https://t.me/RHineArchive" target="_blank" rel="noreferrer">
            Open @RHineArchive <ArrowUpRight />
          </a>
          <div className="archive-foot"><span>curated slowly</span><span>est. 2024</span></div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-title">
          <p className="section-kicker">The toolkit</p>
          <h2>Many languages.<br /><span>One way of thinking.</span></h2>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill}>
              <span className="skill-number">0{index + 1}</span>
              <span className="skill-name">{skill}</span>
              <span className="skill-mark">↗</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div><span className="footer-logo">RHine<span className="brand-dot">.</span></span><span className="footer-note">made with curiosity</span></div>
        <div className="footer-links"><a href="https://t.me/RHineArchive" target="_blank" rel="noreferrer">Telegram</a><a href="https://rhineix.online">rhineix.online</a></div>
        <div className="footer-year">© 2026</div>
      </footer>
    </main>
  );
}

export default App;

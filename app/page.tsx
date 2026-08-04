"use client";

import { FormEvent, useState } from "react";

const features = [
  {
    number: "01",
    title: "Remember the little things",
    text: "Keep the stories, milestones, and details you never want to lose — private and all in one place.",
    className: "feature-peach",
    art: "memory",
  },
  {
    number: "02",
    title: "Reach out at the right moment",
    text: "Gentle reminders help you check in after the new job, before a birthday, or simply when it’s been a while.",
    className: "feature-lilac",
    art: "calendar",
  },
  {
    number: "03",
    title: "Never wonder what to say",
    text: "Thoughtful prompts pick up where you left off, so reconnecting feels natural — never awkward.",
    className: "feature-sage",
    art: "chat",
  },
];

const notes = [
  { icon: "✦", title: "Emma’s birthday", meta: "Tomorrow", tone: "coral" },
  { icon: "↗", title: "Ask Ben about the move", meta: "This week", tone: "sage" },
  { icon: "♡", title: "Send Maya some love", meta: "Just because", tone: "gold" },
];

function BloomMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "brand brand-small" : "brand"} aria-label="Bloom">
      Bl<span className="brand-flower" aria-hidden="true">✿</span>om
    </span>
  );
}

function Mascot({ variant = "hero" }: { variant?: "hero" | "small" }) {
  return (
    <div className={`mascot mascot-${variant}`} aria-hidden="true">
      <div className="mascot-sprout"><i /><i /></div>
      <div className="mascot-body">
        <span className="eye eye-left" />
        <span className="eye eye-right" />
        <span className="smile" />
        <span className="arm arm-left" />
        <span className="arm arm-right" />
      </div>
      <div className="mascot-shadow" />
    </div>
  );
}

function GardenArt() {
  return (
    <div className="garden-art" aria-hidden="true">
      <div className="sun" />
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />
      <div className="plant plant-left"><i /><i /><b /></div>
      <div className="plant plant-right"><i /><i /><b /></div>
      <div className="flower flower-one"><span>●</span></div>
      <div className="flower flower-two"><span>●</span></div>
      <Mascot />
      <div className="watering-can"><span>♡</span><i /></div>
      <div className="water-drops">•••</div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a href="#top" className="logo-link"><BloomMark /></a>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Bloom?</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</a>
          <a href="#waitlist" className="nav-cta" onClick={() => setMenuOpen(false)}>Join the waitlist <span>↗</span></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>✿</span> Your relationship garden</div>
          <h1>Good relationships<br /><em>grow with care.</em></h1>
          <p>Bloom helps you remember the people who matter most — and the little things that keep you close.</p>
          <div className="hero-actions">
            <a href="#waitlist" className="button button-primary">Join the waitlist <span>↗</span></a>
            <a href="#how" className="text-link">See how it works <span>↓</span></a>
          </div>
          <p className="privacy-note"><span>♥</span> Private by design. Always yours.</p>
        </div>
        <GardenArt />
      </section>

      <section className="care-strip" aria-label="Bloom philosophy">
        <div className="marquee">
          <span>Little moments of care</span><b>✿</b><span>Stronger connections</span><b>✦</b><span>Less guilt, more warmth</span><b>♡</b><span>Little moments of care</span><b>✿</b>
        </div>
      </section>

      <section className="intro shell" id="why">
        <div className="section-label"><span>01</span> Why Bloom?</div>
        <div className="intro-copy">
          <h2>Life gets busy.<br /><em>People still matter.</em></h2>
          <p>We don’t drift apart because we stop caring. We forget a date, miss a follow-up, then wait too long to say hello. Bloom makes staying close feel simple again.</p>
        </div>
        <div className="love-note">
          <div className="tape" />
          <span className="note-heart">♥</span>
          <p>“Care doesn’t have to be constant to be meaningful.”</p>
          <div className="note-flower">✿</div>
        </div>
      </section>

      <section className="features shell" id="how">
        {features.map((feature) => (
          <article className={`feature-card ${feature.className}`} key={feature.number}>
            <div className="feature-top"><span>{feature.number}</span><i>✦</i></div>
            <div className={`feature-art feature-art-${feature.art}`}>
              {feature.art === "memory" && <><div className="mini-photo">☺</div><div className="mini-note">coffee<br />&amp; long walks</div><span className="mini-heart">♥</span></>}
              {feature.art === "calendar" && <><div className="mini-calendar"><b>MAY</b><strong>10</strong></div><div className="mini-bell">♢</div><span className="mini-spark">✦</span></>}
              {feature.art === "chat" && <><div className="mini-chat">How did the<br />big move go?</div><div className="mini-avatar">☺</div><span className="mini-leaf">❧</span></>}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="product shell">
        <div className="product-copy">
          <div className="section-label light"><span>02</span> A calmer way to stay close</div>
          <h2>A gentle nudge.<br /><em>Never a guilt trip.</em></h2>
          <p>Open Bloom to a quiet daily view of the people who might appreciate hearing from you. No feeds, no streaks, no pressure.</p>
          <ul>
            <li><span>✓</span> Thoughtful, contextual reminders</li>
            <li><span>✓</span> Private notes and memories</li>
            <li><span>✓</span> Birthdays and life milestones</li>
          </ul>
        </div>
        <div className="app-window" aria-label="Bloom app preview">
          <div className="app-topbar"><BloomMark small /><span>Tuesday, May 9</span><button aria-label="Notifications">♢</button></div>
          <div className="app-greeting">
            <div><span>TODAY IN YOUR GARDEN</span><h3>Three little ways<br />to show you care.</h3></div>
            <Mascot variant="small" />
          </div>
          <div className="app-notes">
            {notes.map((note) => <div className="app-note" key={note.title}><span className={`note-icon note-icon-${note.tone}`}>{note.icon}</span><div><strong>{note.title}</strong><small>{note.meta}</small></div><b>›</b></div>)}
          </div>
          <button className="app-button">+ Add a memory</button>
        </div>
      </section>

      <section className="principles shell" id="privacy">
        <div className="section-label"><span>03</span> Made for real relationships</div>
        <h2>Everything social media <em>isn’t.</em></h2>
        <div className="principle-grid">
          <div><span className="principle-icon">⌁</span><h3>No feeds to scroll</h3><p>Your attention stays with real people, not content.</p></div>
          <div><span className="principle-icon">♡</span><h3>No likes or scores</h3><p>Relationships aren’t a game, and care isn’t a metric.</p></div>
          <div><span className="principle-icon">⌂</span><h3>Private by default</h3><p>Your memories are personal. Bloom never makes them public.</p></div>
          <div><span className="principle-icon">☼</span><h3>AI stays in the background</h3><p>Helpful prompts support your voice — they never replace it.</p></div>
        </div>
      </section>

      <section className="waitlist-wrap shell" id="waitlist">
        <div className="waitlist-art" aria-hidden="true"><div className="giant-flower">✿</div><Mascot variant="small" /></div>
        <div className="waitlist-copy">
          <span className="waitlist-kicker">Bloom is growing soon</span>
          <h2>Make a little more<br /><em>room for your people.</em></h2>
          <p>Join the early access list and be among the first to grow your relationship garden.</p>
          {submitted ? (
            <div className="success-message" role="status"><span>♥</span><div><strong>You’re on the list.</strong><small>We’ll be in touch when Bloom is ready.</small></div></div>
          ) : (
            <form onSubmit={handleSubmit} className="waitlist-form">
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" type="email" required placeholder="Your email address" />
              <button type="submit">Keep me posted <span>↗</span></button>
            </form>
          )}
          <small className="form-note">No spam. Just one gentle note when we bloom.</small>
        </div>
      </section>

      <footer className="footer shell">
        <div><BloomMark /><p>Helping people remember the people who matter most.</p></div>
        <div className="footer-links"><a href="#why">Why Bloom?</a><a href="#how">How it works</a><a href="#privacy">Privacy</a></div>
        <div className="footer-signoff"><span>Made with care</span><b>♥</b><small>© 2026 Bloom</small></div>
      </footer>
    </main>
  );
}

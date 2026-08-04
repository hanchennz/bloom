"use client";

import { FormEvent, MouseEvent, useState } from "react";

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
  {
    number: "04",
    title: "Find a time that works",
    text: "Send a simple time-slot survey, choose the best catch-up time together, and add it straight to Google Calendar — with gentle reminders for everyone.",
    className: "feature-apricot",
    art: "schedule",
  },
  {
    number: "05",
    title: "Capture notes by voice",
    text: "Speak naturally after a call and Bloom turns your thoughts into private notes, memories, and useful follow-ups.",
    className: "feature-blue",
    art: "voice",
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

function Mascot({ variant = "hero", pose = "heart" }: { variant?: "hero" | "small"; pose?: "water" | "heart" }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <div className={`mascot-image mascot-image-${variant}`} aria-hidden="true">
      <img src={`${basePath}/mascot-${pose}.png`} alt="" />
    </div>
  );
}

function GardenArt() {
  return (
    <div className="garden-art" aria-hidden="true">
      <div className="garden-message">
        <span>Little moments of care</span>
        <strong>grow stronger connections.</strong>
        <p>Made for busy people, introverts, long-distance friendships, old friendships, and families spread across generations.</p>
      </div>
      <div className="sun" />
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />
      <div className="plant plant-left"><i /><i /><b /></div>
      <div className="plant plant-right"><i /><i /><b /></div>
      <div className="flower flower-one"><span>●</span></div>
      <div className="flower flower-two"><span>●</span></div>
      <Mascot pose="water" />
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

  function scrollToHow(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.getElementById("how");
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;
    const duration = 1400;
    const startTime = performance.now();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, targetY);
      return;
    }

    function animateScroll(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a href="#top" className="logo-link"><BloomMark /><span className="nav-kicker">Your relationship garden</span></a>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Bloom?</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <h1>Good relationships<br /><em>grow with care.</em></h1>
          <p>Bloom helps you remember the friends and family who matter most — and the little things that keep you close.</p>
          <div className="hero-actions">
            <a href="#how" className="button button-primary" onClick={scrollToHow}>See how it works <span>↓</span></a>
          </div>
          <p className="privacy-note"><span>♥</span> Private by design. Always yours.</p>
        </div>
        <GardenArt />
      </section>

      <section className="intro shell" id="why">
        <div className="section-label"><span>01</span> Why Bloom?</div>
        <div className="intro-copy">
          <h2>Life gets busy.<br /><em>People still matter.</em></h2>
          <p>We don’t drift apart because we stop caring. Busy lives, quiet personalities, changing time zones, and years apart can make reaching out feel harder than it should. Whether it’s an old friend across the world or relatives who live far away — like grandparents — Bloom makes staying close feel simple again.</p>
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
              {feature.art === "schedule" && <><div className="mini-slots"><span>9:30 am</span><span>12:00 pm</span><span>6:30 pm</span></div><div className="mini-calendar-sync"><b>CAL</b><span>✓</span></div></>}
              {feature.art === "voice" && <><div className="mini-mic">●</div><div className="mini-wave"><i /><i /><i /><i /><i /></div><div className="mini-transcript">“Ask Maya about<br />the move in June…”</div></>}
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
            <li><span>✓</span> Catch-up polls with Google Calendar</li>
            <li><span>✓</span> Voice-to-text note taking</li>
          </ul>
        </div>
        <div className="app-window" aria-label="Bloom app preview">
          <div className="app-topbar"><BloomMark small /><span>Tuesday, May 9</span><button aria-label="Notifications">♢</button></div>
          <div className="app-greeting">
            <div><span>TODAY IN YOUR GARDEN</span><h3>Three little ways<br />to show you care.</h3></div>
            <Mascot variant="small" pose="heart" />
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
        <div className="waitlist-art" aria-hidden="true"><div className="giant-flower">✿</div><Mascot variant="small" pose="heart" /></div>
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
        <div><BloomMark /><p>Helping people stay close to the friends and family who matter most.</p></div>
        <div className="footer-links"><a href="#why">Why Bloom?</a><a href="#how">How it works</a><a href="#privacy">Privacy</a></div>
        <div className="footer-signoff"><span>Made with care</span><b>♥</b><small>© 2026 Bloom</small></div>
      </footer>
    </main>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "./components/container";
import {
  ScrollText, Video, SwitchCamera, Pause, Zap,
  Smartphone, Star, ArrowRight, WifiOff, ShieldOff,
  Layers, Clock, ChevronDown, ChevronUp, Quote,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  { icon: ScrollText,  label: "Teleprompter Overlay" },
  { icon: Video,       label: "Record & Download"    },
  { icon: SwitchCamera,label: "Flip Camera"          },
  { icon: Pause,       label: "Pause Anytime"        },
  { icon: Zap,         label: "Speed Control"        },
];

const STEPS = [
  {
    number: "01",
    title: "Write It Once",
    body: "Paste any script directly into the app. Paragraphs, line breaks, formatting — all preserved exactly as written so you stay in flow.",
  },
  {
    number: "02",
    title: "Read While You Film",
    body: "Your script scrolls over the live camera feed as a translucent overlay. Front or rear camera. Pause, resume, or reset mid-take with a single tap.",
  },
  {
    number: "03",
    title: "Download Instantly",
    body: "When you're done, preview the recording directly in the browser and save it to your phone in one tap. No accounts, no cloud upload required.",
  },
];

const DEEP_FEATURES = [
  {
    icon: Layers,
    title: "Overlay That Doesn't Obstruct",
    body: "The teleprompter sits as a translucent layer over your live camera feed. Your face stays visible, your framing stays perfect, and your words stay readable — simultaneously.",
  },
  {
    icon: Zap,
    title: "Variable Scroll Speed",
    body: "Dial your scroll rate from a slow crawl to rapid fire. Whether you're delivering a measured keynote or a fast-paced social clip, the speed matches your voice — not the other way around.",
  },
  {
    icon: SwitchCamera,
    title: "Front & Rear Camera",
    body: "Switch between cameras without leaving the app. Film yourself for vlogs, or use the rear camera for product demos and walkthroughs — same script, same session.",
  },
  {
    icon: WifiOff,
    title: "Fully Offline",
    body: "No internet required once the page loads. Your script never leaves your device. Record in a studio, a field, or a basement with no signal — PromptRoll doesn't care.",
  },
  {
    icon: ShieldOff,
    title: "Zero Accounts",
    body: "No sign-up, no login, no subscription wall. Open the link, paste your script, and record. That's the entire onboarding flow.",
  },
  {
    icon: Clock,
    title: "Pause & Resume Mid-Take",
    body: "Lost your place? Tapped out of rhythm? Pause the scroll with a single tap and resume exactly where you left off. No retakes, no frustration.",
  },
];

const TESTIMONIALS = [
  {
    quote: "I used to need a laptop propped behind my phone and a friend to scroll. PromptRoll collapsed that whole setup into one device.",
    name: "Amara T.",
    role: "YouTube Creator",
  },
  {
    quote: "The overlay is subtle enough that you genuinely can't tell I'm reading. My delivery improved overnight.",
    name: "James R.",
    role: "Corporate Trainer",
  },
  {
    quote: "No install, no account, no nonsense. I was recording my first video in under two minutes.",
    name: "Priya M.",
    role: "Freelance Consultant",
  },
];

const FAQS = [
  {
    question: "Does PromptRoll work on any phone?",
    answer: "Yes. It runs in any modern mobile browser — Chrome, Safari, Firefox. No app store download required. If your browser supports camera access, PromptRoll works.",
  },
  {
    question: "Is my script stored anywhere?",
    answer: "No. Your script exists only in your browser session. Nothing is sent to a server, nothing is saved to the cloud. Close the tab and it's gone.",
  },
  {
    question: "What video quality does it record in?",
    answer: "PromptRoll records at the highest resolution your device camera supports, typically 1080p on modern phones. Quality is determined by your hardware, not the app.",
  },
  {
    question: "Can I use it on a desktop or laptop?",
    answer: "You can open it on desktop and it will function, but the experience is designed for portrait-mode mobile filming. A phone or tablet gives you the intended workflow.",
  },
  {
    question: "Is PromptRoll free?",
    answer: "Yes, entirely. No freemium limits, no watermarks, no paywalled features. The full tool is available the moment you open the link.",
  },
];

const QR_INSTRUCTIONS = [
  "Open your phone camera app",
  "Point it at the QR code",
  "Tap the link that appears",
  "Allow camera & mic access",
];

const FLOAT_BADGES = [
  { icon: Zap,   label: "Scroll Speed", value: "×4",  className: "b1" },
  { icon: Video, label: "Recording",    value: "LIVE", className: "b2" },
];

const SIM_LINES = [
  false, false, true,
  false, false, true,
  false, false, true,
  false, false, false, true,
  false, false,
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeatureBadges() {
  return (
    <div className="max-w-2xl font-sans flex flex-wrap gap-4">
      {FEATURES.map(({ icon: Icon, label }) => (
        <div key={label} className="badge">
          <Icon size={16} />
          <small>{label}</small>
        </div>
      ))}
    </div>
  );
}

function StepCards() {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
      {STEPS.map(({ number, title, body }) => (
        <div key={number} className="card">
          <span className="font-serif italic span text-6xl">{number}</span>
          <div className="font-sans text-2xl font-bold my-2">{title}</div>
          <p className="paragraph font-sans">{body}</p>
        </div>
      ))}
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-vol" />
        <div className="phone-power" />
        <div className="phone-screen">
          <div className="sim-camera">
            <div className="sim-reading-line" />
            <div className="sim-rec-badge">
              <div className="sim-rec-dot" />
              <div className="sim-rec-text">REC 00:42</div>
            </div>
            <div className="sim-scroll">
              {SIM_LINES.map((isShort, i) => (
                <div key={i} className={`sim-line${isShort ? " short" : ""}`} />
              ))}
            </div>
          </div>
          <div className="sim-controls">
            <div className="sim-dot" />
            <div className="sim-dot" />
            <div className="sim-rec" />
            <div className="sim-dot" />
            <div className="sim-dot" />
          </div>
        </div>
      </div>

      {FLOAT_BADGES.map(({ icon: Icon, label, value, className }) => (
        <div key={label} className={`float-badge ${className}`}>
          <div className="badge-icon">
            <Icon size={16} />
          </div>
          <div>
            <div className="badge-text">{label}</div>
            <div className="badge-val">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── NEW: Deep Features ───────────────────────────────────────────────────────

function DeepFeatures() {
  return (
    <section id="features" style={{ marginTop: "8rem" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <small className="uppercase tracking-widest font-sans" style={{ color: "var(--muted)" }}>
          Built different
        </small>
        <h2
          className="font-serif font-black"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginTop: "1rem" }}
        >
          Every detail,{" "}
          <span className="span italic">considered.</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {DEEP_FEATURES.map(({ icon: Icon, title, body }) => (
          <div key={title} className="card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              className="badge-color"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={18} />
            </div>
            <div className="font-bold font-sans" style={{ fontSize: "var(--text-lg)" }}>{title}</div>
            <p className="paragraph font-sans" style={{ margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── NEW: Testimonials ────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section id="testimonials" style={{ marginTop: "8rem", textAlign: "center" }}>
      <small className="uppercase tracking-widest font-sans" style={{ color: "var(--muted)" }}>
        From creators
      </small>
      <h2
        className="font-serif font-black"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", margin: "1rem 0 3rem" }}
      >
        They rolled.{" "}
        <span className="span italic">You should too.</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          textAlign: "left",
        }}
      >
        {TESTIMONIALS.map(({ quote, name, role }) => (
          <div key={name} className="card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <Quote size={20} style={{ color: "var(--amber)", opacity: 0.8 }} />
            <p className="paragraph font-sans" style={{ margin: 0, fontStyle: "italic", lineHeight: 1.7 }}>
              {quote}
            </p>
            <div style={{ marginTop: "auto" }}>
              <div className="font-bold font-sans" style={{ fontSize: "var(--text-sm)" }}>{name}</div>
              <div className="font-sans" style={{ fontSize: "var(--text-xs)", color: "var(--muted)" }}>{role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── NEW: FAQ ─────────────────────────────────────────────────────────────────

function FAQItem({ question, answer } : { question: string, answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card"
      style={{ padding: "1.5rem", cursor: "pointer", userSelect: "none" }}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <span className="font-bold" style={{ fontSize: "var(--text-base)" }}>
          {question}
        </span>
        {open
          ? <ChevronUp size={18} style={{ flexShrink: 0, color: "var(--amber)" }} />
          : <ChevronDown size={18} style={{ flexShrink: 0, color: "var(--muted)" }} />
        }
      </div>
      {open && (
        <p className="paragraph" style={{ margin: "1rem 0 0", lineHeight: 1.7 }}>
          {answer}
        </p>
      )}
    </div>
  );
}

function FAQ() {
  return (
    <section id="faqs" style={{ marginTop: "8rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <small className="uppercase tracking-widest font-sans" style={{ color: "var(--muted)" }}>
          Got questions?
        </small>
        <h2
          className="font-serif font-black"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginTop: "1rem" }}
        >
          Answers,{" "}
          <span className="span italic">upfront.</span>
        </h2>
      </div>

      <div
      className="font-sans"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        {FAQS.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
}

// ─── NEW: Final CTA ───────────────────────────────────────────────────────────

function FinalCTA({ isMobile } : { isMobile: boolean }) {
  return (
    <section
      className="card"
      style={{
        marginTop: "8rem",
        textAlign: "center",
        padding: "5rem 2rem",
        background: "var(--amber-dim)",
        border: "1px solid var(--amber-glow)",
        borderRadius: "var(--radius-xl)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <div className="badge badge-color">
        <Zap size={14} />
        <small className="font-sans">No install · No account · No cost</small>
      </div>

      <h2
        className="font-serif font-black"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1 }}
      >
        Your next video starts <br/>
        <span className="span italic">right now.</span>
      </h2>

      <p className="paragraph font-sans" style={{ maxWidth: "480px", margin: 0 }}>
        Open PromptRoll on your phone and record your first take in under two minutes.
      </p>

      {isMobile && (
        <Link
          href="/promptroll/index.html"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--amber)",
            color: "var(--amber-foreground)",
            fontWeight: 700,
            padding: "0.875rem 2rem",
            borderRadius: "var(--radius-full)",
            fontSize: "var(--text-base)",
            marginTop: "0.5rem",
          }}
        >
          Open PromptRoll <ArrowRight size={16} />
        </Link>
      )}
    </section>
  );
}

// ─── Existing sub-components ─────────────────────────────────────────────────

function MobileCTA() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", textAlign: "center" }}>
      <div className="badge badge-color" style={{ color: "var(--success-foreground)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Star size={16} />
        You&apos;re on the right device
      </div>
      <Link
        href="/promptroll/index.html"
        style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "var(--text-lg)", padding: "0 2rem" }}
      >
        Open PromptRoll <ArrowRight size={16} />
      </Link>
      <p className="paragraph" style={{ maxWidth: "28rem", margin: 0 }}>
        Works in Chrome, Safari, and all modern mobile browsers. Tap once to launch — no install needed.
      </p>
    </div>
  );
}

function DesktopQR() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", alignItems: "center" }}>
        <small className="uppercase tracking-widest">Ready to roll?</small>
        <h2 className="font-serif font-black" style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}>
          Open it on your <span className="span block italic">device.</span>
        </h2>
      </div>

      <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2.5rem", marginTop: "2.5rem", padding: "2.5rem", flexWrap: "wrap" }}>
        <div style={{ width: "9rem", height: "9rem", background: "white", padding: "0.5rem", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image src="" alt="QR code to open PromptRoll on mobile" />
        </div>

        <div style={{ textAlign: "left" }}>
          <small className="uppercase tracking-widest">Scan with your phone</small>
          <h4 style={{ fontSize: "var(--text-xl)", fontWeight: 600, margin: "0.5rem 0" }}>
            Point your camera at the code
          </h4>
          <p className="paragraph" style={{ maxWidth: "320px", marginBottom: "1rem" }}>
            Opens PromptRoll directly in your mobile browser. No app store. No install.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "var(--text-xs)" }}>
            {QR_INSTRUCTIONS.map((instruction, i) => (
              <p key={i} className="paragraph" style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", margin: 0 }}>
                <span
                  className="badge-color"
                  style={{ width: "1.25rem", height: "1.25rem", padding: "0.25rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", flexShrink: 0 }}
                >
                  {i + 1}
                </span>
                {instruction}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const ua = navigator.userAgent || navigator.vendor;
      setIsMobile(/android|iPad|iPhone|iPod/i.test(ua));
    };
    checkMobile();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "var(--font-sans)" }}>
      {/* ── Hero ── */}
      <Container>
        <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span className="dot animate-pulse" />
                <small className="uppercase tracking-widest">Creator Tool · Mobile First</small>
              </div>
              <h1 className="font-serif font-black" style={{ fontSize: "clamp(3.5rem, 10vw, 6rem)", lineHeight: 1 }}>
                Speak with <span className="span block italic">Confidence.</span>
              </h1>
            </div>

            <p className="paragraph font-sans" style={{ maxWidth: "42rem", margin: "1.5rem 0" }}>
              PromptRoll turns your phone into a professional teleprompter. Film and read your script
              simultaneously — no second device, no crew required.
            </p>

            <FeatureBadges />

            <div style={{ marginTop: "2.5rem" }}>
              <div className="badge badge-color">
                <Smartphone size={16} />
                <small className="font-sans">Best experienced on a phone or tablet</small>
              </div>
              <p className="paragraph font-sans" style={{ marginTop: "1rem" }}>
                Scan the QR code below or open this page on your device to launch the app.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <PhoneMockup />
          </div>
        </div>
      </Container>

      {/* ── How it works ── */}
      <Container>
        <StepCards />
      </Container>

      {/* ── Deep features ── */}
      <Container>
        <DeepFeatures />
      </Container>

      {/* ── Testimonials ── */}
      <Container>
        <Testimonials />
      </Container>

      {/* ── QR / Open ── */}
      <Container>
        <section className="font-sans" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", margin: "5rem 0", textAlign: "center" }}>
          {isMobile && <MobileCTA />}
          {!isMobile && <DesktopQR />}
        </section>
      </Container>

      {/* ── FAQ ── */}
      <Container>
        <FAQ />
      </Container>

      {/* ── Final CTA ── */}
      <Container>
        <FinalCTA isMobile={isMobile} />
      </Container>

      {/* ── Footer ── */}
      <Container>
        <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", borderTop: "1px solid var(--border)", padding: "2rem 0", marginTop: "4rem" }}>
          <Image src="./logo.svg" alt="PromptRoll Logo" width={150} height={30} />
          <small style={{ fontSize: "var(--text-xs)", color: "var(--muted)" }}>
            Creator Edition · Browser-based · No install required
          </small>
        </footer>
      </Container>
    </div>
  );
}
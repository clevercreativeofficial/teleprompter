"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "./components/container";
import {
  ScrollText,
  Video,
  SwitchCamera,
  Pause,
  Zap,
  Smartphone,
  Star,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  { icon: ScrollText, label: "Teleprompter Overlay" },
  { icon: Video, label: "Record & Download" },
  { icon: SwitchCamera, label: "Flip Camera" },
  { icon: Pause, label: "Pause Anytime" },
  { icon: Zap, label: "Speed Control" },
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

const QR_INSTRUCTIONS = [
  "Open your phone camera app",
  "Point it at the QR code",
  "Tap the link that appears",
  "Allow camera & mic access",
];

const FLOAT_BADGES = [
  { icon: Zap, label: "Scroll Speed", value: "×4", className: "b1" },
  { icon: Video, label: "Recording", value: "LIVE", className: "b2" },
];

const SIM_LINES = [
  false,
  false,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  false,
  false,
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeatureBadges() {
  return (
    <div className='max-w-2xl flex flex-wrap gap-4'>
      {FEATURES.map(({ icon: Icon, label }) => (
        <div key={label} className='badge'>
          <Icon size={16} />
          <small>{label}</small>
        </div>
      ))}
    </div>
  );
}

function StepCards() {
  return (
    <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20'>
      {STEPS.map(({ number, title, body }) => (
        <div key={number} className='card'>
          <span className='font-serif italic span text-6xl'>{number}</span>
          <div className='text-sans text-2xl font-bold my-2'>{title}</div>
          <p className='paragraph'>{body}</p>
        </div>
      ))}
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className='phone-wrap'>
      <div className='phone'>
        <div className='phone-vol' />
        <div className='phone-power' />
        <div className='phone-screen'>
          <div className='sim-camera'>
            <div className='sim-reading-line' />
            <div className='sim-rec-badge'>
              <div className='sim-rec-dot' />
              <div className='sim-rec-text'>REC 00:42</div>
            </div>
            <div className='sim-scroll'>
              {SIM_LINES.map((isShort, i) => (
                <div key={i} className={`sim-line${isShort ? " short" : ""}`} />
              ))}
            </div>
          </div>
          <div className='sim-controls'>
            <div className='sim-dot' />
            <div className='sim-dot' />
            <div className='sim-rec' />
            <div className='sim-dot' />
            <div className='sim-dot' />
          </div>
        </div>
      </div>

      {FLOAT_BADGES.map(({ icon: Icon, label, value, className }) => (
        <div key={label} className={`float-badge ${className}`}>
          <div className='badge-icon'>
            <Icon size={16} />
          </div>
          <div>
            <div className='badge-text'>{label}</div>
            <div className='badge-val'>{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileCTA() {
  return (
    <div
      className='mobile-block flex items-center justify-center text-center'
      style={{ flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <div className='badge badge-color flex items-center gap-2 text-green-500 font-semibold'>
        <Star size={16} />
        You&apos;re on the right device
      </div>
      <Link
        href='/promptroll/index.html'
        className='flex items-center gap-2 text-lg px-8 mt-4'>
        Open PromptRoll <ArrowRight size={16} />
      </Link>
      <p className='paragraph my-4 max-w-md text-center'>
        Works in Chrome, Safari, and all modern mobile browsers. Tap once to
        launch — no install needed.
      </p>
    </div>
  );
}

function DesktopQR() {
  return (
    <div>
      <div className='flex gap-10 flex-col justify-center'>
        <div className='flex items-center justify-center gap-4'>
          <small className='uppercase tracking-widest'>Ready to roll?</small>
        </div>
        <h1 className='text-6xl font-serif font-black'>
          Open it on your <span className='span block italic'>device.</span>
        </h1>
      </div>

      <div className='bg-neutral-900 p-10 rounded-lg flex items-center justify-center gap-10 mt-10 border border-neutral-800'>
        <div className='w-36 h-36 bg-white p-2 rounded-lg flex items-center justify-center'>
          <Image src='' alt='QR code to open PromptRoll on mobile' />
        </div>

        <div className='qr-info desktop-only text-left'>
          <small className='uppercase tracking-widest'>
            Scan with your phone
          </small>
          <h4 className='text-xl font-semibold my-2'>
            Point your camera at the code
          </h4>
          <p className='max-w-[320px] paragraph mb-4'>
            Opens PromptRoll directly in your mobile browser. No app store. No
            install.
          </p>
          <div className='flex flex-col gap-3 text-xs'>
            {QR_INSTRUCTIONS.map((instruction, i) => (
              <p key={i} className='paragraph flex items-start gap-2'>
                <span className='w-5 h-5 p-1 badge-color flex items-center justify-center rounded-full'>
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
    <div className='flex flex-col items-center justify-center p-8 font-sans'>
      <Container>
        <div className='min-h-[80vh] flex items-center justify-between flex-col md:flex-row gap-4'>
          {/* Left */}
          <div>
            <div className='flex gap-10 flex-col'>
              <div className='flex items-center gap-4'>
                <span className='dot animate-pulse' />
                <small className='uppercase tracking-widest'>
                  Creator Tool · Mobile First
                </small>
              </div>
              <h1 className='md:text-8xl text-6xl font-serif font-black'>
                Speak with{" "}
                <span className='span block italic'>Confidence.</span>
              </h1>
            </div>

            <p className='paragraph max-w-2xl my-6'>
              PromptRoll turns your phone into a professional teleprompter. Film
              and read your script simultaneously — no second device, no crew
              required.
            </p>

            <FeatureBadges />

            <div className='mt-10'>
              <div className='badge badge-color'>
                <Smartphone size={16} />
                <small>Best experienced on a phone or tablet</small>
              </div>
              <p className='paragraph mt-4'>
                Scan the QR code below or open this page on your device to
                launch the app.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className='hero-right'>
            <PhoneMockup />
          </div>
        </div>
      </Container>

      <Container>
        <StepCards />
      </Container>

      <Container>
        <section className='h-[60vh] flex items-center justify-center gap-4 my-22 flex-col text-center'>
          {isMobile ?
            <MobileCTA />
          : <DesktopQR />}
        </section>
      </Container>

      {/* ── FOOTER ── */}
      <Container>
        <footer className="flex justify-between items-center border-t border-neutral-800 pt-8">
          <Image src="./logo.svg" alt="PromptRoll Logo" width={150} height={30} />
          <small className='text-xs text-neutral-600'>
            Creator Edition · Browser-based · No install required
          </small>
        </footer>
      </Container>
    </div>
  );
}

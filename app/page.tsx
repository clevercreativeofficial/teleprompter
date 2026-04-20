//import Image from "next/image";
import Container from "./components/container";
import {
  ScrollText,
  Video,
  SwitchCamera,
  Pause,
  Zap,
  Smartphone,
} from "lucide-react";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center p-8 font-sans'>
      <Container>
        <div className='flex gap-4'>
          {/* Left Content */}
          <div>
            <div className='flex gap-10 flex-col'>
              <div className='flex items-center gap-4'>
                <span className='dot animate-pulse'></span>
                <small className='uppercase tracking-widest'>
                  Creator Tool · Mobile First
                </small>
              </div>
              <h1 className='text-8xl font-serif font-black'>
                Speak with{" "}
                <span className='span block italic'>Confidence.</span>
              </h1>
            </div>

            <p className='paragraph max-w-2xl my-6'>
              PromptRoll turns your phone into a professional teleprompter. Film
              and read your script simultaneously — no second device, no crew
              required.
            </p>

            <div className='max-w-2xl flex flex-wrap gap-4'>
              <div className='badge'>
                <ScrollText />
                <small>Teleprompter Overlay</small>
              </div>
              <div className='badge'>
                <Video />
                <small>Record & Download</small>
              </div>
              <div className='badge'>
                <SwitchCamera />
                <small>Flip Camera</small>
              </div>
              <div className='badge'>
                <Pause />
                <small>Pause Anytime</small>
              </div>
              <div className='badge'>
                <Zap />
                <small>Speed Control</small>
              </div>
            </div>

            <div className='mt-10'>
              <div className='badge badge-color'>
                <Smartphone />
                <small>Best experienced on a phone or tablet</small>
              </div>
              <p className='paragraph mt-4'>
                Scan the QR code below or open this page on your device to
                launch the app.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className='hero-right'>
            <div className='phone-wrap'>
              <div className='phone'>
                <div className='phone-vol'></div>
                <div className='phone-power'></div>
                <div className='phone-screen'>
                  <div className='sim-camera'>
                    <div className='sim-reading-line'></div>
                    <div className='sim-rec-badge'>
                      <div className='sim-rec-dot'></div>
                      <div className='sim-rec-text'>REC 00:42</div>
                    </div>
                    <div className='sim-scroll'>
                      <div className='sim-line'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line short'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line short'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line short'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line short'></div>
                      <div className='sim-line'></div>
                      <div className='sim-line'></div>
                    </div>
                  </div>
                  <div className='sim-controls'>
                    <div className='sim-dot'></div>
                    <div className='sim-dot'></div>
                    <div className='sim-rec'></div>
                    <div className='sim-dot'></div>
                    <div className='sim-dot'></div>
                  </div>
                </div>
              </div>

              {/* Floating info badges */}
              <div className='float-badge b1'>
                <div className='badge-icon'>
                  <Zap/>
                </div>
                <div>
                  <div className='badge-text'>Scroll Speed</div>
                  <div className='badge-val'>×4</div>
                </div>
              </div>

              <div className='float-badge b2'>
                <div className='badge-icon'>
                  <Video/>
                </div>
                <div>
                  <div className='badge-text'>Recording</div>
                  <div className='badge-val'>LIVE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div>
        <Container>
          <div>d</div>
        </Container>
      </div>
    </div>
  );
}

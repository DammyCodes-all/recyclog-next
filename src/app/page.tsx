import {
  GsapFrom,
  GsapFromTo,
  GsapTimeline,
  GsapTo,
} from "./_components/gsap-basics";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center p-20 flex-col gap-2">
      <div>Gsap animations will be performed here.....</div>
      <div className="flex flex-col gap-5">
        <div>
          <p>The Gsap `to` basic method</p>
          <GsapTo />
        </div>
        <div>
          <p>The Gsap `from` basic method</p>
          <GsapFrom />
        </div>
        <div>
          <p>The Gsap `fromTo` basic method</p>
          <GsapFromTo />
        </div>
        <div>
          <p>The Gsap `timeline` intermediate method</p>
          <GsapTimeline />
        </div>
      </div>
    </main>
  );
}

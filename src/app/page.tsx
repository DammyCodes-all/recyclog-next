import {
  GsapFrom,
  GsapFromTo,
  GsapStagger,
  Gsaptext,
  GsapTimeline,
  GsapTo,
  Scrolltrigger,
} from "./_components/gsap-basics";

export default function Home() {
  return (
    <main className="flex p-20 flex-col gap-2 relative">
      <div>Gsap animations will be performed here.....</div>
      <div className="flex flex-col gap-5 w-full h-full items-center justify-center">
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
        <div>
          <p>The Gsap `Stagger` intermediate method</p>
          <GsapStagger />
        </div>
      </div>
      <div className="">
        <Scrolltrigger />
      </div>
      <Gsaptext />
    </main>
  );
}

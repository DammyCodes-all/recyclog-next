"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
export const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#bluebox", {
      x: 250,
      rotate: 360,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "bounce.inOut",
    });
  }, []);
  return <div className="bg-blue-500 rounded size-15" id="bluebox"></div>;
};
export const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#greenbox", {
      x: 250,
      rotate: 360,
      duration: 3,
      repeat: -1,
      borderRadius: "0%",
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="bg-green-500 rounded-[100%] size-15" id="greenbox"></div>
  );
};
export const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#fromTo",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        repeatDelay: 1,
        ease: "sine.inOut",
        yoyo: true,
      }
    );
  }, []);
  return <div className="size-15 bg-orange-500 rounded" id="fromTo"></div>;
};
export const GsapTimeline = () => {
  const [state, setState] = useState<"Pause" | "Play">("Pause");
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
  });
  useGSAP(() => {
    timeline.fromTo(
      "#gsaptimeline",
      {
        y: -200,
        opacity: 0,
        scale: 0,
        borderRadius: "0%",
        ease: "power1.inOut",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        borderRadius: "10%",
        ease: "bounce.out",
      }
    );
    timeline.to("#gsaptimeline", { scale: 0.2 });
    timeline.to("#gsaptimeline", {
      x: 200,
      rotate: 360,
      ease: "bounce.out",
      duration: 2,
    });
    timeline.to("#gsaptimeline", { scale: 1 });
    timeline.fromTo(
      "#gsaptimeline",
      {
        y: 0,
        opacity: 0,
      },
      {
        y: -200,
        scale: 0.2,
        duration: 1,
        borderRadius: "100%",
        opacity: 1,
        ease: "bounce",
      }
    );
    timeline.to("#gsaptimeline", {
      rotate: 360,
      x: 0,
      ease: "sine.inOut",
    });
  }, []);
  const handleTimelinePausePlay = () => {
    if (timeline.paused()) {
      timeline.play();
      setState("Pause");
    } else {
      timeline.pause();
      setState("Play");
    }
  };
  return (
    <div className="relative">
      <div className="bg-amber-500 size-20" id="gsaptimeline"></div>
      <button
        className="p-4 rounded  h-6 bg-amber-500 text-white flex justify-center items-center absolute bottom-0 right-0"
        onClick={handleTimelinePausePlay}
      >
        {state}
      </button>
    </div>
  );
};

export const GsapStagger = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".stagger-box",
      {
        scaleY: 0.2,
      },
      {
        scaleY: 1,
        duration: 1.3,
        ease: "power1.inOut",
        stagger: {
          amount: 1,
          repeat: -1,
          yoyo: true,
          from: "start",
        },
      }
    );
  }, []);
  return (
    <div className="flex gap-0.5 justify-center items-center">
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-100"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-200"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-300"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-400"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-400"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-600"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-700"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-100"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-200"></span>
      <span className="h-10 w-[2px] rounded stagger-box bg-purple-300"></span>
    </div>
  );
};

export const Scrolltrigger = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (scrollRef?.current) {
      const boxes = gsap.utils.toArray<HTMLElement>(scrollRef.current.children);
      boxes.forEach((box) => {
        if (box)
          gsap.fromTo(
            box,
            {
              opacity: 0.3,
            },
            {
              x: 150 * (boxes.indexOf(box) + 5),
              rotation: 360,
              borderRadius: "100%",
              scale: 1.5,
              opacity: 1,
              scrollTrigger: {
                trigger: box,
                start: "bottom, 90%",
                scrub: true,
                end: "top, 20%",
              },
              ease: "power1.inOut",
            }
          );
      });
    }
  });
  return (
    <div ref={scrollRef} className="">
      <div className="bg-pink-500 rounded-[0%] size-20"></div>
      <div className="bg-cyan-500 rounded-[0%] size-20"></div>
    </div>
  );
};

export const Gsaptext = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        }
      );
    }
  }, []);
  return <div ref={textRef}>Hello world!!</div>;
};

export const HoverButton = () => {
  const buttonRef = useRef<HTMLSpanElement | null>(null);
  const hoverTweenRef = useRef<gsap.core.Tween | null>(null);
  useGSAP(() => {
    if (!buttonRef.current) return;
    gsap.set(buttonRef.current, {
      x: "100%",
      y: 0,
    });
    hoverTweenRef.current = gsap.to(buttonRef.current, {
      x: "-100%",
      paused: true,
      duration: 1,
      ease: "sine.inOut",
    });
  }, []);
  const handleHover = (reverse: boolean = false) => {
    if (hoverTweenRef.current) {
      const tl = hoverTweenRef.current;
      if (!reverse) {
        tl.play();
      } else {
        tl.timeScale(2).reverse();
      }
    }
  };
  return (
    <button
      onMouseEnter={(e) => {
        e.preventDefault();
        handleHover();
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        handleHover(true);
      }}
      className="bg-white text-black px-4 py-2 overflow-hidden relative hover:text-white w-fit rounded [&>span]:bg-black cursor-pointer duration-1000 transition-colors"
    >
      <span
        className="w-full inset-y-0 inset-x-1/1  h-full absolute -z-0"
        ref={buttonRef}
      ></span>
      <p className="relative">Hover Me</p>
    </button>
  );
};

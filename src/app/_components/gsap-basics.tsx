"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
        duration: 1,
        scale: 0,
        borderRadius: "0%",
        ease: "none",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        borderRadius: "10%",
        duration: 1,
        ease: "bounce",
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
    });
  }, []);
  return <div className="bg-amber-500 size-20" id="gsaptimeline"></div>;
};

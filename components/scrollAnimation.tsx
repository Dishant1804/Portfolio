'use client';

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((elem : any) => {
      gsap.fromTo(
        elem,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1.5,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: elem,
            start: "top 89%", 
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return null;
}

import "./styles.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to("#secondCircle", {
      x: 100,
      duration: 5,
      scrollTrigger: {
        trigger: "#secondCircle",
        markers: false,
        start: "top center",
        end: "bottom 200px",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="ml-60">
      <div id="firstCircle"></div>
      <div ref={circleRef} id="secondCircle"></div>
      <div id="thirdCircle"></div>
    </div>
  );
}

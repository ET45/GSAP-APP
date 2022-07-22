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
        markers: true,
        start: "top center",
        end: "bottom 10px",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="ml-10">
      <div className="bg-yellow-200 rounded-full h-20 w-20 mb-20  "></div>
      <div
        ref={circleRef}
        className="bg-blue-200 rounded-full h-20 w-20 mb-100"
        id={"secondCircle"}
      ></div>
    </div>
  );
}

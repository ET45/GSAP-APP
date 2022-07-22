import "./styles.css";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPage() {
  useEffect(() => {
    gsap.to("#box", {
      rotate: 1440,
      duration: 4,
      scrollTrigger: {
        trigger: "#box",
        toggleActions: "play pause resume reverse",
        markers: true,
        start: "top 50 ",
        end: "bottom 50",
      },
    });
  });
  return (
    <div>
      {" "}
      <div className="grid bg-red-500 ml-20 mt-20 w-20 h-20 mb-100 " id={"box"}>
        x<p className="place-self-center">x</p>x
      </div>
    </div>
  );
}

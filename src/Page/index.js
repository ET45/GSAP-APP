import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function Circle({ children }) {
  return (
    <button className="circle bg-red-500 h-16  w-16 rounded-full">
      {children}
    </button>
  );
}

export default function Page() {
  const [reversed, setReversed] = useState(false);
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap
      .timeline()

      .to(q(".circle"), {
        x: 100,
        rotate: "+=360",
        repeat: -1,
        yoyo: true,
      });
  });

  useEffect(() => {
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className="my-20 space-x-4" ref={el}>
      <button
        className="bg-blue-100 border border-black "
        onClick={() => setReversed(!reversed)}
      >
        activate
      </button>
      <Circle>Roll</Circle>
    </div>
  );
}

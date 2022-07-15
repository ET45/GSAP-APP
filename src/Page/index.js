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
  const ref = useRef();
  const refOnUse = gsap.utils.selector(ref);
  const toggleRef = useRef();

  useEffect(() => {
    toggleRef.current && toggleRef.current.progress(0).kill();
    toggleRef.current = gsap
      .timeline()

      .to(refOnUse(".circle"), {
        x: 100,
        y: 50,
        scale: 2,
        rotate: 360,
        repeat: 1,
        yoyo: true,
      });
  });

  useEffect(() => {
    toggleRef.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className="my-20 space-x-4" ref={ref}>
      <button
        className="bg-green-400 border border-black "
        onClick={() => setReversed(!reversed)}
      >
        activate
      </button>
      <Circle>Roll</Circle>
    </div>
  );
}

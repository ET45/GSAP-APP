import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Scroll from "./scroll";

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

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#8caddf", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "green", scale: 1 });
  };

  useEffect(() => {
    toggleRef.current && toggleRef.current.progress(0);
    toggleRef.current = gsap
      .timeline()

      .to(refOnUse(".circle"), {
        x: 100,
        rotate: 360,
        repeat: 1,
        yoyo: true,
      });
  });

  useEffect(() => {
    toggleRef.current.reversed(reversed);
  }, [reversed]);

  return (
    <div>
      <div className="my-20 space-x-4" ref={ref}>
        <button
          className=" bg-green-700 border border-black "
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onClick={() => setReversed(!reversed)}
        >
          activate
        </button>
        <Circle>Roll</Circle>
      </div>
      <Scroll />
    </div>
  );
}

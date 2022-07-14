import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Page() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });
  return (
    <div className="box" ref={boxRef}>
      <p>Roll</p>
    </div>
  );
}

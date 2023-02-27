import React from 'react'
import gsap from "gsap";
import { useLayoutEffect, useRef} from "react";

function Box({ children }) {
    return <div className="box">{children}</div>;
  }
  
  function Circle({ children }) {
    return <div className="circle">{children}</div>;
  }

export default function TriggeredCallback() {
    const app = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        tl.current = gsap.timeline()
          .to(".box", {
            rotation: 360
          }, "start")
          .to(".circle", {
            x: 100
          }, "start");
        }, app);
        return () => ctx.revert();
      }, []);
  return (
    <div className="app" ref={app}>
        <Box>box</Box>
        <Circle>circle</Circle>
    </div>
  )
}

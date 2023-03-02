import React from 'react'
import gsap from "gsap";
import { useLayoutEffect, useRef} from "react";
import Projects from './Projects';

function Box({ children }) {
    return <>{children}</>;
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
          .to(".swiper", {
            x: -20
          }, "start");
        }, app);
        return () => ctx.revert();
      }, []);
  return (
    <div className="app" ref={app}>
        <Box>box</Box>
        <Circle><Projects /></Circle>
    </div>
  )
}

import React from 'react'
import gsap from "gsap";
import { useLayoutEffect, useRef} from "react";

export default function OnInteraction() {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
      };
  return (
    <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover Me
    </div>
  )
}

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const prev = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      vel.current.x = clientX - prev.current.x;
      vel.current.y = clientY - prev.current.y;
      prev.current = { x: clientX, y: clientY };
      pos.current = { x: clientX, y: clientY };

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        skewX: vel.current.x * 0.2,
        skewY: vel.current.y * 0.2,
        ease: "power2.out",
        duration: 0.2,
      });

      gsap.to(cursor, {
        skewX: 0,
        skewY: 0,
        duration: 0.4,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.to(label, {
        x: clientX,
        y: clientY,
        ease: "power2.out",
        duration: 0.2,
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    const handleMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#00ffcc", // change color on hover
        duration: 0.3,
      });
      gsap.to(label, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      });
    };

    const handleMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#ffffff", // back to default
        duration: 0.3,
      });
      gsap.to(label, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
      });
    };

    // Track elements to attach hover effects
    const targets = document.querySelectorAll("a, button, .hover-target");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterLink);
      el.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterLink);
        el.removeEventListener("mouseleave", handleMouseLeaveLink);
      });

      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: "translate(-50%, -50%)",
        }}

      
      />
    </>
  );
};

export default CustomCursor;

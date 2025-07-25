// src/components/CustomCursor.jsx
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden xl:block fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-linear"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;

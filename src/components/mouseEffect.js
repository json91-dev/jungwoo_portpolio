import React, { useEffect } from "react";

const MouseEffect = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    window?.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + "px";
      cursor.style.top = y + window.scrollY + "px";
    });
  }, []);

  return (
    <div className="absolute pointer-events-none w-screen h-screen overflow-hidden">
      <div className="absolute cursor"></div>
    </div>
  );
};

export default MouseEffect;

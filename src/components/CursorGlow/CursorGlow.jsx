import { useEffect, useRef } from "react";
import "./CursorGlow.css";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 }); 
  const mouse = useRef({ x: 0, y: 0 }); // позиция мыши

  useEffect(() => {
    const glow = glowRef.current;

    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15; 
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      glow.style.left = pos.current.x + "px";
      glow.style.top = pos.current.y + "px";

      requestAnimationFrame(animate);
    };

    animate(); // старт анимации
    window.addEventListener("mousemove", moveMouse);

    const interactiveElements = document.querySelectorAll("button, a");
    const hoverEffect = () => glow.classList.add("active");
    const leaveEffect = () => glow.classList.remove("active");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", hoverEffect);
      el.addEventListener("mouseleave", leaveEffect);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverEffect);
        el.removeEventListener("mouseleave", leaveEffect);
      });
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow"></div>;
}
import React, { ReactNode, useRef, useEffect, useState } from "react";

// Per 100 pixel scrolled into view
interface ScrollSettings {
  opacity?: number;
  transformY?: number;
}

const ScrollAnimation: React.FC<{
  children: ReactNode;
  offsetY: number;
  inView: boolean;
  settings: ScrollSettings;
}> = ({ children, offsetY, inView, settings }) => {
  const elementRef = useRef(null);
  const TRANSFORM_RATIO = 100;

  useEffect(() => {
    if (inView) {
      window.addEventListener("scroll", () => {
        const dist = elementRef.current.getBoundingClientRect().y - offsetY;
        if (settings.transformY !== undefined) {
          elementRef.current.style.transform = `translateY(${
            (dist * settings.transformY) / TRANSFORM_RATIO
          }px)`;
        }
        if (settings.opacity !== undefined) {
          elementRef.current.style.opacity =
            (dist * settings.opacity) / TRANSFORM_RATIO;
        }
      });
    }
  }, [inView]);

  return <div ref={elementRef}>{children}</div>;
};

const AnimateOnScroll: React.FC<{
  children: ReactNode;
  settings: ScrollSettings;
}> = ({ children, settings }) => {
  const elementRef = useRef(null);
  const endRef = useRef(null);

  const [start, setStart] = useState<number>();

  const [inView, setInView] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.y > 0 && rect.bottom < window.innerHeight) {
        setStart(elementRef.current.getBoundingClientRect().y);
        setInView(true);
      }
    });
  }, []);

  return (
    <div ref={elementRef}>
      <ScrollAnimation inView={inView} offsetY={start} settings={settings}>
        {children}
      </ScrollAnimation>
      <span ref={endRef}></span>
    </div>
  );
};

export default AnimateOnScroll;

import React, { useRef, useState, useEffect, ReactNode } from "react";

const ShowWhenInView: React.FC<{children: ReactNode}> = ({ children }) => {
  const refWrapper = useRef(null);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowElements(true);
        }
      });
    });

    observer.observe(refWrapper.current);
    return () => observer.unobserve(refWrapper.current);
  }, []);

  return <div ref={refWrapper}>{showElements && children}</div>;
};

export default ShowWhenInView;
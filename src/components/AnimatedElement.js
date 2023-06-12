import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedElement = ({ children, animationClass }) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={isInView ? animationClass : ""}>
      {children}
    </div>
  );
};

export default AnimatedElement;

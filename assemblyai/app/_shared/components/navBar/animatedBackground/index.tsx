"use client";
import classNames from "classnames";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "../style.module.scss";

const AnimatedBackground = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const [scrollValue, setScrollValue] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });

  const defaultAnimations = {
    hidden: {
      opacity: 1,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: "0%",
    },
  };

  useEffect(() => {
    let elem = document.getElementById("nav-container");
    if (scrollValue === 0) {
      controls.start("hidden");
      elem?.classList.add(styles.container);
      elem?.classList.remove(styles.revertColors);
    } else {
      elem?.classList.add(styles.revertColors);
      elem?.classList.remove(styles.container);
      controls.start("visible");
    }
  }, [scrollValue]);

  return (
    <motion.div
      className={classNames(styles.bgContainer)}
      variants={defaultAnimations}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.1 }}
    />
  );
};

export default AnimatedBackground;

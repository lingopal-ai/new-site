"use client";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import styles from "../style.module.scss";
import { motion, useScroll } from "framer-motion";

const Svg1 = () => {
  const svgContainer = useRef(null);
  const [pathLength, setPathLength] = useState<any>(0);
  const { scrollYProgress } = useScroll({
    target: svgContainer,
    offset: ["start end", "end center"],
  });

  const icon = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: pathLength,
    },
  };
  scrollYProgress.onChange((latest) => {
    setPathLength(latest);
  });
  return (
    <div className={classNames(styles.boxSvg)} ref={svgContainer}>
      <svg
        width="1330"
        height="111"
        viewBox="0 0 1330 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M-530 11.7042H1184.55H1211C1262.11 11.7042 1303.55 53.1444 1303.55 104.263"
          stroke="url(#paint0_linear_2_516)"
          fill="transparent"
          variants={icon}
          initial="hidden"
          animate="visible"
          strokeWidth="10"
          strokeDasharray="0px 0px"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_516"
            x1="1330"
            y1="7.29663"
            x2="-530"
            y2="7.29663"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor="#9BA3EA" />
            <stop offset="1" stopColor="#9BA3EA" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Svg1;

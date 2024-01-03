"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import styles from "../style.module.scss";
import classNames from "classnames";

const Svg2 = () => {
  const svgContainer = useRef(null);
  const [pathLength, setPathLength] = useState<any>(0);
  const { scrollYProgress } = useScroll({
    target: svgContainer,
    offset: ["center end", "end start"],
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
    <div className={classNames(styles.boxSvg2)} ref={svgContainer}>
      <svg
        width="1308"
        height="98"
        viewBox="0 0 1308 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1303.55 0.296631C1303.55 51.4157 1262.11 92.8559 1211 92.8559H1184.55H-530"
          stroke="url(#paint0_linear_2_519)"
          strokeWidth="10"
          variants={icon}
          initial="hidden"
          animate="visible"
          strokeLinejoin="round"
          strokeDasharray="0px 0px"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_519"
            x1="1330"
            y1="0.296631"
            x2="-530"
            y2="0.296631"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor="#1D3CB8" stopOpacity="0.75" />
            <stop offset="1" stopColor="#a3d41c" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Svg2;

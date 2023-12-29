"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { clearTimeout, setTimeout } from "worker-timers";

const AnimatedText = () => {
  const textRef = useRef<string>("transcripts");
  const [text, setText] = useState<string>("transcripts");
  const controls = useAnimation();

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    let timeout: any;
    const show = () => {
      controls.start("visible");
      timeout = setTimeout(async () => {
        console.log("jere");
        await controls.start("hidden");
        if (textRef.current === "transcripts") {
          textRef.current = "summaries";
        } else if (textRef.current === "summaries") {
          textRef.current = "insights";
        } else if (textRef.current === "insights") {
          textRef.current = "chapters   ";
        } else if (textRef.current === "chapters   ") {
          textRef.current = "transcripts";
        }
        setText(textRef.current);
        show();
      }, 2500);
    };
    show();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.span
      initial="hidden"
      animate={controls}
      transition={{ staggerChildren: 0.1 }}
      aria-hidden
    >
      {text?.split("").map((s, inx) => {
        return (
          <motion.span
            className="inline-block"
            key={inx}
            variants={defaultAnimations}
          >
            {s}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default AnimatedText;

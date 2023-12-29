"use client";
import classNames from "classnames";
import {
  motion,
  transform,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

const containerSize = 100;
const boxSize = 10;

export default function WaveAnimation() {
  const x = useMotionValue<any>(-10);
  const y = useMotionValue<any>(-10);
  const containerRef = useRef<any>(null);
  const [rows, setRows] = useState<number[]>([]);
  const scale = useMotionValue(0);
  const [isReset, setIsReset] = useState<boolean>(false);

  function reset() {
    const proximity = Math.max(Math.abs(0 - x.get()), Math.abs(80 - y.get()));

    const newScale = transform(
      proximity,
      [1, containerSize - boxSize],
      [0.8, 0.5]
    );

    scale.set(newScale);
  }

  const handleMouseMove = (event: any) => {
    x.set(
      event.pageX - containerRef.current.getBoundingClientRect().x - boxSize / 2
    );
    y.set(
      event.pageY - containerRef.current.getBoundingClientRect().y - boxSize / 2
    );
  };

  useEffect(() => {
    let tempArr = [];
    for (let x = 0; x < Array.from(Array(500).keys()).length; x++) {
      tempArr.push(x);
    }
    setRows(tempArr);
  }, []);

  return (
    <div
      className={classNames(styles.page, "lg:flex hidden")}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        reset();
        setIsReset(true);
      }}
    >
      <div className={styles.container} ref={containerRef}>
        {rows.map((row, rowIndex) => {
          return (
            <Box
              x={x}
              y={y}
              row={rowIndex}
              key={`${rowIndex}`}
              newScale={scale}
              isReset={isReset}
              setIsReset={setIsReset}
            />
          );
        })}
      </div>
    </div>
  );
}

const Box = ({ x, y, row, newScale, setIsReset, isReset }: any) => {
  const { scrollY } = useScroll();
  const scrollValRef = useRef<any>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    scrollValRef.current = latest;
  });

  const left = row * boxSize;
  const scale = useMotionValue(0);

  function updateProps() {
    const proximity = Math.max(
      Math.abs(left - x.get()),
      Math.abs(120 + scrollValRef.current - y.get())
    );
    setIsReset(false);
    const newScale = transform(
      proximity,
      [0, containerSize - boxSize],
      [0.8, 0.5]
    );

    scale.set(newScale);
  }

  function initialProps() {
    const proximity = Math.max(Math.abs(0 - x.get()), Math.abs(80 - y.get()));
    setIsReset(false);
    const newScale = transform(
      proximity,
      [1, containerSize - boxSize],
      [0.8, 0.5]
    );

    scale.set(newScale);
  }

  useEffect(() => {
    initialProps();
    const unsubscribeX = x.onChange(updateProps);
    const unsubscribeY = y.onChange(updateProps);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        left,
        scale: isReset ? newScale : scale,
      }}
      className={classNames(styles.Box)}
    />
  );
};

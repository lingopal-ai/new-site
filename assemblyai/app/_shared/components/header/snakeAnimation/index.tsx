"use client";
import useWindowDimensions from "_shared/hooks/useWindowDimensions";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import SingleSnake from "./singleSnake";
import styles from "./style.module.scss";

const SnakeAnimation = () => {
  const resetCounter = useRef<number>(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    let mainElem = document.getElementById("main-snakes-container");
    if (width < 1024) {
      if (resetCounter.current === 0) {
        const interval_id: any = setInterval(function () {},
        Number.MAX_SAFE_INTEGER);
        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
          window.clearInterval(i);
        }
        //@ts-ignore
        mainElem.innerHTML = "";
        resetCounter.current++;
      }
    } else {
      resetCounter.current = 0;
    }
  }, [width]);
  return (
    <div
      className={classNames(styles.snakesContainer, "lg:flex hidden")}
      id="main-snakes-container"
    >
      <SingleSnake
        startIndex={1}
        numberOfSegments={20}
        startMarginTop={150}
        left="0%"
        delay={1000}
      />
      <SingleSnake
        startIndex={2}
        numberOfSegments={40}
        startMarginTop={100}
        left="14.2857%"
        delay={1001}
      />
      <SingleSnake
        startIndex={3}
        numberOfSegments={25}
        startMarginTop={50}
        left="28.5714%"
        delay={900}
      />
      <SingleSnake
        startIndex={4}
        numberOfSegments={30}
        startMarginTop={150}
        left="42.8571%"
        delay={1020}
      />
      <SingleSnake
        startIndex={5}
        numberOfSegments={35}
        startMarginTop={60}
        left="57.1429%"
        delay={1050}
      />
      <SingleSnake
        startIndex={6}
        numberOfSegments={20}
        startMarginTop={50}
        left="71.4286%"
        delay={1000}
      />
      <SingleSnake
        startIndex={7}
        numberOfSegments={15}
        startMarginTop={200}
        left="85.7143%"
        delay={1020}
      />
    </div>
  );
};

export default SnakeAnimation;

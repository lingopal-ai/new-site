import useWindowDimensions from "_shared/hooks/useWindowDimensions";
import { useEffect, useRef } from "react";
import styles from "../style.module.scss";

interface Props {
  startIndex: number;
  left: string;
  numberOfSegments: number;
  startMarginTop: number;
  delay: number;
}

const SingleSnake = ({
  startIndex,
  left,
  numberOfSegments,
  startMarginTop,
  delay,
}: Props) => {
  const index = useRef<number>(1);
  const { width } = useWindowDimensions();
  const movementCounter = useRef<number>(0);
  const movement = () => {
    let times: number = 0;
    let mainElem = document.getElementById("main-snakes-container");
    let snakeElem = document.getElementById(
      `single-snake-${index.current}-${startIndex}`
    );
    let interval = setInterval(() => {
      //@ts-ignore
      let prevValue = Number(snakeElem.style.marginTop.replace("px", ""));
      prevValue = prevValue + 10;
      if (
        //@ts-ignore
        mainElem?.clientHeight <= prevValue + snakeElem?.clientHeight &&
        times === 0
      ) {
        index.current++;
        const childNode = document.createElement("div");
        childNode.setAttribute("class", styles.singleSnake);
        childNode.setAttribute(
          "id",
          `single-snake-${index.current}-${startIndex}`
        );
        childNode.setAttribute(
          "style",
          `margin-top:-${snakeElem?.clientHeight}px;left:${left}`
        );
        let content = "";
        for (let ii = 0; ii < numberOfSegments; ii++) {
          if (
            ii === 3 ||
            ii === 7 ||
            ii === 13 ||
            ii === numberOfSegments - 1
          ) {
            content =
              content +
              `<div class="${`${styles.segment} ${styles.active}`}" ></div>`;
          } else {
            content = content + `<div class=${styles.segment} ></div>`;
          }
        }
        childNode.innerHTML = content;
        mainElem?.appendChild(childNode);
        times++;
        movement();
      }

      for (let i = 0; i < numberOfSegments; i++) {
        let childSegment = document.getElementById(
          `segment-${i}-${startIndex}`
        );
        let prevChildSegment = document.getElementById(
          `segment-${i - 1}-${startIndex}`
        );
        if (childSegment?.classList.contains(styles.active)) {
          childSegment.classList.remove(styles.active);
          if (prevChildSegment) {
            prevChildSegment.classList.add(styles.active);
          }
        }
      }

      //@ts-ignore
      snakeElem.style = `margin-top:${prevValue}px;left:${left}`;
    }, delay);
  };

  useEffect(() => {
    if (width > 1024) {
      if (movementCounter.current === 0) {
        let mainElem = document.getElementById("main-snakes-container");
        const childNode = document.createElement("div");
        childNode.setAttribute("class", styles.singleSnake);
        childNode.setAttribute(
          "id",
          `single-snake-${index.current}-${startIndex}`
        );
        childNode.setAttribute(
          "style",
          `margin-top:${startMarginTop}px;left:${left}`
        );
        let content = "";
        for (let ii = 0; ii < numberOfSegments; ii++) {
          if (
            ii === 3 ||
            ii === 7 ||
            ii === 13 ||
            ii === numberOfSegments - 1
          ) {
            content =
              content +
              `<div class="${`${styles.segment} ${styles.active}`}" ></div>`;
          } else {
            content = content + `<div class=${styles.segment} ></div>`;
          }
        }
        childNode.innerHTML = content;
        mainElem?.appendChild(childNode);

        movement();

        movementCounter.current = movementCounter.current + 1;
      }
    } else {
      movementCounter.current = 0;
    }
  }, [width]);
  return <></>;
};

export default SingleSnake;

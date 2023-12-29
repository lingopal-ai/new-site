import classNames from "classnames";
import React from "react";
import styles from "./style.module.scss";
import { Icons } from "@assets";

interface Props {
  title: string;
  label1: string;
  label2: string;
}

const StatCard = ({ title, label1, label2 }: Props) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames("flex items-center justify-center mb-4")}>
        <h2>{title}</h2>
        <Icons.StatArrowUp />
      </div>
      <p>{label1}</p>
      <p>{label2}</p>
    </div>
  );
};

export default StatCard;

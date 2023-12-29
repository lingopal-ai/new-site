import classNames from "classnames";
import React from "react";
import styles from "./style.module.scss";
import InfoCard from "@components/infoCard";
import { data } from "./constants";

const WhyUs = () => {
  return (
    <div className={classNames("custom-container ")}>
      <span className={classNames(styles.whyUsLabel)}>Why lingopal</span>
      <h2 className={classNames(styles.title, "mt-2")}>
        Launch streams to a global audience with no hassle
      </h2>
      <div
        className={classNames(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mb-10"
        )}
      >
        {data?.map((itm, inx) => {
          return <InfoCard key={inx} {...itm} />;
        })}
      </div>
    </div>
  );
};

export default WhyUs;

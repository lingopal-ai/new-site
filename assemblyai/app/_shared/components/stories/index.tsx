import classNames from "classnames";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Icons, Images } from "@assets";
import CustomButton from "@components/customButton";

const Stories = () => {
  return (
    <div className={classNames("custom-container mt-5 mb-10 mx-auto")}>
      <span className={classNames(styles.customerLabel)}>Our customers</span>
      <h2 className={classNames(styles.title, "mb-0")}>
        Leading companies choose AssemblyAI to build innovative new AI products
        with voice data
      </h2>
      <div
        className={classNames(
          "flex justify-between items-center gap-4 flex-wrap mt-10 mb-5"
        )}
      >
        <div className={classNames("relative", styles.imageContainer)}>
          <Image
            alt="story-1"
            src={Images.Story1}
            placeholder="blur"
            quality={100}
            className={classNames(styles.storyImage)}
          />
          <div className={classNames(styles.contentContainer)}>
            <Icons.CallRailLogo className={classNames(styles.logoIcon)} />
            <div className={classNames("flex flex-col items-start")}>
              <p className={classNames(styles.contentPara1)}>
                “With AssemblyAI, we not only get quality call summaries and
                sentiment analysis, but also a trusted partner that supports us
                in enhancing the value we deliver to our customers.”
              </p>
              <p className={classNames(styles.contentPara2, "mt-2")}>
                Ryan Johnson, Chief Product Officer, CallRail
              </p>
              <div
                className={classNames(
                  "flex items-center justify-start gap-2 mt-2"
                )}
              >
                <Icons.Play className={classNames(styles.playIcon)} />
                <span className={classNames(styles.actionLabel)}>
                  Play video
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames("relative", styles.imageContainer)}>
          <Image
            alt="story-2"
            src={Images.Story2}
            placeholder="blur"
            quality={100}
            className={classNames(styles.storyImage)}
            loading="lazy"
          />
          <div className={classNames(styles.contentContainer)}>
            <Image
              src={Icons.LoopLogo}
              alt=""
              className={classNames(styles.logoIcon2)}
            />
            <div className={classNames("flex flex-col items-start")}>
              <p className={classNames(styles.contentPara1)}>
                Loop Media Partners With AssemblyAI To Launch Its AI-Powered
                Brand Safety Solution
              </p>
              <div
                className={classNames(
                  "flex items-center justify-start gap-2 mt-2"
                )}
              >
                <span className={classNames(styles.actionLabel)}>
                  Read more
                </span>
                <Icons.ArrowUp className={classNames(styles.playIcon)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomButton title="See all customer stories" />
    </div>
  );
};

export default Stories;

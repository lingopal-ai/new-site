import classNames from "classnames";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Icons, Images } from "@assets";
import { data } from "./constants";
import CustomButton from "@components/customButton";

const JoinUs = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className={classNames("custom-container w-full ")}>
        <span className={classNames(styles.title, "")}>
          Careers at Lingopal AI
        </span>
        <div
          className={classNames(
            "flex items-center justify-between mb-8 gap-10 grid grid-cols-1 lg:grid-cols-2"
          )}
        >
          <div
            className={classNames(
              "flex flex-col items-start justify-between gap-10"
            )}
            style={{ height: "100%" }}
          >
            <h2 className={classNames(styles.subTitle)}>
              Join our AI research team
            </h2>
            <div
              className={classNames(
                "flex flex-col items-start w-full justify-content-bwtween gap-2"
              )}
            >
              {data?.map((itm, inx) => {
                return (
                  <div className={classNames(styles.linkContainer)} key={inx}>
                    <span>{itm}</span>
                    <div
                      className={classNames(
                        "flex items-center justify-center gap-1"
                      )}
                    >
                      <p>Learn more</p>
                      <Icons.ArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classNames(styles.vpCardContainer)}>
            <Image
              src={Images.VPCardBg}
              alt=""
              placeholder="blur"
              className={classNames(styles.bgStyle)}
            />
            <div className={classNames(styles.vpContent, "gap-5")}>
              <span className={classNames(styles.coma)}>“</span>
              <p className={classNames(styles.para)}>
                Join our team that's building frontier AI models, which will be
                able to understand and process human speech with superhuman
                abilities.
              </p>
              <span className={classNames(styles.name)}>
                Domenic Donato, VP of Technology
              </span>
            </div>
            <div className={classNames(styles.avtContainer)}>
              <Image
                src={Images.VPAvatar}
                alt=""
                className={classNames(styles.vpAvt)}
                placeholder="blur"
              />
            </div>

            <Image
              src={Images.StaticWave}
              alt=""
              className={classNames(styles.waveStyle)}
            />

            <div className={classNames(styles.vpContent2, "gap-3")}>
              <p>
                “ Join our team that's building frontier AI models, which will
                be able to understand and process human speech with superhuman
                abilities. ”
              </p>
              <span>Domenic Donato, VP of Technology</span>
            </div>
          </div>
        </div>
        <CustomButton
          title="See all careers"
          containerStyle={classNames(" mb-20")}
        />
      </div>
    </div>
  );
};

export default JoinUs;

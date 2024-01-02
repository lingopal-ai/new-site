import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import CustomButton from "@components/customButton";

const GetStarted = () => {
  return (
    <div className={classNames(styles.getStartedContainer)}>
      <div className={classNames(styles.bgCont)} />
      <div
        className={classNames(
          "custom-container flex flex-col items-center justify-center"
        )}
      >
        <span className={classNames(styles.title, "mb-3")}>
          Start building with AssemblyAI
        </span>
        <h2 className={classNames(styles.subTitle)}>Get started in seconds</h2>
        <div
          className={classNames(
            "flex flex-col md:flex-row items-center justify-center mt-8 gap-4 w-full"
          )}
        >
          <CustomButton
            title="Contact sales"
            containerStyle={classNames(styles.btn2)}
          />
        </div>
        {/* <div className={classNames(styles.codeContainer, "mt-10")}>
          <div className={classNames("flex items-start gap-3")}>
            <span className={classNames(styles.codeIndex)}>1</span>
            <p className={classNames(styles.codeLine)}>
              <span>import</span> assemblyai <span>as</span> aai
            </p>
          </div>
          <div className={classNames("flex items-start gap-3")}>
            <span className={classNames(styles.codeIndex)}>2</span>
          </div>
          <div className={classNames("flex items-start gap-3")}>
            <span className={classNames(styles.codeIndex)}>3</span>
            <p className={classNames(styles.codeLine)}>
              transcriber <span>=</span> aai.Transcriber()
            </p>
          </div>
          <div className={classNames("flex items-start gap-3")}>
            <span className={classNames(styles.codeIndex)}>4</span>
            <p className={classNames(styles.codeLine)}>
              transcript <span>=</span> transcriber.transcribe(URL, config)
            </p>
          </div>
          <div className={classNames("flex items-start gap-3")}>
            <span className={classNames(styles.codeIndex)}>5</span>
          </div>
          <div className={classNames("flex items-start gap-3")}>
            <span className={classNames(styles.codeIndex)}>6</span>
            <p className={classNames(styles.codeLine)}>
              <span>print</span>(transcript.text)
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default GetStarted;

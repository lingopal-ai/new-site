import CustomButton from "@components/customButton";
import classNames from "classnames";
import styles from "./style.module.scss";
import Svg1 from "./svg1";
import Svg2 from "./svg2";
import Image from "next/image";

const Explore = () => {
  return (
    <div className={classNames(styles.topContainer, "relative")}>
      <div className={classNames("custom-container overflow-hidden text-center lg:text-start")}>
        <div
          className={classNames(
            "flex items-center",
            styles.TopcontentContainer
          )}
        >
          <div className={classNames(styles.svgContainers)}>
            <Svg1 />
            <Svg2 />
          </div>
          <div
            className={classNames(
              "flex flex-col gap-5",
              styles.contentContainer
            )}
          >
            <h2 className={classNames(styles.title)}>
              Setup takes less than 5 minutes
            </h2>
            <p className={classNames(styles.subTitle, "self-center lg:self-start")}>
              Leverage our no code solution. We can handle any media format.
              Simply send us your live feed and we send it back to you
              translated in real time.
            </p>
            {/* <CustomButton title="Learn More" /> */}
            <div className=" w-full relative aspect-video">
              <Image 
                src={"/explore_image.png"}
                alt="Explore Section Image"
                height={1000}
                width={1400}
                className="aspect-video"
              />
            </div>
          </div>

          {/* <div
            className={classNames(
              "flex flex-col items-center justify-between lg:pl-28",
              styles.codingContainer
            )}
          > */}
            {/* <div className={classNames(styles.codeContainer)}>
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
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>7</span>
              </div>
            </div>
            <div className={classNames(styles.codeContainer2)}>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>1</span>
                <p className={classNames(styles.codeBlock)}>{`\u007b`}</p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>2</span>
                <p className={classNames(styles.codeLine, "ms-2")}>
                  "id": "6rlr37h8f4-e310-4e23-bbf3-ea5f347dc684",
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>3</span>
                <p className={classNames(styles.codeLine, "ms-2")}>
                  "language_code": "en_us",
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>4</span>
                <p className={classNames(styles.codeLine, "ms-2")}>
                  "status": "completed",
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>5</span>
                <p className={classNames(styles.codeLine, "ms-2")}>
                  "text": "Runner's knee is a condition characterized by pain
                  behind or around the kneecap..."
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>6</span>
                <p className={classNames(styles.codeLine, "ms-2")}>
                  "confidence": <span>0.98122</span>,
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>7</span>
                <p className={classNames(styles.codeLine, "ms-2")}>
                  "audio_duration":<span>3200</span> ,
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>8</span>
                <p className={classNames(styles.codeLine, "ms-2")}>
                  "words":{" "}
                  <label className={classNames(styles.codeBlock)}>[</label>
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>9</span>
                <p className={classNames(styles.codeLine, "ms-6")}>
                  <label
                    className={classNames(styles.codeBlock)}
                  >{`\u007b`}</label>{" "}
                  "text": "Runner's", "start": <span>0</span>, "end":{" "}
                  <span>550</span>, "speaker":
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>10</span>
                <p className={classNames(styles.codeLine, "ms-6")}>
                  <label
                    className={classNames(styles.codeBlock)}
                  >{`\u007b`}</label>{" "}
                  "text": "knee", "start": <span>580</span>, "end":{" "}
                  <span>1130</span>, "speaker": "A"
                </p>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>11</span>
                <label className={classNames(styles.codeBlock, "ms-2")}>
                  ]
                </label>
              </div>
              <div className={classNames("flex items-start gap-3")}>
                <span className={classNames(styles.codeIndex)}>12</span>
                <p className={classNames(styles.codeBlock)}>{`\u007d`}</p>
              </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Explore;

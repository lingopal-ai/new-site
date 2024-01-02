"use client";
import { Images } from "@assets";
import StatCard from "@components/statCard";
import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { data } from "./constants";
import styles from "./style.module.scss";
import UserInfo from "./userInfo";
import CustomButton from "@components/customButton";

const HighTech = () => {
  const animatedContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: animatedContainer,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className={classNames("custom-container")}>
      <span className={classNames(styles.whyUsLabel)}>
        State-of-the-art Technology
      </span>
      <h2 className={classNames(styles.title, "mt-2")}>
        Experience superhuman accuracy
      </h2>
      <div className={classNames(styles.contentContainer, "mt-10")}>
        <h3 className="text-white text-xl">
          "People do not speak like a dictionary"
        </h3>
        <div
          className={classNames(
            "gap-12 grid grid-cols-3"
          )}
        >
          <div className="col-span-3 md:col-span-2 text-white font-mono text-2xl pt-16 pl-16">
            <p>Our AI has been trained on millions of</p>
            <p>data points to out-perform computer</p>
            <p>human translators.</p>
          </div>

          <div
            className={classNames(
              "flex flex-col gap-2 items-center justify-center grow col-span-3 md:col-span-1"
            )}
          >
            {data?.map((itm, inx) => {
              return <StatCard key={inx} {...itm} />;
            })}
          </div>
        </div>
      </div>
      <h2 className={classNames(styles.title, "my-10")}>
        Join over 200,000 developers building with Lingopal AI
      </h2>
      {/* <div
        className={classNames(styles.animatedContainer, "mt-10 gap-4 mb-8")}
        ref={animatedContainer}
      >
        <div className={classNames(styles.column, styles.col1, "gap-5")}>
          <motion.div className={classNames(styles.reviewCard)} style={{ y }}>
            <UserInfo
              title="Jonathan Stern"
              username="jonathanrstern"
              avatar={Images.User3}
            />
            <p>
              I transcribed @dwarkesh_sp's first episode with @tylercowen four
              different ways.
            </p>
            <br />
            <p>1. Deepgram</p>
            <p>2. AssemblyAI</p>
            <p>3. Gladia</p>
            <p>
              4. Local inference (using Dwarkesh's Speechbrain Pyannote model)
            </p>
            <br />
            <p>The winner?</p>
            <br />
            <p>
              <label>@AssemblyAI</label> is building that right now.
            </p>
          </motion.div>
          <motion.div className={classNames(styles.reviewCard)} style={{ y }}>
            <UserInfo
              title="Chanin Nantasenamat"
              username="thedataprof"
              avatar={Images.User2}
            />
            <p>
              This is a game changer, I've just created this summary blog on a
              recent podcast from my YouTube channel using
              <label>@AssemblyAI's</label> new LLM model LeMUR.
            </p>
            <br />
            <p>See 🧵 for process</p>
          </motion.div>
          <motion.div className={classNames(styles.reviewCard)} style={{ y }}>
            <UserInfo
              title="Matt Blake"
              username="mattblake_uk"
              avatar={Images.User1}
            />
            <p>
              I'm facing 2 issues using OpenAI's Whisper Speech-to-Text with
              @Bubble.
            </p>
            <br />
            <p>1. Whisper's max file size limit of 25 MB.</p>
            <p>2. Bubble API timing out for larger videos.</p>
            <br />
            <p>
              I've now been using <label>@AssemblyAI</label> Speech to Text API
              for a day and I'm really impressed.
            </p>
            <br />
            <p>Here's why 🧵</p>
          </motion.div>
          <motion.div className={classNames(styles.reviewCard)} style={{ y }}>
            <UserInfo
              title="Yusuf"
              username="clientside_dev"
              avatar={Images.User7}
            />
            <p>
              I'd recommend using alternative transcription services like{" "}
              <label>@@AssemblyAI</label> if you're looking to send URLs - also
              they have a higher transcription accuracy than Whisper +
              timestamps.
            </p>
          </motion.div>
        </div>
        <div className={classNames(styles.column, styles.col2, "gap-5")}>
          <motion.div
            className={classNames(styles.reviewCard)}
            style={{ y: y2 }}
          >
            <UserInfo
              title="Matt Blake"
              username="mattblake_uk"
              avatar={Images.User1}
            />
            <p>
              I'm facing 2 issues using OpenAI's Whisper Speech-to-Text with
              @Bubble.
            </p>
            <br />
            <p>1. Whisper's max file size limit of 25 MB.</p>
            <p>2. Bubble API timing out for larger videos.</p>
            <br />
            <p>
              I've now been using <label>@AssemblyAI</label> Speech to Text API
              for a day and I'm really impressed.
            </p>
            <br />
            <p>Here's why 🧵</p>
          </motion.div>
          <motion.div
            className={classNames(styles.reviewCard)}
            style={{ y: y2 }}
          >
            <UserInfo
              title="Jonathan Stern"
              username="jonathanrstern"
              avatar={Images.User3}
            />
            <p>
              I transcribed @dwarkesh_sp's first episode with @tylercowen four
              different ways.
            </p>
            <br />
            <p>1. Deepgram</p>
            <p>2. AssemblyAI</p>
            <p>3. Gladia</p>
            <p>
              4. Local inference (using Dwarkesh's Speechbrain Pyannote model)
            </p>
            <br />
            <p>The winner?</p>
            <br />
            <label>@AssemblyAI</label>
          </motion.div>
          <motion.div
            className={classNames(styles.reviewCard)}
            style={{ y: y2 }}
          >
            <UserInfo
              title="Kenneth Todd"
              username="kennethtodd"
              avatar={Images.User4}
            />
            <p>Access powerful AI models to transcribe and understand speech</p>
            <br />
            <p>
              Their simple API exposes AI models for speech recognition, speaker
              detection, speech summarization, and more.
            </p>
            <br />
            <p>Try it 👉 https://assemblyai.com</p>
          </motion.div>
        </div>
        <div className={classNames(styles.column, styles.col3, "gap-5")}>
          <motion.div
            className={classNames(styles.reviewCard)}
            style={{ y: y3 }}
          >
            <UserInfo
              title="Jonathan Stern"
              username="jonathanrstern"
              avatar={Images.User3}
            />
            <p>
              The API integration has been super straightforward and we've
              gotten a lot of support with credits and reduced pricing for
              startups.
            </p>
            <br />
            <p>
              Can recommend <label>@AssemblyAI</label> to anyone looking to
              integrate transcription into their product. 🎉
            </p>
          </motion.div>
          <motion.div
            className={classNames(styles.reviewCard)}
            style={{ y: y3 }}
          >
            <UserInfo
              title="Lenny Bogdonoff"
              username="rememberlenny"
              avatar={Images.User5}
            />
            <p>
              I highly recommend <label>@@AssemblyAI</label>
            </p>
          </motion.div>
          <motion.div
            className={classNames(styles.reviewCard)}
            style={{ y: y3 }}
          >
            <UserInfo
              title="Sam Flamini"
              username="sflamini5"
              avatar={Images.User6}
            />
            <p>
              I also recommend <label>@@AssemblyAI</label> for audio
              transcriptions. Better performance & better DevX than Whisper.
            </p>
          </motion.div>
          <motion.div
            className={classNames(styles.reviewCard)}
            style={{ y: y3 }}
          >
            <UserInfo
              title="Yusuf"
              username="clientside_dev"
              avatar={Images.User7}
            />
            <p>
              I'd recommend using alternative transcription services like{" "}
              <label>@@AssemblyAI</label> if you're looking to send URLs - also
              they have a higher transcription accuracy than Whisper +
              timestamps.
            </p>
          </motion.div>
          <motion.div
            className={classNames(styles.reviewCard)}
            style={{ y: y3 }}
          >
            <UserInfo
              title="Jonathan Stern"
              username="jonathanrstern"
              avatar={Images.User3}
            />
            <p>
              The API integration has been super straightforward and we've
              gotten a lot of support with credits and reduced pricing for
              startups.
            </p>
            <br />
            <p>
              Can recommend <label>@AssemblyAI</label> to anyone looking to
              integrate transcription into their product. 🎉
            </p>
          </motion.div>
        </div>
      </div> */}
      <CustomButton
        title="Start using the API for free"
        containerStyle={classNames(styles.btnStyle)}
      />
    </div>
  );
};

export default HighTech;

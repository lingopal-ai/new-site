import { Icons } from "@assets";
import CustomButton from "@components/customButton";
import classNames from "classnames";
import AnimatedText from "./AnimatedText";
import styles from "./style.module.scss";
import WaveAnimation from "./waveAnimation";
import SnakeAnimation from "./snakeAnimation";

const Header = () => {
  return (
    <div className={classNames(styles.headerContainer, "relative")}>
      <div className={classNames(styles.bg)} />
      <div className={classNames("custom-container")}>
        <div
          className={classNames(
            styles.content,
            "flex flex-col items-center lg:items-start gap-5"
          )}
        >
          <h1 className="text-center lg:text-left">
            Turn voice data into <br className="flex lg:hidden" />{" "}
            <AnimatedText /> <br /> with our leading Speech AI models
          </h1>
          <p className="text-center lg:text-left">
            Built by AI experts, AssemblyAI’s Speech AI models include accurate
            speech-to-text for voice data (such as calls, virtual meetings, and
            podcasts), speaker detection, sentiment analysis, chapter detection,
            PII redaction, and more.
          </p>
          <div
            className={classNames(
              "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full"
            )}
          >
            <CustomButton
              title="Use our API"
              containerStyle={classNames(styles.btn1)}
            />
            <CustomButton
              title="Contact sales"
              containerStyle={classNames(styles.btn2)}
            />
          </div>
        </div>
      </div>
      <SnakeAnimation />
      <WaveAnimation />
      <div className={classNames(styles.loopSlider)} id="slider-id">
        <div className={classNames(styles.inner, "gap-5")}>
          <Icons.LoopLogo2 />
          <Icons.BBCLogo />
          <Icons.TypeFormLogo />
          <Icons.NBCLogo />
          <Icons.HappyScribeLogo />
          <Icons.ApolloLogo />
          <Icons.VeedLogo />
          <Icons.GrainLogo />
          <Icons.AirGramLogo />
          <Icons.DropBoxLogo />
          <Icons.CallRailLogo2 />
          <Icons.LoopLogo2 />
          <Icons.BBCLogo />
          <Icons.TypeFormLogo />
          <Icons.NBCLogo />
          <Icons.HappyScribeLogo />
          <Icons.ApolloLogo />
          <Icons.VeedLogo />
          <Icons.GrainLogo />
          <Icons.AirGramLogo />
          <Icons.DropBoxLogo />
          <Icons.CallRailLogo2 />
        </div>
      </div>
    </div>
  );
};

export default Header;
